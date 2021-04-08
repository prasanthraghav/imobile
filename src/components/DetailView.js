import React from "react";
import { useHistory } from "react-router-dom";
import Card from "./Card";

import { patientDetail } from "../data/patientDetail";
import phImg from "../images/person-placeholder-image-transparent-hd-png-download.png";

function DetailView(props) {
  const history = useHistory();

  const onClickBackBtn = () => {
    history.push("/");
  };

  return (
    <div className="flex flex-col h-screen bg-gray-200">
      <header className="">
        <nav className="bg-gray-800 flex">
          <button
            className="cursor-pointer outline-none"
            onClick={onClickBackBtn}
          >
            <i className="fa fa-chevron-left text-white text-3xl font-light place-self-center ml-2"></i>
          </button>
          <h2 className="text-white p-3 text-3xl text-center flex-1 pr-14">
            Patient
          </h2>
        </nav>
      </header>
      <div className="flex-1 h-full overflow-scroll">
        <div className="bg-gray-50 p-4 text-center">
          <div>
            <div className="flex items-center justify-center place-self-center m-4">
              <img
                src={
                  patientDetail.patientimg ? patientDetail.patientimg : phImg
                }
                alt={patientDetail.patientfirstName}
                width="100px"
                height="100px"
                className="self-center rounded-full h-24 w-24 place-self-center"
              />
            </div>
            <div className="text-center m-4">
              <h3 className="text-3xl">
                {patientDetail.patient.firstName}{" "}
                <span className="font-bold">
                  {patientDetail.patient.lastName}
                </span>
              </h3>
              <p className="m-2">
                Patient ID: {patientDetail.patient.patientID}
              </p>
            </div>
          </div>
        </div>
        <h4 className="m-4 text-xl font-semibold">Doctors</h4>
        <div>
          {patientDetail.doctors
            .sort((a, b) => a.priority > b.priority)
            .map((d, i) => (
              <div className="bg-white m-4 rounded-lg p-4 shadow-lg" key={i}>
                <Card data={d} />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default DetailView;
