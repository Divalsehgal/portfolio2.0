import { User } from "../../App";

type OptionBoxProps = {
  options: User[];
  onSelect: (selectedOption: User["first_name"]) => void;
};

const OptionsBox = ({ options, onSelect }: OptionBoxProps) => {

  return (
    <div id="mention-options-container">
      <div id="mention-options-box">
        {options.map((option) => (
          <div key={option.id} onClick={() => onSelect(option?.first_name)}>
            {option.first_name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default OptionsBox;
