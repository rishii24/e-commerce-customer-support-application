import React, { useState, useEffect, useRef } from 'react'
import { ChakraProvider, theme } from '@chakra-ui/react'
import alanBtn from "@alan-ai/alan-sdk-web";
import Navbar from './Nav'
import Faq from './Faq'
import { scroller } from 'react-scroll'

require('dotenv').config()
const { REACT_APP_MY_KEY } = process.env;


const App = () => {

  const alanBtnInstance = useRef(null);
  const [index, setIndex] = useState(null)
  const [toggleTheme, setToggleTheme] = useState(false)


  useEffect(() => {
    if (!alanBtnInstance.current) {
      alanBtnInstance.current = alanBtn({

        key: REACT_APP_MY_KEY,

        onCommand: (commandData) => {
          //command data referes to the obj we're sending back from voice script
          if (commandData.command === 'gotoFaq') {
            scroller.scrollTo(`accordian-item-${commandData.faqId}`, {
              duration: 800,
              delay: 0,
              smooth: 'easeInOutQuart'
            })
            setIndex(commandData.faqId - 1)
            // Call the client code that will react to the received command
          } else if (commandData.command === 'toggleTheme') {
            setToggleTheme(flag => !flag)
          }
        }
      });
    }
  }, []);


  return (
    <ChakraProvider theme={theme}>
      <Navbar toggleTheme={toggleTheme} />
      <Faq index={index} setIndex={setIndex} />
    </ChakraProvider>
  );
};

export default App;
