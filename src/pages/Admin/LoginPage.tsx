import { use } from "react";

const sleep = new Promise((resolve) => setTimeout(() => resolve(1), 3000));
export const LoginPage = () => {
  use(sleep);
  return (
    <>
      <h1>This is login</h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio harum,
        impedit deserunt repellat quis veritatis aliquid. Accusantium minima
        dolor sint sapiente quisquam ipsa aperiam esse reiciendis expedita
        natus! Explicabo nisi dignissimos beatae perspiciatis, natus quasi
        laudantium molestias similique sunt error alias, facilis ipsam in quos
        id quia amet eos repudiandae dolore molestiae modi. Repellendus eaque
        voluptatem excepturi, illum tenetur odit voluptate labore quis ipsam.
        Cupiditate, expedita dolorem quo modi nobis nihil ex aliquam quia
        voluptates quasi iure quod adipisci doloremque ea ad, inventore
        consequuntur! Tenetur alias, explicabo totam magni pariatur dolore, quae
        nam laboriosam corporis consequuntur architecto id aliquam assumenda
        non. Aliquam hic iusto inventore unde quis laudantium eius placeat
        voluptatibus nesciunt eaque obcaecati ea maiores dignissimos accusantium
        ducimus optio dolor dolorem voluptatum quia vero facilis iste, sapiente
        asperiores provident. Animi similique sed doloribus labore quasi ipsa
        aliquam sit corrupti alias, rerum reiciendis, vel vitae quam accusantium
        saepe dolore odio minima, sunt voluptatibus! Reprehenderit minima iste
        debitis quos cumque quis est a, nostrum nulla similique aut dicta
        praesentium itaque nobis unde voluptatibus asperiores voluptatum ducimus
        quia facere. Nulla dolore sapiente maxime culpa. Asperiores ipsam
        molestias eligendi totam vero atque pariatur fugiat voluptates animi
        consequuntur. Nihil delectus nam laboriosam suscipit fuga!
      </p>
    </>
  );
};
