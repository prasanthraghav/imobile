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
          <ul className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 p-4">
            {data.map(({ firstName, lastName, patientID }, i) => (
              <li key={i} onClick={() => goToDetail(patientID)}>
                <div className="bg-white rounded-lg p-4 shadow-md  cursor-pointer">
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
