import React, { useState, useEffect } from 'react';
import FilterSection from './components/FilterSection';
import SubmissionTable from './components/SubmissionTable';
import { Submission } from './types/Submission4types';
import BreadCrumbs from './components/ui/Breadcrumbs';
import img1 from './images/img_group_1171276155.png'
import img2 from './images/img_avatar.png'
import img3 from './images/img_avatar_1.png'
import img4 from './images/img_avatar_25x25.png'
import img5 from './images/img_iconamoonarrowleft2bold.svg'
import img6 from './images/img_iconamoonarrowleft2bold_30x30.svg'

const ITEMS_PER_PAGE = 4;

const Submissions4: React.FC = () => {
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [filteredSubmissions, setFilteredSubmissions] = useState<Submission[]>([]);
  const [filter, setFilter] = useState('');
  const [search, setSearch] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const mockSubmissions: Submission[] = [
      {
        id: 'AB12456',
        studentId: '1',
        student: { id: '1', name: 'Scarlett Johansson', avatar: img1 },
        status: 'Submitted',
        grade: 90,
        feedback: [
          { text: 'This is some awesome thinking!', timestamp: '04:30 | Aug 23, 2024' },
          { text: 'This is some awesome thinking!', timestamp: '04:30 | Aug 23, 2024' }
        ],
        prompts: 'link',
        testCases: 'link'
      },
      {
        id: 'AB12456',
        studentId: '2',
        student: { id: '2', name: 'Rahul kumar', avatar: img2 },
        status: 'Submitted',
        grade: 70,
        feedback: [
          { text: 'This is some awesome thinking!', timestamp: '04:30 | Aug 23, 2024' },
          { text: 'This is some awesome thinking!', timestamp: '04:30 | Aug 23, 2024' }
        ],
        prompts: 'links',
        testCases: 'link'
      },
      {
        id: 'AB12456',
        studentId: '3',
        student: { id: '3', name: 'Scarlett Johansson', avatar: img3 },
        status: 'Submitted',
        grade: 20,
        feedback: [
          { text: 'This is some awesome thinking!', timestamp: '04:30 | Aug 23, 2024' },
          { text: 'This is some awesome thinking!', timestamp: '04:30 | Aug 23, 2024' }
        ],
        prompts: 'links',
        testCases: 'link'
      },
      {
        id: 'AB12456',
        studentId: '4',
        student: { id: '4', name: 'Scarlett Johansson', avatar: img4 },
        status: 'Submitted',
        grade: null,
        feedback: [
          { text: 'This is some awesome thinking!', timestamp: '04:30 | Aug 23, 2024' },
          { text: 'This is some awesome thinking!', timestamp: '04:30 | Aug 23, 2024' }
        ],
        prompts: 'links',
        testCases: 'link'
      },
      {
        id: 'AB12456',
        studentId: '5',
        student: { id: '4', name: 'Scarlett Johansson', avatar: img4 },
        status: 'Submitted',
        grade: null,
        feedback: [
          { text: 'This is some awesome thinking!', timestamp: '04:30 | Aug 23, 2024' },
          { text: 'This is some awesome thinking!', timestamp: '04:30 | Aug 23, 2024' }
        ],
        prompts: 'links',
        testCases: 'link'
      },
      {
        id: 'AB12456',
        studentId: '1',
        student: { id: '1', name: 'Scarlett Johansson', avatar: img1 },
        status: 'Submitted',
        grade: 90,
        feedback: [
          { text: 'This is some awesome thinking!', timestamp: '04:30 | Aug 23, 2024' },
          { text: 'This is some awesome thinking!', timestamp: '04:30 | Aug 23, 2024' }
        ],
        prompts: 'link',
        testCases: 'link'
      },
      {
        id: 'AB12456',
        studentId: '2',
        student: { id: '2', name: 'Rahul kumar', avatar: img2 },
        status: 'Submitted',
        grade: 70,
        feedback: [
          { text: 'This is some awesome thinking!', timestamp: '04:30 | Aug 23, 2024' },
          { text: 'This is some awesome thinking!', timestamp: '04:30 | Aug 23, 2024' }
        ],
        prompts: 'links',
        testCases: 'link'
      },
      {
        id: 'AB12456',
        studentId: '3',
        student: { id: '3', name: 'Scarlett Johansson', avatar: img3 },
        status: 'Submitted',
        grade: 20,
        feedback: [
          { text: 'This is some awesome thinking!', timestamp: '04:30 | Aug 23, 2024' },
          { text: 'This is some awesome thinking!', timestamp: '04:30 | Aug 23, 2024' }
        ],
        prompts: 'links',
        testCases: 'link'
      },
      {
        id: 'AB12456',
        studentId: '4',
        student: { id: '4', name: 'Scarlett Johansson', avatar: img4 },
        status: 'Submitted',
        grade: null,
        feedback: [
          { text: 'This is some awesome thinking!', timestamp: '04:30 | Aug 23, 2024' },
          { text: 'This is some awesome thinking!', timestamp: '04:30 | Aug 23, 2024' }
        ],
        prompts: 'links',
        testCases: 'link'
      },
      {
        id: 'AB12456',
        studentId: '5',
        student: { id: '4', name: 'Scarlett Johansson', avatar: img4 },
        status: 'Submitted',
        grade: null,
        feedback: [
          { text: 'This is some awesome thinking!', timestamp: '04:30 | Aug 23, 2024' },
          { text: 'This is some awesome thinking!', timestamp: '04:30 | Aug 23, 2024' }
        ],
        prompts: 'links',
        testCases: 'link'
      },
      {
        id: 'AB12456',
        studentId: '1',
        student: { id: '1', name: 'Scarlett Johansson', avatar: img1 },
        status: 'Submitted',
        grade: 90,
        feedback: [
          { text: 'This is some awesome thinking!', timestamp: '04:30 | Aug 23, 2024' },
          { text: 'This is some awesome thinking!', timestamp: '04:30 | Aug 23, 2024' }
        ],
        prompts: 'link',
        testCases: 'link'
      },
      {
        id: 'AB12456',
        studentId: '2',
        student: { id: '2', name: 'Rahul kumar', avatar: img2 },
        status: 'Submitted',
        grade: 70,
        feedback: [
          { text: 'This is some awesome thinking!', timestamp: '04:30 | Aug 23, 2024' },
          { text: 'This is some awesome thinking!', timestamp: '04:30 | Aug 23, 2024' }
        ],
        prompts: 'links',
        testCases: 'link'
      },
      {
        id: 'AB12456',
        studentId: '3',
        student: { id: '3', name: 'Scarlett Johansson', avatar: img3 },
        status: 'Submitted',
        grade: 20,
        feedback: [
          { text: 'This is some awesome thinking!', timestamp: '04:30 | Aug 23, 2024' },
          { text: 'This is some awesome thinking!', timestamp: '04:30 | Aug 23, 2024' }
        ],
        prompts: 'links',
        testCases: 'link'
      },
      {
        id: 'AB12456',
        studentId: '4',
        student: { id: '4', name: 'Scarlett Johansson', avatar: img4 },
        status: 'Submitted',
        grade: null,
        feedback: [
          { text: 'This is some awesome thinking!', timestamp: '04:30 | Aug 23, 2024' },
          { text: 'This is some awesome thinking!', timestamp: '04:30 | Aug 23, 2024' }
        ],
        prompts: 'links',
        testCases: 'link'
      },
      {
        id: 'AB12456',
        studentId: '5',
        student: { id: '4', name: 'Scarlett Johansson', avatar: img4 },
        status: 'Submitted',
        grade: null,
        feedback: [
          { text: 'This is some awesome thinking!', timestamp: '04:30 | Aug 23, 2024' },
          { text: 'This is some awesome thinking!', timestamp: '04:30 | Aug 23, 2024' }
        ],
        prompts: 'links',
        testCases: 'link'
      },
      {
        id: 'AB12456',
        studentId: '1',
        student: { id: '1', name: 'Scarlett Johansson', avatar: img1 },
        status: 'Submitted',
        grade: 90,
        feedback: [
          { text: 'This is some awesome thinking!', timestamp: '04:30 | Aug 23, 2024' },
          { text: 'This is some awesome thinking!', timestamp: '04:30 | Aug 23, 2024' }
        ],
        prompts: 'link',
        testCases: 'link'
      },
      {
        id: 'AB12456',
        studentId: '2',
        student: { id: '2', name: 'Rahul kumar', avatar: img2 },
        status: 'Submitted',
        grade: 70,
        feedback: [
          { text: 'This is some awesome thinking!', timestamp: '04:30 | Aug 23, 2024' },
          { text: 'This is some awesome thinking!', timestamp: '04:30 | Aug 23, 2024' }
        ],
        prompts: 'links',
        testCases: 'link'
      },
      {
        id: 'AB12456',
        studentId: '3',
        student: { id: '3', name: 'Scarlett Johansson', avatar: img3 },
        status: 'Submitted',
        grade: 20,
        feedback: [
          { text: 'This is some awesome thinking!', timestamp: '04:30 | Aug 23, 2024' },
          { text: 'This is some awesome thinking!', timestamp: '04:30 | Aug 23, 2024' }
        ],
        prompts: 'links',
        testCases: 'link'
      },
      {
        id: 'AB12456',
        studentId: '4',
        student: { id: '4', name: 'Scarlett Johansson', avatar: img4 },
        status: 'Submitted',
        grade: null,
        feedback: [
          { text: 'This is some awesome thinking!', timestamp: '04:30 | Aug 23, 2024' },
          { text: 'This is some awesome thinking!', timestamp: '04:30 | Aug 23, 2024' }
        ],
        prompts: 'links',
        testCases: 'link'
      },
      {
        id: 'AB12456',
        studentId: '5',
        student: { id: '4', name: 'Scarlett Johansson', avatar: img4 },
        status: 'Submitted',
        grade: null,
        feedback: [
          { text: 'This is some awesome thinking!', timestamp: '04:30 | Aug 23, 2024' },
          { text: 'This is some awesome thinking!', timestamp: '04:30 | Aug 23, 2024' }
        ],
        prompts: 'links',
        testCases: 'link'
      },
      {
        id: 'AB12456',
        studentId: '1',
        student: { id: '1', name: 'Scarlett Johansson', avatar: img1 },
        status: 'Submitted',
        grade: 90,
        feedback: [
          { text: 'This is some awesome thinking!', timestamp: '04:30 | Aug 23, 2024' },
          { text: 'This is some awesome thinking!', timestamp: '04:30 | Aug 23, 2024' }
        ],
        prompts: 'link',
        testCases: 'link'
      },
      {
        id: 'AB12456',
        studentId: '2',
        student: { id: '2', name: 'Rahul kumar', avatar: img2 },
        status: 'Submitted',
        grade: 70,
        feedback: [
          { text: 'This is some awesome thinking!', timestamp: '04:30 | Aug 23, 2024' },
          { text: 'This is some awesome thinking!', timestamp: '04:30 | Aug 23, 2024' }
        ],
        prompts: 'links',
        testCases: 'link'
      },
      {
        id: 'AB12456',
        studentId: '3',
        student: { id: '3', name: 'Scarlett Johansson', avatar: img3 },
        status: 'Submitted',
        grade: 20,
        feedback: [
          { text: 'This is some awesome thinking!', timestamp: '04:30 | Aug 23, 2024' },
          { text: 'This is some awesome thinking!', timestamp: '04:30 | Aug 23, 2024' }
        ],
        prompts: 'links',
        testCases: 'link'
      },
      {
        id: 'AB12456',
        studentId: '4',
        student: { id: '4', name: 'Scarlett Johansson', avatar: img4 },
        status: 'Submitted',
        grade: null,
        feedback: [
          { text: 'This is some awesome thinking!', timestamp: '04:30 | Aug 23, 2024' },
          { text: 'This is some awesome thinking!', timestamp: '04:30 | Aug 23, 2024' }
        ],
        prompts: 'links',
        testCases: 'link'
      },
      {
        id: 'AB12456',
        studentId: '5',
        student: { id: '4', name: 'Scarlett Johansson', avatar: img4 },
        status: 'Submitted',
        grade: null,
        feedback: [
          { text: 'This is some awesome thinking!', timestamp: '04:30 | Aug 23, 2024' },
          { text: 'This is some awesome thinking!', timestamp: '04:30 | Aug 23, 2024' }
        ],
        prompts: 'links',
        testCases: 'link'
      },
      {
        id: 'AB12456',
        studentId: '1',
        student: { id: '1', name: 'Scarlett Johansson', avatar: img1 },
        status: 'Submitted',
        grade: 90,
        feedback: [
          { text: 'This is some awesome thinking!', timestamp: '04:30 | Aug 23, 2024' },
          { text: 'This is some awesome thinking!', timestamp: '04:30 | Aug 23, 2024' }
        ],
        prompts: 'link',
        testCases: 'link'
      },
      {
        id: 'AB12456',
        studentId: '2',
        student: { id: '2', name: 'Rahul kumar', avatar: img2 },
        status: 'Submitted',
        grade: 70,
        feedback: [
          { text: 'This is some awesome thinking!', timestamp: '04:30 | Aug 23, 2024' },
          { text: 'This is some awesome thinking!', timestamp: '04:30 | Aug 23, 2024' }
        ],
        prompts: 'links',
        testCases: 'link'
      },
      {
        id: 'AB12456',
        studentId: '3',
        student: { id: '3', name: 'Scarlett Johansson', avatar: img3 },
        status: 'Submitted',
        grade: 20,
        feedback: [
          { text: 'This is some awesome thinking!', timestamp: '04:30 | Aug 23, 2024' },
          { text: 'This is some awesome thinking!', timestamp: '04:30 | Aug 23, 2024' }
        ],
        prompts: 'links',
        testCases: 'link'
      },
      {
        id: 'AB12456',
        studentId: '4',
        student: { id: '4', name: 'Scarlett Johansson', avatar: img4 },
        status: 'Submitted',
        grade: null,
        feedback: [
          { text: 'This is some awesome thinking!', timestamp: '04:30 | Aug 23, 2024' },
          { text: 'This is some awesome thinking!', timestamp: '04:30 | Aug 23, 2024' }
        ],
        prompts: 'links',
        testCases: 'link'
      },
      {
        id: 'AB12456',
        studentId: '5',
        student: { id: '4', name: 'Scarlett Johansson', avatar: img4 },
        status: 'Submitted',
        grade: null,
        feedback: [
          { text: 'This is some awesome thinking!', timestamp: '04:30 | Aug 23, 2024' },
          { text: 'This is some awesome thinking!', timestamp: '04:30 | Aug 23, 2024' }
        ],
        prompts: 'links',
        testCases: 'link'
      },
      {
        id: 'AB12456',
        studentId: '1',
        student: { id: '1', name: 'Scarlett Johansson', avatar: img1 },
        status: 'Submitted',
        grade: 90,
        feedback: [
          { text: 'This is some awesome thinking!', timestamp: '04:30 | Aug 23, 2024' },
          { text: 'This is some awesome thinking!', timestamp: '04:30 | Aug 23, 2024' }
        ],
        prompts: 'link',
        testCases: 'link'
      },
      {
        id: 'AB12456',
        studentId: '2',
        student: { id: '2', name: 'Rahul kumar', avatar: img2 },
        status: 'Submitted',
        grade: 70,
        feedback: [
          { text: 'This is some awesome thinking!', timestamp: '04:30 | Aug 23, 2024' },
          { text: 'This is some awesome thinking!', timestamp: '04:30 | Aug 23, 2024' }
        ],
        prompts: 'links',
        testCases: 'link'
      },
      {
        id: 'AB12456',
        studentId: '3',
        student: { id: '3', name: 'Scarlett Johansson', avatar: img3 },
        status: 'Submitted',
        grade: 20,
        feedback: [
          { text: 'This is some awesome thinking!', timestamp: '04:30 | Aug 23, 2024' },
          { text: 'This is some awesome thinking!', timestamp: '04:30 | Aug 23, 2024' }
        ],
        prompts: 'links',
        testCases: 'link'
      },
      {
        id: 'AB12456',
        studentId: '4',
        student: { id: '4', name: 'Scarlett Johansson', avatar: img4 },
        status: 'Submitted',
        grade: null,
        feedback: [
          { text: 'This is some awesome thinking!', timestamp: '04:30 | Aug 23, 2024' },
          { text: 'This is some awesome thinking!', timestamp: '04:30 | Aug 23, 2024' }
        ],
        prompts: 'links',
        testCases: 'link'
      },
      {
        id: 'AB12456',
        studentId: '5',
        student: { id: '4', name: 'Scarlett Johansson', avatar: img4 },
        status: 'Submitted',
        grade: null,
        feedback: [
          { text: 'This is some awesome thinking!', timestamp: '04:30 | Aug 23, 2024' },
          { text: 'This is some awesome thinking!', timestamp: '04:30 | Aug 23, 2024' }
        ],
        prompts: 'links',
        testCases: 'link'
      },
      {
        id: 'AB12456',
        studentId: '1',
        student: { id: '1', name: 'Scarlett Johansson', avatar: img1 },
        status: 'Submitted',
        grade: 90,
        feedback: [
          { text: 'This is some awesome thinking!', timestamp: '04:30 | Aug 23, 2024' },
          { text: 'This is some awesome thinking!', timestamp: '04:30 | Aug 23, 2024' }
        ],
        prompts: 'link',
        testCases: 'link'
      },
      {
        id: 'AB12456',
        studentId: '2',
        student: { id: '2', name: 'Rahul kumar', avatar: img2 },
        status: 'Submitted',
        grade: 70,
        feedback: [
          { text: 'This is some awesome thinking!', timestamp: '04:30 | Aug 23, 2024' },
          { text: 'This is some awesome thinking!', timestamp: '04:30 | Aug 23, 2024' }
        ],
        prompts: 'links',
        testCases: 'link'
      },
      {
        id: 'AB12456',
        studentId: '3',
        student: { id: '3', name: 'Scarlett Johansson', avatar: img3 },
        status: 'Submitted',
        grade: 20,
        feedback: [
          { text: 'This is some awesome thinking!', timestamp: '04:30 | Aug 23, 2024' },
          { text: 'This is some awesome thinking!', timestamp: '04:30 | Aug 23, 2024' }
        ],
        prompts: 'links',
        testCases: 'link'
      },
      {
        id: 'AB12456',
        studentId: '4',
        student: { id: '4', name: 'Scarlett Johansson', avatar: img4 },
        status: 'Submitted',
        grade: null,
        feedback: [
          { text: 'This is some awesome thinking!', timestamp: '04:30 | Aug 23, 2024' },
          { text: 'This is some awesome thinking!', timestamp: '04:30 | Aug 23, 2024' }
        ],
        prompts: 'links',
        testCases: 'link'
      },
      {
        id: 'AB12456',
        studentId: '5',
        student: { id: '4', name: 'Scarlett Johansson', avatar: img4 },
        status: 'Submitted',
        grade: null,
        feedback: [
          { text: 'This is some awesome thinking!', timestamp: '04:30 | Aug 23, 2024' },
          { text: 'This is some awesome thinking!', timestamp: '04:30 | Aug 23, 2024' }
        ],
        prompts: 'links',
        testCases: 'link'
      }
    ];

    setSubmissions(mockSubmissions);
    setFilteredSubmissions(mockSubmissions);
  }, []);

  useEffect(() => {
    let result = [...submissions];

    if (filter) {
      if (filter === 'Graded') {
        result = result.filter(submission => submission.grade !== null);
      } else if (filter === 'Ungraded') {
        result = result.filter(submission => submission.grade === null);
      }
    }

    if (search) {
      result = result.filter(submission =>
        submission.student.name.toLowerCase().includes(search.toLowerCase()) ||
        submission.id.toLowerCase().includes(search.toLowerCase())
      );
    }

    setCurrentPage(1); 
    setFilteredSubmissions(result);
  }, [submissions, filter, search]);

  const handleFilterChange = (newFilter: string) => {
    setFilter(newFilter);
  };

  const handleSearchChange = (newSearch: string) => {
    setSearch(newSearch);
  };

  const totalPages = Math.ceil(filteredSubmissions.length / ITEMS_PER_PAGE);
  const paginatedSubmissions = filteredSubmissions.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(prev => prev + 1);
    }
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(prev => prev - 1);
    }
  };

  return (
    <div className="tw-min-h-screen tw-mt-[-25px] tw-ml-[-25px] tw-w-full">
      <BreadCrumbs />
      <div className="tw-p-5">
        <FilterSection 
          onFilterChange={handleFilterChange} 
          onSearchChange={handleSearchChange} 
        />
        
        <SubmissionTable submissions={paginatedSubmissions} />

        {/* Pagination */}
        <div className="tw-mt-6 tw-flex tw-items-center tw-justify-between">
  <div className="tw-flex tw-items-center">
    <span className="tw-text-xs tw-text-[#444242] tw-mr-2">Page</span>
    <span className="tw-text-xs tw-font-semibold tw-text-[#1d1e70]">{currentPage}</span>
  </div>
  <div className="tw-flex tw-items-center">
    <button className="tw-mr-4" onClick={goToPreviousPage} disabled={currentPage === 1}>
      <img src={img5} alt="Previous" className="tw-w-[30px] tw-h-[30px]" />
    </button>

    {totalPages <= 3 ? (
      [...Array(totalPages).keys()].map(num => (
        <span
          key={num}
          className={`tw-text-xs tw-mx-2 ${
            num + 1 === currentPage
              ? 'tw-font-semibold tw-text-[#1d1e70]'
              : 'tw-text-[#333333]'
          }`}
        >
          {num + 1}
        </span>
      ))
    ) : (
      <>
        <span
          className={`tw-text-xs tw-mx-2 ${
            currentPage === 1 ? 'tw-font-semibold tw-text-[#1d1e70]' : 'tw-text-[#333333]'
          }`}
        >
          1
        </span>
        <span
          className={`tw-text-xs tw-mx-2 ${
            currentPage === 2 ? 'tw-font-semibold tw-text-[#1d1e70]' : 'tw-text-[#333333]'
          }`}
        >
          2
        </span>
        <span className="tw-text-xs tw-mx-2 tw-text-black">...</span>
        <span
          className={`tw-text-xs tw-mx-2 ${
            currentPage === totalPages ? 'tw-font-semibold tw-text-[#1d1e70]' : 'tw-text-[#444242]'
          }`}
        >
          {totalPages}
        </span>
      </>
    )}

    <button className="tw-ml-4" onClick={goToNextPage} disabled={currentPage === totalPages}>
      <img src={img6} alt="Next" className="tw-w-[30px] tw-h-[30px]" />
    </button>
  </div>
</div>

      </div>
    </div>
  );
};

export default Submissions4;
