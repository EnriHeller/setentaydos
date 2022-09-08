import React, {useContext} from "react";
import { Formik, Form, Field }from "formik";
import {Flex, Textarea} from '@chakra-ui/react';
import { WriteContext } from "../../../contexts/WriteContext";

const WriteArea = () =>{ 
    // para usar en el postde la imagen
    const {setWriting} = useContext(WriteContext);


      return(    
          <Flex
            flexDirection={"column"}
          >
          <Formik
            initialValues={{
              writing:"",
            }}
            onSubmit={(values)=>{
              console.log(values)
              //setWriting(e.target.value)
            }}
  
          >
            {(props) => (
                <Flex as={Form}>
                    <Field as={Textarea}
                      name= "writing" 
                      placeholder= "Introduzca su historia"
                      onChange={
                        (e)=>{
                          props.handleChange(e)
                        }} 
                    />
                </Flex>
            )}
        </Formik>
        </Flex>
    )
}

export default WriteArea;