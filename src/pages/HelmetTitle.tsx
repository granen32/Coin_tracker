import React from 'react';
import { Helmet, HelmetProvider } from "react-helmet-async";
 

const HelmetTitle = () => {
  return (
    <>
    <HelmetProvider>
      <Helmet></Helmet>
    </HelmetProvider>
    </>
  )
}

export default HelmetTitle