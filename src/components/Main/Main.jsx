import { Column } from "./Column/Column";
import "./Main.css";

const statusList = [
  "Без статуса",
  "Нужно сделать",
  "В работе",
  "Тестирование",
  "Готово",
];

export function Main(props) {
  return (
    <main className="main">
      <div className="container">
        <div className="main__block">
          <div className="main__content">
            {statusList.map((status) => (
              <Column
                key={status}
                title={status}
                tasks={props.tasks.filter((task) => task.status === status)}
              />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
