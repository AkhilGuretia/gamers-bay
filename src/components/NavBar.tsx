import logo from '../assets/Logo/logo.webp'
import { HStack, Image } from "@chakra-ui/react"
import ColorModeSwitch from './ColorModeSwitch'
import SearchInput from './SearchInput'

interface Props {
    onSearch: (searchText: string) => void;
}

const NavBar = ({ onSearch }: Props) => {
    return (
        <HStack padding="10px" >
            <Image src={logo} boxSize='60px' />
            <h5 style={{ fontWeight: "bold" }}>Bay of Gamers</h5>
            <SearchInput onSearch={onSearch} />
            <ColorModeSwitch />
        </HStack>
    )
}

export default NavBar