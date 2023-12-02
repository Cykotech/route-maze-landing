import styles from "./buttons.module.scss";
import { airplane, hotel } from "../../../public/svg";
import { Button } from "../lib/types";

export function RectangleButton(props: Button) {
  const buttonType: string = props.type;
  let image;
  let text;

  switch (buttonType) {
    case "flight":
      image = airplane;
      text = "Find Flights";
      break;
    case "hotel":
      image = hotel;
      text = "Find Hotels";
      break;
    case "login":
      text = "Login";
      break;
    case "register":
      text = "Sign Up";
      break;
  }

  return (
    <button
      className={
        buttonType === "register"
          ? styles.secondaryRectangle
          : styles.primaryRectangle
      }>
      {image}
      {text}
    </button>
  );
}

export function TabButton(props: Button) {
  const buttonType: string = props.type;
  let text;
  let image;
  let isActive = true;

  switch (buttonType) {
    case "flight":
      text = "Flights";
      image = airplane;
      break;
    case "hotel":
      text = "Stays";
      image = hotel;
      break;
  }
  return (
    <button className={isActive ? styles.activeTab : styles.inactiveTab}>
      {image}
      {text}
    </button>
  );
}
