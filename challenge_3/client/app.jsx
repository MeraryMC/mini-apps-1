class App extends React.Component {
  constructor(props) {
    super(props)


    this.state = {
      //This pageID will allow is to know what page we're on, and thus render the appropriate content.
      pageID: 0,
      username: ''
    };

    //We have to bind our functions in React because otherwise they will lose their context and the value of 'this' will return undefined.
    this.navigate = this.navigate.bind(this);

    this.handleCheckout = this.handleCheckout.bind(this);

    this.forward = this.forward.bind(this);

    this.homepage = this.homepage.bind(this);

  };

  //The navigate function will take care of the change from page to page by changing the state of pageID.
  navigate(id) {
    if (id === 0) {
      return (
        <div><h1>Multistep Checkout Experience</h1>
          <label htmlFor="Checkout">
            Ready to Purchase?{"\n"}
          </label>
          <button onClick={this.handleCheckout}>Go to Checkout</button>
        </div>
      );
    }

    else if (id === 1) {
      return (
        <div>
          <Information ={this.forward.bind(this)} />
        </div>
      );
    }

  }

  foward(e) {
    var forward = this.state.pageID + 1
    this.setState({pageID: forward});
  }

  handleCheckout(e) {
    e.preventDefault();
    //invoking the forward function which will increment the ID
    this.forward();
  }

  handleChange(e) {
    this.setState({ username: e.target.value
    });
  }

  handleSubmit() {

  }

  homepage() {

  }

  render() {
    console.log('render pageID', this.state.pageID);
    return this.navigate(this.state.pageID);
  };

  // render() {
  //   return (
  //     <div>
  //       <form onSubmit={this.handleCheckout}>
  //       </form>
  //     </div>
  //   );
  // }
}

class Information extends React.Component {
  constructor(props){
    super (props)


    this.state = {

    }
  }

  render() {
    return (
      <div>
        <h1>Please Enter Your Information Below</h1>
        <form onSubmit={this.handleSubmit}>
        <label htmlFor="username">
            Username
          </label>
          <input
            id="username"
            onChange={this.handleChange}
            value={this.state.username}
          />
          <div>{"\n"}</div>
          <button onClick={this.handleSubmit}>Submit</button>
          </form>
        </div>
      );
    }
}



//this should always be at the very bottom
ReactDOM.render(<App/ >, document.getElementById('app'));