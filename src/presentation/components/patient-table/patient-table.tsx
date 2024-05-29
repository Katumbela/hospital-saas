// PatientTable.tsx

import React, { useState } from "react";
import {
  FaHome,
  FaFilter,
  FaTrash,
  FaRegEdit,
  FaAngleDown,
  FaAngleUp,
} from "react-icons/fa";
import { BsFilePerson, BsThreeDotsVertical } from "react-icons/bs";
import { IPatientData } from "../../../interfaces/patient/patient";

import { useNavigate } from "react-router-dom";

interface PatientTableProps {
  data: IPatientData[];
  setSelectedItem: (state: string) => void;
}

const getStatusClass = (status: string) => {
  switch (status.toLowerCase()) {
    case "fila":
      return "bg-violett text-white";
    case "em progresso":
      return "status-in-progress";
    case "concluído":
      return "status-completed  text-white";
    case "cancelado":
      return "status-cancelled  text-white";
    case "pendente":
      return "bg-gray-300 text-dark";
    default:
      return "";
  }
};

export const PatientTable: React.FC<PatientTableProps> = ({
  setSelectedItem: setSelectedMenu,
  data,
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [entriesPerPage, setEntriesPerPage] = useState(5);
  const [patientData, setPatientData] = useState(data);
  const [openDropdownIndex, setOpenDropdownIndex] = useState<number | null>(
    null
  );

  const [openOptionsIndex, setOpenOptionsIndex] = useState<number | null>(null);

  const navigate = useNavigate();

  const indexOfLastEntry = currentPage * entriesPerPage;
  const indexOfFirstEntry = indexOfLastEntry - entriesPerPage;
  const currentEntries = patientData.slice(indexOfFirstEntry, indexOfLastEntry);

  const totalPages = Math.ceil(patientData.length / entriesPerPage);

  const handleChangeEntriesPerPage = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setEntriesPerPage(Number(e.target.value));
    setCurrentPage(1); // Reset to first page whenever entries per page changes
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleStatusChange = (index: number, newStatus: string) => {
    const updatedData = [...patientData];
    updatedData[index].status = newStatus;
    setPatientData(updatedData);
    setOpenDropdownIndex(null); // Close dropdown after status change
  };

  const toggleDropdown = (index: number) => {
    setOpenDropdownIndex(openDropdownIndex === index ? null : index);
  };

  const toggleDropdownOption = (index: number) => {
    setOpenOptionsIndex(openOptionsIndex === index ? null : index);
  };

  const handleStartConsultation = (patient: IPatientData) => {
    navigate(`/patient/${patient.id}`);
    setSelectedMenu("");
  };

  return (
    <div className="">
      <table className="w-full text-sm table-auto text-start text-surface">
        <thead className="font-medium border-b border-neutral-200 dark:border-white/10">
          <tr className="bg-violett/10">
            <th scope="col" className="px-2 py-4 w-[2rem]">
              N°
            </th>
            <th scope="col" className="px-2 text-start w-[10rem] py-2">
              Detalhes do Paciente
            </th>
            <th scope="col" className="px-2 py-2 w-[6rem] text-start">
              DCB
            </th>
            <th scope="col" className="px-2 w-[4.5rem] py-2 text-start">
              Gênero
            </th>
            <th
              scope="col"
              className="px-2 text-violett w-[6rem] py-2 text-start"
            >
              <span className="flex gap-2">
                <span>Casos</span>
                <div className="border border-violett rounded-sm p-[2.5px] my-auto">
                  <FaFilter className="text-[8px]" />
                </div>
              </span>
            </th>
            <th scope="col" className="px-2 w-[8rem] py-2 text-start">
              Categoria
            </th>
            <th scope="col" className="px-2 w-[9.5rem] py-2 text-start">
              Encaminhado
              Indicado Por
            </th>
            <th scope="col" className="px-2 w-[5.5rem] py-2 text-start">
              Hora
            </th>
            <th scope="col" className="px-2 w-[8.5rem] py-2 text-start">
              <span className="flex gap-2">
                <span>Status</span>
                <div className="border border-violett rounded-sm p-[2.5px] my-auto">
                  <FaFilter className="text-[8px]" />
                </div>
              </span>
            </th>
            <th scope="col" className="w-[15rem] px-2 py-2 text-start">
              Ação
            </th>
          </tr>
        </thead>
        <tbody>
          {currentEntries.map((row, index) => (
            <tr
              key={index}
              className="font-medium transition-all border-b border-gray-300 hover:bg-slate-100/80 min-full"
            >
              <td
                scope="col"
                className="px-6 py-4 font-bold whitespace-nowrap text-md"
              >
                {row.no}
              </td>
              <td className="whitespace-nowrap w-[8rem] text-start px-2 py-4">
                <span className="flex items-center gap-2">
                  <FaHome className="text-xl text-purple-600" />
                  <span className="flex flex-col">
                    <span className="font-semibold text-violett">
                      {row.name}
                    </span>
                    <span className="text-xs">{row.id}</span>
                    <span className="font-extrabold text-purple-600">
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
              <td className="px-2 py-4 whitespace-nowrap">{row.gender}</td>
              <td className="px-2 py-4 whitespace-nowrap">{row.case}</td>
              <td className="px-2 py-4 whitespace-nowrap">{row.category}</td>
              <td className="px-2 py-4 whitespace-nowrap">{row.referredBy}</td>
              <td className="px-2 py-4 whitespace-nowrap">{row.time}</td>
              <td className="px-2 py-4 whitespace-nowrap">
                <div className="relative">
                  <button
                    className={`${getStatusClass(
                      row.status
                    )} w-auto click py-[3px] px-3 font-semibold flex gap-1 rounded-full text-center justify-center`}
                    onClick={() => toggleDropdown(index)}
                  >
                    <span className="my-auto text-xs ">{row.status}</span>
                    {openDropdownIndex === index ? (
                      <FaAngleUp className="my-auto text-md" />
                    ) : (
                      <FaAngleDown className="my-auto text-md" />
                    )}
                  </button>
                  {openDropdownIndex === index && (
                    <div className="absolute mt-1 bg-white shadow-lg rounded w-[6.5rem] z-10">
                      <ul>
                        {[
                          "fila",
                          "em progresso",
                          "concluído",
                          "cancelado",
                          "pendente",
                        ].map((status) => (
                          <li
                            key={status}
                            className="px-2 py-1 cursor-pointer hover:bg-gray-200"
                            onClick={() =>
                              handleStatusChange(
                                indexOfFirstEntry + index,
                                status
                              )
                            }
                          >
                            {status}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </td>
              <td className="px-2 py-4 whitespace-nowrap">
                <div className="flex gap-8">
                  <span
                    onClick={() => handleStartConsultation(row)}
                    className="border-2 w-[9rem] flex gap-2 items-center cursor-pointer hover:shadow-md hover:bg-violett hover:text-white transition-all border-violett text-xs text-violett font-semibold rounded-lg px-2 py-1"
                  >
                    <BsFilePerson className="text-xl" />
                    <span className="my-auto">Iniciar consulta</span>
                  </span>
                  <div
                    onClick={() => toggleDropdownOption(index)}
                    className={`click ${
                      openOptionsIndex === index && "bg-violett/80 text-white"
                    } relative hover:bg-violett/10 rounded-md cursor-pointer hover:text-violett active:bg-violett active:text-white transiton-all grid`}
                  >
                    <BsThreeDotsVertical className="my-auto text-2xl" />
                    {openOptionsIndex === index && (
                      <div className="absolute text-dark right-0 top-7 py-2 border  mt-1 bg-white shadow-lg rounded w-[6.5rem] z-50">
                        <ul>
                          <li className="flex gap-2 px-3 hover:bg-slate-100 ">
                            <FaTrash className="my-auto text-sm " /> Apagar
                          </li>
                          <li className="flex gap-2 px-3 my-2 hover:bg-slate-100">
                            <FaRegEdit className="my-auto text-sm" /> Editar
                          </li>
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex items-center justify-between px-4 mt-4">
        <div className="flex items-center justify-between mb-4">
          <span className="me-4">
            Mostrando {indexOfFirstEntry + 1} a{" "}
            {Math.min(indexOfLastEntry, data.length)} de {data.length} entradas{" "}
          </span>

          <select
            className="px-2 py-2 transition-all rounded-md bg-violett/20 active:bg-violett/70 "
            onChange={handleChangeEntriesPerPage}
            value={entriesPerPage}
          >
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={15}>15</option>
            <option value={20}>20</option>
          </select>
        </div>
        <div className="flex items-center justify-between mb-4">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-4 py-2 text-xs bg-gray-200 rounded-lg active:bg-violett/80 active:text-white disabled:opacity-50"
          >
            Previous
          </button>
          {/*

        <span>Page {currentPage} of {totalPages}</span>
            */}
          <span className="px-3 py-2 mx-2 font-bold text-white rounded-md bg-violett/90 text-md">
            {currentPage}
          </span>
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="px-4 py-2 text-xs bg-gray-200 rounded-lg active:bg-violett/80 active:text-white disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};
