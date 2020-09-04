
import React from 'react';
import './Photo.css';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import styled from 'styled-components';

// import Aux from '../../../hoc/Aux';
// import Backdrop from '../Backdrop/Backdrop';


const photo = (props) => (


    <Modal 
    open={props.open} 
    onClose={props.toggle} 
    classNames={{ overlay: { background: 'green' } }}
      
    center
    >
        <img src={props.url} 
        alt={props.name}
        className="Photos"
        ></img>
        <h2>Simple centered modal</h2>
        <h1>ID: {props.selectedPhotoId}</h1>
        <h1>URL: {props.url}</h1>
    </Modal>



);

export default photo;













// import React, { Component } from 'react';
// // import Photo from './Photo/Photo'
// import './Photo.css';
// import Modal from "react-bootstrap/Modal";
// import Button from "react-bootstrap/Button";



// class Person extends Component {

//     state = {
//         showHide: false
//     }

//     handleModalShowHide() {
//         console.log('3')
//         this.setState({ showHide: !this.state.showHide })
//     }


//     render() {
//         return (
//             <div>
//                 <Button variant="primary" onClick={() => this.handleModalShowHide()}>
//                     Launch demo modal
//                 </Button>

//                 <Modal show={this.state.showHide}>
//                     <Modal.Header closeButton onClick={() => this.handleModalShowHide()}>
//                     <Modal.Title>Modal heading</Modal.Title>
//                     </Modal.Header>
//                     <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
//                     <Modal.Footer>
//                     <Button variant="secondary" onClick={() => this.handleModalShowHide()}>
//                         Close
//                     </Button>
//                     <Button variant="primary" onClick={() => this.handleModalShowHide()}>
//                         Save Changes
//                     </Button>
//                     </Modal.Footer>
//                 </Modal>

//             </div>
//         );
//     };
// }

// export default Person;



