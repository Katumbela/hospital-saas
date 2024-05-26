import {
  BsCalendar2,
} from "react-icons/bs";
import {
  FaCaretDown,
  FaPlus,
  FaRegListAlt,
  FaSearch,
} from "react-icons/fa";
import { dummyData } from "../../../domain/config/patient-data";
import { PatientTable } from "../patient-table/patient-table";

export function DoctorDashboard() {
  return (
    <div className="">
      <div className="flex py-3 px-3 justify-between">
        <div className="flex gap-4">
          <span className="flex text-sm gap-3 my-auto font-semibold">
            Today <FaCaretDown className="my-auto" />
          </span>
          <div className="border-2 my-auto cursor-pointer transition-all border-violett text-xs bg-violett/90 text-white font-semibold rounded-full px-3 py-1">
            My Appointments
          </div>
          <div className="border-2 my-auto cursor-pointer hover:shadow-md hover:bg-violett/10 transition-all border-violett text-xs   text-violett font-semibold rounded-full px-3 py-1">
            All Appointments
          </div>
          <div className="border-2 my-auto cursor-pointer hover:shadow-md hover:bg-violett/10 transition-all border-violett text-xs   text-violett font-semibold rounded-full px-3 py-1">
            Follow Up
          </div>
        </div>
        <div className="flex gap-5">
          <div className="flex my-auto border-2 rounded-md px-3 py-1">
            <input
              type="text"
              className="outline-none border-none my-auto"
              placeholder="Search Name or Mobile"
            />
            <FaSearch className="my-auto text-gray-500 text-sm " />
          </div>

          <div className="border-2 my-auto cursor-pointer hover:shadow-md hover:bg-violett/10 transition-all border-violett text-xs   text-violett font-semibold rounded-lg px-3 py-2">
            My Availability
          </div>
          <div className="border-2 flex gap-1 my-auto cursor-pointer hover:shadow-md bg-violett transition-all border-violett text-xs   text-white font-semibold rounded-lg px-3 py-2">
            <FaPlus className="text-white my-auto" />
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
      
      <PatientTable data={dummyData} />

    </div>
  );
}
