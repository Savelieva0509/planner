import css from './Button.module.scss';

interface ButtonProps {
  type: 'submit';
  children: React.ReactNode; 
}



const Button: React.FC<ButtonProps> = ({ type, children }) => {
  return <button className={css.btn} type={type}>{children}</button>;
};

export default Button;
