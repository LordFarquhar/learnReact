import React from 'react';

class FavouriteColorChange extends React.Component {

    constructor(props) {
        super(props);
        this.state = { favoritecolor: this.props.favcol, show: true };
    }

    // custom function used by the component
    delHeader = () => {
        this.setState({ show: false });
    }

    // compulsary method - the html here is rendered to the DOM
    render() {
        let myHeader;
        if (this.state.show) {
            myHeader = <Child />;
        };
        return (
            <div>
                {myHeader}
                <h1>My Favorite Color is {this.state.favoritecolor}</h1>
                <div id="div1"></div>
                <div id="div2"></div>
                <button type="button" onClick={this.delHeader}>Delete Header</button>
            </div>
        );

    }

    // Called once the component is rendered
    componentDidMount() {
        setTimeout(() => {
            this.setState({ favoritecolor: "yellow" })
        }, 5000)
    }

    // This is used to determine whether the component should update on a state change
    // Can use this.state... and this.props... with if statements to decide 
    // or just return true (yes to update) or false (no to update)
    shouldComponentUpdate() {
        return true;
    }

    // if the component is updated (when any value in state is changed) this gives you the values they were before update
    getSnapshotBeforeUpdate(prevProps, prevState) {
        document.getElementById("div1").innerHTML =
            "Before the update, the favorite was " + prevState.favoritecolor;
    }

    // after the update is complete this is called to allow for any changes or further function calls after the update
    componentDidUpdate() {
        document.getElementById("div2").innerHTML =
            "The updated favorite is " + this.state.favoritecolor;
    }

    // this gets called just before a component is removed from the DOM
    componentWillUnmount() {
        alert("This is about to be unmounted.");
    }

}


class Child extends React.Component {
    componentWillUnmount() {
      alert("The component named Header is about to be unmounted.");
    }
    render() {
      return (
        <h1>Hello World!</h1>
      );
    }
  }

export default FavouriteColorChange;