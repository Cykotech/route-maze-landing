import { Button, TabButton } from "@components/Buttons";

import { Footer } from "@/components/Footer";
import { HotelSVG } from "@/assets/svg/Hotel";
import { PlaneSVG } from "@/assets/svg/Plane";
import { SearchBar } from "@components/SearchBar";
import { roboto } from "../lib/fonts";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.banner}>
        <header className={styles.header}>
          <div className={styles.buttonContainer}>
            <Button>
              <PlaneSVG color="white" /> Flight
            </Button>
            <Button>
              <HotelSVG color="white" /> Hotels
            </Button>
          </div>
          <h1>RouteMaze</h1>
          <div className={styles.buttonContainer}>
            <Button>Login</Button>
            <Button buttonType="secondary">Register</Button>
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
          <TabButton>
            <PlaneSVG color="black" />
            Flights
          </TabButton>
          <div className={styles.border}></div>
          <TabButton>
            <HotelSVG color="black" />
            Hotel
          </TabButton>
        </div>
        <SearchBar />
      </div>
      <Footer />
    </main>
  );
}
