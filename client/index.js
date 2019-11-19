import React from 'react';
import ReactDOM from 'react-dom';
import ReactRouterDOM from 'react-router-dom';
const { HashRouter, Link, NavLink, Route, Switch } = ReactRouterDOM;


import App from './App.js';
import People from './People.js';
import Places from './Places.js';
import Things from './Things.js';
import Nav from './Nav.js';

// import App from './utils.js';
// import People from './utils.js';
// import Places from './utils.js';
// import Things from './utils.js';
// import Nav from './utils.js';

    //   const People = ({ people })=> {
    //     return (
    //       <ul>
    //         {
    //           people.map(person => <li key={ person.id}>{ person.name}</li>)
    //         }
    //       </ul>
    //     );
    //   };

    //   const Places = ({ places })=> {
    //     return (
    //       <ul>
    //         {
    //           places.map(place => <li key={ place.id}>{ place.name}</li>)
    //         }
    //       </ul>
    //     );
    //   };

    //   const Things = ({ things })=> {
    //     return (
    //       <ul>
    //         {
    //           things.map(thing => <li key={ thing.id}>{ thing.name}</li>)
    //         }
    //       </ul>
    //     );
    //   };


    //   const Nav = ({ people, places, things })=> {
    //     const links = [
    //       { text: 'People', to: '/people', count: people.length},
    //       { text: 'Places', to: '/places', count: places.length },
    //       { text: 'Things', to: '/things', count: things.length }
    //     ];
    //     return (
    //       <nav>
    //         {
    //           links.map( link=> <NavLink key={ link.text } to={ link.to }>{ link.text }</NavLink>)
    //         }
    //       </nav>
    //     );
    //   };

    //   class App extends React.Component{
    //     constructor(){
    //       super();
    //       this.state = {
    //         people: [],
    //         places: [],
    //         things: []
    //       };
    //     }
    //     async componentDidMount(){
    //       const urls = [
    //         '/api/people',
    //         '/api/places',
    //         '/api/things',
    //       ];
    //       const [people, places, things] = await Promise.all(
    //         urls.map( url => axios.get(url).then( response => response.data))
    //       );
    //       this.setState({ people, places, things });
    //     }
    //     render(){
    //       return (
    //         <HashRouter>
    //           <Route render={()=> <Nav { ...this.state }/>} />
    //           <div className='container'>
    //             <h1>Acme Nouns</h1>
    //             <Route path='/people' render={()=> <People {...this.state}/>} />
    //             <Route path='/places' render={()=> <Places {...this.state}/>} />
    //             <Route path='/things' render={()=> <Things {...this.state}/>} />
    //           </div>
    //         </HashRouter>
    //       );
    //     }
    //   }

ReactDOM.render(<App />, document.querySelector('#root'));