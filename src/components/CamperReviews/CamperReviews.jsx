import css from "./CamperReviews.module.css";
import svg from "../../../public/icons.svg";

export default function CamperReviews({ camper }) {
  return (
    <>
      {camper.reviews.length === 0 ? (
        <p>We don`t have any reviews for this movie.</p>
      ) : (
        <ul className={css.list}>
          {camper.reviews.map((review, index) => (
            <li className={css.item} key={index}>
              <div className={css.ratingdiv}>
                <span className={css.letter}>
                  {review.reviewer_name[0].toUpperCase()}
                </span>
                <div>
                  <h4>{review.reviewer_name}</h4>
                  <ul className={css.starlist}>
                    {[...Array(5)].map((_, index) => (
                      <li key={index}>
                        <svg
                          key={index}
                          className={
                            index < review.reviewer_rating
                              ? css.filledStar
                              : css.emptyStar
                          }
                          width="20"
                          height="20"
                        >
                          <use href={svg + "#icon-star"}></use>
                        </svg>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <p className={css.text}>{review.comment}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
