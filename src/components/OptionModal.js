import React from 'react';
import Modal from 'react-modal';

const OptionModal = () => (
  <Modal
    isOpen={true}
    contentLabel="SelectedOption"
    >
    <h3>Selected Option</h3>
  </Modal>
);

export default OptionModal;