import { Link, useLocation } from "react-router-dom";
import css from "./CamperList.module.css";

export default function CamperList({ campers }) {
  const location = useLocation();
  return (
    <ul className={css.list}>
      {campers.map((camper) => (
        <li key={camper._id}>
          <Link to={`/movies/${camper._id}`} state={location}>
            <span className={css.link}>{camper.name}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
