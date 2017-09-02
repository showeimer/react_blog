import React, {Component} from 'react';

class CreatePost extends Component {
  constructor(props) {
    super(props);

    this.handleAuthorChange = this.handleAuthorChange.bind(this);
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleEntryChange = this.handleEntryChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      author: '',
      title: '',
      entry: ''
    }
  }

  handleAuthorChange = (event) => {
    this.setState({author: event.target.value});
  };

  handleTitleChange = (event) => {
    this.setState({title: event.target.value});
  };

  handleEntryChange = (event) => {
    this.setState({entry: event.target.value});
  }

  handleSubmit = (event) => {
    event.preventDefault();
  }
  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="author">Author:</label>
        <input name="author" type="text" value={this.state.author}onChange={this.handleAuthorChange} />

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
