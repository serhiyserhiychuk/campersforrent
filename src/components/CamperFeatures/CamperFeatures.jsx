import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCamperById } from "../../redux/campers/operations";
import { useParams } from "react-router-dom";
import Loader from "../Loader/Loader";
// import css from "./CamperFeatures.module.css";
import {
  selectCurrentCamper,
  selectLoading,
} from "../../redux/campers/selectors";

export default function MovieCast() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);
  const currentCamper = useSelector(selectCurrentCamper);
  const { camperId } = useParams();

  useEffect(() => {
    dispatch(getCamperById);
  }, [camperId, dispatch]);
  return (
    <>
      {isLoading && <Loader />}
      <p>{currentCamper.name}</p>
    </>
  );
}
