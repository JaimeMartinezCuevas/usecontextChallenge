import { useTheme } from "./themes/ThemeContext";

export function Prueba () {
  const { theme } = useTheme()
  return (
    <h1>{theme}</h1>
  )
}
