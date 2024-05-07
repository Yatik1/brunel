
interface ButtonProps {
    label?:string 
    className:string
    onClick?:() => void
    icon?:JSX.Element
    disabled?:boolean
    // type?:string
}

const Button : React.FC<ButtonProps>= ({
    label,
    className,
    icon,
    onClick,
    disabled,
    
}) => {
  return (
        <button disabled={disabled} className={`rounded-full flex items-center justify-center gap-x-3 ${className}` } onClick={onClick}>
            {label}
          
             {icon && <div className="block">{icon}</div>}  
        </button>
  )
}

export default Button