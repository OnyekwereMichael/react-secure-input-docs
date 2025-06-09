import React from 'react';

const UsefulPropsPasswordInput = () => {
  return (
    <div className='bg-secondary/10 rounded-lg p-4'>
      <h2 className="my-4">📄 Password Props Documentation</h2>
      <ul className="list-disc pl-5 space-y-2">
        <li><strong>value</strong> — The current value of the input field</li>
        <li><strong>onChange</strong> — Function to run when the input value changes.</li>
        <li><strong>label</strong> — The text label shown above the input field.</li>
        <li><strong>error</strong> — Displays an error message below the input.</li>
        <li><strong>strengthMeter?</strong> — If true, shows a password strength indicator below the input.</li>
        <li><strong>validationRules?</strong> — Optional custom validation rules to check the password against.</li>
        <li><strong>showCopy?</strong> — If true, shows a copy button to quickly copy the input value.</li>
        <li><strong>className</strong> — Extra CSS classes for the outer container.</li>
        <li><strong>inputClassName</strong>— Extra CSS classes specifically for the input element.</li>
        <li><strong>labelClassName</strong> — Extra CSS classes for the label text.</li>
        <li><strong>wrapperClassName</strong> — Extra CSS classes for the wrapper around the input.</li>
        <li><strong>placeholder</strong> — Text shown inside the input when it’s empty.</li>
        <li><strong>required</strong> — Marks the input as required (adds a * to the label).</li>
      </ul>
    </div>
  );
};

export default UsefulPropsPasswordInput;
