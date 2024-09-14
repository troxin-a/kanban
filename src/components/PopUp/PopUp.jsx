import "./PopUp.css";

import { PopUser } from "./PopUser/PopUser";
import { PopNewCard } from "./PopNewCard/PopNewCard";
import { PopBrose } from "./PopBrose/PopBrose";

export function PopUp() {
  return (
    <>
      <PopUser />
      <PopNewCard />
      <PopBrose />
    </>
  );
}
