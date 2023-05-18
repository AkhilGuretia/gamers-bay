import logo from '../assets/Logo/logo.webp'
import { HStack, Image } from "@chakra-ui/react"
import ColorModeSwitch from './ColorModeSwitch'
import SearchInput from './SearchInput'

const NavBar = () => {
    return (
        <HStack padding="10px" >
            <Image src={logo} boxSize='60px' />
            <SearchInput />
            <ColorModeSwitch />
        </HStack>
    )
}

export default NavBar