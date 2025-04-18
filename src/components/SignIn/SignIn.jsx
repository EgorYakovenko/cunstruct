import { ErrorMessage, Field, Form, Formik } from "formik";
import css from "./SignIn.module.css";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

export default function SignIn() {
  const handleSubmit = (values) => {
    console.log(values);
  };
  return (
    <div className={css.block}>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        onSubmit={handleSubmit}
      >
        <Form className={css.container}>
          <p className={css.title}>Войти</p>
          <p className={css.link}>
            Если у вас нет учетной записи, зарегистрируйтесь
          </p>
          <p className={css.link}>Вы можете зарегистрироваться здесь!</p>
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

          <button className={css.button} type="submit">
            Войти
          </button>
        </Form>
      </Formik>
    </div>
  );
}
