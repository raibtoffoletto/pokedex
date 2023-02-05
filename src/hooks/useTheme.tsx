import { LOCAL_STORAGE_KEYS } from '@constants';
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import { createContext, useCallback, useContext, useState } from 'react';

interface IThemeContext {
  isDark: boolean;
  toggleTheme: () => void;
}

const ThemeContext = createContext<IThemeContext>({
  isDark: false,
  toggleTheme: () => undefined,
});

export function useTheme() {
  return useContext(ThemeContext);
}

export function ProvideTheme({ children }: IChildren) {
  const [darkTheme, setDarkTheme] = useState<boolean>(
    localStorage.getItem(LOCAL_STORAGE_KEYS.DARK_MODE) === 'true' || false
  );

  const appTheme = createTheme({
    palette: {
      mode: !!darkTheme ? 'dark' : 'light',
      primary: {
        main: !!darkTheme ? '#ffff00' : '#0000ff',
      },
      secondary: {
        main: !!darkTheme ? '#0000ff' : '#ffff00',
      },
    },

    components: {
      MuiCssBaseline: {
        styleOverrides: {
          html: {
            scrollbehavior: 'smooth',
          },
        },
      },
    },
  });

  const toggleTheme = useCallback(
    () =>
      setDarkTheme((_theme) => {
        const next = !_theme;

        localStorage.setItem(
          LOCAL_STORAGE_KEYS.DARK_MODE,
          !!next ? 'true' : 'false'
        );

        return next;
      }),
    []
  );

  return (
    <ThemeContext.Provider value={{ isDark: !!darkTheme, toggleTheme }}>
      <ThemeProvider theme={appTheme}>
        <CssBaseline />

        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}

export default ThemeContext;
