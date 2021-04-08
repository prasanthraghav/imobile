import './App.scss';

function App() {
  return (
    <div className="app">
      <div className="flex flex-col h-screen">
        <header className="">
          <nav className="bg-gray-800">
            <h2 className="text-white p-3 text-3xl">iMobile</h2>
          </nav>
        </header>
        <div className="flex-1 h-full overflow-scroll">
          <p>Patients List</p>
        </div>
      </div>
    </div>
  );
}

export default App;
