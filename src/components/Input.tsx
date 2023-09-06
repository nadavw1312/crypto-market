import { ChangeEventHandler } from "react";
import styles from "@/styles/Input.module.css";

type InputProps = {
  value: string;
  placeHolder: string;
  handleSearch: ChangeEventHandler<HTMLInputElement> | undefined;
  customClasses?: string;
};

const Input = ({
  value,
  placeHolder,
  handleSearch,
  customClasses,
}: InputProps) => {
  return (
    <input
      value={value}
      placeholder={placeHolder}
      onChange={handleSearch}
      className={`${styles.input} ${customClasses}`}
    ></input>
  );
};
export default Input;
