import styles from './button1.module.scss';
// import {airplane} from '../../../../public/airplane';

export default function Button1(props) {
  const buttonType: string = props.type;
  const image = (buttonType: string) => {
    if (buttonType === 'Find Flights') {
      return airplane;
    }
  }
  return (
    <button className={styles.button}>{buttonType}</button>
  )
}