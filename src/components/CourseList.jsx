import React from "react";
import useStore from "../store";

const CourseList = () => {
  const { courses, removeCourse, toggleCourseStatus } = useStore((state) => ({
    courses: state.courses,
    removeCourse: state.removeCourse,
    toggleCourseStatus: state.toggleCourseStatus,
  }));
  return (
    <div>
      <ul className="pb-4">
        {courses.map((course, i) => {
          return (
            <div key={i}>
              <li className="flex justify-evenly pb-4">
                <span>
                  <input
                    checked={course.completed}
                    onChange={(e) => {
                      toggleCourseStatus(course.id);
                    }}
                    type="checkbox"
                  />{" "}
                </span>
                <span className={`text-yellow-900`}>{course?.title}</span>
                <button
                  className=" rounded bg-red-400 px-2 "
                  onClick={() => {
                    removeCourse(course.id);
                  }}
                >
                  Delete
                </button>
              </li>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default CourseList;
