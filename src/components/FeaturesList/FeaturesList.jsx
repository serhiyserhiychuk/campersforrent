import css from "./FeaturesList.module.css";
import svg from "../../../public/icons.svg";

export default function FeaturesList({ camper, number }) {
  return (
    <ul className={css.featlist}>
      <li className={css.featitem}>
        <svg className={css.featicon}>
          <use href={svg + "#icon-adults"}></use>
        </svg>
        {camper.adults} adults
      </li>
      <li className={css.featitem}>
        <svg className={css.featicon}>
          <use href={svg + "#icon-auto"}></use>
        </svg>
        {camper.transmission}
      </li>
      <li className={css.featitem}>
        <svg className={css.featicon}>
          <use href={svg + "#icon-petrol"}></use>
        </svg>
        {camper.engine}
      </li>
      {Object.entries(camper.details)
        .slice(0, number)
        .map(
          ([key, value]) =>
            key !== "bathroom" &&
            value != false &&
            value !== "" && (
              <li className={css.featitem} key={key}>
                <svg className={css.featicon}>
                  <use href={svg + `#icon-${key}`}></use>
                </svg>
                {value > 1 && `${value} ${key}`}
                {value === 1 &&
                  key !== "beds" &&
                  key !== "airConditioner" &&
                  key}
                {key === "airConditioner" && "conditioner"}
                {key === "beds" && value === 1 && "1 bed"}
                {key === "water" && value}
                {key === "gas" && value}
              </li>
            )
        )}
    </ul>
  );
}
