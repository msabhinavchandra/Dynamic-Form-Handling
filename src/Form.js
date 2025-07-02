// Form.js
import React, { useState } from "react";
import formConfig from "./formConfig";
import InputField from "./InputField";

function Form() {
  const initialState = formConfig.reduce((acc, field) => {
    acc[field.name] = "";
    return acc;
  }, {});

  const [formData, setFormData] = useState(initialState);

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log("Submitted Data:", formData);
  }

  return (
    <form onSubmit={handleSubmit}>
      {formConfig.map((field) => (
        <InputField
          key={field.id}
          type={field.type}
          name={field.name}
          placeholder={field.placeholder}
          value={formData[field.name]}
          onChange={handleChange}
        />
      ))}
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
