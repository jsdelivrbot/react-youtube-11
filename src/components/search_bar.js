import React, { Component } from 'react'; // {Component} is syntatic sugar - it is the same as writing const Component = React.Component;

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };
  }//this is how state is initialized in a class based component, only within the constructor method. ANY OTHER TIME state is changed, this.setState must be called in order to inform React that the component's state object has changed, which will then rerender the component

  render() {
    return (
      <div className="search-bar">
        <input
          value={this.state.term}
          onChange={event => this.onInputChange(event.target.value)}/>
      </div>
    );//single arguments within an arrow function do not need to be enclosed in parentheses, such as (event) =>. this is a controlled component because the input value is determined by state. Whenever an event is called due to the input changing, it tells state to update with the event's updated value. this is turn causes state to rerender the component with the updated value that was entered in the input.
  }
  onInputChange(term) {
    this.setState({term});
    this.props.onSearchTermChange(term);
  }
} //this is a class based component. it's declaring a new ES6 class called SearchBar and is extending React.Component to give the class added functionality . class based components must define a render method and return some JSX or else a error appears

//previously our searchbar was a functional component ie. ()=>, a dumb component, where it was a function we could call and return some JSX. It did not have any ability to be aware of its surroundings or its state, or have the ability to communicate with other components effectively, such as when a user typed something into the input box.

export default SearchBar;

//state is a plain javascript object that is used to record and react to user events. each class based component that we define has its own state object. whenever a component's state is changed, the component immediately rerenders and also forces all of its children to rerender as well. only class based components have state; functional components do not.
