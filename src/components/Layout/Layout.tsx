import React from 'react';

type Props = {
  children: React.ReactNode;
  extraClasses?: string;
};

const Layout = ({ extraClasses = '', children }: Props) => (
  <>
    <main
      className={`container mx-auto xs:max-w-full sm:max-w-screen-sm md:max-w-screen-sm lg:max-w-screen-md xl:max-w-screen-xl ${extraClasses}`}
    >
      {children}
    </main>
  </>
);

export default Layout;
