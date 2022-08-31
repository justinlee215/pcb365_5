import ToggleButton from "react-bootstrap/ToggleButton";
import ButtonGroup from "react-bootstrap/ButtonGroup";

export const VerticalCheckBoxes = ({
  index,
  item,
  intakeform,
  handleChangeCheckbox,
}) => {
  return (
    <ButtonGroup vertical={true} name={item?.id} className="gap-2">
      {item?.choices.map((choice, idx) => (
        <ToggleButton
          key={choice + idx}
          id={choice + idx}
          type="checkbox"
          variant={"outline-primary"}
          name={item.id}
          value={intakeform[item.id]?.[idx]}
          checked={intakeform[item.id]?.[idx]}
          onChange={() => handleChangeCheckbox(index, idx)}
          style={{
            width: "20rem",
            height: "3rem",
            textAlign: "center",
            lineHeight: "2rem",
            borderRadius: "2px",
          }}
        >
          {choice}
        </ToggleButton>
      ))}
    </ButtonGroup>
  );
};
