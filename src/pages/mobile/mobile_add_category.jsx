import { useFormik } from "formik";
import { useRouter } from "next/router";
import React from "react";
import * as Yup from "yup";
import { motion } from "framer-motion";
import axios from "axios";
import toast from "react-hot-toast";
import Spinner from "../loader/spinner";

export default function Mobile_add_category() {
  const [isOpen, setIsOpen] = React.useState(true);
  const [visible, setVisible] = React.useState(false);
  const router = useRouter();
  const formik = useFormik({
    initialValues: {
      categoryName: "",
    },
    validationSchema: Yup.object({
      categoryName: Yup.string().required("Category name is required"),
    }),
    onSubmit: (values, { resetForm }) => {
      // Handle form submission here, e.g., send data to backend
      setVisible(true);
      const user = JSON.parse(sessionStorage.getItem("user"));
      axios
        .post(
          `${process.env.NEXT_PUBLIC_API_URL}/api/v1/new_category/category`,
          {
            categoryName: values.categoryName,
            user: user?.id,
          }
        )
        .then((response) => {
          console.log(response.data);
          toast.success(response.data.message);
          resetForm();
          setVisible(false);
          setIsOpen(!isOpen);
          router.push("/mobile/mobile_home");
        })
        .catch((error) => {
          console.log(error.message);
          toast.error(error.message);
        });
    },
  });
  return (
    <div>
      <motion.div
        initial={{ y: isOpen ? "100vh" : 0 }}
        animate={{ y: isOpen ? 0 : "100vh" }}
        transition={{ duration: 1.5, type: "just" }}
        className="bg-[#FAF9F6] z-50 rounded-t-3xl h-[50%] w-full absolute bottom-0 text-center"
      >
        <h2 className="text-lg font-semibold my-4">Add Category</h2>
        <form onSubmit={formik.handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="categoryName"
              className="block text-sm font-medium text-gray-700"
            >
              Category Name
            </label>
            <input
              type="text"
              id="categoryName"
              name="categoryName"
              className={`mt-2 mx-auto block w-[50%] border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 ${
                formik.errors.categoryName && formik.touched.categoryName
                  ? "border-red-500"
                  : ""
              }`}
              {...formik.getFieldProps("categoryName")}
            />
            {formik.errors.categoryName && formik.touched.categoryName && (
              <p className="text-sm text-red-500 mt-1">
                {formik.errors.categoryName}
              </p>
            )}
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 mx-2"
            >
              Submit
            </button>

            <Spinner visible={visible} />

            <button
              onClick={() => {
                setIsOpen(!isOpen);
                router.push("/mobile/mobile_home");
              }}
              className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 mx-2"
            >
              Cancel
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  );
}
