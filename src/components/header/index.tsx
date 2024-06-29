"use client";
import { useCurrentDeviceContext } from "@contexts/current-device-context";
import WebHeader from "./web";
import ResponsiveHeader from "./responsive";

const Header = () => {
  const { isDesktop } = useCurrentDeviceContext();
  return isDesktop ? <WebHeader /> : <ResponsiveHeader />;
};

export default Header;
