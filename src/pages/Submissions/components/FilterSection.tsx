import React, { useState } from 'react';
import img1 from '../images/img_icon_4x8.svg'
import img2 from '../images/img_icon_4x8.svg'
import img3 from '../images/img_icon_outline_search.svg'

interface FilterSectionProps {
  onFilterChange: (filter: string) => void;
  onSearchChange: (search: string) => void;
}

const FilterSection: React.FC<FilterSectionProps> = ({ onFilterChange, onSearchChange }) => {
  const [filterOpen, setFilterOpen] = useState(false);
  const [containOpen, setContainOpen] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  const handleFilterClick = () => setFilterOpen(!filterOpen);
  const handleContainClick = () => setContainOpen(!containOpen);
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
    onSearchChange(e.target.value);
  };

  return (
    <div className="tw-flex tw-w-[989px] tw-items-center tw-justify-between tw-mb-4">
      <div className="tw-flex tw-gap-3">
        <div className="tw-relative">
          <button
            onClick={handleFilterClick}
            className="tw-h-[30px] tw-w-[194px] tw-px-3 tw-border tw-border-gray-300 tw-bg-white tw-flex tw-items-center tw-justify-between tw-rounded-[4px] tw-text-sm tw-font-medium tw-text-[#1d1e70]"
          >
            All students
            <img src={img1} alt="Dropdown" className="tw-w-[10px] tw-h-[10px]" />
          </button>
          {filterOpen && (
            <div className="tw-absolute tw-z-10 tw-mt-1 tw-w-full tw-bg-white tw-shadow-md tw-rounded-md">
              <div className="tw-p-2 tw-space-y-1">
                {['No Submission', 'Draft Saved', 'Submitted'].map((item) => (
                  <div
                    key={item}
                    className="tw-cursor-pointer tw-text-[9px] hover:tw-bg-gray-100 tw-p-2 tw-rounded"
                    onClick={() => {
                      onFilterChange(item);
                      setFilterOpen(false);
                    }}
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
        
        <div className="tw-relative">
          <button
            onClick={handleContainClick}
            className="tw-h-[30px] tw-w-[130px] tw-px-3 tw-border tw-border-gray-300 tw-bg-white tw-flex tw-items-center tw-justify-between tw-rounded-[4px] tw-text-sm tw-font-medium tw-text-[#1d1e70]"
          >
            Gradings
            <img src={img2} alt="Dropdown" className="tw-w-[10px] tw-h-[10px]" />
          </button>
          {containOpen && (
            <div className="tw-absolute tw-z-10 tw-mt-1 tw-w-full tw-bg-white tw-shadow-md tw-rounded-md">
              <div className="tw-p-2 tw-space-y-1">
                {['Completed', 'Awaiting Submission', 'Need Posting'].map((item) => (
                  <div
                    key={item}
                    className="tw-cursor-pointer tw-text-[9px] hover:tw-bg-gray-100 tw-p-2 tw-rounded"
                    onClick={() => {
                      onFilterChange(item);
                      setContainOpen(false);
                    }}
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Search Input */}
        <div className="tw-h-[30px] tw-w-[256px] tw-border tw-border-gray-300 tw-bg-white tw-rounded-[4px] tw-px-3 tw-flex tw-items-center">
          <img
            src={img3}
            alt="Search"
            className="tw-w-[14px] tw-h-[14px] tw-mr-2"
          />
          <input
            type="text"
            placeholder="Search Student"
            value={searchValue}
            onChange={handleSearchChange}
            className="tw-text-sm tw-text-[#1d1e70] tw-font-medium tw-w-full tw-bg-transparent tw-outline-none"
          />
        </div>
      </div>

      {/* Right - Submission Summary */}
      <div className="tw-w-[220px] tw-h-[37px] tw-bg-[#ffb384] tw-border tw-border-[#d8af5a] tw-rounded-full tw-flex tw-items-center tw-px-4">
        <span className="tw-text-[10px] tw-font-semibold tw-text-[#333333]">
          28 of 30 Submitted | 25 to Grade
        </span>
      </div>
    </div>
  );
};

export default FilterSection;
