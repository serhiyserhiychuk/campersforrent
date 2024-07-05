import { useEffect, useState } from "react";
import FilterForm from "../../components/FilterForm/FilterForm";
import CamperList from "../../components/CamperList/CamperList";
import { getAllCampers } from "../../redux/campers/operations";
import { useSelector, useDispatch } from "react-redux";
import { selectCampers, selectLoading } from "../../redux/campers/selectors";
import Navigation from "../../components/Navigation/Navigation";
import Loader from "../../components/Loader/Loader";
import css from "./CatalogPage.module.css";

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

  useEffect(() => {
    dispatch(getAllCampers());
  }, [dispatch]);

  return (
    <>
      <Navigation />
      <div className={css.div}>
        <FilterForm onSubmit={onSubmit} />
        {isLoading && <Loader />}
        {filters && <CamperList campers={campers} filters={filters} />}
      </div>
    </>
  );
}
