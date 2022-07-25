import { ChatIcon } from '@chakra-ui/icons'
import { Button } from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'

const ContactUsButton = (): JSX.Element => {
  return (
    <Button
      as={RouterLink}
      to="/contacto"
      leftIcon={<ChatIcon />}
      size="lg"
      willChange="filter"
      filter="none"
      transition="all 0.2s ease"
      _hover={{
        filter: 'drop-shadow(0 0 2em #646cff)',
      }}
    >
      Contáctanos
    </Button>
  )
}

export default ContactUsButton
