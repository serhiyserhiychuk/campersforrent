import svg from "../../../public/icons.svg";
import css from "./HomePage.module.css";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const navigate = useNavigate();
  return (
    <div className={css.div}>
      <svg className={css.icon}>
        <use href={svg + "#icon-camper"}></use>
      </svg>
      <h1 className={css.title}>
        <span className={css.span}>C</span>ampers
        <span className={css.span}>F</span>or
        <span className={css.span}>R</span>ent
      </h1>
      <p className={css.text}>
        Only best campers from all Ukraine especially for you! Wonderful
        camping`s guaranteed!
      </p>
      <button
        className={css.btn}
        onClick={() => {
          navigate("/catalog");
        }}
      >
        Rent Now!
      </button>
    </div>
  );
}
