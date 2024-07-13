"use client";
import { useCurrentDeviceContext } from "@contexts/current-device-context";
import WebHeader from "./web";
import ResponsiveHeader from "./responsive";

const Header = () => {
  const { isDesktop, isDetecting } = useCurrentDeviceContext();
  if (isDetecting) return;
  return isDesktop ? <WebHeader /> : <ResponsiveHeader />;
};

export default Header;
