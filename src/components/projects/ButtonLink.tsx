import { Box, Link, Button, HStack, Text } from '@chakra-ui/react'

const ButtonLink = ({
  name,
  icon,
  link,
}: {
  name: string
  icon: JSX.Element
  link: string
}): JSX.Element => (
  <Button
    as={Link}
    href={link}
    isExternal
    colorScheme="gray"
    color="whiteAlpha.700"
    background="transparent"
    borderColor="whiteAlpha.700"
    borderWidth="1px"
    borderStyle="solid"
    width="100%"
    willChange="transform"
    transition="all 0.2s ease"
    transform="translateY(0)"
    _hover={{
      transform: 'translateY(-3px)',
      textDecoration: 'none',
      color: 'white',
    }}
  >
    <HStack>
      {icon}
      <Text>{name}</Text>
    </HStack>
  </Button>
)

export default ButtonLink
