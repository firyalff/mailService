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
    //binding all our functions to this class
    this.deleteMail = this.deleteMail.bind(this);
    this.updateMail = this.updateMail.bind(this);
    this.handleAuthorChange = this.handleAuthorChange.bind(this);
    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleMailUpdate = this.handleMailUpdate.bind(this);
  }
  updateMail(e) {
    e.preventDefault();
    //brings up the update field when we click on the update link.
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
      <div style={ style.mail }>
        <h3>{this.props.author}</h3>
        <span dangerouslySetInnerHTML={ this.rawMarkup() } />
        <a style={ style.updateLink } href='#' onClick={ this.updateMail }>update</a>
        <a style={ style.deleteLink } href='#' onClick={ this.deleteMail }>delete</a>
        { (this.state.toBeUpdated)
          ? (<form onSubmit={ this.handleMailUpdate }>
              <input
                type='text'
                placeholder='Update name...'
                style={ style.mailFormAuthor }
                value={ this.state.author }
                onChange= { this.handleAuthorChange } />
              <input
                type='text'
                placeholder='Update your mail...'
                style= { style.mailFormText }
                value={ this.state.text }
                onChange={ this.handleTextChange } />
              <input
                type='submit'
                style={ style.mailFormPost }
                value='Update' />
            </form>)
          : null}
      </div>
    )
  }
}

export default Mail;
