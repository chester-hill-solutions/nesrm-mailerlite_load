import { handler } from "../index.js";

const test = () => {
  let res;
  res = handler({
    httpMethod: "GET",
    body: {
      email: "saihaansyed01@gmail.com",
    },
  }).then((result) => {
    console.log(result);
  });
};

test();
