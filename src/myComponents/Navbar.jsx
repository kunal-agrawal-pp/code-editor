import React, { useEffect, useRef } from 'react'
import NotificationSVG from '../assets/notication.svg';
import SearchSVG from '../assets/search.svg';
import SidebarSVG from '../assets/sidebar.svg';

const Navbar = ({ isSideBarOpen, setIsSideBarOpen }) => {
    const inputRef = useRef(null);

    useEffect(() => {
        // Function to handle key press events
        const handleKeyDown = (event) => {
            if (event.key === '/') {
                event.preventDefault(); // Prevent the default behavior (optional)
                if (inputRef.current) {
                    inputRef.current.focus(); // Focus the input when '/' is pressed
                }
            }
        };

        // Attach the event listener when the component is mounted
        window.addEventListener('keydown', handleKeyDown);

        // Clean up the event listener when the component is unmounted
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    return (
        <>
            <div className="w-[100%] h-[7vh] bg-skin-1 text-white border-b-2 br-grey-100 m-0 p-0 flex items-center px-[1rem]">
                {/* ============ LEFT ========== */}
                <div className="flex items-center flex-row w-[20%] h-[100%]">
                    {/* Sidebar icon */}
                    <div className="cursor-pointer" onClick={() => { setIsSideBarOpen(!isSideBarOpen) }}>
                        <img src={SidebarSVG} alt="Search Icon" />
                    </div>

                    {/* logo */}
                    <div className="fit-content flex items-center mx-[0.5rem]">
                        <div className="color-skin-6 text-[25px] mx-[5px]">{"{"}</div>
                        <div className="flex flex-col">
                            <div className="text-sm color-skin-5 font-semibold">ByteForge</div>
                        </div>
                        <div className="color-skin-6 text-[25px] mx-[5px]">{"}"}</div>
                    </div>

                    {/* Account */}
                    <div>
                        {/* <button className="button-tranparent"> */}
                        {/* ORGANIGATIOIN logo */}
                        {/* ORGANIGATIOIN NAME */}
                        {/* ORGANIGATIOIN TAG - "Free", "Prenium" */}
                        {/* ORGANISATION ARROW (down) */}
                        {/* </button> */}
                    </div>
                </div>

                {/* ============ MIDDLE ========== */}
                <div className="flex items-center flex-row grid justify-items-center w-[60%] h-[100%]">
                    <div className="input-box flex items-center color-light-black">
                        <img src={SearchSVG} alt="Search Icon" className='color-light-black' />
                        <input className="input" type="text" placeholder="Search" ref={inputRef} />
                        <button className='button-code text-xs'>press - '/'</button>
                    </div>
                </div>

                {/* ============ RIGHT ========== */}
                <div className="flex items-center grid justify-items-end flex-row w-[20%] h-[100%]">
                    <img src={NotificationSVG} alt="Search Icon" className="color-light-black" />


                    {/* <PopoverHover /> */}
                </div>
            </div>
        </>
    )
}

export default Navbar