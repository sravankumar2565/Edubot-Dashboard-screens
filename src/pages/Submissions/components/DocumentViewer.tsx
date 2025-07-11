import React, { useState } from 'react';
import Card from './Card';

interface DocumentViewerProps {
  content: string;
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const DocumentViewer: React.FC<DocumentViewerProps> = ({
  content,
  currentPage,
  totalPages,
  onPageChange
}) => {
  const [zoom, setZoom] = useState(100);

  const handleZoomIn = () => {
    if (zoom < 200) setZoom(zoom + 10);
  };

  const handleZoomOut = () => {
    if (zoom > 50) setZoom(zoom - 10);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  return (
    <Card className="tw-w-full tw-h-[725px] tw-flex tw-flex-col">
      {/* Toolbar */}
      <div
        className="tw-text-white tw-px-3 tw-py-2 tw-flex tw-items-center tw-justify-between"
        style={{ width: '980px', height: '32px', backgroundColor: '#1a1a1a' }}
      >
        <div className="tw-flex tw-items-center tw-space-x-2">
          <button className="tw-p-1">
            <img src="/images/img_rectangle_350752.png" alt="Sidebar" className="tw-h-4 tw-w-4" />
          </button>

          {/* Page Navigation */}
          <span className="tw-text-sm tw-text-gray-400">Page</span>
          <button 
            className="tw-text-gray-400 disabled:tw-opacity-30"
            onClick={handlePrevPage}
            disabled={currentPage === 1}
          >
            ◀
          </button>
          <input 
            type="text"
            value={currentPage}
            onChange={(e) => {
              const page = parseInt(e.target.value);
              if (!isNaN(page) && page > 0 && page <= totalPages) {
                onPageChange(page);
              }
            }}
            className="tw-w-8 tw-text-center tw-bg-[#2a2a2a] tw-text-white tw-border tw-border-gray-600 tw-rounded"
          />
          <span className="tw-text-sm tw-text-gray-400">of {totalPages}</span>
          <button 
            className="tw-text-gray-400 disabled:tw-opacity-30"
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
          >
            ▶
          </button>
        </div>

        {/* Tools Section */}
        <div className="tw-flex tw-items-center tw-space-x-4">
          <button className="tw-text-white hover:tw-text-gray-300">🤚</button>
          <button onClick={handleZoomOut} className="tw-text-white tw-text-lg">−</button>
          <button onClick={handleZoomIn} className="tw-text-white tw-text-lg">+</button>
          <button className="tw-text-white">⤢</button>
          <button className="tw-text-white">📝</button>
          <button className="tw-text-white">💬</button>
          <span className="tw-text-gray-600">↶ ↷</span>
          <button className="tw-text-white">🖨️</button>
          <button className="tw-text-white">⬇️</button>
          <button className="tw-text-white">🔍</button>
          <button className="tw-text-white">📑</button>
        </div>
      </div>

      {/* Document Content */}
      <div className="tw-flex-1 tw-bg-gray-100 tw-p-4 tw-overflow-auto">
        <div 
          className="tw-bg-white tw-p-4 tw-mx-auto tw-rounded tw-shadow-sm"
          style={{ 
            width: '700px',
            minHeight: '400px',
            fontFamily: 'monospace',
            whiteSpace: 'pre-wrap',
            fontSize: '12px',
            lineHeight: '1.5'
          }}
        >
          <pre className="tw-text-sm tw-text-left tw-overflow-x-auto">
            {content}
          </pre>
        </div>
      </div>
    </Card>
  );
};

export default DocumentViewer;
