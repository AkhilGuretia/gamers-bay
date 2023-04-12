import logo from '../assets/Logo/logo.webp'
import { HStack, Image } from "@chakra-ui/react"

const NavBar = () => {
    return (
        <HStack>
            <Image src={logo} boxSize='60px' />
        </HStack>
    )
}

export default NavBar