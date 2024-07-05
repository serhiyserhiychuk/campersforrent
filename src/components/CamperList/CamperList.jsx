import { useState } from "react";
import css from "./CamperList.module.css";
import CamperCard from "../CamperCard/CamperCard";

export default function CamperList({ campers, filters }) {
  const [number, setNumber] = useState(4);
  const campersToRender = campers.filter((camper) => {
    return (
      camper.location.toLowerCase().includes(filters.location.toLowerCase()) &&
      camper.form.includes(filters.form) &&
      filters.details.every((key) => {
        if (key === "beds" || key === "hob") {
          return camper.details[key] >= 2;
        } else if (key === "gas" || key === "water") {
          return camper.details[key] !== "";
        } else if (key === "AC") {
          return camper.details["airConditioner"] >= 1;
        } else {
          return camper.details[key] >= 1;
        }
      })
    );
  });

  return campersToRender.length > 0 ? (
    <div className={css.div}>
      <ul className={css.list}>
        {campersToRender.slice(0, number).map((camper) => (
          <CamperCard camper={camper} key={camper._id} />
        ))}
      </ul>
      {campersToRender.length > number && (
        <button
          className={css.btn}
          onClick={() => {
            setNumber(number + 4);
          }}
        >
          Load more
        </button>
      )}
    </div>
  ) : (
    <p>There are no campers with such properties</p>
  );
}
