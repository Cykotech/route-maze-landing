import { DropDown } from "@components/DropDown";
import { TextField } from "@components/Inputs/TextField";

export const SearchBar = () => {
  return (
    <>
      <TextField placeholder="NYC, New York" id="from" label="From" />
      <TextField placeholder="Los Angeles, California" id="to" label="To" />
      <TextField placeholder="1/1/2023" id="date1" label="Departure Date" />
      <TextField placeholder="1/1/2023" id="date2" label="Return Date" />
      <TextField placeholder="1" id="passengers" label="Number of Passengers" />
      <DropDown id="flightClass">
        <option>One-Way</option>
        <option>Round Trip</option>
      </DropDown>
    </>
  );
};
