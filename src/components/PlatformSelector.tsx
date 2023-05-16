import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronBarDown } from "react-icons/bs";
import usePlatforms from "../hooks/usePlatforms";


const PlatformSelector = () => {
    const { data, error } = usePlatforms();

    if (error) return null; // avoiding the whole feature if any errors.

    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronBarDown />}>
                Platforms
            </MenuButton>
            <MenuList>
                {data.map((platform) => (
                    <MenuItem key={platform.id}>{platform.name}</MenuItem>
                ))}
            </MenuList>
        </Menu>
    )
}

export default PlatformSelector;