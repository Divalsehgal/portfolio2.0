import { useState } from "react";
import Input from "../Input/Input";
import OptionsBox from "../OptionBox/OptionBox";
import { User } from "../../App";

export type firstName = Pick<User, "first_name">;

interface MentionProps {
  data: User[];
}

const MentionBox = (props:any) => {
  const { data }: MentionProps = props;
  const [inputValue, setInputValue] = useState<string>("");
  const [mentionOptions, setMentionOptions] = useState<User[]>(data);
  const [showOptions, setShowOptions] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const text = e.target.value;
    setInputValue(text);

    if (text && text.startsWith("@")) {
      const fetchedOptions: User[] = fetchMentionOptions(text.substring(1));
      setMentionOptions(fetchedOptions);
      setShowOptions(true);
    } else {
      setShowOptions(false);
    }
  };

  const handleSelect = (selectedOption: string, keyword = "Hello"): void => {
    setInputValue((prevValue) => {
      const words = prevValue.split(" ");
      words[words.length - 1] = `@${selectedOption}${" "} ${keyword}`;
      return words.join(" ");
    });

    setShowOptions(false);
  };

  const fetchMentionOptions = (query: string): User[] => {
    return data.filter((option) =>
      option.first_name.toLowerCase().includes(query.toLowerCase())
    );
  };

  
  if (data.length === 0) {
    return <div>No data available.</div>;
  }

  return (
    <div>
      <Input value={inputValue} onChange={handleChange} />
      {showOptions && (
        <OptionsBox options={mentionOptions} onSelect={handleSelect} />
      )}
    </div>
  );
};

export default MentionBox;
