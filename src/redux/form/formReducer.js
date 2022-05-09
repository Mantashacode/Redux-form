import { SIGNUP_TRUE } from "./formType";

const initialState = {
  formSignUp: false,
  data: [],
};
const formReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGNUP_TRUE:
      const userdetails = action.payload;
      return {
        ...state,
        formSignUp: true,
        data: [
          ...state.data,
          {
            FirstName: userdetails.firstName,
            LastName: userdetails.lastName,
            Email: userdetails.email,
            password: userdetails.pwd,
          },
        ],
      };
    default:
      return state;
  }
};

export default formReducer;
