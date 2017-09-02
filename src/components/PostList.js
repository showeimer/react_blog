import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import ShowPost from './ShowPost';

class PostList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      entries: []
    }
  }

  componentDidMount() {
    fetch('https://tiny-lasagna-server.herokuapp.com/collections/blogger/')
    .then(results => {
      return results.json();
    })
    .then(data => {
      // console.log(data);
      this.setState({entries: data});
    });
  }

  render() {

    const blogs = this.state.entries.map((entry) => {
      return (
        <Link to={`/blogs/${entry._id}`} key={entry._id}>{entry.title}</Link>
      )
    });

    return(
      <div>
        <h1>Blog Entries</h1>
        {blogs}
      </div>
    )
  }
}

export default PostList;
