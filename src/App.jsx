import { store } from "./store/store";
import { Provider } from "react-redux";

import Abc from "./components/abc";

import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <div>Hello World!</div>
      <Abc />
    </Provider>
  );
}

export default App;
