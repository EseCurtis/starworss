import React, { FC, InputHTMLAttributes } from "react";

interface BasicInputProps extends InputHTMLAttributes<HTMLInputElement> {
    twStyles?: string;
}

const BasicInput: FC<BasicInputProps> = ({ twStyles, ...restProps }) => {
  return <input className={`${twStyles} bg-red-200`} type="text" {...restProps} />;
};

export default BasicInput;
