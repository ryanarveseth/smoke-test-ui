import {Background, Card, GrayButton, ModalFooter, RedButton} from "../util/styles";


const DeleteConfirmationModal = ({ active, setActive, onDelete }) => (
    active ?
    <Background style={{zIndex: 100}}>
      <Card style={{minHeight: "0"}}>
        <h2>
          Are you sure you want to delete this test?
        </h2>
        <p>
          This action cannot be undone.
        </p>
        <div>
        </div>
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
      : <></>
  );

export default DeleteConfirmationModal;