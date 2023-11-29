import styles from './button2.module.scss';

export default function Button2(props) {
  const buttonType: string = props.type;
  return (
    <button className={styles.button}>{buttonType}</button>
  )
}