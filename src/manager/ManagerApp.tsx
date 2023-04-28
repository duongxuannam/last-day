import React from 'react';
import { useInitApp } from 'hooks/app';
import Onboard from './Onboard';
import Loading from './Loading';

const ManagerApp = () => {
  useInitApp();
  return (
    <>
      <Onboard />
      <Loading />
    </>
  );
};

export default ManagerApp;
