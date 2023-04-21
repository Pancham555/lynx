import React from 'react'

const Btn1 = ({ onClick, children, bgcolor = 'bg-theme-2', textcolor = 'text-white' }) => {
    return (
        <div onClick={onClick} style={{ textSizeAdjust: '20%' }} className={`inline-block cursor-pointer px-6 py-3 font-semibold
           rounded-md text-lg ${bgcolor} ${textcolor}`}>
            {children}
        </div>
    )
}

export default Btn1