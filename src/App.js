import React, { Component } from 'react';
import axios from 'axios';
import Photos from './Photos/Photos';
import ClipLoader from "react-spinners/ClipLoader";
import './App.css';
import Pagination from "react-js-pagination";




class App extends Component {


  state = {
    photos: [],
    selectedPhotoId: null,
    selectedPhotoURL: null,
    error: false,
    isLoading: false,
    activePage: 1,
    numResultsPerPage: 10,
    numResults: 0,
    currPageRange: [0, 9],
    open: false


  }

  componentDidMount() {
    this.setState({ isLoading: true });
    const uri = 'https://cors-anywhere.herokuapp.com/https://api.500px.com/v1/photos?feature=popular&consumer_key=P7LLhKkPAnPUpbfAXk3Jq2iDjYmCx87zgfEDxQVS'
    axios.get(uri)
      .then(response => {

        const photos = response.data.photos.slice();
        const updatedPhotos = photos.map(
          photo => {
            return {
              ...photo
            }
          }
        )
        this.setState({ photos: updatedPhotos })
        this.setState({ isLoading: false });
        this.setState({ numResults: photos.length })

      })
      .catch((error) => {
        this.setState({ error: true })
      })

  }

  handlePageChange(pageNumber) {

    this.setState({ activePage: pageNumber });
    let firstPage = (pageNumber - 1) * this.state.numResultsPerPage;
    let lastPage = (pageNumber - 1) * this.state.numResultsPerPage + this.state.numResultsPerPage;
    this.setState({ currPageRange: [firstPage, lastPage] })

  }

  toggleBox() {
    const { opened } = this.state;
    this.setState({
      opened: !opened,
    });
  }
 
  render() {


    let photos = <p style={{ textAlign: 'center' }}>Something went wrong</p>
    if (!this.state.error) {
      photos = this.state.photos.map(
        (photo) => {

          return <Photos
            // clicked={() => this.setToggler(photo.image_url[0])}
            toggler={this.state.toggler}
            key={photo.id}
            selectedPhotoURL={photo.image_url[0]}
            author={photo.description}
            name={photo.name}
            domEle="<div>MATT HUGHES</div>"
          />

        }
      );
    }


    return (


      <div>

        <div>
          <Pagination
            activePage={this.state.activePage}
            itemsCountPerPage={this.state.numResultsPerPage}
            totalItemsCount={this.state.numResults}
            pageRangeDisplayed={Math.ceil(this.state.numResults / this.state.numResultsPerPage)}
            onChange={this.handlePageChange.bind(this)}
          />
        </div>

        <div className="sweet-loading">
          <ClipLoader
            size={150}
            color={"#123abc"}
            loading={this.state.isLoading}
          />
        </div>
        <div class="masonry">
          <div class="grid"></div>
          {photos.slice(this.state.currPageRange[0], this.state.currPageRange[1])}
        </div>
      </div>

    )
  }
}
export default App;

