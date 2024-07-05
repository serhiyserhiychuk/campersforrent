import css from "./CamperCard.module.css";
import svg from "../../../public/icons.svg";
import FeaturesList from "../FeaturesList/FeaturesList";
import { getCamperById } from "../../redux/campers/operations";
import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";

export default function CamperCard({ camper }) {
  const [iconClass, setIconClass] = useState(css.heart);
  const [favorites, setFavorites] = useState(() => {
    const savedFavorites = localStorage.getItem("favorites");
    return savedFavorites ? JSON.parse(savedFavorites) : [];
  });

  const dispatch = useDispatch();

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  useEffect(() => {
    const isFavorite = favorites.some((fav) => fav._id === camper._id);
    setIconClass(isFavorite ? css.clickedHeart : css.heart);
  }, [favorites, camper._id]);

  const handleClick = async (id) => {
    const favCamper = await dispatch(getCamperById(id));

    setFavorites((prevFavorites) => {
      console.log(prevFavorites);
      if (!prevFavorites.some((fav) => fav._id === id)) {
        return [...prevFavorites, favCamper.payload];
      } else {
        return prevFavorites.filter((fav) => fav._id !== id);
      }
    });

    window.location.reload();
  };

  return (
    <li className={css.item}>
      <img className={css.img} src={camper.gallery[0]} alt="camper image" />
      <div className={css.div}>
        <div className={css.titlediv}>
          <h2>{camper.name}</h2>
          <div className={css.pricediv}>
            <h2>{`$${camper.price}`}</h2>
            <button
              className={css.heartbtn}
              type="button"
              onClick={() => handleClick(camper._id)}
            >
              <svg className={iconClass}>
                <use href={svg + "#icon-heart"}></use>
              </svg>
            </button>
          </div>
        </div>
        <div className={css.ratingdiv}>
          <div className={css.inratdiv}>
            <svg className={css.star}>
              <use href={svg + "#icon-star"}></use>
            </svg>
            <p
              className={css.reviews}
            >{`${camper.rating}(${camper.reviews.length} Reviews)`}</p>
          </div>
          <div className={css.inratdiv}>
            <svg className={css.mappin}>
              <use href={svg + "#icon-mappin"}></use>
            </svg>
            <p>{camper.location}</p>
          </div>
        </div>
        <p className={css.text}>{`${camper.description.slice(0, 70)}...`}</p>
        <FeaturesList camper={camper} number={4} />
        <button className={css.btn}>Show more</button>
      </div>
    </li>
  );
}
