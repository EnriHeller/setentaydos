import { useContext, React } from 'react'
import { WriteContext } from '../../contexts/WriteContext';
import {Stack} from '@chakra-ui/react'
import Card from './Card';


const Wall = () => {
    const {wallData} = useContext(WriteContext)
  return (
    <Stack direction={['column', 'row']} spacing='24px'>
    {wallData.map((publish, index) =>{
        return(
            <Card publish={publish} key={index}/>
        )
    })}
  </Stack>

  )
}

export default Wall