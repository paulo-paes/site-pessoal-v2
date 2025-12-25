import type { NextPage } from 'next'
import Head from 'next/head'

import { Box } from '@chakra-ui/react'

import Navbar from '@/components/navbar'
import Hero from '@/components/hero'
import Experience from '@/components/experience'
import Skills from '@/components/skills'
import Footer from '@/components/footer'

const Home: NextPage = () => {
  return (
    <Box width="100%">
      <Head>
        <title>Paulo Paes</title>
        <meta name="description" content="Paulo Paes - Java Software Engineer | 4+ years building scalable backend systems with Java, Spring Boot, and cloud technologies" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <Navbar />
      <Box height="3rem"></Box>
      <Hero />
      <Experience />
      <Skills />
      <Footer />
    </Box>
  )
}

export default Home
