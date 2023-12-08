import { DropDown } from "./Inputs/DropDown";
import { TextField } from "./Inputs/TextField";
import styles from './searchbar.module.scss'

export const SearchBar = () => {
  return (
    <div className={styles.searchbar}>
      <TextField placeholder="NYC, New York" id="from" label="From" />
      <TextField placeholder="Los Angeles, California" id="to" label="To" />
      <DropDown id="trip-direction" />
      <TextField placeholder="1/1/2023" id="date1" label="Departure Date" />
      <TextField placeholder="1/1/2023" id="date2" label="Return Date" />
      <TextField placeholder="1" id="passengers" label="Number of Passengers" />
      <DropDown id="flight-class" />
    </div>
  );
};
