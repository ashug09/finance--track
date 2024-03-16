import axios from "axios";
import { useRouter } from "next/router";
import React from "react";
import dateFormat, { masks } from "dateformat";

export default function Mobile_all_expenses() {
  const router = useRouter();
  const [expenses, setExpenses] = React.useState([]);
  const { categoryId, categoryName } = router.query;
  React.useEffect(() => {
    axios
      .post(
        `${process.env.NEXT_PUBLIC_API_URL}/api/v1/all_expenses_category/all_expenses`,
        {
          _id: categoryId,
        }
      )
      .then((response) => {
        setExpenses(response.data?.data.categoryAllExpenses);
        console.log(response.data?.data.categoryAllExpenses);
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <>
    <h1 className="text-3xl ml-5 my-5 capitalize">{categoryName} Expenses</h1>
      {expenses.map((expense) => (
        <div className="bg-blue-100 p-5 rounded-xl mx-4 my-2 flex shadow-md">
          <div>
            <h1 className="capitalize text-xl">{expense.expenseName}</h1>
            <h1>{dateFormat(expense.updatedAt, "fullDate")}</h1>
          </div>
          <div className="ml-auto text-xl my-auto">
            <h1>₹ {expense.amount}</h1>
          </div>
        </div>
      ))}


      <div className="bg-blue-100 p-5 rounded-xl mx-4 my-2 flex shadow-md">
        <div>
          <h1 className="capitalize text-xl">uncle chips</h1>
          <h1>12 march 2024</h1>
        </div>
        <div className="ml-auto text-xl my-auto">
          <h1>₹ 200</h1>
        </div>
      </div>

      <div className="bg-blue-100 p-5 rounded-xl mx-4 my-2 flex shadow-md">
        <div>
          <h1 className="capitalize text-xl">uncle chips</h1>
          <h1>12 march 2024</h1>
        </div>
        <div className="ml-auto text-xl my-auto">
          <h1>₹ 200</h1>
        </div>
      </div>
    </>
  );
}
