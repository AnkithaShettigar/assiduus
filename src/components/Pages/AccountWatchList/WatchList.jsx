import { Typography } from '@mui/material';
import React from 'react';
import './WatchList.css';
const WatchList = () => {
  const data = [
    { id: 1, account: 'Sales', month: '1,194.58', ytd: '11,418.29' },
    { id: 2, account: 'Advertising', month: '6,879.02', ytd: '9,271.36' },
    { id: 3, account: 'Inventory', month: '4,692.26', ytd: '9,768.09' },
    { id: 4, account: 'Entertainment', month: '0.00', ytd: '0.00' },
    { id: 5, account: 'Product', month: '4,652.10', ytd: '2,529.90' },
  ];
  return (
    <Typography className="card">
      <Typography className="card-top">
        <p className="card-title">Account watchList</p>
      </Typography>
      <Typography>
        <table className="tb">
          <tr className="tr-head">
            <th className="th1">Account</th>
            <th className="th2">This Month</th>
            <th>YTD</th>
          </tr>
          {data && data.length > 0 ? (
            data.map((item, index) => (
              <tr key={index}>
                <td className="td1">{item.account}</td>
                <td className="td2">{item.month}</td>
                <td className="td3">{item.ytd}</td>
              </tr>
            ))
          ) : (
            <p>Loading..</p>
          )}
        </table>
      </Typography>
    </Typography>
  );
};

export default WatchList;
