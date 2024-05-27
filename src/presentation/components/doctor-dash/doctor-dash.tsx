import { BsCalendar2 } from "react-icons/bs";
import { FaAngleDown, FaPlus, FaRegListAlt, FaSearch } from "react-icons/fa";
import { dummyData } from "../../../domain/config/patient-data";
import { PatientTable } from "../patient-table/patient-table";
export type DRProp = {
  setSelectedItem: (state: string) => void;
};
export function DoctorDashboard({ setSelectedItem }: DRProp) {
  return (
    <div className="bg-white">
      <div className="flex justify-between px-3 py-3">
        <div className="flex gap-4">
          <span className="flex gap-3 my-auto text-sm font-semibold">
            Today <FaAngleDown className="my-auto" />
          </span>
          <div className="px-3 py-1 my-auto text-xs font-semibold text-white transition-all border-2 rounded-full cursor-pointer border-violett bg-violett/90">
            My Appointments
          </div>
          <div className="px-3 py-1 my-auto text-xs font-semibold transition-all border-2 rounded-full cursor-pointer hover:shadow-md hover:bg-violett/10 border-violett text-violett">
            All Appointments
          </div>
          <div className="px-3 py-1 my-auto text-xs font-semibold transition-all border-2 rounded-full cursor-pointer hover:shadow-md hover:bg-violett/10 border-violett text-violett">
            Follow Up
          </div>
        </div>
        <div className="flex gap-5">
          <div className="flex px-3 py-1 my-auto border-2 rounded-md">
            <input
              type="text"
              className="my-auto border-none outline-none"
              placeholder="Search Name or Mobile"
            />
            <FaSearch className="my-auto text-sm text-gray-500 " />
          </div>

          <div className="px-3 py-2 my-auto text-xs font-semibold transition-all border-2 rounded-lg cursor-pointer hover:shadow-md hover:bg-violett/10 border-violett text-violett">
            My Availability
          </div>
          <div className="flex gap-1 px-3 py-2 my-auto text-xs font-semibold text-white transition-all border-2 rounded-lg cursor-pointer hover:shadow-md bg-violett border-violett">
            <FaPlus className="my-auto text-white" />
            <span className="my-auto">Add Appointment</span>
          </div>
          <div className="flex gap-2">
            <span className={"text-xs font-semibold my-auto"}>View as</span>
            <BsCalendar2
              title="Quadrados"
              className="my-auto cursor-pointer hover:text-violett text-md"
            />
            <FaRegListAlt
              title="Listas"
              className="my-auto cursor-pointer hover:text-violett text-md"
            />
          </div>
        </div>
      </div>
      <br />

      <PatientTable setSelectedItem={setSelectedItem} data={dummyData} />
    </div>
  );
}
