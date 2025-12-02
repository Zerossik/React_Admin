import type { HTMLAttributes } from "react";
import css from "./profile.module.scss";
import image from "/images/profile_default.png";
import { clsx } from "clsx";
import Collapsible from "../Collapsible";
import TriggerButton from "./TriggerButton";
import { Link } from "react-router";

export const Profile = ({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) => {
  return (
    <div className={clsx(css.profile, className)} {...props}>
      <div className={css.profile__wrap}>
        <img src={image} alt="profile image" width={40} height={40} />
        <Link to={"profile"} className={css.profile__name}>
          UserName
        </Link>
      </div>
      <Collapsible className={css.collapsible}>
        <Collapsible.Trigger className={css.triggerButton}>
          <TriggerButton />
        </Collapsible.Trigger>
        <Collapsible.Content>
          <div className={css.content}>
            <a href="/" className={css.content__item}>
              Go to web-site
            </a>
            <Link to="profile" className={css.content__item}>
              Profile
            </Link>
          </div>
        </Collapsible.Content>
      </Collapsible>
    </div>
  );
};
