import { addFoodToCustomer } from "core/modules/Slices/customerSlice";
import { useState } from "react";
import { useDispatch } from "react-redux";

interface CustomerCardType {
  id: string;
  name: string;
  food: string[];
}
export default function CustomerCard({ id, name, food }: CustomerCardType) {
  const dispatch = useDispatch();
  const [customerFoodInput, setCustomerFoodInput] = useState("");

  return (
    <div className="p-4 text-base text-gray-700 border border-transparent border-gray-100 rounded-lg shadow-sm">
      <p className="flex font-bold">{name}</p>
      <div className="flex">
        {food.map((f) => {
          return <p className="p-2">{f}</p>;
        })}
      </div>

      <div className="flex justify-end w-full ">
        <input
          onChange={(e) => {
            setCustomerFoodInput(e.target.value);
          }}
          value={customerFoodInput}
          type="text"
          id="create-account-pseudo"
          className="px-4 py-2 mr-2 text-base text-gray-700 placeholder-gray-100 bg-white border border-transparent border-gray-100 rounded-lg shadow-sm appearance-none w-28 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
          name="pseudo"
        />
        <button
          onClick={() => {
            if (!customerFoodInput) return;
            dispatch(addFoodToCustomer({ id, food: customerFoodInput }));
            setCustomerFoodInput("");
          }}
          type="button"
          className="px-3 py-3 mb-1 text-sm text-indigo-500 bg-white rounded-lg shadow w-28 hover:bg-gray-100"
        >
          주문하기
        </button>
      </div>
    </div>
  );
}
