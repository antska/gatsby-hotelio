import React from 'react';
import Header from '../Header';
import Footer from '../Footer';

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => (
  <>
    <Header />
    <main className="container mx-auto">{children}</main>
    <Footer />
  </>
);

export default Layout;
