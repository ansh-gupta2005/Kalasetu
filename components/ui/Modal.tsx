type ModalProps = {
  isOpen: boolean;
  title: string;
  children: React.ReactNode;
};

export default function Modal({
  isOpen,
  title,
  children,
}: ModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center">
      <div className="bg-white p-6 rounded">
        <h2>{title}</h2>
        {children}
      </div>
    </div>
  );
}