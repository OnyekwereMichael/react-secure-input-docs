import React from 'react';

const UsefulSelectInput = () => {
  return (
    <div className='bg-secondary/10 rounded-lg p-4'>
      <h2 className="my-4">📄 SelectInput Props Documentation</h2>
      <ul className="list-disc pl-5 space-y-2">
        <li><strong>value</strong> — The currently selected option from the dropdown.</li>
        <li><strong>onChange</strong> — Function to run when a new option is selected.</li>
        <li><strong>options</strong> — An array of options to choose from. Each option should have a <code>label</code> and <code>value</code>.</li>
        <li><strong>label</strong> — The text label shown above the select dropdown.</li>
        <li><strong>error</strong> — Displays an error message below the select input.</li>
        <li><strong>className</strong> — Extra CSS classes for the outer component container.</li>
        <li><strong>selectClassName</strong> — Extra CSS classes for the <code>&lt;select&gt;</code> element itself.</li>
        <li><strong>labelClassName</strong> — Extra CSS classes for the label text.</li>
        <li><strong>wrapperClassName</strong> — Extra CSS classes for the wrapper around the select input.</li>
        <li><strong>placeholder</strong> — Text shown when no option is selected.</li>
        <li><strong>helperText</strong> — Additional guidance or hint text shown below the select input.</li>
        <li><strong>required</strong> — Marks the field as required (adds a * to the label and may trigger validation).</li>
      </ul>
    </div>
  );
};

export default UsefulSelectInput;
