import { useEffect, useState } from "react";
import FilterForm from "../../components/FilterForm/FilterForm";
import CamperList from "../../components/CamperList/CamperList";
import { getAllCampers } from "../../redux/campers/operations";
import { useSelector, useDispatch } from "react-redux";
import { selectCampers, selectLoading } from "../../redux/campers/selectors";
import Navigation from "../../components/Navigation/Navigation";
import Loader from "../../components/Loader/Loader";
import css from "./FavoritesPage.module.css";

export default function MoviesPage() {
  const [filters, setFilters] = useState({
    location: "",
    details: [],
    form: "",
  });
  const onSubmit = (values, actions) => {
    const filters = {
      location: values.location,
      details: values.details,
      form: values.form,
    };
    actions.resetForm();
    setFilters(filters);
  };

  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);
  const campers = useSelector(selectCampers);

  const campersToRender = campers.filter((camper) => {
    return camper.favorite === true;
  });

  useEffect(() => {
    dispatch(getAllCampers());
  }, [dispatch]);

  return (
    <>
      <Navigation />
      <div className={css.div}>
        <FilterForm onSubmit={onSubmit} />
        {isLoading && <Loader />}
        {filters &&
          (campersToRender.length !== 0 ? (
            <CamperList campers={campersToRender} filters={filters} />
          ) : (
            <p className={css.text}>
              It appears that you haven`t added any campers to your favorites
              yet. To get started, you can add campers that you like to your
              favorites for easier access in the future.
            </p>
          ))}
      </div>
    </>
  );
}
