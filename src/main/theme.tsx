import React, { CSSProperties, FC, PropsWithChildren } from 'react';
import GoogleFontLoader from 'react-google-font-loader';
import TextareaAutosize from 'react-textarea-autosize';
import {
  Accordion,
  AccordionContent,
  Dropdown,
  Input,
} from 'semantic-ui-react';
import styled, { DefaultTheme, ThemeProvider } from 'styled-components';

export const defaultTheme: DefaultTheme = {
  colors: {
    system: {
      darkBlue: '#272C34',
      darkBlueHighlight: '#3D4857',
      darkBlueShadow: '#1B1F24',
      darkGrey: '#C8C8C8',
      darkOffBlack: '#23282F',

      grey: '#cbcbcb',
      navy: '#01203A',
      offBlack: '#2F3640',
      offWhite: '#F0EEEE',
      white: '#F8F8F8',
    },
    general: {
      blue: '#3498DB',
      green: '#11AF04',
      purple: '#7d317d',
      red: '#9d0053',
      scoreRed: '#E70000',
      sea: '#009d98',
      amber: '#EDAB00',
      yellow: '#FBBD08',
      white: '#FFFFFF',
      black: '#000000',
    },
  },

  typography: {
    header: `
      font-family: 'Happy Monkey';
      font-weight: bold;
      margin: 0;
      padding: 0;
    `,
    featureHeader: `
      font-family: 'Happy Monkey';
      font-weight: bold;
      margin: 0;
      padding: 0;
    `,
    body: `
      font-size: 0.9em;
      font-family: 'Happy Monkey';
      font-weight: regular;
      margin: 0 0 1em 0;
      padding: 0;
    `,
    button: `
      font-size: 0.9em;
      font-family: 'Happy Monkey';
      font-weight: regular;
      margin: 0 0 1em 0;
      padding: 0;
    `,
    sizes: {
      p: '1.0em',
      smaller: '0.85em',
      small: '0.75em',
      tiny: '0.65em',
      h1: '1.5em',
      h2: '1.3em',
      h3: '1.1em',
      h4: '1.05em',
      h5: '1.0em',
      featureH1: '2.0em',
      featureH2: '1.8em',
      featureH3: '1.6em',
      featureH4: '1.4em',
      featureH5: '1.2em',
    },
  },

  margin: {
    small: '5px',
    standard: '10px',
    large: '15px',
    xlarge: '20px',
    xxlarge: '25px',
    xxxlarge: '30px',
    xxxxlarge: '40px',
    xxxxxlarge: '50px',
  },

  padding: {
    small: '5px',
    standard: '10px',
    large: '15px',
    xlarge: '20px',
    xxlarge: '25px',
    xxxlarge: '30px',
  },

  borders: {
    small: '5px',
    radius: '10px',
  },
};

export const StyledText = styled.p`
  ${({ theme }) => theme.typography.body};
  font-size: ${({ theme }) => theme.typography.sizes.p};
  color: ${({ theme }) => theme.colors.system.offBlack};
`;

export const StyledH1 = styled.h1<{ black?: boolean; noMargin?: boolean }>`
  ${({ theme }) => theme.typography.header};
  font-size: ${({ theme }) => theme.typography.sizes.h1};
  margin-bottom: ${({ theme, noMargin }) =>
    noMargin ? 0 : theme.margin.large};
  color: ${({ theme, black }) =>
    black ? theme.colors.system.black : theme.colors.system.white};
`;

export const StyledH2 = styled.h2`
  ${({ theme }) => theme.typography.header};
  font-size: ${({ theme }) => theme.typography.sizes.h2};
  margin-bottom: ${({ theme }) => theme.margin.large};
  color: ${({ theme }) => theme.colors.system.black};
`;

export const StyledH3 = styled.h3`
  ${({ theme }) => theme.typography.header};
  font-size: ${({ theme }) => theme.typography.sizes.h3};
  margin-bottom: ${({ theme }) => theme.margin.large};
  color: ${({ theme }) => theme.colors.system.offBlack};
`;

