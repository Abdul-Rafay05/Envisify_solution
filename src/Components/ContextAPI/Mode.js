import { useContext, createContext } from "react"
// import , createContext from "react"

export const ThemeContext = createContext({
    Mode: "light",
    Dark: () => { },
    light: () => { },
})
export const ContentProvider = ThemeContext.Provider

export function useTheme() {
    return useContext(ThemeContext)
}
