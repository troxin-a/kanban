import "./App.css";

import { PopUp } from "./components/PopUp/PopUp";
import { Header } from "./components/Header/Header";
import { Main } from "./components/Main/Main";

function App() {
  return (
    <div className="wrapper">
      <PopUp/>
      <Header />
      <Main />
    </div>
  );
}

export default App;
