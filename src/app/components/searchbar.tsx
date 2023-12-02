import { TextField, Dropdown } from "./inputs";

export default function SearchBar() {
  return (
    <>
      <TextField
        id="from"
        label="From"
      />
      <TextField
        id="to"
        label="To"
      />
      <Dropdown id='tripDirection'/>
      <TextField
        id="date1"
        label="Departure Date"
      />
      <TextField
        id="date2"
        label="Return Date"
      />
      <TextField
        id="passengers"
        label="Number of Passengers"
      />
      <Dropdown id='flightClass'/>
    </>
  );
}
