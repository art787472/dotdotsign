import { Box, Heading, Text, Button, Image } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import errorState from './../assets/Error_state.png'

function Error () {
  return (
    <Box display="flex" flexFlow="column" justifyContent="center" alignItems="center"  textAlign="center" h="100vh" bg="#EFEFEF">
      <Image src={ errorState } mb="32px"/>
      <Heading mb="16px">
        未知錯誤
      </Heading>
      <Text mb="32px">
        發生未知錯誤，請稍後再試一次
      </Text>
      <Link to='/'>
        <Button w="104px" h="44px" colorScheme="blue">
            前往首頁
        </Button>
      </Link>
    </Box>
  )
}

export default Error