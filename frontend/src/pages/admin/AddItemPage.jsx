import React from 'react'
import Navbar from '../../components/Navbar'
import AddItem from '../../components/AddItem'
import SidePanel from '../../components/SidePanel'

const AddItemPage = () => {
  return (
    <>
      <div
      className="flex-grow-1"
      style={{
        background: "#F6F9FC",
        minHeight: "100vh",
        padding: "28px 35px",
      }}
    >
      <AddItem/>
    </div> 
    </>
  )
}

export default AddItemPage
