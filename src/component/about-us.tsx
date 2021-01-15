import {
  Box,
  Button,
  Heading,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
} from '@chakra-ui/react'
import { FiMail } from 'react-icons/fi'

const AboutUs = () => (
  <Box maxW='md' mt={5}>
    <Text fontWeight='bold' color='#DFB211'>
      Join over 15,000+ creative people
    </Text>
    <Heading my={4}>About Us</Heading>
    <Text>
      Website is a Home eCommerce Marketplace platform that aims to make it
      easier for home owners to have ideas and inspiration for their dream home.
    </Text>
    <InputGroup maxW='xs' size='lg' my={6}>
      <InputLeftElement
        pointerEvents='none'
        // eslint-disable-next-line react/no-children-prop
        children={<Icon color='gray.400' as={FiMail} />}
      />
      <Input
        borderRadius='none'
        shadow='sm'
        type='tel'
        placeholder='Enter your email'
      />
      <Button px='70px' borderRadius='none' colorScheme='green'>
        Subscribe
      </Button>
    </InputGroup>
  </Box>
)

export default AboutUs
