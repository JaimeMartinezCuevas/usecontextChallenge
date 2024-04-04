import { useTheme } from '../themes/ThemeContext.jsx'

const Button = () => {
  const { toggleTheme } = useTheme()
  return <button onClick={toggleTheme}>Cambia el tema</button>
}

export default Button