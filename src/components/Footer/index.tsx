import { Button } from "../Buttons";
import { FacebookSVG } from "@/assets/svg/Facebook";
import Image from "next/image";
import { InstagramSVG } from "@/assets/svg/Instagram";
import Link from "next/link";
import NewsLetterIMG from "@/assets/images/news_letter.png";
import React from "react";
import { TextField } from "../SearchBar/Inputs/TextField";
import { TwitterSVG } from "@/assets/svg/Twitter";
import { YoutubeSVG } from "@/assets/svg/Youtube";
import styles from "./Footer.module.scss";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.news_letter}>
        <div className={styles.news_letter__section}>
          <h1 className={styles.news_letter__title}>Subscribe Newsletter</h1>
          <span className={styles.news_letter__miniTitle}>The Travel</span>
          <p className={styles.news_letter__description}>
            Get inspired! Receive travel discounts, tips and behind the scenes
            stories.
          </p>
          <div className={styles.news_letter__subscribe}>
            <TextField
              className={styles.news_letter__input}
              inputProps={{ placeholder: "Your email address" }}
            />
            <Button className={styles.news_letter__subscribe_button}>
              Subscribe
            </Button>
          </div>
        </div>
        <Image
          width={400}
          height={305}
          alt="news_letter_image"
          className={styles.news_letter__image}
          src={NewsLetterIMG}
        />
      </div>
      <div className={styles.wrap}>
        <div className={styles.socials}>
          RouteMaze
          <ul className={styles.socials_list}>
            <li>
              <a href="https://facebook.com">
                <FacebookSVG />
              </a>
            </li>
            <li>
              <a href="https://twitter.com">
                <TwitterSVG />
              </a>
            </li>
            <li>
              <a href="https://youtube.com">
                <YoutubeSVG />
              </a>
            </li>
            <li>
              <a href="https://instagram.com">
                <InstagramSVG />
              </a>
            </li>
          </ul>
        </div>
        <nav className={styles.nav}>
          <ul className={styles.nav_list}>
            <span className={styles.nav_list__title}>Our Destinations</span>
            <li className={styles.nav_list__item}>
              <Link href={""}>Canada</Link>
            </li>
            <li className={styles.nav_list__item}>
              <Link href={""}>Alaksa</Link>
            </li>
            <li className={styles.nav_list__item}>
              <Link href={""}>France</Link>
            </li>
            <li className={styles.nav_list__item}>
              <Link href={""}>Iceland</Link>
            </li>
          </ul>
          <ul className={styles.nav_list}>
            <span className={styles.nav_list__title}>Our Activities</span>
            <li className={styles.nav_list__item}>
              <Link href={""}>Northern Lights</Link>
            </li>
            <li className={styles.nav_list__item}>
              <Link href={""}>Cruising & sailing</Link>
            </li>
            <li className={styles.nav_list__item}>
              <Link href={""}>Multi-activities</Link>
            </li>
            <li className={styles.nav_list__item}>
              <Link href={""}>Kayaing</Link>
            </li>
          </ul>
          <ul className={styles.nav_list}>
            <span className={styles.nav_list__title}>Travel Blogs</span>
            <li className={styles.nav_list__item}>
              <Link href={""}>Bali Travel Guide</Link>
            </li>
            <li className={styles.nav_list__item}>
              <Link href={""}>Sri Lanks Travel Guide</Link>
            </li>
            <li className={styles.nav_list__item}>
              <Link href={""}>Peru Travel Guide</Link>
            </li>
            <li className={styles.nav_list__item}>
              <Link href={""}>Bali Travel Guide</Link>
            </li>
          </ul>
          <ul className={styles.nav_list}>
            <span className={styles.nav_list__title}>About Us</span>
            <li className={styles.nav_list__item}>
              <Link href={""}>Our Story</Link>
            </li>
            <li className={styles.nav_list__item}>
              <Link href={""}>Work with us</Link>
            </li>
          </ul>
          <ul className={styles.nav_list}>
            <span className={styles.nav_list__title}>Contact Us</span>
            <li className={styles.nav_list__item}>
              <Link href={""}>Our Story</Link>
            </li>
            <li className={styles.nav_list__item}>
              <Link href={""}>Work with us</Link>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};
