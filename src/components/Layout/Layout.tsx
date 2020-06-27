import React from 'react';

type Props = {
  children: React.ReactNode;
  extraClasses?: string;
};

const Layout = ({ extraClasses, children }: Props) => (
  <>
    <main className={`container mx-auto ${extraClasses}`}>{children}</main>
  </>
);

export default Layout;
