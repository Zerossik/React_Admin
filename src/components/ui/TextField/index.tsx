import type { InputHTMLAttributes } from "react";
import css from "./textField.module.scss";

export const TextField = ({
  ...props
}: InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <input
      type="text"
      autoComplete="on"
      className={css.textField}
      placeholder=""
      {...props}
    />
  );
};
