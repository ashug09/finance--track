import React from "react";
import { useRouter } from "next/router";
import axios from "axios";

export default function Mobile_category() {
  const router = useRouter();
  const [categories, setCategories] = React.useState([]);
  const [categoryExpenses, setCategoryExpenses] = React.useState([]);
  React.useEffect(() => {
    const user = JSON.parse(sessionStorage.getItem("user"));
    console.log(user?.id);
    axios
      .post(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/user/allcategories`, {
        _id: user?.id,
      })
      .then((response) => {
        console.log(response?.data.data.allCategories);
        console.log(response);
        setCategories(response?.data.data.allCategories);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // defined an array of color options
  const colorOptions = [
    "bg-[#EED3D9]",
    "bg-[#F5E8DD]",
    "bg-[#CCD3CA]",
    "bg-[#B5C0D0]",
  ];

  // function to select a random color jo ki map function me se call hoga
  const getRandomColor = () => {
    const randomIndex = Math.floor(Math.random() * colorOptions.length);
    return colorOptions[randomIndex];
  };

  const totalAmount = (amount) => {
    const sum = amount.reduce(
      (accumulator, current) => accumulator + current,
      0
    );
    return sum;
  };

  return (
    <div className="mb-20">
      <h1 className="mx-8 mt-4 text-3xl">Categories</h1>
      <div className="grid grid-cols-2">
        <div className="bg-[#EED3D9] w-44 m-2 p-4 rounded-2xl">
          <h1 className="text-right">Food</h1>
          <h1 className="text-xl text-right">₹4000.00</h1>
        </div>
        <div className="bg-[#F5E8DD] w-44 m-2 p-4 rounded-2xl">
          <h1 className="text-right">Entertainment</h1>
          <h1 className="text-xl text-right">₹5000.00</h1>
        </div>

        <div className="bg-[#CCD3CA] w-44 m-2 p-4 rounded-2xl">
          <h1 className="text-right">Lifestyle</h1>
          <h1 className="text-xl text-right">₹2000.00</h1>
        </div>
        <div className="bg-[#B5C0D0] w-44 m-2 p-4 rounded-2xl">
          <h1 className="text-right">Wellness</h1>
          <h1 className="text-xl text-right">₹2500.00</h1>
        </div>
        {categories.map((category) => (
          <div
            onClick={() =>
              router.push({
                pathname: "/mobile/mobile_all_expenses",
                query: {
                  categoryId: category._id,
                  categoryName: category?.categoryName,
                },
              })
            }
          >
            <div
              className={`${getRandomColor()} w-44 mx-2 m-2 p-4 rounded-2xl`}
              key={category._id}
            >
              <h1 className="text-right text-2xl capitalize">
                {category?.categoryName}
              </h1>

              <h1 className="text-xl text-right">
                ₹{totalAmount(category.amount)}
              </h1>
            </div>
          </div>
        ))}
        <button
          onClick={() => router.push("/mobile/mobile_add_category")}
          className="bg-[#EED3D9] w-44 mx-2 m-2 p-3 rounded-2xl"
        >
          <h1 className="py-2 text-xl text-right">Add Category +</h1>
        </button>
      </div>
    </div>
  );
}
