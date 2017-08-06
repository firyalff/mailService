import React, { Component } from 'react';
import axios from 'axios';
import MailList from './MailList';
import MailForm from './MailForm';
import style from '../style';

class MailBox extends Component {
  constructor(props) {
    super(props);
    this.state = { data: [] };
    this.loadMailsFromServer = this.loadMailsFromServer.bind(this);
    this.handleMailSubmit = this.handleMailSubmit.bind(this);
    this.handleMailDelete = this.handleMailDelete.bind(this);
    this.handleMailUpdate = this.handleMailUpdate.bind(this);
  }
  loadMailsFromServer() {
    axios.get(`${this.props.url}/mail`)
      .then(res => {
        this.setState({ data: res.data.result.comments });
      })
  }
  handleMailSubmit(mail) {
    let mails = this.state.data;
    let newMails = mails.concat([mail]);
    this.setState({ data: newMails });
    axios.post(`${this.props.url}/mail`, mail)
      .catch(err => {
        console.error(err);
        this.setState({ data: mails });
      });
  }
  handleMailDelete(id) {
    axios.delete(`${this.props.url}/${id}`)
      .then(res => {
        console.log('Mail deleted');
      })
      .catch(err => {
        console.error(err);
      });
  }
  handleMailUpdate(id, mail) {
    //sends the mail id and new author/text to our api
    axios.put(`${this.props.url}/${id}`, mail)
      .catch(err => {
        console.log(err);
      })
  }
  componentDidMount() {
    this.loadMailsFromServer();
    setInterval(this.loadMailsFromServer, this.props.pollInterval);
  }
  render() {
    return (
      <div style={ style.mailBox }>
        <h2 style={ style.title }>Mails:</h2>
      <MailList
        onMailDelete={ this.handleMailDelete }
        onMailUpdate={ this.handleMailUpdate }
        data={ this.state.data }/>
      <MailForm onMailSubmit={ this.handleMailSubmit }/>
      </div>
    )
  }
}

export default MailBox;
