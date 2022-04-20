import CustomerCard from "components/customerCard";
import ReservationCard from "components/reservationCard";
import { ReducerType } from "core/modules/rootReducer";
import { addReservation } from "core/modules/Slices/reservationSlice";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import useReservation from "./reservation.service";
export default function Reservation() {
  const {
    data: { reservations, customers },
    state: {
      handleAddReservations,
      reservationNameInput,
      setReservationNameInput,
    },
  } = useReservation();
  return (
    <div className="flex">
      <div className="h-screen p-4 border w-72">
        <p className="text-2xl font-semibold">Reservation</p>
        <div className="mt-8 h-4/5">
          {reservations.value.map((name: any, index: number) => {
            return <ReservationCard key={index} name={name} index={index} />;
          })}
        </div>
        <input
          value={reservationNameInput}
          onChange={(e) => setReservationNameInput(e.target.value)}
          type="text"
          id="create-account-pseudo"
          className="w-full px-4 py-2 mb-2 mr-2 text-base text-gray-700 placeholder-gray-100 bg-white border border-transparent border-gray-100 rounded-lg shadow-sm appearance-none focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
          name="pseudo"
        />
        <button
          onClick={() => {
            handleAddReservations();
          }}
          type="button"
          className="w-full px-3 py-3 mb-1 text-sm text-indigo-500 bg-white rounded-lg shadow hover:bg-gray-100"
        >
          예약하기1
        </button>
      </div>
      <div className="w-full h-screen p-4">
        {customers.value.map((customer: any) => {
          return (
            <CustomerCard
              key={customer.id}
              id={customer.id}
              name={customer.name}
              food={customer.food}
            />
          );
        })}
      </div>
    </div>
  );
}
