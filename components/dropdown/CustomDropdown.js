import React from "react";
import { useState } from "react";
import { Dropdown, FormControl } from "react-bootstrap";
import { CaretDownFill } from "react-bootstrap-icons";

// The forwardRef is important!!
// Dropdown needs access to the DOM node in order to position the Menu
const CustomToggle = React.forwardRef(({ children, onClick }, ref) => {
  return (
    <a
      href=""
      ref={ref}
      className="dropdown-title"
      id="navbarScrollingDropdown"
      onClick={(e) => {
        e.preventDefault();
        onClick(e);
      }}
    >
      {children}
      <CaretDownFill
        className="iconCaretDown"
        size={11}
        style={{ marginLeft: "3px", marginBottom: "2px" }}
      />
    </a>
  );
});

// forwardRef again here!
// Dropdown needs access to the DOM of the Menu to measure it
const CustomMenu = React.forwardRef(
  ({ children, style, className, "aria-labelledby": labeledBy }, ref) => {
    const [value, setValue] = useState("");

    return (
      <div
        ref={ref}
        style={style}
        className={className}
        aria-labelledby={labeledBy}
      >
        <FormControl
          autoFocus
          className="mx-3 my-2 w-auto"
          placeholder="Type to filter..."
          onChange={(e) => setValue(e.target.value)}
          value={value}
        />
        <ul className="list-unstyled">
          {React.Children.toArray(children).filter(
            (child) =>
              !value || child.props.children.toLowerCase().startsWith(value)
          )}
        </ul>
      </div>
    );
  }
);

export default function CustomDropdown({ itemName }) {
  const [show, setShow] = useState(false);

  const showDropdown = (e) => {
    setShow(!show);
  };

  const hideDropdown = (e) => {
    setShow(false);
  };

  return (
    <Dropdown>
      <Dropdown.Toggle
        as={CustomToggle}
        id="dropdown-custom-components"
        className="dropdown-item"
      >
        {itemName}
      </Dropdown.Toggle>

      <Dropdown.Menu
        as={CustomMenu}
        show={show}
        onMouseEnter={showDropdown}
        onMouseLeave={hideDropdown}
        className="navdropdown"
        //  className="dropdown-title"
        id="navbarScrollingDropdown"
      >
        <Dropdown.Item eventKey="1">Canada Customs Invoice</Dropdown.Item>
        <Dropdown.Item eventKey="2">US Customs Invoice</Dropdown.Item>
        <Dropdown.Item eventKey="3">Mexico Customs Invoice</Dropdown.Item>
        <Dropdown.Item eventKey="1">China Customs Invoice</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}
