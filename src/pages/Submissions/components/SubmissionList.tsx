import React, { useState } from 'react';
import { Student } from '../types/Submission5types';
import Card from './Card';
import Dropdown from './ui/Dropdown';

interface SubmissionListProps {
  students: Student[];
  activeStudentId: string;
  onSelectStudent: (studentId: string) => void;
}

const SubmissionList: React.FC<SubmissionListProps> = ({ 
  students, 
  activeStudentId, 
  onSelectStudent 
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterOption, setFilterOption] = useState('all');

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleFilterChange = (value: string) => {
    setFilterOption(value);
  };

  const filteredStudents = students.filter(student => {
    const matchesSearch = student.name.toLowerCase().includes(searchTerm.toLowerCase());

    if (filterOption === 'all') return matchesSearch;
    if (filterOption === 'graded') return matchesSearch && student.score !== undefined;
    if (filterOption === 'ungraded') return matchesSearch && student.score === undefined;

    return matchesSearch;
  });

  return (
    <Card className="tw-w-[206px] tw-h-[568px] tw-overflow-hidden">
      <div className="tw-p-3">
        {/* Search Input */}
        <div className="tw-relative tw-mb-4">
          <span className="tw-absolute tw-left-3 tw-top-1/2 tw-transform -tw-translate-y-1/2">
            <img 
              src="/images/img_icon_outline_search.svg" 
              alt="Search" 
              className="tw-h-[20px] tw-w-[20px] tw-text-[#1C1E7C]" 
            />
          </span>
          <input
            type="text"
            placeholder="Search Student"
            value={searchTerm}
            onChange={handleSearch}
            className="tw-h-[48px] tw-w-full tw-pl-10 tw-pr-3 tw-border-[2px] tw-border-[#1C1E7C] tw-rounded-md tw-text-[#1C1E7C] placeholder:tw-text-[#1C1E7C] placeholder:tw-font-semibold placeholder:tw-text-base tw-font-semibold tw-text-base tw-bg-white focus:tw-outline-none focus:tw-ring-2 focus:tw-ring-[#1C1E7C]"
          />
        </div>

        {/* Dropdown - Styled to match search box */}
        <Dropdown
          options={[
            { value: 'all', label: 'All Gradings' },
            { value: 'graded', label: 'Graded' },
            { value: 'ungraded', label: 'Ungraded' }
          ]}
          value={filterOption}
          onChange={handleFilterChange}
          className="tw-w-full tw-h-[48px] tw-px-4 tw-border-[2px] tw-border-[#1D1F71] tw-rounded-md tw-text-[#1D1F71] tw-text-lg tw-font-semibold"
        />

        {/* Student List */}
        <div className="tw-overflow-y-auto tw-max-h-[430px]">
          {filteredStudents.map(student => (
            <div 
              key={student.id}
              className={`tw-flex tw-items-center tw-p-2 tw-mb-2 tw-rounded-sm tw-cursor-pointer ${student.id === activeStudentId ? 'tw-bg-edubot-light' : ''}`}
              onClick={() => onSelectStudent(student.id)}
            >
              <img 
                src={student.avatar} 
                alt={student.name} 
                className="tw-w-[25px] tw-h-[25px] tw-rounded-lg"
              />
              <div className="tw-ml-2">
                <p className="tw-text-xs tw-font-medium tw-text-gray-800">{student.name}</p>
                <p className="tw-text-xs tw-font-semibold tw-text-black-82">ID : {student.id}</p>
              </div>
              <div className={`tw-ml-auto ${student.score !== undefined ? 'tw-bg-accent' : 'tw-bg-gray-200'} tw-rounded-xl tw-px-3 tw-py-1`}>
                <p className="tw-text-xs tw-font-semibold tw-text-gray-700">
                  {student.score !== undefined ? `${student.score} / 100` : '--- / 100'}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
};

export default SubmissionList;
