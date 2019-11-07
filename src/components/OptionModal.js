import React from 'react';
import Modal from 'react-modal';
Modal.setAppElement('#app');

const OptionModal = (props) => {
  return (
    <Modal
    isOpen={!!props.selectedOption}
    contentLabel="ShowSelectedOption"
    >
    <h3>Selected Option</h3>
  </Modal>
  );
};

export default OptionModal;