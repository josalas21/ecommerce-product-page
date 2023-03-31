import { DeleteIcon } from "../../assets";

function DeleteButton({ deleteCartItems }) {
  return (
    <button onClick={deleteCartItems}>
      <DeleteIcon />
    </button>
  );
}

export default DeleteButton;
