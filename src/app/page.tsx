import styles from './page.module.scss'
import { roboto } from './fonts'

import Button1 from './components/buttons/button1'
import Button2 from './components/buttons/button2'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.banner}>
        <header className={styles.header}>
          {/* Will recreate the buttons as components */}
          <div className={styles.buttonContainer}>
            <Button1 type="Find Flights" />
            <Button1 type="Find Hotels" />
          </div>
          <h1>RouteMaze</h1>
          <div className={styles.buttonContainer}>
            <Button1 type="Login" />
            <Button2 type="Sign Up" />
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
