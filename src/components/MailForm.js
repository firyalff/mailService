import React, { Component } from 'react';
import style from '../style';

class MailForm extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      frommail: ''
      , to: '' 
      , subject: '' 
      , content: '' 
    };
    this.handleFromChange = this.handleFromChange.bind(this);
    this.handleToChange = this.handleToChange.bind(this);
    this.handleSubjectChange = this.handleSubjectChange.bind(this);
    this.handleContentChange = this.handleContentChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleFromChange(e){
    this.setState({ frommail: e.target.value });
  }
  handleToChange(e){
    this.setState({ to: e.target.value });
  }
  handleSubjectChange(e){
    this.setState({ subject: e.target.value });
  }
  handleContentChange(e){
    this.setState({ content: e.target.value });
  }
  handleSubmit(e) {
    e.preventDefault();
    let frommail = this.state.frommail.trim();
    let to = this.state.to.trim();
    let subject = this.state.subject.trim();
    let content = this.state.content.trim();
    
    if (!frommail || !to || !subject || !content) {
      return;
    }

    this.props.onMailSubmit({ 
      from: frommail
      , to: to 
      , subject: subject 
      , content: content 
    });

    this.setState({ 
      from: ''
      , to: '' 
      , subject: ''
      , content: ''  
    });
  }

  render() {
    return (
      <form style={ style.mailForm } onSubmit={ this.handleSubmit }>
        <input
          required
          type='email'
          placeholder='From email'
          style={ style.mailFormAuthor}
          value={ this.state.from }
          onChange={ this.handleFromChange } />
        <input
          required
          type='email'
          placeholder='To email'
          style={ style.mailFormAuthor}
          value={ this.state.to }
          onChange={ this.handleToChange } />
        <input
          required
          type='text'
          placeholder='Subject'
          style={ style.mailFormText}
          value={ this.state.subject }
          onChange={ this.handleSubjectChange } />
        <textarea required placeholder='Mail content'
          style={ style.mailFormText}
          value={ this.state.content }
          onChange={ this.handleContentChange }></textarea>
        <input
          type='submit'
          style={ style.mailFormPost }
          value='Post'/>
      </form>
    )
  }
}

export default MailForm;
