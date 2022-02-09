import { TagProps } from './Tag.props';
import styles from './Tag.module.css';
import cn from 'classnames';

export const Tag = ({
  size = 's',
  color = 'ghost',
  href,
  children,
  className,
  ...props
}: TagProps) => {
  const tagClass = cn(styles.tag, className, {
    [styles.s]: size === 's',
    [styles.m]: size === 'm',
    [styles.primary]: color === 'primary',
    [styles.green]: color === 'green',
    [styles.gray]: color === 'gray',
    [styles.red]: color === 'red',
    [styles.ghost]: color === 'ghost'
  });

  return (
    <div className={tagClass} {...props}>
      {href ? <a href={href}>{children}</a> : <>{children}</>}
    </div>
  );
};

export default Tag;
