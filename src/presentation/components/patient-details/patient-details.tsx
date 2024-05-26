import React from "react";
import { useParams } from "react-router-dom";
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
  //const history = useHistory();

  // Função para buscar os detalhes do paciente com base no ID
  const findPatientById = (id: string): PatientDetailsProps | undefined => {
    return dummyData.find((patient) => patient.id === id);
  };

  // Busca os detalhes do paciente com base no ID fornecido na URL
  const patientDetails = findPatientById(id);

  /*
  const handleStartConsultation = () => {
    // Você pode fazer qualquer coisa que desejar aqui, como redirecionar para outra página
    // Neste exemplo, estou redirecionando de volta para a página anterior
    //history.goBack();
  };
*/
  if (!patientDetails) {
    // Se não encontrar o paciente com o ID fornecido, renderiza uma mensagem de erro
    return <div>Patient not found!</div>;
  }

  return (
    <>
      <div>
        <NavBar />
        <Layout>
          <div>
            <div className="pe-7 py-8">
              <div onClick={() => set} className="flex gap-4">
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
                <div className="flex bg-violett/70 px-6 rounded-md text-lg font-semibold  text-white gap-3">
                  <FaPlus className="my-auto" />{" "}
                  <span className="my-auto">Add Prescription</span>
                </div>
              </div>
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
