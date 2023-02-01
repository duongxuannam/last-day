import React from 'react';
import {useInitApp} from 'hooks/app';
import {observer} from 'mobx-react-lite';

const ManagerApp = () => {
  useInitApp();
  return <></>;
};

export default observer(ManagerApp);
