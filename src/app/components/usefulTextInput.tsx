import React from 'react';

const UsefulTextInput = () => {
  return (
    <div className='bg-secondary/10 rounded-lg p-4'>
      <h2 className="my-4">📄 TextInput Props Documentation</h2>
      <ul className="list-disc pl-5 space-y-2">
        <li><strong>value</strong> — The current value of the input field.</li>
        <li><strong>onChange</strong> — Function to run when the input value changes.</li>
        <li><strong>label</strong> — The text label shown above the input field.</li>
        <li><strong>error</strong> — Displays an error message below the input.</li>
        <li><strong>className</strong> — Extra CSS classes for the outer container.</li>
        <li><strong>inputClassName</strong>— Extra CSS classes specifically for the input element.</li>
        <li><strong>labelClassName</strong> — Extra CSS classes for the label text.</li>
        <li><strong>wrapperClassName</strong> — Extra CSS classes for the wrapper around the input.</li>
        <li><strong>placeholder</strong> — Text shown inside the input when it’s empty.</li>
        <li><strong>maxLength</strong> — The maximum number of characters the user can type.</li>
        <li><strong>trim</strong> — If true, trims whitespace from input before updating the value.</li>
        <li><strong>clearable</strong> — If true, shows a button to clear the input content.</li>
        <li><strong>helperText</strong> — Additional guidance or hint text shown below the input.</li>
        <li><strong>required</strong> — Marks the input as required (adds a * to the label).</li>
        <li>
          <strong>validate</strong> —
          Function to run custom validation. If it returns a string, it’s shown as an error message. If it returns <code>undefined</code>, validation passes.
        </li>
      </ul>
    </div>
  );
};

export default UsefulTextInput;
