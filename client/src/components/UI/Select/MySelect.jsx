import React from 'react';

export default function MySelect({
  options, defaultValue, onChange,
}) {
  return (

    <select onChange={(e) => onChange(e.target.value)}>
      <option disabled value="value">{defaultValue}</option>
      {options?.map((option) => (
        <option
          key={option.value}
          value={option.value}
        >
          {option.name}
        </option>
      ))}
    </select>
  );
}
