import React, { Component } from 'react';
import {
  AccountData,
  ContractData,
  ContractForm
} from 'drizzle-react-components';


class Images extends Component {
  render() {
    return (
      <div class="col-sm-3">
        <div class="card">
          <img class="card-img-top" src="http://placehold.it/500x325" alt=""></img>
          <div class="card-body">
            <h4 class="card-title">{this.props.imagetitle}</h4>
            <p class="card-text"><ContractData contract="Urheberrecht" method="getImage" methodArgs={[this.props.imagetitle]} /></p>
          </div>
          <div class="card-footer">


            <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalLong">
            Image Details
</button>

            <div class="modal fade" id="exampleModalLong" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
              <div class="modal-dialog modal-lg" role="document">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLongTitle">{this.props.imagetitle}</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div class="modal-body">
                    <img class="img-fluid rounded mb-4 mb-lg-0" src="http://placehold.it/450x300" alt="" />
                    <p><ContractData contract="Urheberrecht" method="getImageHash" methodArgs={[0]} /></p>

                    <h1 class="font-weight-light">{this.props.imageid}</h1>
                    <p><ContractData contract="Urheberrecht" method="getImageDesc" methodArgs={[0]} /></p>

                    <div class="row">
                      <div class="col-md-8 mb-5">
                        <div class="card text-white bg-secondary">
                          <div class="card-body">
                            <p class="text-white m-0"> Owner: <ContractData contract="Urheberrecht" method="getImageOwner" methodArgs={[0]} /></p>
                            <a class="btn btn-primary" href="#"></a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-8 mb-5">
                        <div class="card h-100">
                          <div class="card-body">
                            <h2 class="card-title">Version</h2>
                            <ContractData contract="Urheberrecht" method="showUpdates" methodArgs={[0]} />
                          </div>
                          <div class="card-footer">
                            <a href="#" class="btn btn-primary btn-sm">More Info</a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-8 mb-5">
                        <div class="card h-100">
                          <div class="card-body">
                            <h2 class="card-title">Licensing</h2>
                            <table class="table">
                              <thead>
                                <tr>
                                  <th scope="col">#</th>
                                  <th scope="col">Date</th>
                                  <th scope="col">licensee</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <th scope="row">1</th>
                                  <td>10.06.19</td>
                                  <td>Michael Gardin</td>
                                </tr>
                                <tr>
                                  <th scope="row">2</th>
                                  <td>15.06.19</td>
                                  <td>Lukas Brandenberger</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                          <div class="card-footer">
                            <a href="#" class="btn btn-primary btn-sm">More Info</a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-8 mb-5">
                        <div class="card text-white bg-secondary">
                          <h1>Update Image</h1><ContractForm
                            contract="Urheberrecht"
                            method="updateImage"
                            labels={['newhash', 'update description']}
                            methodArgs={[{ id: [this.props.imagetitle] }, { update: "hallo" }]} />
                          <a class="btn btn-primary" href="#">Update Image</a>
                        </div>
                      </div>
                    </div>
                  </div >

                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )

  }
}


export default Images