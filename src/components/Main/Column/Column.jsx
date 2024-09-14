import { Cards } from "../Cards/Cards";
import "./Column.css";

export function Column(props) {
  return (
    <div className="main__column column">
      <div className="column__title">
        <p>{props.name}</p>
      </div>
      <Cards />
    </div>
  );
}
