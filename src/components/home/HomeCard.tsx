import { Box } from '@chakra-ui/react'

interface Props {
  background?: string
  compact?: boolean
  hasBlur?: boolean
  children: JSX.Element | JSX.Element[]
}

const HomeCard = ({
  background,
  compact,
  hasBlur,
  children,
}: Props): JSX.Element => (
  <Box background={background || 'none'} width="100%">
    <Box
      backdropFilter="auto"
      backdropBlur={hasBlur ? '3px' : undefined}
      paddingY="10"
    >
      <Box
        marginLeft="auto"
        marginRight="auto"
        width={compact ? '90%' : '100%'}
        maxWidth={compact ? '1000px' : 'none'}
      >
        {children}
      </Box>
    </Box>
  </Box>
)

export default HomeCard
