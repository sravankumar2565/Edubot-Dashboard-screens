import React from 'react';
import { Submission } from '../types/Submission4types';
import { Pencil } from 'lucide-react';

interface SubmissionTableProps {
  submissions: Submission[];
}

const SubmissionTable: React.FC<SubmissionTableProps> = ({ submissions }) => {
  return (
    <div className="tw-bg-white tw-rounded-xl tw-shadow-sm tw-w-[989px]">
      <table className="tw-w-full tw-text-sm">
        <thead>
          <tr className="tw-bg-[#FFDF9B] tw-text-[#444] tw-h-[36px]">
            <th className="tw-py-2 tw-pl-1 tw-align-middle">Unique ID</th>
            <th className="tw-py-2 tw-text-left tw-align-middle">Student Name</th>
            <th className="tw-py-2 tw-text-left tw-align-middle">Check</th>
            <th className="tw-py-2 tw-text-left tw-align-middle">Prompts</th>
            <th className="tw-py-2 tw-text-left tw-align-middle">Test Cases</th>
            <th className="tw-py-2 tw-text-left tw-align-middle">Grade</th>
            <th className="tw-py-2 tw-text-left tw-pr-4 tw-align-middle">Feedback</th>
          </tr>
        </thead>
        <tbody>
          {submissions.map((submission) => (
            <tr key={submission.studentId} className="tw-border-b tw-h-[93px]">
              <td className="tw-py-3 tw-pl-4 tw-align-middle">{submission.id}</td>
              <td className="tw-py-3 tw-align-middle">
                <div className="tw-flex tw-items-center tw-gap-2">
                  <img
                    src={submission.student.avatar}
                    alt={submission.student.name}
                    className="tw-w-6 tw-h-6 tw-rounded-full"
                  />
                  <span>{submission.student.name}</span>
                </div>
              </td>
              <td className="tw-text-blue-600 tw-py-3 tw-align-middle">View</td>
              <td className="tw-text-blue-600 tw-py-3 tw-align-middle">link</td>
              <td className="tw-text-blue-600 tw-py-3 tw-align-middle">link</td>
              <td className="tw-py-3 tw-align-middle">
                {submission.grade !== null ? (
                  <span
                    className={`tw-px-2 tw-py-1 tw-rounded-full tw-text-black tw-text-xs tw-font-normal ${
                      submission.grade >= 75
                        ? 'tw-bg-green-400'
                        : submission.grade >= 40
                        ? 'tw-bg-yellow-400'
                        : 'tw-bg-red-400'
                    }`}
                  >
                    {submission.grade} / 100
                  </span>
                ) : (
                  <span className="tw-bg-gray-200 tw-text-black tw-px-2 tw-py-1 tw-rounded-full tw-text-xs">
                    --- / 100
                  </span>
                )}
              </td>
              <td className="tw-py-3 tw-pr-4 tw-align-middle">
                <div className="tw-space-y-2">
                  {submission.feedback.map((item, idx) => (
                    <div key={idx} className="tw-flex tw-items-start tw-justify-between">
                      <span className="tw-text-sm">{item.text}</span>
                      <div className="tw-flex tw-items-center tw-gap-2">
                        <span className="tw-bg-[#D3ECFD] tw-text-black tw-text-[10px] tw-rounded-md tw-px-1.5 tw-py-[2px]">
                          {item.timestamp}
                        </span>
                        <Pencil size={12} className="tw-text-gray-600 tw-cursor-pointer" />
                      </div>
                    </div>
                  ))}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SubmissionTable;
