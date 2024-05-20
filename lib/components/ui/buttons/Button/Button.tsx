import styles from './Button.module.css'

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
   /** Any kind of component inside if the button */
   children?: React.ReactNode | Array<React.ReactNode> | undefined
}

export const Button: React.FC<ButtonProps> = ( props ): JSX.Element => {
   const { className, ...restProps } = props

   return (
      <button
         className={ `${ className } ${ styles.button }` }
         { ...restProps }
      >
         { props.children }
      </button>
   )

} 