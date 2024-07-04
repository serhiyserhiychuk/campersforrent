import { useEffect, useState } from "react";
import FilterForm from "../../components/FilterForm/FilterForm";
import CamperList from "../../components/CamperList/CamperList";
import { getAllCampers } from "../../redux/campers/operations";
import { useSelector, useDispatch } from "react-redux";
import { selectCampers, selectLoading } from "../../redux/campers/selectors";
import Loader from "../../components/Loader/Loader";

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
      <FilterForm onSubmit={onSubmit} />
      {isLoading && <Loader />}
      {filters && <CamperList campers={campers} />}
    </>
  );
}
