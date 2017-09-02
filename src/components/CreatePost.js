import React, {Component} from 'react';

class CreatePost extends Component {
  constructor(props) {
    super(props);

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleEntryChange = this.handleEntryChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      name: '',
      title: '',
      entry: ''
    }
  }

  handleNameChange = (event) => {
    this.setState({name: event.target.value});
  };

  handleTitleChange = (event) => {
    this.setState({title: event.target.value});
  };

  handleEntryChange = (event) => {
    this.setState({entry: event.target.value});
  }

  handleSubmit = (event) => {
    event.preventDefault();
    let blogEntry = JSON.stringify(this.state);

    fetch('https://tiny-lasagna-server.herokuapp.com/collections/blogger/', {
      method: "POST",
      body: blogEntry,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
    .then(response => console.log('Successfully posted blog'))
    .catch(error => console.log('Could not post blog'));

    this.setState({name:'', title:'', entry:''});
  }

  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="name">Author:</label>
        <input name="name" type="text" value={this.state.name}onChange={this.handleNameChange} />

        <label htmlFor="title">Title:</label>
        <input name="title" type="text" value={this.state.title}onChange={this.handleTitleChange} />

        <label htmlFor="entry">Write your blog:</label>
        <textarea name="entry" type="text" value={this.state.entry}onChange={this.handleEntryChange} />

        <button>Submit</button>
      </form>
    )
  }
}

export default CreatePost;
