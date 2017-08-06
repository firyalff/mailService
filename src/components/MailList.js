import React, { Component } from 'react';
import Mail from './Mail';
import style from '../style';

class MailList extends Component {
  render() {
    let mailNodes = this.props.data.map(mail => {
      return (
        <Mail
          author={ mail.author }
          uniqueID={ mail['_id'] }
          onMailDelete={ this.props.onMailDelete }
          onMailUpdate={ this.props.onMailUpdate }
          key={ mail['_id'] }>
          { mail.text }
        </Mail>
      )
    })
    return (
      <div style={ style.mailList }>
        { mailNodes }
      </div>
    )
  }
}
export default MailList;
