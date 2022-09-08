import {React, useState, useContext } from 'react';
import { Button as ChakraButton } from '@chakra-ui/react';
import CountContainer from './CountContainer/CountContainer';
import { WriteContext } from '../../contexts/WriteContext';
import { useNavigate } from 'react-router-dom';
import WriteArea from './WriteArea/WriteArea';

const WriteApp = () => {
    const [start, setStart] = useState(false)
    //const {writing, setWallData} = useContext(WriteContext)
    const navigate = useNavigate()
    const publishWrite = ()=>{
        var requestOptions = {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({writing:"asd"}),
            mode: "cors"
        };

        fetch(process.env.REACT_APP_WRITINGS_ENDPOINT, requestOptions)
        .then(response => response.json())
        .then(result => {
            console.log(result)
            //setWallData(result.results)
            navigate("/wall")
        })
        .catch(error => console.log('error', error));
    }

    return(
        <section>
            {
                !start?<ChakraButton colorScheme='green' onClick={()=>{setStart(true)}}>Empezar</ChakraButton>
            :
                <>
                    <CountContainer sec={10} callback={publishWrite}/>
                    <WriteArea/>
                </>
                

            }
        </section>
    )
    

}

export default WriteApp;