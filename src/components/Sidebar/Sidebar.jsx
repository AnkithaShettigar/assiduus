import React from 'react';
import Typography from '@mui/material/Typography';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBook,
  faDollarSign,
  faIdBadge,
  faTableColumns,
  faUser,
  faWallet,
} from '@fortawesome/free-solid-svg-icons';

import './Sidebar.css';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <Typography>
      <Typography className="side-bar">
        <Typography className="side-nav">
          <Link to="/" className="nav-link">
            {' '}
            <p className="side-content">
              {' '}
              <FontAwesomeIcon
                icon={faTableColumns}
                className="side-icon"
              />{' '}
              Dashboard
            </p>
          </Link>
          <Link to="/" className="nav-link">
            <p className="side-content">
              <FontAwesomeIcon icon={faWallet} className="side-icon" />
              Accounts
            </p>
          </Link>
          <Link to="/" className="nav-link">
            <p className="side-content">
              <FontAwesomeIcon icon={faDollarSign} className="side-icon" />
              Payroll
            </p>
          </Link>
          <Link to="/" className="nav-link">
            <p className="side-content">
              <FontAwesomeIcon icon={faBook} className="side-icon" />
              Reports
            </p>
          </Link>
          <Link to="/" className="nav-link">
            <p className="side-content">
              <FontAwesomeIcon icon={faUser} className="side-icon" />
              Advisor
            </p>
          </Link>
          <Link to="/" className="nav-link">
            <p className="side-content">
              <FontAwesomeIcon icon={faIdBadge} className="side-icon" />
              Contacts
            </p>
          </Link>
        </Typography>
      </Typography>
    </Typography>
  );
};

export default Sidebar;
