import React from "react";
import { useHistory } from "react-router-dom";
import { useQuery } from "react-query";

const { REACT_APP_API_URL } = process.env;

function fetchPatients() {
  return fetch(`${REACT_APP_API_URL}patients`).then((res) => res.json());
}

function ListView() {
  const history = useHistory();

  const goToDetail = (id) => {
    history.push(`/patient/${id}`);
  };

  const { isLoading, error, data } = useQuery("patients", fetchPatients);

  return (
    <div className="flex flex-col h-screen bg-gray-200">
      <header className="">
        <nav className="bg-gray-800">
          <h2 className="text-white p-3 text-3xl">iMobile</h2>
        </nav>
      </header>
      {isLoading && <div>loading...</div>}
      {error && <div>Error in loading data!!!</div>}
      {data && (
        <div className="flex-1 h-full overflow-scroll">
          <ul>
            {data.map(({ firstName, lastName, patientID }, i) => (
              <li key={i} onClick={() => goToDetail(patientID)}>
                <div className="bg-white m-4 rounded-lg p-4 shadow-md  cursor-pointer">
                  {firstName} <b>{lastName}</b>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default ListView;
