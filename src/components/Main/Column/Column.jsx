import { Card } from "./Card/Card";
import "./Column.css";

export function Column(props) {
  return (
    <div className="main__column column" key={props.key}>
      <div className="column__title">
        <p>{props.title}</p>
      </div>
      <div className="cards">
        {props.tasks.map((item) => (
          <Card
            key={item.id}
            theme={item.theme}
            title={item.title}
            date={item.date}
          />
        ))}
      </div>
    </div>
  );
}
