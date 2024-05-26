// PatientTable.tsx

import React, { useState } from "react";
import { FaHome, FaFilter } from "react-icons/fa";
import { BsCaretDown, BsFilePerson, BsThreeDotsVertical } from "react-icons/bs";
import { IPatientData } from "../../../interfaces/patient/patient";

interface PatientTableProps {
  data: IPatientData[];
}

const getStatusClass = (status: string) => {
  switch (status.toLowerCase()) {
    case "queue":
      return "bg-violett text-white";
    case "in progress":
      return "status-in-progress";
    case "completed":
      return "status-completed";
    case "cancelled":
      return "status-cancelled";
    case "pending":
      return "bg-gray-300";
    default:
      return "";
  }
};

export const PatientTable: React.FC<PatientTableProps> = ({ data }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [entriesPerPage, setEntriesPerPage] = useState(5);

  const indexOfLastEntry = currentPage * entriesPerPage;
  const indexOfFirstEntry = indexOfLastEntry - entriesPerPage;
  const currentEntries = data.slice(indexOfFirstEntry, indexOfLastEntry);

  const totalPages = Math.ceil(data.length / entriesPerPage);

  const handleChangeEntriesPerPage = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setEntriesPerPage(Number(e.target.value));
    setCurrentPage(1); // Reset to first page whenever entries per page changes
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <table className="text-start text-sm text-surface table-fixed w-full">
        <thead className="border-b border-neutral-200 font-medium dark:border-white/10">
          <tr className="bg-violett/10">
            <th scope="col" className="px-2 w-20 py-4">
              NO #
            </th>
            <th scope="col" className="px-2 text-start w-[11rem] py-2">
              Patient Details
            </th>
            <th scope="col" className="px-2 py-2 w-[6rem] text-start">
              DCB
            </th>
            <th scope="col" className="px-2 w-[4.5rem] py-2 text-start">
              Gender
            </th>
            <th
              scope="col"
              className="px-2 text-violett w-[6.6rem] py-2 text-start"
            >
              <span className="flex gap-2">
                <span>Case</span>
                <div className="border border-violett rounded-sm p-[2.5px] my-auto">
                  <FaFilter className="text-[8px]" />
                </div>
              </span>
            </th>
            <th scope="col" className="px-2 w-[8.5rem] py-2 text-start">
              Category
            </th>
            <th scope="col" className="px-2 w-[7rem] py-2 text-start">
              Referred By
            </th>
            <th scope="col" className="px-2 w-[6rem] py-2 text-start">
              Time
            </th>
            <th scope="col" className="px-2 w-[10rem] py-2 text-start">
              <span className="flex gap-2">
                <span>Status</span>
                <div className="border border-violett rounded-sm p-[2.5px] my-auto">
                  <FaFilter className="text-[8px]" />
                </div>
              </span>
            </th>
            <th scope="col" className="px-2 py-2 text-start">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {currentEntries.map((row, index) => (
            <tr key={index} className="border-b hover:bg-slate-100/50 min-full border-gray-300">
              <td
                scope="col"
                className="whitespace-nowrap px-6 py-4 font-bold text-md"
              >
                {row.no}
              </td>
              <td className="whitespace-nowrap w-[8rem] text-start px-2 py-4">
                <span className="flex gap-2 items-center">
                  <FaHome className="text-xl text-purple-600" />
                  <span className="flex flex-col">
                    <span className="text-violett font-semibold">
                      {row.name}
                    </span>
                    <span className="text-xs">{row.id}</span>
                    <span className="text-purple-600 font-extrabold">
                      {row.affiliation}
                    </span>
                  </span>
                </span>
              </td>
              <td className="whitespace-nowrap text-start w-[5rem] px-2 py-4">
                <span className="flex flex-col">
                  <span>{row.dcb}</span>
                  <span className="text-sm">{row.days}</span>
                </span>
              </td>
              <td className="whitespace-nowrap px-2 py-4">{row.gender}</td>
              <td className="whitespace-nowrap px-2 py-4">{row.case}</td>
              <td className="whitespace-nowrap px-2 py-4">{row.category}</td>
              <td className="whitespace-nowrap px-2 py-4">{row.referredBy}</td>
              <td className="whitespace-nowrap px-2 py-4">{row.time}</td>
              <td className="whitespace-nowrap px-2 py-4">
                <span
                  className={`${getStatusClass(
                    row.status
                  )} w-[6.5rem] py-1 px-4 font-semibold flex gap-2 rounded-full text-center justify-center`}
                >
                  <span className="my-auto">{row.status}</span>
                  <BsCaretDown className="mt-1" />
                </span>
              </td>
              <td className="whitespace-nowrap px-2 py-4">
                <div className="flex gap-8">
                  <span className="border-2 w-[9rem] flex gap-2 items-center cursor-pointer hover:shadow-md hover:bg-violett/10 transition-all border-violett text-xs text-violett font-semibold rounded-lg px-2 py-1">
                    <BsFilePerson className="text-xl" />
                    <span className="my-auto">Start consultation</span>
                  </span>
                  <BsThreeDotsVertical title="Opções" className="cursor-pointer text-2xl my-auto" />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-between items-center mt-4 px-4">
        <div className="flex justify-between items-center mb-4">
          <span className="me-4">
            Showing {indexOfFirstEntry + 1} to{" "}
            {Math.min(indexOfLastEntry, data.length)} of {data.length} entries{" "}
          </span>
          <select
            className="bg-violett/20 px-2 py-2 rounded-md active:bg-violett/70 transition-all "
            onChange={handleChangeEntriesPerPage}
            value={entriesPerPage}
          >
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={15}>15</option>
            <option value={20}>20</option>
          </select>
        </div>
        <div className="flex  justify-between items-center mb-4">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-4 text-xs py-2 active:bg-violett/80 active:text-white bg-gray-200 rounded-lg disabled:opacity-50"
          >
            Previous
          </button>
          {/*

        <span>Page {currentPage} of {totalPages}</span>
            */}
          <span className="px-3  py-2 rounded-md mx-2 bg-violett/90 text-white font-bold text-md">
              {currentPage}  
          </span>
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="px-4 text-xs active:bg-violett/80 active:text-white py-2 bg-gray-200 rounded-lg disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};
