import { HTMLProps, Ref, forwardRef } from "react";

type InputBoxProps = {
  placeholder: string;
} & HTMLProps<HTMLInputElement>;

const InputBox = forwardRef<HTMLInputElement, InputBoxProps>(
  (props, ref: Ref<HTMLInputElement>) => {
    const { placeholder, ...rest } = props;
    return (
      <div className="input-box">
        <input ref={ref} placeholder={placeholder} type="text" {...rest} />
      </div>
    );
  }
);
export default InputBox;
