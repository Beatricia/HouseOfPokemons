import React from 'react'
import './Pagination.css'

export default function Pagination({goToNextPage, goToPrevPage}) {
    return (
        <div className='paginationContainer'>
            {goToPrevPage && <button onClick={goToPrevPage} className='prevButton'>Previous</button>}
            {goToNextPage && <button onClick={goToNextPage} className='nextButton'>Next</button>}
        </div>
    )
}