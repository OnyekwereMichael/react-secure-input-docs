'use client'
import Link from 'next/link';
import * as React from 'react';
import { TextInput, PasswordInput, TextAreaInput, SelectInput } from 'react-secure-input';
import UsefulTextInput from './components/usefulTextInput';
import UsefulPropsPasswordInput from './components/usefulPropsPassword';
import UsefulTextAreaInput from './components/usefulTextAreaInputProps';


interface CodeBlockProps {
  code: string;
  language?: string;
  showCopy?: boolean;
}

interface SectionProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

interface SubSectionProps {
  title: string;
  children: React.ReactNode;
}

interface FeatureProps {
  title: string;
  description: string;
}

const Page: React.FC = () => {
  // Example states for interactive demos
  const [password, setPassword] = React.useState('');
  const [name, setName] = React.useState('');
  const [bio, setBio] = React.useState('');
  const [country, setCountry] = React.useState('');

  const CodeBlock: React.FC<CodeBlockProps> = ({
    code,
    language = 'jsx',
    showCopy = true
  }) => {
    const [copied, setCopied] = React.useState(false);

    const handleCopy = async () => {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    };

    return (
      <div className="relative group">
        {/* Copy Button - only visible on hover */}
        {showCopy && (
          <button
            onClick={handleCopy}
            className="absolute top-2 right-2 p-2 rounded-md bg-secondary/30 text-foreground/70
                     opacity-0 group-hover:opacity-100 transition-opacity
                     hover:bg-secondary/50 hover:text-foreground z-10"
            aria-label="Copy code"
          >
            {copied ? (
              <span className="flex items-center">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="ml-2 text-sm">Copied!</span>
              </span>
            ) : (
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                />
              </svg>
            )}
          </button>
        )}

        {/* Code content */}
        <pre className="bg-secondary/20 text-foreground p-4 rounded-lg overflow-x-auto font-mono text-sm">
          <code className={`language-${language}`}>
            {code.trim()}
          </code>
        </pre>

        {/* Language label */}
        {language && (
          <div className="absolute top-0 right-0 px-2 py-1 rounded-bl rounded-tr-lg 
                          text-xs font-medium bg-secondary/30 text-foreground/70">
            {language}
          </div>
        )}
      </div>
    );
  };

  const Section: React.FC<SectionProps> = ({ title, children, className = '' }) => (
    <section className={`mb-16 ${className}`}>
      <h2 className="text-3xl font-bold mb-6">{title}</h2>
      {children}
    </section>
  );

  const SubSection: React.FC<SubSectionProps> = ({ title, children }) => (
    <div className="mb-8">
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      {children}
    </div>
  );

  const Feature: React.FC<FeatureProps> = ({ title, description }) => (
    <div className="bg-secondary/10 rounded-lg p-6">
      <h4 className="text-lg font-semibold mb-2">{title}</h4>
      <p className="text-foreground/80">{description}</p>
    </div>
  );


  const countries = [
    { label: 'United States', value: 'us' },
    { label: 'United Kingdom', value: 'uk' },
    { label: 'Canada', value: 'ca' },
    { label: 'Australia', value: 'au' },
  ];


  return (
    <main className="min-h-screen bg-background text-foreground">

      {/* Hero Section */}
      <div className="border-b border-secondary/20">
        <div className="max-w-5xl mx-auto py-16 px-6 max-sm:w-full max-sm:px-4">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-accent to-accent/70 bg-clip-text text-transparent max-sm:text-3xl">
            React Secure Input
          </h1>
          <p className="text-lg text-foreground/80 mb-8 max-w-2xl">
            A modern, secure, and fully customizable input library for React applications.
            Built with security, accessibility, and developer experience in mind.
          </p>
          <section className='flex items-center gap-4 max-sm:flex-col'>
            <div className="flex justify-end gap-4 mb-4">
              <Link
                href="https://www.npmjs.com/package/react-secure-input"
                target="_blank"
                className="px-4 py-2 rounded bg-neutral-800 text-white font-medium hover:bg-neutral-900 transition"
              >
                View on NPM
              </Link>
              <Link
                href="https://github.com/your-repo/react-secure-input"
                target="_blank"
                className="px-4 py-2 rounded bg-gray-800 text-white font-medium hover:bg-gray-700 transition"
              >
                View on GitHub
              </Link>
            </div>
            <div className="flex gap-4 ">
              <CodeBlock
                code="npm install react-secure-input"
                language="bash"
                showCopy={true}
              />
            </div>
          </section>
        </div>
      </div>


      <div className="max-w-5xl mx-auto px-6 py-12 max-sm:px-4">
        {/* Quick Start */}
        <Section title="Quick Start">
          <div className="grid gap-8">
            <div>
              <p className="text-lg mb-6">
                Get started quickly with our most commonly used components. Each component is designed
                to be secure by default while maintaining full customizability.
              </p>
            </div>

            {/* Text Input Example */}
            <div className="border border-secondary/20 rounded-lg overflow-hidden">
              <div className="p-6 bg-secondary/5">
                <h3 className="text-xl font-semibold mb-7">Text Input</h3>
                <div className="mb-6">
                  <TextInput
                    label="Name"
                    value={name}
                    onChange={setName}
                    placeholder="Enter your name"
                    wrapperClassName="relative"
                    labelClassName=''
                    inputClassName="w-full px-4 py-2 rounded-lg bg-background border border-secondary focus:outline-none focus:ring-2 focus:ring-accent transition-all duration-200 mt-2"
                    className="w-full px-4 py-4  rounded-lg bg-background border border-secondary focus:outline-none focus:ring-2 focus:ring-accent transition-all duration-200"
                  />
                </div>
                {/* <div className="bg-secondary/10 rounded-lg p-4">
                  <h4 className="text-sm font-medium mb-2">Key Features:</h4>
                  <ul className="text-sm text-foreground/70 space-y-1">
                    <li>• Built-in XSS protection</li>
                    <li>• Customizable styling</li>
                    <li>• Accessibility support</li>
                  </ul>
                </div> */}

                <UsefulTextInput />
              </div>
              <div className="border-t border-secondary/20">
                <CodeBlock
                  code={`import { TextInput } from 'react-secure-input';

function MyComponent() {
  const [name, setName] = useState('');
  
  const validateUsername = (val: string) =>
  val.length < 3 ? 'Username must be at least 3 characters' : undefined;

  return (
    <TextInput
      label="Name"
      value={name}
      onChange={setName}
      placeholder="Enter your name"
      wrapperClassName="relative"
      labelClassName="text-foreground/80"
      inputClassName="w-full px-4 py-2 rounded-lg"
      maxLength={50}
      trim
      clearable
      helperText="Please enter your full name as it appears on your ID"
      validate={validateUsername}
      required
    
    />
  );
}`}
                />
              </div>
            </div>

            {/* Password Input Example */}
            <div className="border border-secondary/20 rounded-lg overflow-hidden">
              <div className="p-6 bg-secondary/5">
                <h3 className="text-xl font-semibold mb-7">Password Input</h3>
                <div className="mb-6 w-full pr-12 px-4 py-2 rounded-lg bg-background border border-secondary focus:outline-none focus:ring-2 focus:ring-accent transition-all duration-200">
                  <PasswordInput
                    label="Password"
                    value={password}
                    onChange={setPassword}
                    showCopy
                    placeholder="Enter your password"
                    wrapperClassName="relative"
                    inputClassName=" pr-12 px-4 py-2 rounded-lg bg-background border border-secondary focus:outline-none focus:ring-2 focus:ring-accent transition-all duration-200 mt-3"

                  />
                </div>
                <UsefulPropsPasswordInput />
              </div>
              <div className="border-t border-secondary/20">
                <CodeBlock
                  code={`import { PasswordInput } from 'react-secure-input';

function MyComponent() {
  const [password, setPassword] = useState('');

  // Custom validation rules example
  const customValidationRules: PasswordValidationRule[] = [
    {
      name: 'length',
      validate: (password) => password.length >= 12,
      message: 'Minimum 12 characters'
    },
    {
      name: 'uppercase',
      validate: (password) => /[A-Z]/.test(password),
      message: 'One uppercase letter'
    },
    {
      name: 'numbers',
      validate: (password) => /\d.*\d/.test(password),
      message: 'At least 2 numbers'
    },
    {
      name: 'special',
      validate: (password) => /[!@#$%^&*(),.?":{}|<>]/.test(password),
      message: 'One special character'
    }
  ];

  // Custom strength levels example
  const customStrengthLevels: PasswordStrengthLevel[] = [
    { name: 'Too Weak', minPassingRules: 1, className: 'strength-weak' },
    { name: 'Getting Better', minPassingRules: 2, className: 'strength-medium' },
    { name: 'Almost There', minPassingRules: 3, className: 'strength-medium' },
    { name: 'Perfect!', minPassingRules: 4, className: 'strength-strong' }
  ];

  
  return (
    <PasswordInput
      label="Password"
      value={password}
      onChange={setPassword}
      showCopy
      strengthMeter
      placeholder="Enter your password"
      validationRules={customValidationRules}
      strengthLevels={customStrengthLevels}
      placeholder="Enter your secure password"
      inputClassName="custom-input"
      labelClassName="custom-label"
      wrapperClassName="custom-wrapper"
    />
  );
}`}
                />
              </div>
            </div>

            {/* TextArea Example */}
            <div className="border border-secondary/20 rounded-lg overflow-hidden">
              <div className="p-6 bg-secondary/5">
                <h3 className="text-xl font-semibold mb-7">TextArea Input</h3>
                <div className="mb-6">
                  <TextAreaInput
                    label="Bio"
                    value={bio}
                    onChange={setBio}
                    placeholder="Tell us about yourself"
                    textareaClassName="w-full px-4 py-2 rounded-lg bg-background border border-secondary focus:outline-none focus:ring-2 focus:ring-accent transition-all duration-200 pb-3 mt-3"
                    className="w-full px-4 py-4 rounded-lg bg-background border border-secondary focus:outline-none focus:ring-2 focus:ring-accent transition-all duration-200"
                  />
                </div>
                <UsefulTextAreaInput />
              </div>
              <div className="border-t border-secondary/20">
                <CodeBlock
                  code={`import { TextAreaInput } from 'react-secure-input';

function MyComponent() {
  const [message, setMessage] = useState('');
  
  return (
    <TextAreaInput
      label="Message"
      value={message}
      onChange={setMessage}
      placeholder="Type your message here..."
      maxLength={400}
      minRows={4}
      maxRows={10}
      helperText="Maximum 200 characters"
      textareaClassName="custom-textarea"
      labelClassName="custom-label"
      required
    />
  );
}`}
                />
              </div>
            </div>

            {/* Select Input Example */}

            <div className="border border-secondary/20 rounded-lg overflow-hidden">
              <div className="p-6 bg-secondary/5">
                <h3 className="text-xl font-semibold mb-7">Select Input</h3>
                <div className="mb-6">
                <SelectInput
            label="Country"
            value={country}
            onChange={setCountry}
            options={countries}
            placeholder="Select your country"
            helperText="Please select your country of residence"
            required
            
          />
                </div>
                <UsefulTextAreaInput />
              </div>
              <div className="border-t border-secondary/20">
                <CodeBlock
                  code={`import { PasswordInput } from 'react-secure-input';

function MyComponent() {
  const [country, setCountry] = useState('');

   const countries = [
    { label: 'United States', value: 'us' },
    { label: 'United Kingdom', value: 'uk' },
    { label: 'Canada', value: 'ca' },
    { label: 'Australia', value: 'au' },
  ];
  
  return (
    <PasswordInput
      label="Country"
      value={country}
      onChange={setCountry}
      options={countries}
      placeholder="Select your country"
      helperText="Please select your country of residence"
      selectClassName="custom-select"
      labelClassName="custom-label"
      wrapperClassName="custom-wrapper"
      required 
    />
  );
}`}
                />
              </div>
            </div>
          </div>
        </Section>

        {/* Features Grid */}
        <Section title="Why Choose React Secure Input?">
          <div className="grid gap-6 md:grid-cols-2">
            <Feature
              title="🔒 Security First"
              description="Built-in protection against XSS, injection attacks, and clipboard exploits. Keeps your users' data safe without extra configuration."
            />
            <Feature
              title="♿ Accessibility Built-in"
              description="WCAG 2.1 compliant, screen reader friendly, and keyboard navigable. Every component follows WAI-ARIA best practices."
            />
            <Feature
              title="🎨 Fully Customizable"
              description="Style components to match your brand. Supports custom CSS, Tailwind, styled-components, and other styling solutions."
            />
            <Feature
              title="⚡ Performance Optimized"
              description="Lightweight, tree-shakeable, and optimized for production. No unnecessary re-renders or performance bottlenecks."
            />
            <Feature
              title="📝 TypeScript Ready"
              description="Written in TypeScript with comprehensive type definitions. Enjoy excellent IDE support and catch errors early."
            />
            <Feature
              title="🔄 Framework Agnostic"
              description="Works seamlessly with Next.js, Remix, Gatsby, and other React frameworks. Zero configuration required."
            />
          </div>
        </Section>

        {/* Advanced Usage */}
        <Section title="Advanced Usage">
          <div className="space-y-8">
            <SubSection title="Customization">
              <p className="text-foreground/80 mb-4">
                Every component accepts custom styling props and can be themed to match your application's design system.
              </p>
              <CodeBlock
                code={`// Custom theme example
<PasswordInput
  theme={{
    input: {
      base: "your-base-classes",
      focus: "your-focus-classes",
      error: "your-error-classes"
    },
    label: "your-label-classes",
    toggle: "your-toggle-button-classes"
  }}
  // ... other props
/>`}
              />
            </SubSection>

            <SubSection title="Form Integration">
              <p className="text-foreground/80 mb-4">
                Seamlessly integrates with React Hook Form, Formik, and other form libraries.
              </p>
              <CodeBlock
                code={`// React Hook Form example
import { useForm } from 'react-hook-form';

function LoginForm() {
  const { register, handleSubmit } = useForm();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextInput
        {...register('username')}
        label="Username"
      />
      <PasswordInput
        {...register('password')}
        label="Password"
      />
    </form>
  );
}`}
              />
            </SubSection>
          </div>
        </Section>
      </div>
    </main>
  );
};

export default Page;