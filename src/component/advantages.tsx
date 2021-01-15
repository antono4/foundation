import { SimpleGrid } from '@chakra-ui/react'

import CardAdvantages from '@/component/card-advantages'

type Advantages = {
  isFirst?: boolean
  image: string
  title: string
  description: string
}

const lists: Advantages[] = [
  {
    isFirst: true,
    image: '/card-1.png',
    title: 'Project Guarantee and Payments',
    description:
      'Guaranteed project in building materials (material spesifications) transparentely to ensure that the building materials used are appropriate & the payment proccess is guaranteed',
  },
  {
    image: '/card-2.png',
    title: 'Best Costumer Service',
    description:
      'Get 24-hour service during development proccess such as, online project reports, and project reports from our customer service.',
  },
  {
    image: '/card-3.png',
    title: 'Free Planning Fee',
    description:
      'Free of charge for development proccess such as Survey Fees, Consultation, 2D Building Plan Design (Applicable T&C), RAB (Budget Plan), and Time Schedule.',
  },
  {
    image: '/card-4.png',
    title: 'Project Team Escort',
    description:
      'Every Project will be provided with online escort by the site manager in order to maintain the quality and result of the project by workers.',
  },
]

const Advantages = () => {
  return (
    <SimpleGrid
      alignItems='center'
      justifyItems='center'
      columns={{ base: 1, md: 2, lg: 4 }}
      px={{ base: 10, md: 20 }}
      pb={20}
      spacing={8}
    >
      {lists.map((item, i) => (
        <CardAdvantages item={item} key={i} />
      ))}
    </SimpleGrid>
  )
}

export default Advantages
