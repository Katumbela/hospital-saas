import {
  BsCalendar2,
  BsCaretDown,
  BsFilePerson,
  BsPersonDash,
  BsThreeDotsVertical,
} from "react-icons/bs";
import {
  FaCaretDown,
  FaHome,
  FaPlus,
  FaRegListAlt,
  FaSearch,
} from "react-icons/fa";

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
      <table className="  table-fixed w-full">
        <thead className="">
          <tr className="px-3 bg-violett/10 ">
            <th className="py-2">NO #</th>
            <th className="py-3">Patient Details</th>
            <th className="py-3">DCB</th>
            <th className="py-3">Order</th>
            <th className="py-3">Case</th>
            <th className="py-3">Category</th>
            <th className="py-3">Referre By</th>
            <th className="py-3">Time</th>
            <th className="py-3">Status</th>
            <th className="py-3">Action</th>
          </tr>
        </thead>
        <tbody className="">
          <tr className="border-b px-3   ">
            <td className="py-3">01</td>
            <td className="py-3 flex gap-4">
              <FaHome className="text-xl text-purple-600 my-auto" />
              <h1 className="flex flex-col">
                <span className="text-violett font-semibold">Risabh Sahu</span>
                <span className="text-xs">02344</span>
                <span className="text-purple-600 font-extrabold">my Tatva</span>
              </h1>
            </td>

            <td className="py-3 flex flex-col">
              <span>22/05/2024</span> <span className="text-sm">23 days</span>
            </td>
            <td className="py-3">New</td>
            <td className="py-3"></td>
            <td className="py-3"></td>
            <td className="py-3">03:20 PM</td>

            <td className="py-3">
              <div className="bg-violett my-auto justify-center py-1 px-3 font-semibold text-white flex gap-2 rounded-full mx-auto text-center">
                <span className="my-auto">Queue</span>
                <BsCaretDown className="mt-1.5 text-white " />
              </div>
            </td>

            <td className="py-3">
              <div className="border-2 flex gap-2 my-auto cursor-pointer hover:shadow-md hover:bg-violett/10 transition-all border-violett text-xs   text-violett font-semibold rounded-lg px-2 py-1">
                <BsFilePerson className="text-xl" />
                <span className="my-auto">Start consultation</span>
              </div>
            </td>

            <td className="py-3">
              <BsThreeDotsVertical className="text-2xl" />
            </td>
          </tr>
        </tbody>
      </table>
      doctor dashboard <p>Welcome Dr. katombela</p>
    </div>
  );
}
