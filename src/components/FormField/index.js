import React from 'react'

export default function FormField({ type, name, labelText, value, onChange}) {
  return (
    <div>
      <label htmlFor={name}>{labelText}</label>
      <input
        type={type}
        id={name}
        name={name}
        value={value.name}
        onChange={onChange}    
      />
    </div>
  )
}
