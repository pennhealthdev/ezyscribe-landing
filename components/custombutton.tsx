import Link from 'next/link'
import React from 'react'

export const Custombutton = ({ children, href }:{ children: React.ReactNode, href: string})=> {
    return (
        <>
        {/* <button className="learn-more relative">
            
            <span className="button-text">{children}</span>
            <span className="circle" aria-hidden="true">
                <span className="icon arrow"></span>
            </span>
            <span className="square"></span>
        </button> */}

        <div className='w-[12rem]'>
        <Link href={href} className='learn-more relative'>
        <span className="button-text">{children}</span>
            <span className="circle" aria-hidden="true">
                <span className="icon arrow"></span>
            </span>
            <span className="square"></span>
        </Link>
        </div>


        </>
    )
}

