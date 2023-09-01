const defaultTheme = {
  texts: {
    bold: {
      header: `
        font-size: 2.8rem;
        font-weight: bold;
      `,
      subHeader: `
        font-size: 2.4rem;
        font-weight: bold;
      `,
      title: `
        font-size: 2.0rem;
        font-weight: bold;
      `,
      subTitle: `
        font-size: 1.8rem;
        font-weight: bold;
      `,
      boldText: `
        font-size: 1.6rem;
        font-weight: bold;
      `,
      boldHint: `
        font-size: 1.2rem;
        font-weight: bold;
      `,
    },
    regular: {
      large: `
        font-size: 1.8rem;
        font-weight: normal;
      `,
      medium: `
        font-size: 1.6rem;
        font-weight: normal;
      `,
      small: `
        font-size: 1.4rem;
        font-weight: normal;
      `,
      hint: `
        font-size: 1.2rem;
        font-weight: normal;
      `,
    },
  },
  colors: {
    white: '#FFFFFF',
    black: '#282828',
    main: '#1D80E3',
    sub: '#D8EBFF',
    accent: '#E83131',
    gray50: '#FAFAFA',
    gray300: '#E0E0E0',
    gray500: '#9E9E9E',
    gray700: '#616161',
  },
  alignCenter: {
    vertical: `
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;
    `,
    horizontal: `
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
    `,
  },
};

export default defaultTheme;
