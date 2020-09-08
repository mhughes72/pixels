import React, { Component } from 'react';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import './Photos.css'


class Photos extends Component {

    constructor(props) {
        super();

    }

    state = {
        open: false

    }

    onOpenModal = () => {
        console.log('CLICK 1')
        this.setState({ open: true });
    };

    onCloseModal = () => {
        console.log('CLICK 2')
        this.setState({ open: false });
    };


    render() {

        return (
            <div>
                <div>
                    <Modal
                        open={this.state.open}
                        onClose={this.onCloseModal}
                        center
                        showCloseIcon={false}
                        container={this.props.domEle.innerHTML}
                        styles={{
                            overlay: {
                                // 'background-color': 'blue',

                            },
                            modal: {
                                'top': '5',
                                'bottom': '5',
                                'background-color': 'grey',

                            },
                        }}
                    >
                        <img src={this.props.selectedPhotoURL} alt={this.props.name} class="photo__big"></img>
                        {/* <p>This is the Title</p> */}
                        <p class="title">{this.props.name}</p>
                        <p class="artist">{this.props.author}</p>
                        <p class="copyright">The Copyright</p>
                    </Modal>
                </div>
                <div class="grid photo" onClick={this.onOpenModal}>
                    <img src={this.props.selectedPhotoURL} alt={this.props.name}></img>

                </div>
            </div>
        )
    }

}


export default Photos;