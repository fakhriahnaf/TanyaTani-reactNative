const mainColors = {
    green1: '#529D63',
    green2: '#EDFDF0',
    dark1: '#0B121D',
    dark2: '#626A75',
    dark3: '#90949B',
    grey1: '#7D8797',
    grey2: '#E9E9E9',
    grey3: '#EDEEF0',
    grey4: '#B1B7C2',
    greess: '#10C563',
    black1: '#000000',
    black2: 'rgba(0, 0, 0, 0.5)',
    red1: '#E06379',
  };
  
  export const colors = {
    primary: mainColors.green1,
    secondary: mainColors.dark1,
    tertiary: mainColors.greess,
    white: 'white',
    black: 'black',
    disable: mainColors.grey3,
    text: {
      primary: mainColors.dark1,
      secondary: mainColors.grey1,
      menuInactive: mainColors.dark2,
      menuActive: mainColors.green1,
      subTitle: mainColors.dark3,
    },
    button: {
      primary: {
        background: mainColors.green1,
        text: 'white',
      },
      secondary: {
        background: 'white',
        text: mainColors.dark1,
      },
      disable: {
        background: mainColors.grey3,
        text: mainColors.grey4,
      },
    },
    border: mainColors.grey2,
    cardLight: mainColors.green2,
    loadingBackground: mainColors.black2,
    error: mainColors.red1,
  };
  