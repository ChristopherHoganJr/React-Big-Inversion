import logo from "./logo.svg";
import "./App.css";

// components
import PersonCard from "./components/PersonCard";

function App() {
  return (
    <>
      <div className='App'>
        <PersonCard
          firstName={"Jane"}
          lastName={"Doe"}
          age={45}
          hairColor={"Black"}
        />
      </div>
      <div className='App'>
        <PersonCard
          firstName={"John"}
          lastName={"Smith"}
          age={88}
          hairColor={"Brown"}
        />
      </div>
      <div className='App'>
        <PersonCard
          firstName={"Millard"}
          lastName={"Fillmore"}
          age={50}
          hairColor={"Brown"}
        />
      </div>
      <div className='App'>
        <PersonCard
          firstName={"Maria"}
          lastName={"Smith"}
          age={62}
          hairColor={"Brown"}
        />
      </div>
    </>
  );
}

export default App;
