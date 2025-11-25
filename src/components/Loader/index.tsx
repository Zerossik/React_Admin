import { useEffect } from "react";
import NProgress from "nprogress";
import "./loader.scss";

export const Loader = () => {
  // I used the NProgress library to display a progress bar at the top of the page.
  NProgress.configure({ showSpinner: false, minimum: 0.2 });

  useEffect(() => {
    NProgress.start();

    return () => {
      NProgress.done();
    };
  }, []);

  return null; // NProgress displays a progress bar. I don't need to return anything.
};
//
