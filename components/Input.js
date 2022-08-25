
import { Form } from "react-bootstrap";

export default function Input ({ label, name, required, type, placeholder, value, handleChange}) {
    return (
    <Form.Group className="mb-3">
        <Form.Label>{label}</Form.Label>
        <Form.Control
            type={type}
            placeholder={placeholder}
            id={name}
            value={value}
            required={required}
            onChange={handleChange}
            name={name}
        />
    </Form.Group>
    )
}

