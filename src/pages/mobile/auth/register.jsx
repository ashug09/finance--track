import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import RegistrationSuccessPopup from "../../popup/success";
import ErrorPopup from "@/pages/popup/error";
import { useRouter } from "next/router";

const Register = () => {
  const router = useRouter()
  const [showPopup, setShowPopup] = React.useState(false);
  const [showErrorPopup, setShowErrorPopup] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState("");
  const closePopup = () => {
    setShowPopup(false);
    setShowErrorPopup(false);
  };
  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object({
      fullName: Yup.string().required("Full name is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .required("Password is required"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password"), null], "Passwords must match")
        .required("Confirm password is required"),
    }),
    onSubmit: (values) => {
      // Handle form submission here
      axios
        .post(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/user/register`, values)
        .then((response) => {
          console.log(response.data);
          setShowPopup(true);
          router.push("/mobile/mobile_home");
          sessionStorage.setItem("user", response.data.user);
        })
        .catch((error) => {
          console.log(error);
          setErrorMessage(error.response.data.message);
          setShowErrorPopup(true);
        });
    },
  });
  return (
    <>
      <div className="min-h-screen flex-col items-center justify-center bg-gray-100">
        <h1 className="text-3xl font-bold text-center py-5">SplitWay</h1>
        <div className="bg-white shadow-md rounded px-8 py-6 w-96">
          <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
          <form onSubmit={formik.handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="fullName"
                className="block text-gray-700 font-bold mb-2"
              >
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.fullName}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
              {formik.touched.fullName && formik.errors.fullName ? (
                <div className="text-red-500 text-xs mt-1">
                  {formik.errors.fullName}
                </div>
              ) : null}
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700 font-bold mb-2"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
              {formik.touched.email && formik.errors.email ? (
                <div className="text-red-500 text-xs mt-1">
                  {formik.errors.email}
                </div>
              ) : null}
            </div>
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-gray-700 font-bold mb-2"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
              {formik.touched.password && formik.errors.password ? (
                <div className="text-red-500 text-xs mt-1">
                  {formik.errors.password}
                </div>
              ) : null}
            </div>
            <div className="mb-4">
              <label
                htmlFor="confirmPassword"
                className="block text-gray-700 font-bold mb-2"
              >
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.confirmPassword}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
              {formik.touched.confirmPassword &&
              formik.errors.confirmPassword ? (
                <div className="text-red-500 text-xs mt-1">
                  {formik.errors.confirmPassword}
                </div>
              ) : null}
            </div>
            <div className="flex items-center justify-between">
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Sign Up
              </button>
            </div>
          </form>
          {showPopup && (
            <RegistrationSuccessPopup
              message="Registration successful!"
              onClose={closePopup}
            />
          )}
          {showErrorPopup && (
            <ErrorPopup error={errorMessage} onClose={closePopup} />
          )}
        </div>
      </div>
    </>
  );
};

export default Register;
