import Course from "./components/Course";
import "./App.css";
import CourseList from "./components/CourseList";
function App() {
  return (
    <div className=" w-[500px] h-[400px]flex flex-col rounded-md text-center bg-blue-100 justify-center mx-[400px] my-20 shadow-lg">
      <h1 className="text-red-700 font-bold text-[20px] pt-4">
        My Course List
      </h1>
      <Course />
      <CourseList />
    </div>
  );
}

export default App;
