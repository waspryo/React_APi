<<<<<<< HEAD
// import React from 'react';

// function App() {

//   constructor(prpps) {
//     super(props);
//     this.state = {
//       items: [],
//       isLoaded: false,
//     }
//   }

//   componemtDidMount() {
//     fetch('https://jsonplaceholder.typicode.com/users')
//     .then(res => res.json())
//     .then(json => {
//       this.setState({
//         isLoaded: true,
//         items: json,
//       })
//     })
//   }

//   return (

//     var { isLoaded, items } = this.state;

//     if (!isLoaded) {
//       return <div>Loading...</div>;
//     }

//     else {

//     <div className="App">
//       Data has been loaded
//     </div>
//   );
// }

// export default App;
=======
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
      Data has been loaded text.
    </div>
  );
}

export default App;
>>>>>>> 5f55c12278a62e9746658eb8f700c90451563928
