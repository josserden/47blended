import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import { Overlay, ModalWrapper } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillMount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };

  handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      this.props.onClose();
    }
  };

  render() {
    const { children } = this.props;
    const backdropClick = this.handleBackdropClick;

    return createPortal(
      <Overlay onClick={backdropClick}>
        <ModalWrapper>{children}</ModalWrapper>
      </Overlay>,
      modalRoot
    );
  }
}
