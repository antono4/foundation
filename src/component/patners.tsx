import { Image, SimpleGrid } from '@chakra-ui/react'

const Patners = () => {
  return (
    <SimpleGrid
      mx='auto'
      justifyItems='center'
      spacing={8}
      px={{ base: 10, md: 20 }}
      pb={10}
      columns={{ base: 1, md: 4 }}
    >
      <Image src='/sponsor-1.png' h='37px' objectFit='cover' />
      <Image src='/sponsor-2.png' h='37px' objectFit='cover' />
      <Image src='/sponsor-3.png' h='37px' objectFit='cover' />
      <Image src='/sponsor-4.png' h='37px' objectFit='cover' />
      <Image src='/sponsor-5.png' h='37px' objectFit='cover' />
      <Image src='/sponsor-6.png' h='37px' objectFit='cover' />
      <Image src='/sponsor-7.png' h='37px' objectFit='cover' />
    </SimpleGrid>
  )
}

export default Patners
