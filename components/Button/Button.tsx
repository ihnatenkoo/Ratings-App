import { ButtonProps } from './Button.props';
import ArrowIcon from './Arrow.svg';
import cn from 'classnames';
import styles from './Button.module.css';

export const Button = ({
  appereance,
  arrow = 'none',
  children,
  className,
  ...props
}: ButtonProps) => {
  const btnClass = cn(styles.button, className, {
    [styles.primary]: appereance === 'primary',
    [styles.ghost]: appereance === 'ghost'
  });

  return (
    <button className={btnClass} {...props}>
      {children}
      {arrow !== 'none' && (
        <span className={cn(styles.arrow, { [styles.down]: arrow === 'down' })}>
          <ArrowIcon />
        </span>
      )}
    </button>
  );
};
