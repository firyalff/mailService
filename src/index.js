import React from 'react';
import ReactDOM from 'react-dom';
import MailBox from './components/MailBox';
import config from './apiconfig.js'

ReactDOM.render(
  <MailBox
    url='http://localhost:7500'
    pollInterval={2000} />,
  document.getElementById('root')
);
