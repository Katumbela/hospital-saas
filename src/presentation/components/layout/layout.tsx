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
import { DoctorDashboard } from "../doctor-dash/doctor-dash"; 

interface SidebarProps {
  onSelect: (item: string) => void;
}

export function Sidebar({ onSelect }: SidebarProps) {
  const [active, setActive] = useState("");

  const handleClick = (item: string) => {
    setActive(item);
    onSelect(item);
  };

  return (
    <div className="w-[7rem] bg-white shadow py-0">
      <ul className="my-auto">
        <li
          onClick={() => handleClick("practices")}
          className={`cursor-pointer hover:bg-violett active:bg-violett/80 hover:text-white border-b-4 ${
            active === "practices"
              ? "text-violett border-violett bg-violett/15"
              : "border-transparent"
          } transition-all w-full h-[5rem] grid items-center place-content-center`}
        >
          <div className="text-center">
            <BsPersonVideo2 className="mx-auto text-2xl" />
            <span className="mt-2 text-sm font-semibold">My Practice</span>
          </div>
        </li>
        <li
          onClick={() => handleClick("dashboard")}
          className={`cursor-pointer hover:bg-violett active:bg-violett/80 hover:text-white border-b-4 ${
            active === "dashboard"
              ? "text-violett border-violett bg-violett/15"
              : "border-transparent"
          } transition-all w-full h-[5rem] grid items-center place-content-center`}
        >
          <div className="text-center">
            <BsTrophy className="mx-auto text-2xl" />
            <span className="mt-2 text-sm font-semibold">Dr. Dashboard</span>
          </div>
        </li>
        <li
          onClick={() => handleClick("appointments")}
          className={`cursor-pointer hover:bg-violett active:bg-violett/80 hover:text-white border-b-4 ${
            active === "appointments"
              ? "text-violett border-violett bg-violett/15"
              : "border-transparent"
          } transition-all w-full h-[5rem] grid items-center place-content-center`}
        >
          <div className="text-center">
            <BsCalendar2Event className="mx-auto text-2xl" />
            <span className="mt-2 text-sm font-semibold">All Appointments</span>
          </div>
        </li>
        <li
          onClick={() => handleClick("opd-bill")}
          className={`cursor-pointer hover:bg-violett active:bg-violett/80 hover:text-white border-b-4 ${
            active === "opd-bill"
              ? "text-violett border-violett bg-violett/15"
              : "border-transparent"
          } transition-all w-full h-[5rem] grid items-center place-content-center`}
        >
          <div className="text-center">
            <BsReceipt className="mx-auto text-2xl" />
            <span className="mt-2 text-sm font-semibold">OPD Billing</span>
          </div>
        </li>
        <li
          onClick={() => handleClick("patients")}
          className={`cursor-pointer hover:bg-violett active:bg-violett/80 hover:text-white border-b-4 ${
            active === "patients"
              ? "text-violett border-violett bg-violett/15"
              : "border-transparent"
          } transition-all w-full h-[5rem] grid items-center place-content-center`}
        >
          <div className="text-center">
            <FaBed className="mx-auto text-2xl" />
            <span className="mt-2 text-sm font-semibold">All Patients</span>
          </div>
        </li>
        <li
          onClick={() => handleClick("pharmacy")}
          className={`cursor-pointer hover:bg-violett active:bg-violett/80 hover:text-white border-b-4 ${
            active === "pharmacy"
              ? "text-violett border-violett bg-violett/15"
              : "border-transparent"
          } transition-all w-full h-[5rem] grid items-center place-content-center`}
        >
          <div className="text-center">
            <BsCapsule className="mx-auto text-2xl" />
            <span className="mt-2 text-sm font-semibold">Pharmacy</span>
          </div>
        </li>
        <li
          onClick={() => handleClick("ipd")}
          className={`cursor-pointer hover:bg-violett active:bg-violett/80 hover:text-white border-b-4 ${
            active === "ipd"
              ? "text-violett border-violett bg-violett/15"
              : "border-transparent"
          } transition-all w-full h-[5rem] grid items-center place-content-center`}
        >
          <div className="text-center">
            <BsDiagram2 className="mx-auto text-2xl" />
            <span className="flex gap-2 mt-2 text-sm font-semibold">
              IPD <BsCaretDown className="mt-1" />
            </span>
          </div>
        </li>
        <li
          onClick={() => handleClick("tatva")}
          className={`cursor-pointer hover:bg-violett active:bg-violett/80 hover:text-white border-b-4 ${
            active === "tatva"
              ? "text-violett border-violett bg-violett/15"
              : "border-transparent"
          } transition-all w-full h-[5rem] grid items-center place-content-center`}
        >
          <div className="text-center">
            <BsCast className="mx-auto text-2xl" />
            <span className="mt-2 text-sm font-semibold">TatvaPodia</span>
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
  const [selectedItem, setSelectedItem] = useState("");

  const renderContent = () => {
    switch (selectedItem) {
      case "practices":
        return <div>Conteudo for My Practice</div>;
      case "dashboard":
        return <DoctorDashboard setSelectedItem={setSelectedItem}  />;
      case "appointments":
        return <div>Conteudo for All Appointments</div>;
      case "opd-bill":
        return <div>Conteudo for OPD Billing</div>;
      case "patients":
        return <div>Conteudo for All Patients</div>;
      case "pharmacy":
        return <div>Conteudo for Pharmacy</div>;
      case "ipd":
        return <div>Conteudo for IPD</div>;
      case "tatva":
        return <div>Conteudo for TatvaPodia</div>;
      default:
        return children;
    }
  };

  return (
    <div className="flex h-screen gap-5">
      {/* Sidebar */} 
      <Sidebar onSelect={setSelectedItem} />

      {/* Main Content Area */}
      <div className="flex-1 mt-3 h-[calc(100vh-6rem)] mb-10 bg-whitee me-4 overflow-y-auto">
        {renderContent()}
      </div>
    </div>
  );
}
