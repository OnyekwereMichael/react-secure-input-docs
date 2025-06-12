import React from 'react';

const UsefulTextAreaInput = () => {
    return (
        <div className='bg-secondary/10 rounded-lg p-4'>
            <h2 className="my-4">📄 TextAreaInput Props Documentation</h2>
            <ul className="list-disc pl-5 space-y-2">
                <li><strong>value</strong> – The current text inside the textarea.</li>

                <li><strong>onChange</strong> – A function that runs when the text changes. It gives you the new value.</li>

                <li><strong>label</strong> (optional) – A label shown above the textarea (like a title or name for the field).</li>

                <li><strong>error</strong> (optional) – Shows an error message below the textarea if something is wrong (like &quot;This field is required&quot;).</li>

                <li><strong>className</strong> (optional) – Lets you add custom CSS classes to the whole textarea component.</li>

                <li><strong>textareaClassName</strong> (optional) – Lets you style just the <code>&lt;textarea&gt;</code> itself with extra CSS classes.</li>

                <li><strong>labelClassName</strong> (optional) – Extra CSS classes just for the label text.</li>

                <li><strong>footerClassName</strong> (optional) – Extra CSS classes for the footer area (where error or helper text shows).</li>

                <li><strong>placeholder</strong> (optional) – Greyed-out text inside the textarea that gives a hint (like &quot;Write your message here…&quot;).</li>

                <li><strong>maxLength</strong> (optional) – The maximum number of characters the user is allowed to type.</li>

                <li><strong>minRows</strong> (optional) – Sets the minimum number of visible lines in the textarea.</li>

                <li><strong>maxRows</strong> (optional) – Sets the maximum number of visible lines before it starts scrolling.</li>

                <li><strong>helperText</strong> (optional) – Small helpful text shown under the textarea (like &quot;Max 500 characters&quot;).</li>

                <li><strong>required</strong> (optional) – If set to <code>true</code>, the user must fill in the textarea before submitting a form.</li>
            </ul>
        </div>
    );
};

export default UsefulTextAreaInput;
