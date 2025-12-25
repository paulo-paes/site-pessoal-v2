import React from 'react'

import {
  Box,
  Heading,
  Text,
  VStack,
  HStack,
  List,
  ListItem,
  ListIcon,
  useColorModeValue,
  Badge,
  Flex,
} from '@chakra-ui/react'
import { BsCheckCircleFill } from 'react-icons/bs'

interface ExperienceData {
  title: string
  company: string
  startDate: Date
  endDate: Date | null
  location: string
  achievements: string[]
  skills: string[]
}

function calculateDuration(startDate: Date, endDate: Date | null): string {
  const end = endDate || new Date()
  
  let months = (end.getFullYear() - startDate.getFullYear()) * 12
  months += end.getMonth() - startDate.getMonth()
  
  if (end.getDate() >= startDate.getDate()) {
    months += 1
  }
  
  const years = Math.floor(months / 12)
  const remainingMonths = months % 12
  
  const parts: string[] = []
  if (years > 0) {
    parts.push(`${years} yr${years > 1 ? 's' : ''}`)
  }
  if (remainingMonths > 0) {
    parts.push(`${remainingMonths} mo${remainingMonths > 1 ? 's' : ''}`)
  }
  
  return parts.join(' ') || '1 mo'
}

function formatPeriod(startDate: Date, endDate: Date | null): string {
  const options: Intl.DateTimeFormatOptions = { month: 'short', year: 'numeric' }
  const start = startDate.toLocaleDateString('en-US', options)
  const end = endDate ? endDate.toLocaleDateString('en-US', options) : 'Present'
  return `${start} - ${end}`
}

interface ExperienceItemProps {
  experience: ExperienceData
}

function ExperienceItem({ experience }: ExperienceItemProps) {
  const { title, company, startDate, endDate, location, achievements, skills } = experience
  const isCurrentRole = endDate === null

  const cardBg = useColorModeValue('gray.50', 'gray.700')
  const borderColor = useColorModeValue('gray.200', 'gray.600')
  const accentColor = useColorModeValue('blue.600', 'blue.300')
  const badgeBg = useColorModeValue('blue.100', 'blue.900')

  const period = formatPeriod(startDate, endDate)
  const duration = calculateDuration(startDate, endDate)

  return (
    <Box
      width="100%"
      bg={cardBg}
      borderRadius="lg"
      padding={{ base: '1.5rem', md: '2rem' }}
      borderLeft="4px solid"
      borderLeftColor={accentColor}
      borderWidth="1px"
      borderColor={borderColor}
      position="relative"
    >
      {isCurrentRole && (
        <Badge
          position="absolute"
          top={{ base: '1rem', md: '1.5rem' }}
          right={{ base: '1rem', md: '1.5rem' }}
          colorScheme="green"
          fontSize="0.75rem"
        >
          Current
        </Badge>
      )}
      <VStack alignItems="flex-start" gap="1rem">
        <Box>
          <Heading fontSize={{ base: '1.25rem', md: '1.5rem' }} mb="0.25rem">
            {title}
          </Heading>
          <Text fontSize={{ base: '1rem', md: '1.1rem' }} fontWeight="600" color={accentColor}>
            {company}
          </Text>
          <Flex
            direction={{ base: 'column', sm: 'row' }}
            gap={{ base: '0.25rem', sm: '1rem' }}
            fontSize="0.9rem"
            opacity={0.8}
            mt="0.5rem"
          >
            <Text>{period} · {duration}</Text>
            <Text display={{ base: 'none', sm: 'block' }}>|</Text>
            <Text>{location}</Text>
          </Flex>
        </Box>

        <List spacing={2} width="100%">
          {achievements.map((achievement, index) => (
            <ListItem key={index} display="flex" alignItems="flex-start">
              <ListIcon as={BsCheckCircleFill} color={accentColor} mt="0.3rem" />
              <Text fontSize={{ base: '0.9rem', md: '1rem' }} lineHeight="1.6">
                {achievement}
              </Text>
            </ListItem>
          ))}
        </List>

        <HStack flexWrap="wrap" gap="0.5rem" mt="0.5rem">
          {skills.map((skill, index) => (
            <Badge
              key={index}
              bg={badgeBg}
              color={accentColor}
              fontSize="0.75rem"
              px="0.5rem"
              py="0.25rem"
              borderRadius="md"
            >
              {skill}
            </Badge>
          ))}
        </HStack>
      </VStack>
    </Box>
  )
}

function Experience() {
  const headingColor = useColorModeValue('gray.800', 'whiteAlpha.900')

  const experiences: ExperienceData[] = [
    {
      title: 'Mid-level Software Engineer',
      company: 'Wise Group',
      startDate: new Date(2023, 9, 1),
      endDate: null,
      location: 'Remote',
      achievements: [
        'Designed and implemented REST APIs enabling customers to integrate multiple internal systems using Java 17, Spring, JUnit, and Test Driven Development.',
        'Optimized Google Cloud instances, reducing monthly cloud costs by 40% without performance impact.',
        'Maintained over 20 legacy Java applications including REST and SOAP APIs using Spring, Spring Boot, and Java 7, 8, 11, and 17.',
        'Collaborated on implementing a new frontend interface for a CRM using Angular, JavaScript, and TypeScript.',
      ],
      skills: ['Java 17', 'Spring Boot', 'JUnit', 'TDD', 'Google Cloud', 'Angular', 'TypeScript'],
    },
    {
      title: 'Software Engineer',
      company: 'Wise Group',
      startDate: new Date(2021, 9, 1),
      endDate: new Date(2023, 9, 1),
      location: 'Remote',
      achievements: [
        'Developed backend and frontend features for a CRM with microservices architecture using Node.js, MongoDB, TypeScript, Angular, Java, Spring, and PostgreSQL.',
        'Collaborated on a Chatbot flow using Node.js and Express that helped serve over 1,000,000 users.',
        'Designed and implemented an alert monitoring system for detecting anomalies in messaging and chatbot systems using Node.js.',
        'Revamped a billing calculator system for a CRM using Java 11, Spring, Spring Boot, and PostgreSQL.',
      ],
      skills: ['Java 11', 'Spring', 'Node.js', 'MongoDB', 'PostgreSQL', 'TypeScript', 'Angular'],
    },
  ]

  return (
    <Box
      id="experience"
      width="100%"
      paddingBlock="4rem"
    >
      <Box width={{ base: '90%', md: '70%' }} marginInline="auto">
        <Heading
          fontSize={{ base: '2.5rem', md: '4rem' }}
          textAlign="center"
          color={headingColor}
          marginBottom="3rem"
        >
          Experience
        </Heading>
        <VStack gap="2rem" width="100%">
          {experiences.map((exp, index) => (
            <ExperienceItem key={index} experience={exp} />
          ))}
        </VStack>
      </Box>
    </Box>
  )
}

export default Experience
