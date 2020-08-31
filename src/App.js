import React, { Component } from 'react';
import axios from 'axios';
import Photos from './Photos/Photos';
// import FullPost from '../../components/FullPost/FullPost';
// import NewPost from '../../components/NewPost/NewPost';
// import './Blog.css';

const config = {
  method: 'get',
  // url: '/posts'
  url: 'https://jsonplaceholder.typicode.com/posts'
}

class App extends Component {


  json = (response) => {
    return response.json()
  }

  photosSelectedHandler = (id) => {

    this.setState({ selectedPhotoId: id })
  }

  state = {
    photos: [],
    selectedPhotoId: null,
    error: false
  }

  componentDidMount() {
    
    const uri = 'https://cors-anywhere.herokuapp.com/https://api.500px.com/v1/photos?feature=popular&consumer_key=P7LLhKkPAnPUpbfAXk3Jq2iDjYmCx87zgfEDxQVS'
    axios.get(uri)
      .then(response => {
        
        const photos = response.data.photos.slice(0, 4);
        const updatedPhotos = photos.map(
          photo => {
            return {
              ...photo
            }
          }
        )
        this.setState({ photos: updatedPhotos })
        console.log('STATE: ', this.state.photos[0])
      })
      .catch((error) => {
        this.setState({ error: true })
      })

  }


  render() {


    console.log('PHOTOS: ', this.state.photos)
    let photos = <p style={{ textAlign: 'center' }}>Something went wrong</p>
    if (!this.state.error) {
      photos = this.state.photos.map(
        (photo) => {

          return <Photos
            clicked={() => this.photosSelectedHandler(photo.id)}
            key={photo.id}
            author={photo.description}
            title={photo.image_url[0]} 
            name={photo.name}
            />
        }
      );
    }


    return (
      <div>
        <section className="Photos">
          {photos}
        </section>

      </div>
    );


  }
}


export default App;