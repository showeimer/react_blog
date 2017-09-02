import React, {Component} from 'react';

class CreatePost extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return(
      <form>
        <label htmlFor="author">Author:</label>
        <input name="author" />

        <label htmlFor="title">Title:</label>
        <input name="title" />

        <label htmlFor="entry">Write your blog:</label>
        <textarea name="entry" />

        <button>Submit</button>
      </form>
    )
  }
}

export default CreatePost;
