import React, { useState } from "react";
import useStore from "../store";

const Course = () => {
  const addCourse = useStore((state) => state.addCourse);
  const [courseTitle, setCourseTitle] = useState("");
  console.log("Course:", courseTitle);

  const handleCourseSubmit = () => {
    if (!courseTitle) return alert("pls add course title");

    addCourse({
      id: Math.ceil(Math.random() * 1000),
      title: courseTitle,
    });
  };
  return (
    <div className="p-5">
      <input
        className="w-[150px] px-4 py-1  rounded-md mr-4 border-gray-500 focus:outline-none"
        type="text"
        value={courseTitle}
        onChange={(e) => setCourseTitle(e.target.value)}
      />
      <button
        className="bg-green-600 px-4 py-1 text-white rounded-md hover:bg-green-500"
        onClick={() => {
          handleCourseSubmit();
        }}
      >
        Add Course
      </button>
    </div>
  );
};

export default Course;
