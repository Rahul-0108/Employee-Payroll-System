import "./App.css";
import EmployeeUI from "./EmployeeUI";
import { Provider } from "react-redux";
import store from "./Redux/store";

function App() {
  return (
    <Provider store={store}>
      <div>
        <EmployeeUI />
      </div>
    </Provider>
  );
}

export default App;
