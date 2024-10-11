import axios from "axios";
import { useFormik } from "formik";
import * as Yup from "yup";

const Food = () => {
  let url = "http://localhost:5010/info/food";
  const formik = useFormik({
    initialValues: {
      name: "",
      price: 0,
      image: "",
    },
    onSubmit: (values) => {
      console.log(values);
      const formData = new FormData();
      formData.append("name", values.name);
      formData.append("price", values.price);
      formData.append("image", values.image);
      axios.post(url, formData).then
    },
    validationSchema: Yup.object({
      name: Yup.string().required("please enter the name"),
      price: Yup.number().required("please enter the price"),
      image: Yup.string().required("please enter the image"),
    }),
  });
  return (
    <>
      <form action="" onSubmit={formik.handleSubmit} className="center">
        <input
          type="text"
          name="name"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className={
            formik.touched.name && formik.errors.name
              ? "form-control is-invalid w-50 my-2"
              : " form form-control my-2 w-50"
          }
        />
        <small>{formik.touched.name && formik.errors.name}</small>
        <input
          type="number"
          name="price"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className={
            formik.touched.price && formik.errors.price
              ? "form-control is-invalid w-50 my-2"
              : " form form-control my-2 w-50"
          }
        />
        <small>{formik.touched.price && formik.errors.price}</small>
        <input
          type="file"
          name="image"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className={
            formik.touched.image && formik.errors.image
              ? "form-control is-invalid w-50 my-2"
              : " form form-control my-2 w-50"
          }
        />
        <small>{formik.touched.image && formik.errors.image}</small>
        <button type="submit"> Upload</button>
      </form>
    </>
  );
};

export default Food;
