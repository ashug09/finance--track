import axios from "axios";
import React, { useEffect } from "react";
import Mobile_add_group from "./mobile_add_group";
import { useRouter } from "next/router";

export default function Mobile_group() {
  const router = useRouter()
  const [groups, setGroups] = React.useState([]);
  const [isOpen, setIsOpen] = React.useState(false);
  useEffect(() => {
    const user = JSON.parse(sessionStorage.getItem("user"));
    console.log(user?.id);
    axios
      .post(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/user_groups/allgroups`, {
        _id: user?.id,
      })
      .then((response) => {
        console.log(response?.data.data.allGroups);
        console.log(response)
        setGroups(response?.data.data.allGroups);
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

  return (
    <div className="mb-8">
      <h1 className="mx-8 mt-4 text-3xl">Groups</h1>
      <div className="grid grid-cols-2">
        <div className="bg-[#EED3D9] w-44 m-2 p-4 rounded-2xl">
          <h1 className="text-right text-2xl capitalize">Personnel</h1>
        </div>

        {groups.map((group) => (
          <div>
            <div
              className={`${getRandomColor()} w-44 mx-2 m-2 p-4 rounded-2xl`}
              key={group._id}
            >
              <h1 className="text-right text-2xl capitalize">
                {group?.groupName}
              </h1>
              {/* <h1 className="text-xl text-right">₹4000.00</h1> */}
            </div>
          </div>
        ))}
        <button
          onClick={() => router.push("/mobile/mobile_add_group")}
          className="bg-[#EED3D9] w-44 mx-2 m-2 p-3 rounded-2xl"
        >
          <h1 className="py-2 text-xl text-right">Add Group +</h1>
        </button>
      </div>
    </div>
  );
}
