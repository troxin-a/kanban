import { Container } from "../../styled/common/common.styled";
import { Column } from "./Column/Column";
import * as S from "./main.styled";

const statusList = [
  "Без статуса",
  "Нужно сделать",
  "В работе",
  "Тестирование",
  "Готово",
];

export function Main(props) {
  return (
    <S.Main>
      <Container>
        <S.MainBlock>
          <S.MainContent>
            {statusList.map((status) => (
              <Column
                key={status}
                title={status}
                tasks={props.tasks.filter((task) => task.status === status)}
              />
            ))}
          </S.MainContent>
        </S.MainBlock>
      </Container>
    </S.Main>
  );
}
