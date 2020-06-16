import React from 'react';

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => (
  <>
    <main className="container mx-auto">{children}</main>
  </>
);

export default Layout;
