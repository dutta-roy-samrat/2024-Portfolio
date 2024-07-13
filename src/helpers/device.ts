import { DEFAULT_BREAKPOINTS } from "@constants";

export const getDeviceType = ({
  breakPoints = DEFAULT_BREAKPOINTS,
}: {
  breakPoints?: {
    lg?: number;
    md?: number;
  };
}) => {
  if (typeof window === "undefined") return null;
  const width = window.innerWidth;
  const { md = DEFAULT_BREAKPOINTS.md, lg = DEFAULT_BREAKPOINTS.lg } =
    breakPoints;

  if (width < md) {
    return { isMobile: true };
  } else if (width < lg) {
    return { isTablet: true };
  } else {
    return { isDesktop: true };
  }
};
