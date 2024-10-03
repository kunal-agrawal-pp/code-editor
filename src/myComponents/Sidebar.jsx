import React, { useEffect } from 'react'

const Sidebar = ({ isSideBarOpen }) => {

    return (
        <>
            <div className="w-[15rem] h-[93vh] bg-skin-5 bg-[#000000] text-white py-[1.2rem] px-[0.5rem]">
                <div className="w-[100%] flex flex-col items-center">
                    <button className="button-tranparent">+ Create a Repl</button>
                </div>
            </div>
        </>
    )
}

export default Sidebar