import React from 'react';
import rightArrow from "../img/rightArrow.png";
import leftArrow from "../img/leftArrow.png";

const Pagination = ({ postsPerPage, totalPosts, paginate, currentPage }) => {
    const pageNumbers = [];
    const totalPages = Math.ceil(totalPosts / postsPerPage);
    for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
    }
    function getPagination(totalPages, currentPage) {
        if (totalPages > 7) {
            if (currentPage === 1 || currentPage === 2 || currentPage === 3 || currentPage === totalPages - 2 || currentPage === totalPages - 1 || currentPage === totalPages) {
                return (
                    <>
                        <div className={"paginationNumber" + (currentPage===1  ? " active" : "")} onClick={() => paginate(1)}>1</div>
                        <div className={"paginationNumber" + (currentPage===2  ? " active" : "")} onClick={() => paginate(2)}>2</div>
                        <div className={"paginationNumber" + (currentPage===3  ? " active" : "")} onClick={() => paginate(3)}>3</div>
                        <div className={"paginationNumber"}>...</div>
                        <div className={"paginationNumber" + (currentPage=== totalPages - 2  ? " active" : "")} onClick={() => paginate(totalPages - 2)}>{totalPages - 2}</div>
                        <div className={"paginationNumber" + (currentPage=== totalPages - 1 ? " active" : "")} onClick={() => paginate(totalPages - 1)}>{totalPages - 1}</div>
                        <div className={"paginationNumber" + (currentPage=== totalPages ? " active" : "")} onClick={() => paginate(totalPages)}>{totalPages}</div>
                    </>
                );
            } else {
                return (
                    <>
                        <div className="paginationNumber" onClick={() => paginate(1)}>1</div>
                        <div className="paginationNumber" onClick={() => paginate(2)}>2</div>
                        <div className="paginationNumber">...</div>
                        <div className="paginationNumber active" onClick={() => paginate(currentPage)}>{currentPage}</div>
                        <div className="paginationNumber">...</div>
                        <div className="paginationNumber" onClick={() => paginate(totalPages - 1)}>{totalPages - 1}</div>
                        <div className="paginationNumber" onClick={() => paginate(totalPages)}>{totalPages}</div>
                    </>
                );
            }
        } else {
            return (
                pageNumbers.map(number => (
                    <div className="paginationNumber" onClick={() => paginate(number)}>{number}</div>
                ))
            );
        }
    }
    return (
        <>
            <div className="row justify-content-between my-5">
                <div className="col-lg-4 col-md-6 col-10 mx-auto pagination d-flex flex-row justify-content-evenly align-items-center px-lg-0 px-3">
                    <div
                        className="leftArrow d-flex flex-row justify-content-evenly align-items-center"
                        onClick={() => paginate(currentPage - 1)}>
                        <img src={leftArrow} alt="" />
                    </div>
                    {getPagination(totalPages, currentPage)}
                    <div
                        className="rightArrow d-flex flex-row justify-content-evenly align-items-center"
                        onClick={() => paginate(currentPage + 1)}>
                        <img src={rightArrow} alt="" />
                    </div>
                </div>
            </div>

        </>
    );
}

export default Pagination;