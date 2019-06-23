import React, { Component } from 'react';
import {
  AccountData,
  ContractData,
  ContractForm
} from 'drizzle-react-components';

class Images extends Component {


  render() {
    var a = this.props.imagetitle;
    return (
      <div class="container">

        <br></br>
        <div class="row">
          <div class="col-md-4 mb-5">
            <img class="img-fluid rounded mb-4 mb-lg-0" src="http://placehold.it/450x250" alt="" />
          </div>
          <div class="col-md-4 mb-5">
            <div class="card text-white bg-secondary">
              <div class="card-body">
                <h1 class="font-weight-light">Image Details</h1>
                <p>Image hash: <ContractData contract="Urheberrecht" method="getImageHash" methodArgs={[this.props.imagetitle]} /></p>
                <p>Description: <ContractData contract="Urheberrecht" method="getImageDesc" methodArgs={[this.props.imagetitle]} /></p>
                <p class="text-white m-0">Owner Address: <ContractData contract="Urheberrecht" method="getImageOwner" methodArgs={[this.props.imagetitle]} /></p>
                <p class="text-white m-0">Owner Name: <ContractData contract="Urheberrecht" method="getOwnerName" methodArgs={[this.props.imagetitle]} /></p>
                <p class="text-white m-0">Owner Mail: <ContractData contract="Urheberrecht" method="getOwnerMail" methodArgs={[this.props.imagetitle]} /></p>
              </div>
            </div>
          </div>
          <div class="col-md-4 mb-5">
            <div class="card h-100">
              <div class="card-body">
                <h2 class="card-title">Version</h2>
                <ContractData contract="Urheberrecht" method="showUpdates" methodArgs={[this.props.imagetitle]} />
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <div class="card  bg-secondary">
              <h2>Update Image</h2>
              <p>ID: {this.props.imagetitle}</p>
              <ContractForm
                contract="Urheberrecht"
                method="updateImage"
                labels={['id', 'updated hash','Changes']} />
            </div>
          </div>
        </div>
        <br></br>
        <hr></hr>
      </div >




    )

  }
}


export default Images