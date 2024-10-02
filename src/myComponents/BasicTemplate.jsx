import React, { useEffect, useState } from 'react'
import Sidebar from './Sidebar'
import Navbar from './Navbar'

const BasicTemplate = ({ children }) => {
  const [isSideBarOpen, setIsSideBarOpen] = useState(true);


  useEffect(() => {
    console.log(isSideBarOpen)
  }, [isSideBarOpen])

  return (
    <>
      <Navbar isSideBarOpen={isSideBarOpen} setIsSideBarOpen={setIsSideBarOpen} />
      <Sidebar isSideBarOpen={isSideBarOpen} />
      {children}
    </>
  )
}

export default BasicTemplate