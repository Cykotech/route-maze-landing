import styles from "./page.module.scss";
import { roboto } from "./lib/fonts";

import { RectangleButton, TabButton } from "./components/buttons";
import SearchBar from "./components/searchbar";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.banner}>
        <header className={styles.header}>
          <div className={styles.buttonContainer}>
            <RectangleButton type="flight" />
            <RectangleButton type="hotel" />
          </div>
          <h1>RouteMaze</h1>
          <div className={styles.buttonContainer}>
            <RectangleButton type="login" />
            <RectangleButton type="register" />
          </div>
        </header>
        <div className={styles.textContainer}>
          <h2 className={styles.accent}>Helping Others</h2>
          <h2>LIVE & TRAVEL</h2>
          <p>Special offers to suit your plan</p>
        </div>
      </div>
      <div className={styles.searchContainer}>
        <div className={styles.buttonContainer}>
          <TabButton type="flight" />
          <div className={styles.border}></div>
          <TabButton type="hotel" />
        </div>
        <SearchBar />
      </div>
    </main>
  );
}
