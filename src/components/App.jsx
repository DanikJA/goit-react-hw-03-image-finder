import { Component } from 'react';

class App extends Component {
  state = {
    image: [],
  };

  handleSubmit = event => {};

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}></form>

        <div>Gallery</div>

        <button>Load more</button>
      </div>
    );
  }
}
