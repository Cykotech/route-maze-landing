import styles from './page.module.scss'
import { roboto } from './fonts'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.banner}>
        <header className={styles.header}>
          {/* Will recreate the buttons as components */}
          <div className={styles.buttonContainer}>
            <button className={styles.button}>Find Flights</button>
            <button className={styles.button}>Find Hotels</button>
          </div>
          <h1>RouteMaze</h1>
          <div className={styles.buttonContainer}>
            <button className={styles.button}>Login</button>
            <button className={styles.button}>Sign Up</button>
          </div>
        </header>
        <div className={styles.textContainer}>
          <h2 className={styles.accent}>Helping Others</h2>
          <h2>LIVE & TRAVEL</h2>
          <p>Special offers to suit your plan</p>
        </div>
      </div>
    </main>
  )
}
