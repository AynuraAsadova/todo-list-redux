import Todos from "./components/Elements/Todos";
import "./assets/css/style.css";

function App() {
  return (
    <div className='App'>
      <div className='container vh-100'>
        <div className='row h-100 justify-content-center align-items-center'>
          <div className='col-lg-10'>
            <h1 className='text-center mt-4' style={{color: "white"}}>Todo App</h1>
            <Todos />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
