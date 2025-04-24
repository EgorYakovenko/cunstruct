import { ErrorMessage, Field, Form, Formik } from "formik";

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
        <Form>
          <label>
            Название объекта
            <Field type="text" name="objectName" />
            <ErrorMessage component="span" name="objectName" />
          </label>
          <label>
            Имя исполнителя
            <Field type="text" name="customerName" />
            <ErrorMessage component="span" name="customerName" />
          </label>
          <label>
            Адресс
            <Field type="text" name="adress" />
            <ErrorMessage component="span" name="adress" />
          </label>
          <label>
            Дата начала
            <Field type="date" name="startDate" />
            <ErrorMessage component="span" name="startDate" />
          </label>
          <label>
            Дата окончания
            <Field type="date" name="endDate" />
            <ErrorMessage component="span" name="endDate" />
          </label>
          <label>
            Описание
            <Field
              type="text"
              name="description"
              as="textarea"
              id="message"
              rows="10"
              cols="50"
              placeholder="Введите текст"
            />
            <ErrorMessage component="span" name="description" />
          </label>
          <button type="submit"></button>
        </Form>
      </Formik>
    </>
  );
}
