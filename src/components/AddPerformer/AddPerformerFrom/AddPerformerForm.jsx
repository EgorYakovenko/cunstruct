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
          description: "",
          object: "",
        }}
        onSubmit={handleSubmit}
      >
        <Form className={css.inputWrapper}>
          <label className={css.label}>
            Имя
            <Field className={css.input} type="text" name="fullName" />
            <ErrorMessage component="span" name="fullName" />
          </label>
          <label className={css.label}>
            Профессия
            <Field className={css.input} type="text" name="profession" />
            <ErrorMessage component="span" name="profession" />
          </label>
          <label className={css.label}>
            Услуги
            <Field className={css.input} type="text" name="services" />
            <ErrorMessage component="span" name="services" />
          </label>
          <label className={css.label}>
            Телефон
            <Field className={css.input} type="text" name="phone" />
            <ErrorMessage component="span" name="phone" />
          </label>
          <label className={css.label}>
            Адрес
            <Field className={css.input} type="text" name="adress" />
            <ErrorMessage component="span" name="adress" />
          </label>
          <label className={css.label}>
            Прикрепить к объекту
            <Field className={css.input} as="select" name="object">
              <option value="">-- Выбрать --</option>
              <option value="object1">object1</option>
              <option value="object2">object2</option>
              <option value="object3">object3</option>
            </Field>
            <ErrorMessage component="span" name="object" />
          </label>
          <label className={css.label}>
            Описание
            <Field
              className={css.input}
              type="text"
              name="description"
              as="textarea"
              id="message"
              rows="5"
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
