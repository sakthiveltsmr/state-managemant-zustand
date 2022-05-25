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
    <div className="pb-20">
      <input
        className="w-[50px] border border-gray-500 focus:outline-none"
        type="text"
        value={courseTitle}
        onChange={(e) => setCourseTitle(e.target.value)}
      />
      <button
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
