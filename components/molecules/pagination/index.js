import React, { useState } from 'react';
import Cards from '../cards';
import Image from 'next/image';
import Link from 'next/link';

// Pagination Icon import 
import PaginationIcon from '../../../assets/images/pagelisting/pagination-icon.svg';
import Slider from 'react-slick';
import CardSlider from '../cards/slidercards';

const Pagination = ({ Cardsdata, handleWishlistClick }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const recordsPerPage = 12;
    const lastIndex = currentPage * recordsPerPage;
    const firstIndex = lastIndex - recordsPerPage;
    const records = Cardsdata?.slice(firstIndex, lastIndex);
    const npage = Math.ceil(Cardsdata?.length / recordsPerPage);
    const numbers = [...Array(npage + 1).keys()].slice(1);

    // Pagination numbers  handling
    function prePage() {
        if (currentPage !== 1) {
            setCurrentPage(currentPage - 1);
        }
    }
    function changeCPage(id) {
        setCurrentPage(id);
    }
    function nextPage() {
        if (currentPage !== npage) {
            setCurrentPage(currentPage + 1);
        }
    }
    return (
        <>
            <div className='cards-wrapper'>
                <CardSlider Cardsdata={records} handleWishlistClick = {handleWishlistClick} />
            </div>

            <div className='pagination'>
                <ul>
                    <li className='page-item'>
                        <button className='page-link' onClick={prePage}><Image src={PaginationIcon} alt="Previous Icon" /></button>
                    </li>
                    {
                        numbers.map((n, j) => {
                            return <li className={`page-item ${currentPage === n ? 'active' : ''}`} key={j}>
                                <button className='page-link' onClick={() => changeCPage(n)}>{n}</button>
                            </li>
                        })
                    }

                    <li className='page-item'>
                        <button className='page-link' onClick={nextPage}><Image src={PaginationIcon} alt="Previous Icon" style={{ transform: "rotate(180deg)" }} /></button>
                    </li>
                </ul>
            </div>
        </>


    )
}

export default Pagination;