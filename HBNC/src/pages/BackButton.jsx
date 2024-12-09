import React from 'react';
import { Link } from 'react-router-dom';

const BackButton = ({back}) => {
    return (
        <div className='flex'>
            <Link to={'/'}
                className='underline back-button bg-sky-800 text-white px-4 py-1 rounded-lg w-fit' onClick={()=>back(false)}>
                ⫷---- Go Back
            </Link>
        </div>
    )
}

export default BackButton