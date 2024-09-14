import "./PopUp.css";

import { PopExit } from "./PopExit/PopExit";
import { PopNewCard } from "./PopNewCard/PopNewCard";
import { PopBrose } from "./PopBrose/PopBrose";

export function PopUp() {
  return (
    <>
      <PopExit />
      <PopNewCard />
      <PopBrose />
    </>
  );
}
