// InputField.js
import React from "react";

function InputField({ type, name, placeholder, value, onChange }) {
  return (
    <div>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

export default InputField;
