import Modal from "react-modal";
import css from "./ShowMoreModal.module.css";
import svg from "../../../public/icons.svg";
import { useState } from "react";
import CamperFeatures from "../CamperFeatures/CamperFeatures";
import CamperReviews from "../CamperReviews/CamperReviews";
import BookingForm from "../BookingForm/BookingForm";

Modal.setAppElement("#root");

export default function ShowMoreModal({ camper, isOpen, onClose }) {
  const [activeTab, setActiveTab] = useState("Features");

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      className={css.modal}
      overlayClassName={css.overlay}
    >
      <button className={css.closebtn} type="button" onClick={onClose}>
        <svg className={css.closeicon}>
          <use href={svg + "#icon-close"}></use>
        </svg>
      </button>
      <h2>{camper.name}</h2>
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
      <h2 className={css.price}>{`$${camper.price}`}</h2>
      <ul className={css.imglist}>
        {camper.gallery.map((image, index) => (
          <li key={index}>
            <img className={css.img} src={image} alt="camper image" />
          </li>
        ))}
      </ul>
      <p className={css.text}>{camper.description}</p>
      <ul className={css.titlelist}>
        <li>
          <h3
            className={activeTab === "Features" ? css.active : ""}
            onClick={() => setActiveTab("Features")}
          >
            Features
          </h3>
        </li>
        <li>
          <h3
            className={activeTab === "Reviews" ? css.active : ""}
            onClick={() => setActiveTab("Reviews")}
          >
            Reviews
          </h3>
        </li>
      </ul>
      <div className={css.tabdiv}>
        {activeTab === "Features" ? (
          <CamperFeatures camper={camper} />
        ) : (
          <CamperReviews camper={camper} />
        )}
        <BookingForm onClose={onClose} />
      </div>
    </Modal>
  );
}
