import { Typography } from '@mui/material';
import React from 'react';
import CheckAccount from './CheckingAccount/CheckAccount';
import Invoice from './Invoice/Invoice';
import Total from './Total/Total';
import WatchList from './AccountWatchList/WatchList';

const Pages = () => {
  return (
    <Typography className="graph">
      <CheckAccount />
      <Invoice />
      <Total />
      <WatchList />
    </Typography>
  );
};

export default Pages;
