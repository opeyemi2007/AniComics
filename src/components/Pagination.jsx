import React from 'react';

// In a real app, props like currentPage, totalPages, onPageChange would be needed
function Pagination() {
  // Static example for now
  return (
    <div className="pagination">
      <a href="#" className="page-nav disabled">&laquo; Prev</a>
      <a href="#" className="page-num active">1</a>
      <a href="#" className="page-num">2</a>
      <a href="#" className="page-num">3</a>
      <span className="page-dots">...</span>
      <a href="#" className="page-num">25</a>
      <a href="#" className="page-nav">Next &raquo;</a>
    </div>
  );
}

export default Pagination;