import React from 'react'
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import Food_list from '../components/Food_list'
import Footer from '../components/Footer'
import Signup_form from '../components/Signup_form'
import Login_form from '../components/Login_form'

const Home = () => {
  return (
    <>
    <Signup_form/>
    <Login_form/>
      <Navbar/>
      <Header/>
      <Food_list/>
      <Footer/>
    </>
  )
}

export default Home
