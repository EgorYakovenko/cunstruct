import { ErrorMessage, Field, Form, Formik } from "formik";
import css from "../../AddProject/AddProjectFormData/AddProjectFormData.module.css";

export default function AddPerformerForm() {
  const handleSubmit = (values) => {
    console.log(values);
  };
  return (
    <>
      <Formik
        initialValues={{
          fullName: "",
          profession: "",
          services: "",
          phone: "",
          adress: "",
        }}
        onSubmit={handleSubmit}
      >
        <Form className={css.inputWrapper}>
          <label lassName={css.label}>
            Имя
            <Field className={css.input} type="text" name="fullName" />
            <ErrorMessage component="span" name="fullName" />
          </label>
          <label lassName={css.label}>
            Профессия
            <Field className={css.input} type="text" name="profession" />
            <ErrorMessage component="span" name="profession" />
          </label>
          <label lassName={css.label}>
            Услуги
            <Field className={css.input} type="text" name="services" />
            <ErrorMessage component="span" name="services" />
          </label>
          <label lassName={css.label}>
            Телефон
            <Field className={css.input} type="text" name="phone" />
            <ErrorMessage component="span" name="phone" />
          </label>
          <label lassName={css.label}>
            Адрес
            <Field className={css.input} type="text" name="adress" />
            <ErrorMessage component="span" name="adress" />
          </label>
          <button></button>
        </Form>
      </Formik>
    </>
  );
}
