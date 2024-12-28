import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
  } from "@/components/ui/dialog";
  
  interface ModalProps {
    title: string;
    description: string;
    isEditModal?: boolean;
    isOpen: boolean;
    onClose: () => void;
    children?: React.ReactNode;
  }
  
  export const Modal: React.FC<ModalProps> = ({
    title,
    description,
    isEditModal = false,
    isOpen,
    onClose,
    children,
  }) => {
    const onChange = (open: boolean) => {
      if (!open) {
        onClose();
      }
    };
  
    return (
      <Dialog open={isOpen} onOpenChange={onChange}>
        <DialogContent className="p-6 lg:p-8">
            <DialogHeader className="pb-2">
              <DialogTitle className="text-[#201F24] font-semibold text-2xl pb-4 tracking-[-0.3px]">
                {title}
              </DialogTitle>
  
              <DialogDescription className="text-sm text-lightText tracking-[-0.2px] font-normal">
                {description}
              </DialogDescription>
            </DialogHeader>
  
          <div>
            {children}
          </div>
        </DialogContent>
      </Dialog>
    );
  };