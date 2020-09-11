import React, { SelectHTMLAttributes } from 'react';

import './styles.css';

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  name: string;
  label: string;
  options: Array<{
    value: string,
    label: string,
  }>;
}

const Select: React.FC<SelectProps> = ({ label, name, options, ...props }) => (
  <div className="select-block">
    <label htmlFor={name}>{label}</label>
    <select value="" {...props} id={name}>
      <option value="" disabled hidden>Selecione uma opção</option>
      {options.map(({value, label}) => <option value={value} key={value}>{label}</option>)}
    </select>
  </div>
);

export default Select;