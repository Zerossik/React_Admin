import { use } from "react";

const sleep = new Promise((resolve) => setTimeout(() => resolve(1), 3000));
export function SlugPage() {
  use(sleep);
  return <div>This is SLUG</div>;
}
