import { Textfield, Dropdown } from "../lib/types";

export function TextField(props: Textfield) {
  let text;
  const id: string = props.id;
  const label: string = props.label;

  switch (id) {
    case 'from':
      text = 'NYC, New York';
      break;
    case 'to':
      text = 'Los Angeles, California';
      break;
    case 'date1':
    case 'date2':
      text = '1/1/2023';
      break;
    case 'passengers':
      text = '1';
      break;
  }

  return (
    <>
      <label htmlFor={label}>{label}</label>
      <input
        id={id}
        type={id === "passengers" ? "number" : "text"}
        placeholder={text}
        min="1"
        max="10"></input>
    </>
  );
}

export function Dropdown(props: Dropdown) {
  const tripDirectionArray = ['One-Way', 'Round Trip'];
  const flightClassArray = ['Economy', 'First-Class', 'Business'];
  const id = props.id;

  // const tripDirectionMap = tripDirectionArray.map((element) => {
  //   return <option>{element}</option>
  // })

  return (
    <select>
      <option>One-Way</option>
      <option>Round Trip</option>
    </select>
  );
}
