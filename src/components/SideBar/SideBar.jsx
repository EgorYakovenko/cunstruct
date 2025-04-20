import { HiOutlineHomeModern } from "react-icons/hi2";
import { GoProjectRoadmap } from "react-icons/go";
import { IoFolderOpenOutline } from "react-icons/io5";
import { PiWarehouse } from "react-icons/pi";
import { MdOutlineEngineering } from "react-icons/md";
import { BsPersonVcard } from "react-icons/bs";
import { HiOutlineDocumentReport } from "react-icons/hi";
import { IoSettingsOutline } from "react-icons/io5";
import { IoIosLogOut } from "react-icons/io";

import css from "./SideBar.module.css";
export default function SideBar() {
  return (
    <>
      <div className={css.sidebar}>
        <div className={css.logoContainer}>
          <div className={css.logo}></div>
          <h1 className={css.name}>
            Construct <span>hub</span>
          </h1>
        </div>
        <ul className={css.menuList}>
          <li className={css.menuItem}>
            <HiOutlineHomeModern className={css.menuIcon} />
            <a href="#">Главная</a>
          </li>
          <li className={css.menuItem}>
            <GoProjectRoadmap className={css.menuIcon} />
            <a href="#">Мои проекты</a>
          </li>
          <li className={css.menuItem}>
            <IoFolderOpenOutline className={css.menuIcon} />
            <a href="#">Документы</a>
          </li>
          <li className={css.menuItem}>
            <PiWarehouse className={css.menuIcon} />
            <a href="#">Склад</a>
          </li>
          <li className={css.menuItem}>
            <MdOutlineEngineering className={css.menuIcon} />
            <a href="#">Подрядчики</a>
          </li>
          <li className={css.menuItem}>
            <BsPersonVcard className={css.menuIcon} />
            <a href="#">Поставщики</a>
          </li>
          <li className={css.menuItem}>
            <HiOutlineDocumentReport className={css.menuIcon} />
            <a href="#">Отчёты</a>
          </li>
          <li className={css.menuItem}>
            <IoSettingsOutline className={css.menuIcon} />
            <a href="#">Настройки</a>
          </li>
          <li className={css.menuItem}>
            <IoIosLogOut className={css.menuIcon} />
            Выйти
          </li>
        </ul>
        {/* <img
          className={css.logo}
          src="../../../logo.png"
          alt=""
          width={150}
          height={150}
        /> */}
      </div>
    </>
  );
}
