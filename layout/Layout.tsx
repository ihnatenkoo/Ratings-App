import { Header } from './Header/Header';
import { Sidebar } from './Sidebar/Sidebar';
import { Footer } from './Footer/Footer';
import { LayoutProps } from './Layoutprops';
import cn from 'classnames';
import styles from './Layout.module.css';

export const Layout = ({ children }: LayoutProps): JSX.Element => {
  return (
    <>
      <Header />
      <div>
        <Sidebar />
        {children}
      </div>
      <Footer />
    </>
  );
};
