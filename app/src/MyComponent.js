import {
  AccountData,
  ContractData,
  ContractForm
} from 'drizzle-react-components';
import React, { Component } from 'react'
import Images from './Images'
import Image from './Image'



class MyComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: "Please Click me!",
      clickCount: 1
    };
  }
  // Method updateCount()
  updateCount() {
    this.setState((prevState, props) => {
      return {
        clickCount: prevState.clickCount + 1,
        text: "Clicked"

      };
    });


  }


  render() {
    const ImageItems = [];
    var a = 3
    for (var i = 0; i < this.state.clickCount; i++) {
      ImageItems.push(<Image imagetitle={i}></Image>);
    }

    return (
      <div className="container">
        <div class="row">
          {ImageItems}
        </div>
        <br />
        <h2>Add new Image String</h2>
        <ContractForm
          contract="Urheberrecht"
          method="addImage"
          labels={['String', 'Description']} />
          <br />
        <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal" onClick={() => this.updateCount()}>
          Update GUI
      </button>
      <h2>Regist User</h2>
      <ContractForm
          contract="Urheberrecht"
          method="registOwner"
          labels={['Name', 'Email']} />
          <br />

      </div>

    );
  }
}

export default MyComponent;
