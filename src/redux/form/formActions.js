import { SIGNUP_TRUE } from "./formType";
export const formSubmit = (data) => {
  console.log(data);
  return {
    type: SIGNUP_TRUE,
    payload: data,
  };
};
