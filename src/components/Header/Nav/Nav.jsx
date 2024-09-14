import "./Nav.css";
import { PopUserSet } from "./PopUserSet/PopUserSet";

export function Nav() {
  return (
    <nav className="header__nav">
      <button className="header__btn-main-new _hover01" id="btnMainNew">
        <a href="#popNewCard">Создать новую задачу</a>
      </button>
      <a href="#user-set-target" className="header__user _hover02">
        Ivan Ivanov
      </a>
      <PopUserSet />
    </nav>
  );
}
