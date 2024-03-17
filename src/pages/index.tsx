import type { NextPage } from 'next'
import Head from 'next/head'

import { Box } from '@chakra-ui/react'

import Navbar from '@/components/navbar'
import Hero from '@/components/hero'
import Skills from '@/components/skills'
import Contact from '@/components/contact'
import Footer from '@/components/footer'

const Home: NextPage = () => {
  return (
    <Box width="100%">
      <Head>
        <title>Paulo Paes</title>
        <meta name="description" content="Paulo Paes Software Engineering, Node.JS Specialist" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Box height="3rem"></Box>
      <Hero />
      <Skills />
      <Contact />
      <Footer />
    </Box>
  )
}

export default Home
