import { addReservation } from "core/modules/Slices/reservationSlice";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function useReservation() {
  const [reservationNameInput, setReservationNameInput] = useState("");
  const reservations = useSelector((state: any) => state.reservationData);
  const customers = useSelector((state: any) => state.customerData);
  const dispatch = useDispatch();
  const handleAddReservations = () => {
    if (!reservationNameInput) return;
    dispatch(addReservation(reservationNameInput));
    setReservationNameInput("");
  };
  return {
    data: {
      reservations,
      customers,
    },
    state: {
      handleAddReservations,
      reservationNameInput,
      setReservationNameInput,
    },
  };
}
