import React from 'react';

function App() {

  constructor(prpps) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false,
    }
  }

  componemtDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(json => {
      this.setState({
        isLoaded: true,
        items: json,
      })
    })
  }

  return (

    var { isLoaded, items } = this.state;

    if (!isLoaded) {
      return <div>Loading...</div>;
    }

    else {

    <div className="App">
      Data has been loaded
    </div>
  );
}

export default App;
