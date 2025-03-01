import {useContext, createContext} from 'react'

export const ThemeContext = createContext(
    {
        thememode: "Light",
        DarkTheme : () => {},
        LightTheme : () => {}
    }
)

export const ThemeProvider = ThemeContext.Provider

export default function UseTheme(){
    return useContext(ThemeContext)
}