class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = { items: [], text: ''};
    // this.handleChange = this.handleChange.bind(this);
    // this.handleCheckout = this.handleCheckout.bind(this);
  };

  render() {
    return (
      <div>
        <h1>Checkout</h1>
        <form onSubmit={this.handleCheckout}>
          <label htmlFor="Checkout">
            Ready for Checkout?
          </label>
          <button>
            Go to Checkout
          </button>
        </form>
      </div>
    );
  }
}

// class F1 extends React.Component


//this should always be at the very bottom
ReactDOM.render(<App/ >, document.getElementById('app'));