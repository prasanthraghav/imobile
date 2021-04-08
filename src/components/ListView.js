import React from "react";
import { useHistory } from "react-router-dom";
import { patients } from "../data/patients";

function ListView() {
  const history = useHistory();

  const goToDetail = (id) => {
    history.push(`/patient/${id}`);
  };

  return (
    <div className="flex flex-col h-screen bg-gray-200">
      <header className="">
        <nav className="bg-gray-800">
          <h2 className="text-white p-3 text-3xl">iMobile</h2>
        </nav>
      </header>
      <div className="flex-1 h-full overflow-scroll">
        <ul>
          {patients.map(({ firstName, lastName, patientID }, i) => (
            <li key={i} onClick={() => goToDetail(patientID)}>
              <div className="bg-white m-4 rounded-lg p-4 shadow-md  cursor-pointer">
                {firstName} <b>{lastName}</b>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ListView;
