import { addCustomer } from "core/modules/Slices/customerSlice";
import { removeReservation } from "core/modules/Slices/reservationSlice";
import { useDispatch } from "react-redux";
import { v4 as uuid } from "uuid";

interface ReservationCardTypes {
  name: string;
  index: number;
}
export default function ReservationCard({ name, index }: ReservationCardTypes) {
  const dispatch = useDispatch();
  return (
    <div
      className="p-2 py-2 text-base text-gray-700 border border-transparent border-gray-100 rounded-lg shadow-sm mb-1"
      onClick={() => {
        // dispatch(removeReservation(index));
        dispatch(addCustomer({ id: uuid(), name, food: [] }));
      }}
    >
      {name}
    </div>
  );
}
