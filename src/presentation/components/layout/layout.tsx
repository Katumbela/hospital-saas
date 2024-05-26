import { ReactNode, useState } from "react";
import {
  BsCalendar2Event,
  BsCapsule,
  BsCaretDown,
  BsCast,
  BsDiagram2,
  BsPersonVideo2,
  BsReceipt,
  BsTrophy,
} from "react-icons/bs";
import { FaBed } from "react-icons/fa";

export function Sidebar() {
  const [active, setActive] = useState("");
  return (
    <div className="w-[8rem] bg-white shadow py-0">
      <ul className="my-auto">
        <li
          onClick={() => setActive("practices")}
          className={`cursor-pointer hover:bg-violett  active:bg-violett/80 hover:text-white border-b-4   ${
            active == "practices"
              ? "  text-violett border-violett"
              : " border-transparent"
          } transition-all w-full h-[5rem] grid items-center place-content-center`}
        >
          <div className="text-center">
            <BsPersonVideo2 className="mx-auto text-2xl" />

            <span className=" text-sm mt-2 font-semibold">My Practice</span>
          </div>
        </li>
        <li
          onClick={() => setActive("dashboard")}
          className={`cursor-pointer hover:bg-violett  active:bg-violett/80 hover:text-white border-b-4   ${
            active == "dashboard"
              ? "  text-violett border-violett"
              : " border-transparent"
          } transition-all w-full h-[5rem] grid items-center place-content-center`}
        >
          <div className="text-center">
            <BsTrophy className="mx-auto text-2xl" />

            <span className=" text-sm mt-2 font-semibold">Dr. Dashboard</span>
          </div>
        </li>{" "}
        <li
          onClick={() => setActive("apointments")}
          className={`cursor-pointer hover:bg-violett  active:bg-violett/80 hover:text-white border-b-4   ${
            active == "apointments"
              ? "  text-violett border-violett"
              : " border-transparent"
          } transition-all w-full h-[5rem] grid items-center place-content-center`}
        >
          <div className="text-center">
            <BsCalendar2Event className="mx-auto text-2xl" />

            <span className=" text-sm mt-2 font-semibold">
              All Appointments
            </span>
          </div>
        </li>{" "}
        <li
          onClick={() => setActive("opd-bill")}
          className={`cursor-pointer hover:bg-violett  active:bg-violett/80 hover:text-white border-b-4   ${
            active == "opd-bill"
              ? "  text-violett border-violett"
              : " border-transparent"
          } transition-all w-full h-[5rem] grid items-center place-content-center`}
        >
          <div className="text-center">
            <BsReceipt className="mx-auto text-2xl" />

            <span className=" text-sm mt-2 font-semibold">OPD Billing</span>
          </div>
        </li>{" "}
        <li
          onClick={() => setActive("patients")}
          className={`cursor-pointer hover:bg-violett  active:bg-violett/80 hover:text-white border-b-4   ${
            active == "patients"
              ? "  text-violett border-violett"
              : " border-transparent"
          } transition-all w-full h-[5rem] grid items-center place-content-center`}
        >
          <div className="text-center">
            <FaBed className="mx-auto text-2xl" />

            <span className=" text-sm mt-2 font-semibold">All Patients</span>
          </div>
        </li>{" "}
        <li
          onClick={() => setActive("pharmacy")}
          className={`cursor-pointer hover:bg-violett  active:bg-violett/80 hover:text-white border-b-4   ${
            active == "pharmacy"
              ? "  text-violett border-violett"
              : " border-transparent"
          } transition-all w-full h-[5rem] grid items-center place-content-center`}
        >
          <div className="text-center">
            <BsCapsule className="mx-auto text-2xl" />

            <span className=" text-sm mt-2 font-semibold">Pharmacy</span>
          </div>
        </li>
        <li
          onClick={() => setActive("ipd")}
          className={`cursor-pointer hover:bg-violett  active:bg-violett/80 hover:text-white border-b-4   ${
            active == "ipd"
              ? "  text-violett border-violett"
              : " border-transparent"
          } transition-all w-full h-[5rem] grid items-center place-content-center`}
        >
          <div className="text-center">
            <BsDiagram2 className="mx-auto text-2xl" />

            <span className=" text-sm mt-2 font-semibold flex gap-2">
              IPD <BsCaretDown className=" mt-1" />
            </span>
          </div>
        </li>
        <li
          onClick={() => setActive("tatva")}
          className={`cursor-pointer hover:bg-violett  active:bg-violett/80 hover:text-white border-b-4   ${
            active == "tatva"
              ? "  text-violett border-violett"
              : " border-transparent"
          } transition-all w-full h-[5rem] grid items-center place-content-center`}
        >
          <div className="text-center">
            <BsCast className="mx-auto text-2xl" />

            <span className=" text-sm mt-2 font-semibold">TatvaPodia</span>
          </div>
        </li>
      </ul>
    </div>
  );
}

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="flex gap-10 h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content Area */}
      <div className="flex-1 mt-3 h-[calc(100vh-6rem)] mb-10 bg-white me-10 overflow-y-auto p-4">
        {children}
      </div>
    </div>
  );
}
