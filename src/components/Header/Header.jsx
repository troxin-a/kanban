import "./Header.css";
import { Logo } from "./Logo/Logo";
import { Nav } from "./Nav/Nav";

export function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header__block">
          <Logo />
          <Nav />
        </div>
      </div>
    </header>
  );
}
