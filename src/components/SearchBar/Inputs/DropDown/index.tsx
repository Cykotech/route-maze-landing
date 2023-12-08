import { DropDownProps } from "./DropDown.types";
import styles from './DropDown.module.scss';

export const DropDown = ({ children, ...props }: DropDownProps) => {
  const tripDirectionArray = [
    { id: "oneWay", content: "One-Way" },
    { id: "roundTrip", content: "Round Trip" },
  ];
  const flightClassArray = [
    { id: "economy", content: "Economy" },
    { id: "firstClass", content: "First-Class" },
    { id: "business", content: "Business" },
  ];

  const tripDirectionMap = (
    <div className={styles.wrapper}>
      <select className={styles.tripDirection}>
        {tripDirectionArray.map((element) => {
          return <option key={element.id}>{element.content}</option>;
        })}
      </select>
    </div>
  );

  const flightClassMap = (
    <div className={styles.wrapper}>
      <select className={styles.flightClass}>
        {flightClassArray.map((element) => {
          return <option key={element.id}>{element.content}</option>;
        })}
      </select>
    </div>
  );

  if (props.id === 'trip-direction') {
    return tripDirectionMap;
  }

  if (props.id === 'flight-class') {
    return flightClassMap;
  }
};
