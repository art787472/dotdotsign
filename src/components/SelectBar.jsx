 import { Box, Select, InputGroup, InputLeftElement, Input, ButtonGroup, IconButton, HStack } from '@chakra-ui/react'
 import { RepeatIcon, SearchIcon } from '@chakra-ui/icons'
 import { BsListUl, BsGrid } from 'react-icons/bs'

 function SelectBar () {
  return (
    <Box display="flex" mx="32px" pt="32px" pb="16px" borderBottom="1px solid #DADBE1">
      <HStack spacing="24px">
        <Select w="180px" placeholder='全部' bg="white" />
        <Select w="180px"  placeholder='標籤類別'  bg="white"/>
      </HStack>

      <HStack ml="auto" spacing="24px">
        <InputGroup w="180px">
          <InputLeftElement
            children={<SearchIcon color="gray.400"/>}
          />
          <Input type='text' placeholder='搜尋'  bg="white"/>
        </InputGroup>
        <ButtonGroup size='md' isAttached variant="outline">
          <IconButton aria-label='Add to friends' icon={<RepeatIcon />} colorScheme="blue" isActive/>
          <IconButton aria-label='Add to friends' icon={<BsListUl />} colorScheme="blue"/>
        </ButtonGroup>
        <IconButton aria-label='Add to friends' icon={<BsGrid />} bg="transparent"/>
      </HStack>
    </Box>
  )
 }

 export default SelectBar