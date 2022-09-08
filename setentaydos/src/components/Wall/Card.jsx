import React from 'react'
import { Box } from '@chakra-ui/react';

const Card = ({publish}) => {
  return (
    <Box h='40px' >
     <div>{publish.user}</div>
     <div>{publish.writing}</div>
    </Box>
  )
}

export default Card