import { ErrorMessage, Field, Form, Formik } from "formik";
import css from "./AddProjectFormData.module.css";

export default function AddProjectFormData() {
  const handleSubmit = (values) => {
    console.log(values);
  };

  return (
    <>
      <Formik
        initialValues={{
          objectName: "",
          customerName: "",
          adress: "",
          startDate: "",
          endDate: "",
          description: "",
        }}
        onSubmit={handleSubmit}
      >
        <Form className={css.inputWrapper}>
          <label className={css.label}>
            Название объекта
            <Field className={css.input} type="text" name="objectName" />
            <ErrorMessage component="span" name="objectName" />
          </label>
          <label>
            Имя исполнителя
            <Field className={css.input} type="text" name="customerName" />
            <ErrorMessage component="span" name="customerName" />
          </label>
          <label>
            Адресс
            <Field className={css.input} type="text" name="adress" />
            <ErrorMessage component="span" name="adress" />
          </label>
          <label>
            Дата начала
            <Field className={css.input} type="date" name="startDate" />
            <ErrorMessage component="span" name="startDate" />
          </label>
          <label>
            Дата окончания
            <Field className={css.input} type="date" name="endDate" />
            <ErrorMessage component="span" name="endDate" />
          </label>
          <label>
            Описание
            <Field
              className={css.input}
              type="text"
              name="description"
              as="textarea"
              id="message"
              rows="10"
              cols="50"
            />
            <ErrorMessage component="span" name="description" />
          </label>
          <button type="submit">Сохранить</button>
        </Form>
      </Formik>
    </>
  );
}
