import React from 'react';
import students from './StudentData';

const StudentList = () => {
  return (
    <div className="tw-space-y-4 tw-w-full">
      {students.map((student, index) => (
        <div
          key={index}
          className={`tw-w-full tw-rounded tw-min-h-[31.5px] tw-py-[2%] ${index === 0 ? 'tw-bg-[#d3ecfd]' : ''}`}
        >
          <div className="tw-flex tw-items-center">
            <img
              src={student.avatar}
              alt={student.name}
              className="tw-h-[25px] tw-w-[25px] tw-rounded-full tw-mr-2"
            />
            <div>
              <div className="tw-text-[10px] tw-font-medium tw-text-[#3a3541dd]">{student.name}</div>
              <div className="tw-text-[10px] tw-font-semibold tw-text-[#00000082]">ID : {student.id}</div>
            </div>
            <div
              className={`tw-ml-auto tw-rounded-[13px] tw-py-0.5 tw-px-4 ${
                student.score !== null ? 'tw-bg-[#ffde9a]' : 'tw-bg-[#eaeaea]'
              }`}
            >
              <span className="tw-text-[10px] tw-font-semibold tw-text-[#4b4b4b]">
                {student.score !== null ? `${student.score}/100` : '---/100'}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StudentList;
