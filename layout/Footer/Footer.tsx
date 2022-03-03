import { FooterProps } from './Footer.props';
import cn from 'classnames';
import styles from './Footer.module.css';
import { format } from 'date-fns';

export const Footer = ({className, ...props }: FooterProps): JSX.Element => {
  return (
    <footer {...props} className={cn(className, styles.footer)}>
      <span className="copyright">
        OwlTop © 2020 - {format(new Date(), 'yyyy')} Все права защищены
      </span>
      <a href="#" target="_blank" className="terms">
        Пользовательское соглашение
      </a>
      <a href="#" target="_blank" className="confidentiality">
        Политика конфиденциальности
      </a>
    </footer>
  );
};
