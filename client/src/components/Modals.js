import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
} from "@chakra-ui/react";
import { useHistory } from "react-router-dom";
// import { notifyAuthorities } from "../utils/NotifyAuthorities";
// import { storage } from "../firebase";

export const NoThreat = (props) => {
  const history = useHistory();
  // const pathname = window.location.pathname;
  return (
    <Modal isOpen={props.isOpen} onClose={props.onClose}>
      <ModalOverlay />
      <ModalContent bgColor="white">
        <ModalHeader>No Threat Detected Confirmation</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          Please confirm that no threat has been detected. You can view the
          footage in home later.
        </ModalBody>

        <ModalFooter>
          <Button
            bgColor="primary.100"
            _hover={{ bg: "primary.130" }}
            mr={3}
            onClick={() => {
              props.onClose();
              // incase we just want to delete footage
              // removes '/vid/' from /vid/:id
              // const vidId = pathname.substring(5);
              // const storageRef = storage.ref();
              // const desertRef = storageRef.child(vidId);

              // desertRef.delete().then(() => {
              //   history.push("/");
              // });
              history.push("/");
            }}
          >
            Save Footage
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export const NotifyAuthorities = (props) => {
  const history = useHistory();
  return (
    <Modal isOpen={props.isOpen} onClose={props.onClose}>
      <ModalOverlay />
      <ModalContent bgColor="white">
        <ModalHeader>Confirm Threat!</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          Threat has been detected. Confirm to notify the authorities. Please
          seek shelter in the meantime.
        </ModalBody>

        <ModalFooter>
          <Button
            mr={3}
            bgColor="primary.100"
            _hover={{ bg: "primary.130" }}
            onClick={async () => {
              props.onClose();
              // await notifyAuthorities(); //todo -> update token
              history.push("/");
            }}
          >
            Confirm
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
