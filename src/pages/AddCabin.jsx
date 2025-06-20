import Button from '../ui/Button';
import CreateCabinForm from '../features/cabins/CreateCabinForm';
import Modal from '../ui/Modal';

// function AddCabin() {
//   const [isOpenModal, setIsOpenModal] = useState(false);

//   return (
//     <div>
//       <Button onClick={() => setIsOpenModal((open) => !open)}>
//         Add new cabin
//       </Button>
//       {isOpenModal && (
//         <Modal onClose={() => setIsOpenModal(false)}>
//           <CreateCabinForm onCloseModal={() => setIsOpenModal(false)} />
//         </Modal>
//       )}
//     </div>
//   );
// }

function AddCabin() {
  return (
    <Modal>
      <Modal.Open opens='cabin-form'>
        <Button>Add new cabin</Button>
      </Modal.Open>
      <Modal.Window name='cabin-form'>
        <CreateCabinForm />
      </Modal.Window>

      {/* <Modal.Open>
        <Button>Show table</Button>
      </Modal.Open>
      <Modal.Window>
        <CreateCabinForm />
      </Modal.Window> */}
    </Modal>
  );
}

export default AddCabin;
