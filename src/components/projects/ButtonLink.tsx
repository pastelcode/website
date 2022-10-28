import { Button, ButtonProps, HStack, Link, Text } from '@chakra-ui/react'

interface ButtonLinkProps extends ButtonProps {
  name: string
  icon: JSX.Element
  link: string
}

const ButtonLink = ({
  name,
  icon,
  link,
  ...props
}: ButtonLinkProps): JSX.Element => (
  <Button
    as={Link}
    href={link}
    isExternal
    colorScheme="gray"
    color="whiteAlpha.700"
    background="transparent"
    willChange="transform"
    transition="all 0.2s ease"
    transform="translateY(0)"
    paddingX="1"
    _hover={{
      transform: 'translateY(-3px)',
      textDecoration: 'none',
      color: 'white',
    }}
    {...props}
  >
    <HStack alignItems="center">
      {icon}
      <Text>{name}</Text>
    </HStack>
  </Button>
)

export default ButtonLink
