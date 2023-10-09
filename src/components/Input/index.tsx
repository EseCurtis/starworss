import { FC, InputHTMLAttributes } from "react";

interface BasicInputProps extends InputHTMLAttributes<HTMLInputElement> {
    twStyles?: string;
}

const BasicInput: FC<BasicInputProps> = ({ twStyles, ...restProps }) => {
  return <input className={`${twStyles} `} type="text" {...restProps} />;
};

export default BasicInput;
