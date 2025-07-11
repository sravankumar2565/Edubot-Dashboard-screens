import React, { useState } from 'react';
import searchIcon from './components/images5/img_icon_outline_search.svg'
import sparks from './components/images5/img_sparksvgrepocom.svg'
import avImg from './components/images5/img_avatar.png'
import imgIcon from './components/images5/img_icon.svg'
import BreadCrumbs from './components/ui/Breadcrumbs';
import StudentList from './components/Studentlist';
import PDFViewer from './components/PDFviewer';

const Submissions7: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('All Gradings');
  const [isFilterOpen, setIsFilterOpen] = useState<boolean>(false);
  const [showFeedbackModal, setShowFeedbackModal] = useState(false);
  const [showAnalysisModal, setShowAnalysisModal] = useState(false);



  const toggleFilter = () => {
    setIsFilterOpen(!isFilterOpen);
  };

  const handleFilterChange = (filter: string) => {
    setActiveFilter(filter);
    setIsFilterOpen(false);
  };

  const handleAddFeedback = () => {
    setShowFeedbackModal(true);
  };

  const handleAutoAnalysis = () => {
    setShowAnalysisModal(true);
  };

  return (
    <div className="tw-mt-[-25px] tw-ml-[-25px]">
      <BreadCrumbs />
      <main className="tw-flex-1">
        <div className="tw-flex tw-w-full tw-gap-4 tw-overflow-x-hidden">
          <div className="tw-w-full tw-max-w-[20%] tw-h-full tw-max-h-[95%] tw-bg-white tw-shadow-md tw-p-[13px] tw-rounded tw-overflow-hidden tw-mt-[15px]">
            <div>
              <div className="tw-mb-[11px]">
                <div className="tw-flex tw-items-center tw-border tw-border-[#1d1e70] tw-rounded-md tw-p-2">
                  <img src={searchIcon} alt="Search" className="tw-h-3.5 tw-w-3.5 tw-mr-2" />
                  <input
                    type="text"
                    placeholder="Search Student"
                    className="tw-text-[12px] tw-placeholder-[#1d1f71] tw-outline-none tw-w-full"
                  />
                </div>
              </div>

              <div className="tw-relative tw-mb-4">
                <button
                  onClick={toggleFilter}
                  className="tw-flex tw-items-center tw-justify-between tw-w-full tw-border tw-border-[#1d1e70] tw-rounded-md tw-p-2"
                >
                  <span className="tw-text-[12px] tw-font-medium tw-text-[#1d1e70]">{activeFilter}</span>
                  <img src={imgIcon} alt="Dropdown" className="tw-h-1 tw-w-2" />
                </button>

                {isFilterOpen && (
                  <div className="tw-absolute tw-top-full tw-left-0 tw-w-full tw-bg-white tw-border tw-border-[#1d1e70] tw-rounded-md tw-z-10">
                    <div className="tw-p-2">
                      <div
                        className="tw-text-[9px] tw-font-normal tw-text-[#0c0c0c] tw-p-1 tw-cursor-pointer tw-hover:bg-gray-100"
                        onClick={() => handleFilterChange('Completed')}
                      >
                        Completed
                      </div>
                      <div
                        className="tw-text-[9px] tw-font-normal tw-text-[#0c0c0c] tw-p-1 tw-cursor-pointer tw-hover:bg-gray-100"
                        onClick={() => handleFilterChange('Awaiting Submission')}
                      >
                        Awaiting Submission
                      </div>
                      <div
                        className="tw-text-[9px] tw-font-normal tw-text-[#0c0c0c] tw-p-1 tw-cursor-pointer tw-hover:bg-gray-100"
                        onClick={() => handleFilterChange('Need Posting')}
                      >
                        Need Posting
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            <StudentList />
          </div>

          <div className="tw-flex-1 tw-bg-white tw-shadow-md tw-rounded tw-overflow-hidden tw-mt-[16px]">
            <div className="tw-bg-[#ecf7ff] tw-p-4 tw-flex tw-items-center tw-justify-between">
              <div className="tw-flex tw-items-center">
                <img
                  src={avImg}
                  alt="Student Avatar"
                  className="tw-h-[25px] tw-w-[25px] tw-rounded-full tw-mr-2"
                />
                <div>
                  <div className="tw-text-[10px] tw-font-medium tw-text-[#3a3541dd]">Rahul kumar</div>
                  <div className="tw-text-[10px] tw-font-semibold tw-text-[#00000082]">ID : AB12456</div>
                </div>
              </div>
              <div className="tw-flex tw-items-center tw-gap-3">
              <div className="tw-flex tw-flex-col tw-text-right">
                <div className="tw-text-[10px] tw-font-medium tw-text-[#3a3541dd]">Submitted</div>
                <div className="tw-text-[10px] tw-font-semibold tw-text-[#00000082]">Submission Receipt: REPT45782</div>
              </div>

              <div className="tw-bg-[#ffde9a] tw-rounded-[20px] tw-py-2 tw-px-4">
                <span className="tw-text-sm tw-font-semibold tw-text-[#4b4b4b]">70 / 100</span>
              </div>
              </div>
              <div className="tw-flex tw-items-center">
                <button
                  onClick={handleAddFeedback}
                  className="tw-text-[10px] tw-font-semibold tw-text-[#1d1e70] tw-mr-4"
                >
                  Add Feedback
                </button>

                <button
                  onClick={handleAutoAnalysis}
                  className="tw-flex tw-items-center tw-text-[10px] tw-font-semibold tw-text-[#1d1e70]"
                >
                  <img src={sparks} alt="Auto Analysis" className="tw-h-[13px] tw-w-[13px] tw-mr-1" />
                  Auto Analysis
                </button>
              </div>
            </div>
            <PDFViewer></PDFViewer>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Submissions7;