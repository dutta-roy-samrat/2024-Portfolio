"use client";
import { useCurrentDeviceContext } from "@contexts/current-device-context";
import WebHeader from "./web";
import ResponsiveHeader from "./responsive";

const Header = () => {
  const { isDesktop } = useCurrentDeviceContext();
  console.log(isDesktop);
  return isDesktop ? <WebHeader /> : <ResponsiveHeader />;
};

export default Header;
