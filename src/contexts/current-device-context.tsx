"use client";

import {
  FC,
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

import { getDeviceType } from "@helpers/device";
import { debounce } from "@helpers/debounce";

interface CurrentDeviceContextType {
  isMobile: boolean;
  isDesktop: boolean;
  isTablet: boolean;
  isDetecting: boolean;
}

const defaultContextValue: CurrentDeviceContextType = {
  isMobile: false,
  isDesktop: false,
  isTablet: false,
  isDetecting: true,
};

const CurrentDeviceContext =
  createContext<CurrentDeviceContextType>(defaultContextValue);

export const useCurrentDeviceContext = () =>
  useContext(CurrentDeviceContext) || defaultContextValue;

const CurrentDeviceContextProvider: FC<{
  children: ReactNode;
  breakPoints?: {
    lg?: number;
    md?: number;
  };
}> = ({ children, breakPoints }) => {
  const [currentDevice, setCurrentDevice] =
    useState<CurrentDeviceContextType>(defaultContextValue);

  useEffect(() => {
    const resizeEventHandler = debounce(
      () =>
        setCurrentDevice({
          ...defaultContextValue,
          ...getDeviceType({ breakPoints }),
          isDetecting: false,
        }),
      200
    );
    resizeEventHandler();
    addEventListener("resize", resizeEventHandler);
    return () => removeEventListener("resize", resizeEventHandler);
  }, []);

  return (
    <CurrentDeviceContext.Provider value={currentDevice}>
      {children}
    </CurrentDeviceContext.Provider>
  );
};

export default CurrentDeviceContextProvider;
