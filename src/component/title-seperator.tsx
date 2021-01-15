import { Box, Heading, Text } from '@chakra-ui/react'

const TitleSeperator = ({ title, text }) => (
  <Box py={20} maxW='lg' mx='auto' textAlign='center'>
    <Heading>{title}</Heading>
    <Text mt={4}>{text}</Text>
  </Box>
)
export default TitleSeperator
