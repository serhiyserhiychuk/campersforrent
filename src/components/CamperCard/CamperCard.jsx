import css from "./CamperCard.module.css";
import svg from "../../../public/icons.svg";
import FeaturesList from "../FeaturesList/FeaturesList";
import { updateCamperById } from "../../redux/campers/operations";
import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import ShowMoreModal from "../../components/ShowMoreModal/ShowMoreModal";

export default function CamperCard({ camper }) {
  const [iconClass, setIconClass] = useState(css.heart);
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const dispatch = useDispatch();

  useEffect(() => {
    setIconClass(camper.favorite ? css.clickedHeart : css.heart);
  }, [camper]);

  const handleClick = async (id, favorite) => {
    await dispatch(updateCamperById({ id, favorite: !favorite }));
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
              onClick={() => handleClick(camper._id, camper.favorite)}
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
        <button className={css.btn} onClick={openModal}>
          Show more
        </button>
      </div>
      {isOpen && (
        <ShowMoreModal camper={camper} isOpen={isOpen} onClose={closeModal} />
      )}
    </li>
  );
}
