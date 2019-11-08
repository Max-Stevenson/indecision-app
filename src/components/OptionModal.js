import React from 'react';
import Modal from 'react-modal';
Modal.setAppElement('#app');

const OptionModal = (props) => (
  <Modal
    isOpen={!!props.selectedOption}
    onRequestClose={props.clearSelectedOption}
    contentLabel="ShowSelectedOption"
  >
    <h3>Selected Option</h3>
    {props.selectedOption && <p>{props.selectedOption}</p>}
    <button onClick={props.clearSelectedOption}>Ok</button>
  </Modal>
);

export default OptionModal;