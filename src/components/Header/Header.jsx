import "./Header.css";
import { Logo } from "./Logo/Logo";
import { Nav } from "./Nav/Nav";

export function Header(props) {
  return (
    <header className="header">
      <div className="container">
        <div className="header__block">
          <Logo />
          <Nav AddTask={props.AddTask}/>
        </div>
      </div>
    </header>
  );
}
