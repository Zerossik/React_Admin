import { Activity, useRef, useState } from "react";
import { Link } from "react-router";
import css from "./style.module.scss";
import clsx from "clsx";
import { AnimatedActivity } from "@/components/AnimatedActivity";

const TestActivity = () => {
  const [mode, setMode] = useState<boolean>(false);

  const stringMode = mode ? "visible" : "hidden";

  const handler = () => {
    if (!mode) return setMode(true);

    // setTimeout(() => {
    setMode(false);
    // }, 2000);
  };

  return (
    <>
      <button onClick={handler}>{stringMode}</button>;
      <AnimatedActivity mode={stringMode} delay={2000}>
        <div
          className={clsx(css.content, mode ? css.visible : css.hidden)}
          key={1}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut quidem
          ducimus ipsa iste. Voluptates ullam molestias magni ducimus tempora
          repellat voluptate minima est, commodi, vel impedit error nulla
          laudantium ratione?
        </div>
        <p className="v h c" key={2}>
          dsfhdsuhfsd
        </p>
        <p key={3}>dnfsfudsf</p>
      </AnimatedActivity>
    </>
  );
};

export const Dashboard = () => {
  return (
    <>
      <Link to="/admin/login"> TO Login</Link>
      <Link to="/admin/users"> TO Users</Link>
      <TestActivity />
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti
        explicabo nihil quidem beatae aliquid expedita recusandae repellat
        minus. Architecto, ipsum pariatur numquam obcaecati soluta modi, eaque
        animi maxime mollitia sequi placeat incidunt voluptates nemo neque?
        Veritatis vel eaque harum ipsum porro! Quasi itaque necessitatibus
        tempore magni, aut quas eaque nostrum rerum perferendis aliquam in fugit
        adipisci deserunt vero voluptas blanditiis eligendi! Qui nisi assumenda
        cupiditate distinctio eaque eos ea itaque, commodi modi voluptas animi
        alias molestiae a natus quam nulla. Nihil fuga repudiandae eos quas at
        id quam officiis perferendis sint, possimus, accusamus vero earum
        voluptatem, iure beatae quae iusto! Eos recusandae culpa quis quaerat,
        debitis quibusdam ad natus veritatis nisi alias. Dolores pariatur cum a
        amet optio aliquid! Excepturi harum nam numquam quibusdam similique
        laudantium animi aspernatur porro ducimus corrupti. Corporis aliquid
        delectus harum libero facilis similique, quia voluptatibus facere
        temporibus, at obcaecati fugit neque, a nostrum! Delectus maxime quae
        sequi quam! Fugiat culpa amet illum! Delectus corrupti deserunt
        quisquam, dignissimos ullam voluptatibus commodi doloribus accusantium
        velit facere perspiciatis animi ducimus adipisci nulla similique
        molestias reiciendis modi alias quam excepturi consequuntur. Reiciendis
        sapiente id qui corporis odit quod. Delectus ullam ipsam nam nulla
        natus, quasi molestiae error ipsum ea.
      </p>
    </>
  );
};
