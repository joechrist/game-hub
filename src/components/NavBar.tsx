import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.webp";

/**
 * NavBar
 * @returns
 */
const NavBar = () => {
  return (
    <HStack>
      <Image src={logo} boxSize="60px" />
      <Text>Game-Hub</Text>
    </HStack>
  );
};

export default NavBar;
