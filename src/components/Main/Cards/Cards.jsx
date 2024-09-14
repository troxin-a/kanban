import { Card } from "./Card/Card";
import "./Cards.css";

export function Cards() {
  const task = {
    category: "Web Design",
    name: "Задача1",
    deadline: "01.03.24",
  }

  return (
    <div className="cards">
      <Card {...task} />
      <Card {...task} />
      <Card {...task} />
      <Card {...task} />
    </div>
  );
}
