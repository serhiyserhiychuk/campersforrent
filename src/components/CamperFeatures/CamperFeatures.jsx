import css from "./CamperFeatures.module.css";
import FeaturesList from "../FeaturesList/FeaturesList";

export default function CamperFeatures({ camper }) {
  const details = {
    Form: camper.form,
    Length: camper.length,
    Width: camper.width,
    Height: camper.height,
    Tank: camper.tank,
    Consumption: camper.consumption,
  };
  return (
    <div className={css.div}>
      <FeaturesList camper={camper} number={-1} />
      <div>
        <h3>Vehicle details</h3>
        <ul className={css.list}>
          {Object.entries(details).map(([key, value]) => (
            <li className={css.item} key={key}>
              <p>{key}</p>
              <p>{value}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
