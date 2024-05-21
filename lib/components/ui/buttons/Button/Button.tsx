import styles from './Button.module.css'

export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
   /**
    * Toggles the "disabled" state of the button.
    */
   disabled?: boolean | undefined

   /** 
    * Any kind of component inside if the button
    */
   children?: React.ReactNode | Array<React.ReactNode> | undefined
}

export const Button: React.FC<ButtonProps> = ({
   className,
   disabled = false,
   children,
   ...props
}): JSX.Element => {

   // Default props
   // const { className,
   //    disabled = false,
   //    children,
   //    ...rest
   // } = props

   return (
      <button
         disabled={disabled}
         className={`${className} ${styles.button}`}
         {...props}
      >
         {children}
      </button>
   )

}