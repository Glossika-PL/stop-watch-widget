import { ButtonStyle } from '@/enum/component'
import '@/styles/button.scss'

interface ButtonProps
  extends React.DetailedHTMLProps<
      React.ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    >,
    React.AriaAttributes {
  handleClick: () => void
  buttonStyle: ButtonStyle
}

const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
  const { buttonStyle, handleClick } = props

  return (
    <button
      className={buttonStyle}
      onClick={handleClick}
      disabled={props.disabled}
    >
      {children}
    </button>
  )
}

export default Button
