import { useState } from "react"
import paginationCSS from "./pagination.module.css"
import User from "./Users"


export default function Pagination({nPages, currentPage, setCurrentPage}){


    
    const pageNumbers = [...Array(nPages + 1).keys()].slice(1);

    const nextPage = () => {
        if(currentPage !== nPages) setCurrentPage(currentPage + 1)
}
    const prevPage = () => {
        if(currentPage !== 1) 
            setCurrentPage(currentPage - 1)
    }
    return (
        <div className="pag-list">
    


            { 

<div className={paginationCSS.pagList}>

            
            <ul>
                <li>
                <a href="#" onClick={prevPage}> previous</a>
               </li>
          
                 {pageNumbers.map(pageNumber=>(
                  <li key={pageNumber}
                    className = {`page-item ${currentPage == pageNumber ? 'active' : ''}`}>
                    <a onClick={()=> setCurrentPage(pageNumber)}
                    className="page-link"
                    href="#">

                        {pageNumber}
                    </a>
                    
                    </li>
            ))}

          <li className="page-item">
                    <a className="page-link" 
                        onClick={nextPage}
                        href='#'>
                        
                        Next
                    </a>
              
        
           </li>
         </ul> 
         </div>
}
        </div>
    )
 













    // import React from "react";

    // export default function Pagination (props){
    //     const {currentPage, maxPageLimit, minPageLimit} = props;

    //     // const totalPages = props.response.totalPages-1;
    //     // const data = props.response.data;

    //     const page =[];
    //     for (let i = 1; i<= page.length; i++){
    //         page.push(i);
    //     } 

    //     const pageNumbers = page.map(pages =>{
    //         if (pages <= maxPageLimit && page > minPageLimit){
    //             return(
    //                 <li key={page} id={page} onClick ={handlePageClick}
    //                 className={currentPage === page ? 'active' :null}>
    //                     {pages}
    //                 </li>
    //             );

    //         }else{
    //             return null;
    //         }
    //     })



    //     let pageIncrementEllipes = null;
    //     if (page.length > maxPageLimit){
    //         pageIncrementEllipes = <li onClick={handleNextClick}></li>
    //     }
    //     let pageDecrementEllipes = null;
    //     if(minPageLimit >=1){
    // pageDecrementEllipes = <li onClick={handlePrevClick}></li>
    //     }


    // const handlePrevClick = () => {
    // props.onPrevClick();
    // }

    // const handleNextClick = () =>{
    //     props.onNextClick ();
    // }

    // const handlePageClick = (e) =>{
    //     props.onPageChange(Number(e.target.id));
    // }



    //     return(
    //         <div>
    //    <ul className="pageNumber">
    //            <li>
    //             <button onClick={handlePrevClick} disabled ={currentPage === page[0]}>Prev</button>
    //            </li>
    //            {pageDecrementEllipes}
    // {page}
    //            {pageNumbers}
    //            {pageIncrementEllipes}
    //           </ul>
    //           <li>
    //             <button onClick={handleNextClick} disabled ={currentPage === page[page.length-1]}>$gt;Next</button>
    //            </li>



    //         </div>
    //     )
    // 
}