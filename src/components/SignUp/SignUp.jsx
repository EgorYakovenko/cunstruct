import { ErrorMessage, Field, Form, Formik } from "formik";
import css from "./SignUp.module.css";

export default function SignUp() {
  const handleSubmit = (values) => {
    console.log(values);
  };
  return (
    <div className={css.block}>
      <Formik
        initialValues={{
          name: "",
          lastName: "",
          email: "",
          password: "",
          confirmPassword: "",
        }}
        onSubmit={handleSubmit}
      >
        <Form className={css.container}>
          <p>Создать аккаунт</p>
          <label className={css.label}>
            Имя
            <Field className={css.field} type="text" name="name" />
            <ErrorMessage component="span" name="name" />
          </label>
          <label className={css.label}>
            Фамилия
            <Field className={css.field} type="text" name="lastName" />
            <ErrorMessage component="span" name="lastName" />
          </label>
          <label className={css.label}>
            Почта
            <Field className={css.field} type="email" name="email" />
            <ErrorMessage component="span" name="email" />
          </label>
          <label className={css.label}>
            Пароль
            <Field className={css.field} type="password" name="password" />
            <ErrorMessage component="span" name="password" />
          </label>
          <label className={css.label}>
            Подтвердите пароль
            <Field
              className={css.field}
              type="password"
              name="confirmPassword"
            />
            <ErrorMessage component="span" name="confirmPassword" />
          </label>
          <button type="submit">Создать</button>
        </Form>
      </Formik>
    </div>
  );
}
