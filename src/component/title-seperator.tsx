import { Box, Heading, Text } from '@chakra-ui/react'

const TitleSeperator = ({ title, text }) => (
  <Box
    py={20}
    px={{ base: 10 }}
    maxW={{ base: 'full', md: 'lg' }}
    mx='auto'
    textAlign='center'
  >
    <Heading>{title}</Heading>
    <Text mt={4}>{text}</Text>
  </Box>
)
export default TitleSeperator
