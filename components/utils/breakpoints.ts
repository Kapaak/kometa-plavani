const recalcToEm = (breakpoint: number) => {
  return breakpoint / 16;
};

enum devices {
  tablet = 600,
  notebook = 1024,
  desktop = 1333,
}

export const dimensions = {
  tablet: `min-width: ${recalcToEm(devices.tablet)}em`,
  notebook: `min-width: ${recalcToEm(devices.notebook)}em`,
  desktop: `min-width: ${recalcToEm(devices.desktop)}em`,
};
