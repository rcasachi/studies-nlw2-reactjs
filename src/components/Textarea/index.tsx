import React, { TextareaHTMLAttributes } from 'react';

import './styles.css';

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  name: string;
  label: string;
}

const Textarea: React.FC<TextareaProps> = ({ label, name, ...props }) => (
  <div className="textarea-block">
    <label htmlFor={name}>{label}</label>
    <textarea {...props} id={name} />
  </div>
);

export default Textarea;