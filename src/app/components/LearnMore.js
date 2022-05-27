import { useState } from "react";
import { Modal, ModalBody, ModalHeader } from "reactstrap"

const LearnMore = () => {
    const [modalOpen,setModalOpen]=useState(false);
  return (
      <>
        <btn onClick={()=>setModalOpen(true)} className="modal-link">Learn More</btn>
        <Modal isOpen={modalOpen}>
            <ModalHeader toggle={()=>setModalOpen(false)}>
                About
            </ModalHeader>
            <ModalBody>
            <p>The activities on this site will help you practice memory techniques using memory palaces, images, and a system called "person-action-object." </p><p>These techniques can be used to memorize lists (like shopping or to-do lists). Or they can be used to remember long digits (pi, credit card numbers, etc). </p><p>And if you want to impress your friends, you can learn to quickly memorize a deck of cards, or even multiple decks of cards.</p><p>Registed users can:</p>
                        <ul>
                            <li>customize lists and images</li>
                            <li>save shuffled decks (for later reference)</li>
                            <li>set goals</li>
                            <li>track progress</li>
                        </ul>
            <p><strong>To login as a guest, enter <span style={{color: 'blue'}}>'guest'</span> into email and password fields</strong></p>
            </ModalBody>
        </Modal>
      </>
    
  )
}

export default LearnMore