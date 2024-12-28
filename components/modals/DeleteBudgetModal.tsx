import { Button } from "../ui/button";
import { Modal } from "../ui/modal";

interface DeleteBudgetModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  loading: boolean;
  category: string;
}

const DeleteBudgetModal = ({
  isOpen,
  onClose,
  onConfirm,
  loading,
  category,
}: DeleteBudgetModalProps) => {
  return (
    <Modal
      title={`Delete "${category}"?`}
      description="Are you sure you want to delete this budget? This action cannot be reversed, and all the data inside it will be removed forever."
      isOpen={isOpen}
      onClose={onClose}
    >
      <div>
        <Button
          type="submit"
          disabled={loading}
          onClick={() => onConfirm()}
          className="bg-[#C94736] hover:bg-[#923327] p-6 w-full font-semibold flex items-center justify-center shadow-none"
        >
          {loading ? "Deleting..." : "Yes, Confirm Deletion"}
        </Button>
        <Button
          type="button"
          className="flex items-center justify-center mt-2 font-semibold w-full p-6 bg-transparent hover:bg-transparent shadow-none text-[#201F24]"
          onClick={() => onClose()}
        >
          No, Go Back
        </Button>
      </div>
    </Modal>
  );
};

export default DeleteBudgetModal;
