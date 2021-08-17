import React from 'react';
import PageNav from '../PageNav/PageNav';

const MainLayout = (props) => {
  return (
    <>
      <PageNav/>
      <main>{props.children}</main>
    </>
  );
}

export default MainLayout;
