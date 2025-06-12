'use client'
import { useState } from 'react';
import Link from 'next/link';
import * as React from 'react';
import { TextInput,  TextAreaInput, SelectInput, PasswordInput } from 'react-secure-input';
import UsefulTextInput from './components/usefulTextInput';
import UsefulPropsPasswordInput from './components/usefulPropsPassword';
import UsefulTextAreaInput from './components/usefulTextAreaInputProps';
import 'react-secure-input/dist/styles.css';
import './globals.css'



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
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [bio, setBio] = useState('');
  const [country, setCountry] = useState('');

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

  const validateUsername = (val: string) =>
    val.length < 3 ? 'Username must be at least 3 characters' : undefined;


  return (
    <main className="min-h-screen bg-background text-foreground">

      {/* Hero Section */}
      <div className="border-b border-secondary/20">
        <div className="max-w-7xl mx-auto py-16 px-6 max-sm:w-full max-sm:px-4">
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


      <div className="max-w-7xl mx-auto px-6 py-12 max-sm:px-4">
        {/* Quick Start */}
        <Section title="Quick Start">
          <div className="grid gap-8">
            <div>
              <p className="text-lg mb-6">
                Get started quickly with our most commonly used components. Each component is designed
                to be secure by default while maintaining full customizability.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6 max-sm:grid-cols-1 max-sm:px-4 py-6">
  {/* Section 1: Installation */}
  <div className="p-5 border-[3px] border-gray-400 rounded-lg bg-background space-y-4">
    <h2 className="text-xl font-semibold ">1. Install the Package</h2>
    <CodeBlock
      code="npm install react-secure-input"
      language="bash"
      showCopy={true}
    />

    <h2 className="text-lg font-medium ">Import the Styles</h2>
    <CodeBlock
      code="import 'react-secure-input/dist/styles.css';"
      language="jsx"
      showCopy={true}
    />
  </div>

  {/* Section 2: Import Usage */}
  <div className="p-5 border-[3px] border-gray-400 rounded-lg bg-background space-y-4">
    <h2 className="text-xl font-semibold">2. Import the Component</h2>
    <CodeBlock
      code="import { TextInput } from 'react-secure-input';"
      language="jsx"
      showCopy={true}
    />
  </div>

  {/* Section 3: Tailwind Note */}
  <div className="col-span-2 p-5 border-[3px] border-gray-400 rounded-lg bg-background space-y-4">
    <h2 className="text-lg font-medium">
      3. Add Tailwind Classes to the Input
    </h2>
    <p className="text-sm ">
      Use the <code className="font-mono bg-gray-800 px-1 py-0.5 rounded">className</code> prop with a
      <span className="text-red-500 font-bold px-1">!</span> flag to ensure Tailwind styles override the default.
    </p>
    <CodeBlock
      code="className='!bg-red-900'"
      language="jsx"
      showCopy={true}
    />
  </div>

  {/* Section 4: Example Usage */}
  <div className="col-span-2 p-5 border-[3px] border-gray-400 rounded-lg bg-background">
    <h2 className="text-xl font-semibold  mb-3">4. Example Usage</h2>
    <CodeBlock
      code={`<TextInput
  placeholder="Enter your secret"
  className="!bg-white !border !border-gray-300"
/>`}
      language="jsx"
      showCopy={true}
    />
  </div>
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
                    labelClassName='text-3xl'
                    inputClassName=""
                    className=""
                    required
                    clearable
                    trim
                    validate={validateUsername}
                  />
                </div>
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
                    showCopy={true}
                    placeholder="Enter your password"
                    // wrapperClassName="relative"
                    inputClassName=" "
                    required

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
                    textareaClassName=""
                    labelClassName=''
                    className=""
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



        <Section title="How to use the components wit other form libaries">   
            <h2>Formik</h2>

            <CodeBlock
                  code={`import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { TextInput } from 'react-secure-input';

const validationSchema = Yup.object({
  email: Yup.string().email('Invalid email').required('Required'),
});

export default function FormikExample() {
  return (
    <Formik
      initialValues={{ email: '' }}
      validationSchema={validationSchema}
      onSubmit={(values) => console.log(values)}
    >
      {({ setFieldValue, values, errors, touched }) => (
        <Form className="space-y-4">
          <label>Email</label>
          <TextInput
            value={values.email}
            onChange={(val) => setFieldValue('email', val)}
            error={touched.email && errors.email ? errors.email : ''}
            placeholder="Enter your email"
            required
          />

          <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
}
`}/>

<h1 className='mt-6'>React Hook Form</h1>
            <CodeBlock
                  code={`import { useForm, Controller } from 'react-hook-form';
import { TextInput } from 'react-secure-input';

export default function RHFExample() {
  const { control, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      password: '',
    },
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <Controller
        name="password"
        control={control}
        rules={{ required: 'Password is required' }}
        render={({ field }) => (
          <TextInput
            value={field.value}
            onChange={field.onChange}
            placeholder="Enter your password"
            error={errors.password?.message}
            required
          />
        )}
      />

      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
        Submit
      </button>
    </form>
  );
}

`}


                />
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

 <section>
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

        <footer className="text-center text-gray-500 text-lg max-sm:text-md mt-8">
  &copy; {new Date().getFullYear()}  All rights reserved.
</footer>
</section>

      </div>
    </main>
  );
};

export default Page;