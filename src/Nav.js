import React from 'react'
import { Box, Flex, Heading, Spacer } from '@chakra-ui/react'
import { ColorModeSwitcher } from './ColorModeSwitcher';

const Navbar = (toggleTheme) => {
    return (
        <Flex alignItems="center" boxShadow="base" p="2" mb="2">
            <Box p="2">
                <Heading size="lg">Customer Support</Heading>
            </Box>
            <Spacer />
            <Box>
                <ColorModeSwitcher toggleTheme={toggleTheme} />
            </Box>
        </Flex>
    )
};

export default Navbar;