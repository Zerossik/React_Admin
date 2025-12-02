import { MdOutlineSearch } from "react-icons/md";
import { Button } from "../ui/Button";
import { TextField } from "../ui/TextField";
import css from "./search.module.scss";

import { clsx } from "clsx";

type PropsType = {
  className?: string;
};

export const Search = ({ className }: PropsType) => {
  return (
    <>
      <div className={clsx(css.search, className)}>
        <TextField placeholder="search..." name="search" />
        <Button
          onClick={() => console.log("search")}
          className={css.search__Btn}
        >
          <MdOutlineSearch width={24} height={24} />
        </Button>
      </div>
    </>
  );
};
