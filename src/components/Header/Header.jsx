import { Logo } from "./Logo/Logo";
import { Nav } from "./Nav/Nav";
import * as S from "./Header.styled";
import { Container } from "../../styled/common/common.styled";

export function Header({addTask}) {
  return (
    <S.Header>
      <Container>
        <S.HeaderBlock>
          <Logo />
          <Nav addTask={addTask}/>
        </S.HeaderBlock>
      </Container>
    </S.Header>
  );
}
