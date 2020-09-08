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
        this.setState({ open: true });
    };

    onCloseModal = () => {
        this.setState({ open: false });
    };

    onStringConcat = (str, len) => {
        return str.length > len ? str.substring(0, len - 3) + "..." : str;
    }

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
                            modal: {
                                'top': '5',
                                'bottom': '5',
                                'background-color': 'grey',
                            },
                        }}
                    >
                        <img src={this.props.selectedPhotoURL} alt={this.props.name} class="photo__big"></img>
                        <p class="title">{this.props.name}</p>
                        <p class="artist">{this.props.author}</p>
                        <p class="description">
                            {this.onStringConcat(this.props.description, 60)}</p>
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