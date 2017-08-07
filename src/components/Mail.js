import React, { Component } from 'react';
import style from '../style';
import marked from 'marked';

class Mail extends Component {
  constructor(props) {
    super(props);
    this.state= {
      toBeUpdated: false,
      author: '',
      text: ''
    };

    this.deleteMail = this.deleteMail.bind(this);
    this.updateMail = this.updateMail.bind(this);
    this.handleAuthorChange = this.handleAuthorChange.bind(this);
    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleMailUpdate = this.handleMailUpdate.bind(this);
  }
  updateMail(e) {
    e.preventDefault();
    
    this.setState({ toBeUpdated: !this.state.toBeUpdated });
  }
  handleMailUpdate(e) {
    e.preventDefault();
    let id = this.props.uniqueID;
    let author = (this.state.author) ? this.state.author : null;
    let text = (this.state.text) ? this.state.text : null;
    let mail = { author: author, text: text};
    this.props.onMailUpdate(id, mail);
    this.setState({
      toBeUpdated: !this.state.toBeUpdated,
      author: '',
      text: ''
    })
  }
  deleteMail(e) {
    e.preventDefault();
    let id = this.props.uniqueID;
    this.props.onMailDelete(id);
    console.log('oops deleted');
  }
  handleTextChange(e) {
    this.setState({ text: e.target.value });
  }
  handleAuthorChange(e) {
    this.setState({ author: e.target.value });
  }
  rawMarkup() {
    let rawMarkup = marked(this.props.children.toString());
    return { __html: rawMarkup };
  }
  render() {
    return (
      <span></span>
    )
  }
}

export default Mail;