export const StyledH4 = styled.h4`
  ${({ theme }) => theme.typography.header};
  font-size: ${({ theme }) => theme.typography.sizes.h4};
  margin-bottom: ${({ theme }) => theme.margin.standard};
  color: ${({ theme }) => theme.colors.system.offBlack};
`;

export const StyledH5 = styled.h5`
  ${({ theme }) => theme.typography.header};
  font-size: ${({ theme }) => theme.typography.sizes.h5};
  margin-bottom: ${({ theme }) => theme.margin.standard};
  color: ${({ theme }) => theme.colors.system.offBlack};
`;

export const StyledErrorText = styled.p`
  ${({ theme }) => theme.typography.header};
  font-size: ${({ theme }) => theme.typography.sizes.p};
  margin-bottom: ${({ theme }) => theme.margin.standard};
  color: ${({ theme }) => theme.colors.general.red};
`;

export const StageBodyText = styled(StyledText)`
  width: 100%;
  max-width: 700px;
  margin-bottom: ${({ theme }) => theme.margin.xlarge};
  text-align: center;
`;

export const Button = styled.button<{
  width?: number;
  height?: number;
  backgroundColor?: string;
  color?: string;
  disabled?: boolean;
  secondary?: boolean;
  tertiary?: boolean;
}>`
  display: flex;
  justify-content: center;
  align-items: center;

  width: ${({ width }) => width || 144}px;
  height: ${({ height }) => height || 38}px;

  transition: background-color 0.25s, color 0.25s, opacity 0.25s;

  background-color: ${({ theme, secondary, backgroundColor }) =>
    secondary
      ? theme.colors.general.red
      : backgroundColor || theme.colors.general.yellow};

  color: ${({ theme, secondary, color }) =>
    secondary
      ? theme.colors.system.white
      : color || theme.colors.system.offBlack};

  opacity: ${({ disabled }) => (disabled ? 0.4 : 1)};

  border: none;
  box-sizing: border-box;
  border-radius: ${({ theme }) => theme.borders.small};

  cursor: ${({ disabled }) => (disabled ? 'no-drop' : 'pointer')};

  ${({ theme }) => theme.typography.header}
  font-size:  ${({ theme }) => theme.typography.sizes.h4};

  &:hover {
    opacity: ${({ disabled }) => (disabled ? 0.4 : 0.7)};
  }

  > i {
    margin: 0;
    padding: 1px 0 0 0;
    font-size: ${({ theme }) => theme.typography.sizes.h3};
  }
`;

export const DefaultPopupStyles: CSSProperties = {
  border: 'none',
  borderRadius: `${({ theme }) => theme.borders.radius}`,
  fontFamily: 'Roboto',
  fontWeight: 'bold',
};

export const PageContainer = styled.div`
  height: calc(100vh - 10vh);
  padding: 0 ${({ theme }) => theme.padding.xxlarge};

  overflow-y: auto;
`;

export const PageHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 10vh;
  background-color: ${({ theme }) => theme.colors.general.black};

  padding: 0 ${({ theme }) => theme.padding.xxlarge};

  > h1 {
    margin: 0;
  }
`;

export const PageHeaderTitleWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  > h1 {
    margin: 0 ${({ theme }) => theme.margin.large} 0 0;
  }

  > button {
    margin-right: ${({ theme }) => theme.margin.large};

    > i {
      margin-top: -3px;
    }
  }
`;

export const PageSearchHeader = styled.div`
  height: 5vh;

  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: ${({ theme }) => theme.margin.large} 0;

  > p {
    margin: 0;
  }
`;

export const StyledLabel = styled.label``;

const Theme: FC = ({ children }) => (
  <ThemeProvider theme={defaultTheme}>
    <GoogleFontLoader
      fonts={[
        { font: 'Lato', weights: [400] },
        { font: 'Roboto', weights: [700] },
      ]}
    />
    {children}
  </ThemeProvider>
);

export default Theme;
