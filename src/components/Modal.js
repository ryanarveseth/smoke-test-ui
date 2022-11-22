import {Background, Card, GrayButton, ModalFooter, RedButton} from "../util/styles";
import {RED} from "../util/styles/Colors";
import {CgClose} from "react-icons/cg";
import React from "react";


const Modal = ({ active, setActive, header, children }) => {


  return (
    <Background style={{zIndex: 100}}>
      <Card style={{minHeight: "0"}}>
        <h2>
          {header}
        </h2>
        <CgClose onClick={close} className="hoverable" color={RED} style={{ width: "fit-content", margin: "0", fontSize: "25px", position: "fixed", right: "24px", top: "24px"  }} />
        {children}
        <ModalFooter>
          <GrayButton className="hoverable" onClick={() => setActive(false)}>
            Cancel
          </GrayButton>
          <RedButton className="hoverable" onClick={onDelete}>
            Delete
          </RedButton>
        </ModalFooter>
      </Card>
    </Background>
  );
}