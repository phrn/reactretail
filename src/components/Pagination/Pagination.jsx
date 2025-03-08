import React from "react";
import s from "./Pagination.module.scss";
import ReactPaginate from "react-paginate";

const Pagination = ({ onChangePage }) => {
  return (
    <div>
      <ReactPaginate
        className={s.root}
        breakLabel="..."
        nextLabel=">"
        previousLabel="<"
        onPageChange={(event) => onChangePage(event.selected + 1)}
        pageRangeDisplayed={8}
        pageCount={7}
        renderOnZeroPageCount={null}
      />
    </div>
  );
};

export default Pagination;
