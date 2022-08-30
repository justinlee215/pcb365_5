import ToggleButton from "react-bootstrap/ToggleButton";
import ButtonGroup from "react-bootstrap/ButtonGroup";

export const VerticalRadioBoxes = ({ item, intakeform, handleChange }) => {
  return (
    <ButtonGroup className="mb-2 gap-2" vertical={true} name={item?.id}>
      {item?.choices.map((choice, idx) => (
        <ToggleButton
          key={choice + idx}
          id={choice + idx}
          type="radio"
          variant={"outline-primary"}
          name={item.id}
          value={idx + 1}
          checked={intakeform[item.id] == idx + 1}
          onChange={handleChange}
          style={{ minWidth: "20rem" }}
        >
          {choice}
        </ToggleButton>
      ))}
    </ButtonGroup>
  );
};
