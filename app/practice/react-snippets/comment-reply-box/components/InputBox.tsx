import { Input } from "@/components/ui/input";
import { HTMLProps, Ref, forwardRef } from "react";

type InputBoxProps = {
  placeholder: string;
} & HTMLProps<HTMLInputElement>;

export const InputBox = forwardRef<HTMLInputElement, InputBoxProps>(
  (props, ref: Ref<HTMLInputElement>) => {
    const { placeholder, ...rest } = props;
    return (
      <div className="input-box">
        <Input ref={ref} placeholder={placeholder} type="text" {...rest} />
      </div>
    );
  }
);

InputBox.displayName = "InputBox";
