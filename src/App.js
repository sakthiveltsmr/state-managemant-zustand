import Course from "./components/Course";
import "./App.css";
function App() {
  return (
    <div className=" w-[500px] h-[400px]flex flex-col text-center bg-orange-300 justify-center mx-[400px] my-20">
      <h1 className="">My Course</h1>
      <Course />
    </div>
  );
}

export default App;
