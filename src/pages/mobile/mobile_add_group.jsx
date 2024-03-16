import React from "react";
import { motion } from "framer-motion";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useRouter } from "next/router";
export default function Mobile_add_group() {
  const [isOpen, setIsOpen] = React.useState(true);
  const router = useRouter();
  const formik = useFormik({
    initialValues: {
      groupName: "",
    },
    validationSchema: Yup.object({
      groupName: Yup.string().required("Group name is required"),
    }),
    onSubmit: (values, { resetForm }) => {
      // Handle form submission here, e.g., send data to backend

      const user = JSON.parse(sessionStorage.getItem("user"));
      axios
        .post(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/add_group/group`, {
          groupName: values.groupName,
          user: user?.id,
        })
        .then((response) => {
          console.log(response.data);
          resetForm();
          setIsOpen(!isOpen);
          router.push("/mobile/mobile_home");
        })
        .catch((error) => {
          console.log(error);
        });
    },
  });
  return (
    <div className="">
      <motion.div
        initial={{ y: isOpen ? "100vh" : 0 }}
        animate={{ y: isOpen ? 0 : "100vh" }}
        transition={{ duration: 1.5, type: "just" }}
        className="bg-[#FAF9F6] z-50 rounded-t-3xl h-[50%] w-full absolute bottom-0 text-center"
      >
        <h2 className="text-lg font-semibold my-4">Add Group</h2>
        <form onSubmit={formik.handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="groupName"
              className="block text-sm font-medium text-gray-700"
            >
              Group Name
            </label>
            <input
              type="text"
              id="groupName"
              name="groupName"
              className={`mt-2 mx-auto block w-[50%] border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 ${
                formik.errors.groupName && formik.touched.groupName
                  ? "border-red-500"
                  : ""
              }`}
              {...formik.getFieldProps("groupName")}
            />
            {formik.errors.groupName && formik.touched.groupName && (
              <p className="text-sm text-red-500 mt-1">
                {formik.errors.groupName}
              </p>
            )}
          </div>
          <div>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 mx-2"
            >
              Add Group
            </button>
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
