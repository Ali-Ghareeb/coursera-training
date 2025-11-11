import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogOverlay,
  Text,
  Button,
} from "@chakra-ui/react";
import { useAlertContext } from "../context/alertContext";
import { useRef } from "react";

function Alert() {
  const { isOpen, type, message, onClose } = useAlertContext();
  const cancelRef = useRef();
  const isSuccess = type === "success";

  return (
    <AlertDialog
      isOpen={isOpen}
      leastDestructiveRef={cancelRef}
      onClose={onClose}
      isCentered={true} 
    >
      <AlertDialogOverlay>
        <AlertDialogContent
          py={4}
          backgroundColor={isSuccess ? "#81C784" : "#FF8A65"}
          w="400px"
          mx="auto"
          mt="4" 
          borderRadius="md"
          zIndex={9999}
        >
          <AlertDialogHeader display="flex" justifyContent="space-between" alignItems="center">
            <Text fontSize="lg" fontWeight="bold">
              {isSuccess ? "All good!" : "Oops!"}
            </Text>
            <Button onClick={onClose} size="sm" variant="ghost">
              X
            </Button>
          </AlertDialogHeader>
          <AlertDialogBody>
            <Text>{message}</Text>
          </AlertDialogBody>
        </AlertDialogContent>
      </AlertDialogOverlay>
    </AlertDialog>
  );
}

export default Alert;
