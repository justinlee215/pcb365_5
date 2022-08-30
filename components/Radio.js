import { Form, FormLabel } from "react-bootstrap";
import { useState, useEffect } from "react";

export default function Radio({
  checked,
  value,
  label,
  name,
  inline,
  required,
  handleChange,
}) {
  return (
    <Form.Check
      inline={inline}
      label={label}
      name={name}
      value={value}
      onChange={handleChange}
      type="radio"
      id={label}
      required="required"
      checked={checked}
    />
  );
}
