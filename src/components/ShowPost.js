import React, {Component} from 'react';

class ShowPost extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      title: '',
      blog: ''
    }
  }

  componentDidMount() {
    let blog = this.props.match.params.blog;
    console.log(blog);
    let url = 'https://tiny-lasagna-server.herokuapp.com/collections/blogger/' + blog;
    fetch(url).then(response => response.json()).then(data => this.setState({name: data.name, title: data.title, blog: data.blog}))
  }

  render() {
    return (
      <div className="container">
        <h2 className="display-5">{this.state.title}</h2>
        <h3 className="lead">{this.state.name}</h3>
        <p>{this.state.blog}</p>
      </div>
    )
  }
}

export default ShowPost;
