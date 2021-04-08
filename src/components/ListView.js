import React from 'react';
import { patients } from '../data/patients';

function ListView() {
    return (
        <div className="flex flex-col h-screen">
            <header className="">
                <nav className="bg-gray-800">
                    <h2 className="text-white p-3 text-3xl">iMobile</h2>
                </nav>
            </header>
        <div className="flex-1 h-full overflow-scroll">
          <ul>
            {
              patients.map(({firstName, lastName}) => <li>{firstName} <b>{lastName}</b></li>)
            }
          </ul>
        </div>
      </div>
    )
}

export default ListView
