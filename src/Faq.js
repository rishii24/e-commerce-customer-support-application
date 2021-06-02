import React from 'react'
import {
    Box,
    Text,
    Flex,
    Heading,
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel
} from '@chakra-ui/react'

import FAQList from './faq.json'

const Faq = ({ index, setIndex }) => {
    return (
        <Flex direction="column" p="4">
            <Box mb="8">
                <Heading size="md">Frequently Asked Questions</Heading>
            </Box>
            <Accordion allowToggle="true" index={index}>
                {
                    FAQList.map(faq => (
                        <AccordionItem key={faq.id} name={`accordian-item-${faq.id}`}>
                            <AccordionButton onClick={() => {
                            {/*faq corresponds to faq object in each iteration and we 
                            subtract one because to maintain id and index difference */}
                                setIndex(faq.id - 1)
                            }}>
                                <Box flex="1" textAlign="left">
                                    <Text fontWeight="semibold">{faq.question}</Text>
                                </Box>
                            </AccordionButton>
                            <AccordionPanel pb="4">
                                {faq.answer}
                            </AccordionPanel>
                        </AccordionItem>
                    ))
                }
            </Accordion>
        </Flex>
    )
}

export default Faq
