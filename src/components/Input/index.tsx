import React, { InputHTMLAttributes } from 'react';

import './styles.css';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
}

const Input: React.FC<InputProps> = ({ label, name, ...props }) => (
  <div className="input-block">
    <label htmlFor={name}>{label}</label>
    <input {...props} id={name} />
  </div>
);

export default Input;