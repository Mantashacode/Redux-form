import FormContainer from "./components/FormContainer";
import "./App.css";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Heading from "./components/Heading";
import { Provider } from "react-redux";
import store from "./redux/store";
import DisplayForm from "./components/DisplayForm";

function App() {
  return (
    <Provider store={store}>
      <div className="outerDiv">
        <Heading />
        <FormContainer />
        <DisplayForm />
      </div>
    </Provider>
  );
}

export default App;
