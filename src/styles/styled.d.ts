import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      white: string;
      highlight: string;
      gray: string;
      silver: string;
      warning: string;
    };
    typo: {
      size: {
        xs: string;
        sm: string;
        md: string;
        lg: string;
      };
      weight: {
        regular: number;
        medium: number;
        bold: number;
      };
    };
  }
}
