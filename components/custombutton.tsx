import React from 'react'

export const Custombutton = ({ children }:{ children: React.ReactNode})=> {
    return (
        <>
        <button className="learn-more relative">
            
            <span className="button-text">{children}</span>
            <span className="circle" aria-hidden="true">
                <span className="icon arrow"></span>
            </span>
            <span className="square"></span>
        </button>

        {/* <button className="customButton relative">
            
            <span className="button-text">Learn More</span>
            <span className="circle" aria-hidden="true">
                <span className="icon arrow"></span>
            </span>
            <span className="square"></span>
        </button> */}

        </>
    )
}

