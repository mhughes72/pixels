import React, { Component, useState } from 'react';
import axios from 'axios';
import Photos from './Photos/Photos';
import Photo from './Photo/Photo'
import ClipLoader from "react-spinners/ClipLoader";
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import './App.css';
import Masonry from 'react-masonry-css'



class App extends Component {

  breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1
  };

  json = (response) => {
    return response.json()
  }


  state = {
    photos: [],
    selectedPhotoId: null,
    selectedPhotoURL: null,
    error: false,
    open: false,
    isLoading: false,

  }

  photosSelectedHandler = (id, url) => {
    this.toggleModal();
    this.setState({ selectedPhotoId: id });
    this.setState({ selectedPhotoURL: url });
    console.log('ID: ', id, url)
    // this.getPhotoHandler(id)
  }

  toggleModal = () => {
    this.setState({ open: !this.state.open });
  };


  // getPhotoHandler(id) {

  //   const uri = 'https://cors-anywhere.herokuapp.com/https://api.500px.com/v1/photos?feature=popular&consumer_key=P7LLhKkPAnPUpbfAXk3Jq2iDjYmCx87zgfEDxQVS'
  //   axios.get(uri)
  //     .then(response => {

  //       const photos = response.data.photos.slice(0, 4);
  //       const updatedPhotos = photos.map(
  //         photo => {
  //           return {
  //             ...photo
  //           }
  //         }
  //       )
  //       this.setState({ photos: updatedPhotos })

  //     })
  //     .catch((error) => {
  //       this.setState({ error: true })
  //     })

  // }

  componentDidMount() {
    this.setState({ isLoading: true });
    const uri = 'https://cors-anywhere.herokuapp.com/https://api.500px.com/v1/photos?feature=popular&consumer_key=P7LLhKkPAnPUpbfAXk3Jq2iDjYmCx87zgfEDxQVS'
    axios.get(uri)
      .then(response => {

        const photos = response.data.photos.slice(0, 100);
        const updatedPhotos = photos.map(
          photo => {
            return {
              ...photo
            }
          }
        )
        this.setState({ photos: updatedPhotos })
        this.setState({ isLoading: false });
      })
      .catch((error) => {
        this.setState({ error: true })
      })

  }


  render() {


    let photos = <p style={{ textAlign: 'center' }}>Something went wrong</p>
    if (!this.state.error) {
      photos = this.state.photos.map(
        (photo) => {

          return <Photos
            clicked={() => this.photosSelectedHandler(photo.id, photo.image_url[0])}
            key={photo.id}
            url={photo.image_url[0]}
            author={photo.description}
            name={photo.name}
            showHide={this.state.showHide}
          />

        }
      );
    }


    return (



      <div >

        {/* This is the invisible modal you fucking idiot */}
        <Photo
          open={this.state.open}
          toggle={this.toggleModal}
          selectedPhotoId={this.state.selectedPhotoId}
          url={this.state.selectedPhotoURL}
        >
        </Photo>
        {/* This is the invisible modal you fucking idiot */}


        <div className="sweet-loading">
          <ClipLoader
            // css={override}
            size={150}
            color={"#123abc"}
            loading={this.state.isLoading}
          />
        </div>
        <div class="masonry">
       
          {photos}
        </div>







      </div>












    )


  }
}


export default App;