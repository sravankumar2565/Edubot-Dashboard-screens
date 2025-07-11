import React from 'react';
import { Submission } from '../types/Submission4types';
import Button from './ui/Button';

interface SubmissionDetailsProps {
  submission: Submission;
  onAddFeedback: () => void;
  onRunAnalysis: () => void;
}

const SubmissionDetails: React.FC<SubmissionDetailsProps> = ({
  submission,
  onAddFeedback,
  onRunAnalysis
}) => {
  return (
    <div
      className="tw-bg-edubot-light tw-p-2 tw-rounded-t-sm tw-flex tw-items-center tw-justify-between tw-ml-[0px]"
      style={{ width: '980px', height: '37px' }}
    >
      {/* Student Avatar + Info */}
      <div className="tw-flex tw-items-center">
        <img 
          src={submission.student.avatar} 
          alt={submission.student.name} 
          className="tw-w-[25px] tw-h-[25px] tw-rounded-lg"
        />
        <div className="tw-ml-2">
          <p className="tw-text-xs tw-font-medium tw-text-gray-800">{submission.student.name}</p>
          <p className="tw-text-xs tw-font-semibold tw-text-black-82">ID : {submission.student.id}</p>
        </div>
      </div>

      {/* Score + Submitted Info + Submission Receipt + Buttons */}
      <div className="tw-flex tw-items-center tw-space-x-4 tw-ml-auto">
        
        {/* Submitted Info + Submission Receipt */}
        <div className="tw-text-left">
          <p className="tw-text-xs tw-font-medium tw-text-gray-800">Submitted</p>
          <p className="tw-text-xs tw-font-semibold tw-text-black-82">Submission Receipt: {submission.receiptNumber}</p>
        </div>

        {/* Score */}
        <div className="tw-bg-accent tw-rounded-2xl tw-px-4 tw-py-2">
          <p className="tw-text-sm tw-font-semibold tw-text-gray-700">
            {submission.score !== undefined ? `${submission.score} / ${submission.maxScore}` : `--- / ${submission.maxScore}`}
          </p>
        </div>

        {/* Buttons */}
        <Button 
          variant="outline" 
          size="sm" 
          onClick={onAddFeedback}
          className="tw-text-edubot-primary"
        >
          Add Feedback
        </Button>
        
        <Button 
          variant="outline" 
          size="sm" 
          onClick={onRunAnalysis}
          className="tw-text-edubot-primary"
          icon={<img src="/images/img_sparksvgrepocom.svg" alt="Analysis" className="tw-h-[13px] tw-w-[13px]" />}
        >
          Auto Analysis
        </Button>
      </div>
    </div>
  );
};

export default SubmissionDetails;
