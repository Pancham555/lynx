import React from 'react'

const Btn3 = ({ children, onClick }) => {
    return (
        <div onClick={onClick} className='inline-block cursor-pointer px-8 py-3 font-semibold bg-transparent hover:bg-white hover:text-gray-800 duration-150 border-2 border-white text-white rounded-md text-lg'>{children}</div>
    )
}

export default Btn3