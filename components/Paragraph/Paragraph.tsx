import { ParagraphProps } from './Paragraph.props';
import cn from 'classnames';
import styles from './Paragraph.module.css';

export const Paragraph = ({
  fontSize = '16px',
  children,
  className,
  ...props
}: ParagraphProps) => {
  return (
    <p
      className={cn(className, styles.paragraph, {
        [styles.small]: fontSize === '14px',
        [styles.medium]: fontSize === '16px',
        [styles.large]: fontSize === '18px'
      })}
      {...props}
    >
      {children}
    </p>
  );
};
