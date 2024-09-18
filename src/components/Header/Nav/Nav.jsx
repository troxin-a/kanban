import { useState } from "react";
import "./Nav.css";
import { PopUserSet } from "./PopUserSet/PopUserSet";

export function Nav(props) {
  const [isVisiblePopUserSet, setIsVisiblePopUserSet] = useState(false);

  const ShowPopUserSet = () => {
    setIsVisiblePopUserSet((prevState) => !prevState);
  }

  return (
    <nav className="header__nav">
      <button className="header__btn-main-new _hover01" onClick={props.AddTask} id="btnMainNew">
        <a>Создать новую задачу</a>
      </button>
      <a onClick={ShowPopUserSet} className="header__user _hover02">
        Ivan Ivanov
      </a>
      {isVisiblePopUserSet && <PopUserSet />}
    </nav>
  );
}
