import { Formik, Form, Field } from "formik";
import css from "./FilterForm.module.css";
import svg from "../../../public/icons.svg";

export default function FilterForm({ onSubmit }) {
  const equipment = [
    { id: "1", name: "2 adults", value: "2 adults", icon: "#icon-adults" },
    { id: "2", name: "Automatic", value: "Automatic", icon: "#icon-auto" },
    { id: "3", name: "AC", value: "AC", icon: "#icon-wind" },
    { id: "4", name: "Petrol", value: "Petrol", icon: "#icon-petrol" },
    { id: "5", name: "Kitchen", value: "kitchen", icon: "#icon-kitchen" },
    { id: "6", name: "2 beds", value: "beds", icon: "#icon-beds" },
    {
      id: "7",
      name: "Conditioner",
      value: "airConditioner",
      icon: "#icon-airConditioner",
    },
    { id: "8", name: "CD", value: "CD", icon: "#icon-CD" },
    { id: "9", name: "Radio", value: "radio", icon: "#icon-radio" },
    { id: "10", name: "2 hobs", value: "hob", icon: "#icon-hob" },
    { id: "11", name: "Toilet", value: "toilet", icon: "#icon-toilet" },
    { id: "12", name: "Shower", value: "shower", icon: "#icon-shower" },
    { id: "13", name: "Freezer", value: "freezer", icon: "#icon-freezer" },
    { id: "14", name: "Gas", value: "gas", icon: "#icon-gas" },
    { id: "15", name: "Water", value: "water", icon: "#icon-water" },
    {
      id: "16",
      name: "Microwave",
      value: "microwave",
      icon: "#icon-microwave",
    },
    { id: "17", name: "TV", value: "TV", icon: "#icon-TV" },
  ];

  const forms = [
    { id: "21", name: "Van", value: "panelTruck", icon: "#icon-van" },
    {
      id: "22",
      name: "Fully Integrated",
      value: "fullyIntegrated",
      icon: "#icon-fullyint",
    },
    { id: "23", name: "Alcove", value: "alcove", icon: "#icon-camper" },
  ];

  return (
    <Formik
      initialValues={{ location: "", details: [], form: "" }}
      onSubmit={onSubmit}
    >
      <Form className={css.form} autoComplete="off">
        <label className={css.label} htmlFor="location">
          Location
        </label>
        <svg className={css.icon}>
          <use href={svg + "#icon-mappin"}></use>
        </svg>
        <Field className={css.input} type="text" name="location" />
        <label className={css.label} htmlFor="details">
          Filters
        </label>
        <h3 className={css.title}>Vehicle Equipment</h3>
        <ul className={css.list}>
          {equipment.map((detail) => (
            <li className={css.item} key={detail.id}>
              <Field
                className={css.box}
                type="checkbox"
                name="details"
                value={detail.value}
                id={detail.id}
              />
              <label htmlFor={detail.id} className={css.checkLabel}>
                <svg className={css.checkIcon}>
                  <use href={svg + detail.icon}></use>
                </svg>
                {detail.name}
              </label>
            </li>
          ))}
        </ul>
        <h3 className={css.title}>Vehicle type</h3>
        <ul className={css.list}>
          {forms.map((form) => (
            <li className={css.item} key={form.id}>
              <Field
                className={css.radio}
                type="radio"
                name="form"
                value={form.value}
                id={form.id}
              />
              <label htmlFor={form.id} className={css.radioLabel}>
                <svg className={css.checkIcon}>
                  <use href={svg + form.icon}></use>
                </svg>
                {form.name}
              </label>
            </li>
          ))}
        </ul>
        <button className={css.btn}>Search</button>
      </Form>
    </Formik>
  );
}
