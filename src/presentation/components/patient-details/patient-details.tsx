import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { dummyData } from "../../../domain/config/patient-data";
import { Layout } from "../layout/layout";
import { NavBar } from "../navbar/navbar";
import { FaArrowLeft, FaPlus } from "react-icons/fa";

interface PatientDetailsProps {
  // Define a interface para os detalhes do paciente
  // Substitua esta interface pelos detalhes reais do paciente
  name: string;
  id: string;
  affiliation: string;
  dcb: string;
  days: string;
  gender: string;
  case: string;
  category: string;
  referredBy: string;
  time: string;
  status: string;
}

const PatientDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  const navigate = useNavigate();
  //const history = useHistory();

  // Função para buscar os detalhes do paciente com base no ID
  const findPatientById = (
    id: string | undefined
  ): PatientDetailsProps | undefined => {
    // Verifica se o ID não é undefined antes de procurar o paciente
    if (id !== undefined) {
      return dummyData.find((patient) => patient.id === id);
    }
    return undefined;
  };

  const patientDetails = findPatientById(id);

  /*
  const handleStartConsultation = () => {
   //history.goBack();
  };
*/

  if (!patientDetails) {
    // Se não encontrar o paciente com o ID fornecido, renderiza uma mensagem de erro
    return <div>Patient not found!</div>;
  }

  const handleBack = () => {
    navigate(`/admin`);
  };

  document.title = patientDetails.name + " Details | TATVACARE SOFTWARE ";

  return (
    <>
      <div>
        <NavBar />
        <Layout>
          <div>
            <div className="pe-7 py-8">
              <div onClick={handleBack} className="cursor-pointer flex gap-4">
                <FaArrowLeft className="my-auto text-xl" />{" "}
                <h1 className="my-auto text-3xl font-bold ">Patient Details</h1>
              </div>
            </div>
            <div className="bg-white w-full p-4">
              <div className="flex bg-violett/5 rounded-md p-4 gap-4">
                <div>
                  <h1 className="font-bold text-2xl">
                    {patientDetails.name} Years(s)
                  </h1>

                  <h2 className="text-gray-600 mt-3 font-medium text-md">
                    {patientDetails.gender} - {patientDetails.id}
                  </h2>
                </div>
                <div className="flex bg-violett/70 click hover:bg-violett/90 transition-all cursor-pointer px-6 rounded-md text-lg font-semibold  text-white gap-3">
                  <FaPlus className="my-auto" />{" "}
                  <span className="my-auto">Add Prescription</span>
                </div>
              </div>
              <br />

              <div className="flex justify-between">
                <div className="">
                  <img
                    src="https://img.icons8.com/?size=100&id=13042&format=png&color=000000"
                    alt=""
                  />
                  <h1 className="font-bold">Algum titulo</h1>
                </div>
                <div className="">
                  <img
                    src="https://img.icons8.com/?size=100&id=SvvAPZQ3Pvxe&format=png&color=000000"
                    alt=""
                  />
                  <h1 className="font-bold">Algum titulo</h1>
                </div>
                <div className="">
                  {" "}
                  <img
                    src="https://img.icons8.com/?size=100&id=13075&format=png&color=000000"
                    alt=""
                  />
                  <h1 className="font-bold">Algum titulo</h1>
                </div>
                <div className="">
                  <img
                    src="https://img.icons8.com/?size=100&id=TFa5dmzOAaDh&format=png&color=000000"
                    alt=""
                  />
                  <h1 className="font-bold">Algum titulo</h1>
                </div>

                <div className="">
                  <img
                    src="https://img.icons8.com/?size=100&id=12053&format=png&color=000000"
                    alt=""
                  />
                  <h1 className="font-bold">Algum titulo</h1>
                </div>
                <div className="">
                  <img
                    src="https://img.icons8.com/?size=100&id=Xzp9nZ481VTn&format=png&color=000000"
                    alt=""
                  />
                  <h1 className="font-bold">Algum titulo</h1>
                </div>
                <div className="">
                  <img
                    src="https://img.icons8.com/?size=100&id=C8gfz6xPL7TZ&format=png&color=000000"
                    alt=""
                  />
                  <h1 className="font-bold">Algum titulo</h1>
                </div>
                <div className="">
                  <img
                    src="https://img.icons8.com/?size=100&id=rvCR1YF1VAgo&format=png&color=000000"
                    alt=""
                  />
                  <h1 className="font-bold">Algum titulo</h1>
                </div>
              </div>
              <br />
              <br />
              <br />
              <center>
                <h2 className="text-2xl font-bold">
                  sem nenhum resumo de consulta
                </h2>
              </center>

              <br />
              <br />
            </div>
            {/*

<h2>Patient Details</h2>
            <p>Name: {patientDetails.name}</p>
            <p>ID: {patientDetails.id}</p>
            <p>Affiliation: {patientDetails.affiliation}</p>
            <p>DCB: {patientDetails.dcb}</p>
            <p>Days: {patientDetails.days}</p>
            <p>Gender: {patientDetails.gender}</p>
            <p>Case: {patientDetails.case}</p>
            <p>Category: {patientDetails.category}</p>
            <p>Referred By: {patientDetails.referredBy}</p>
            <p>Time: {patientDetails.time}</p>
            <p>Status: {patientDetails.status}</p>
            <button onClick={handleStartConsultation}>
              Start Consultation
            </button>
                */}
          </div>
        </Layout>
      </div>
    </>
  );
};

export default PatientDetails;
