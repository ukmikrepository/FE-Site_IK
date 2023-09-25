import React from 'react'
import Layout from './Layout'
import Navbar from '../Organism/Nav/Navbar'
import Footer from '../Organism/Nav/Footer'

export default function Standard({ children, className }) {
  return (
    <Layout className={`${className} flex min-h-screen flex-col justify-between overflow-hidden`}>
        <Navbar />
        {children}
        <Footer/>
    </Layout>
  )
}
