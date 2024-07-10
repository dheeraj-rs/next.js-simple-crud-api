export default function Modal({ show, onClose, children }) {
  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg p-4 w-3/4 md:w-1/2 lg:w-1/3 relative">
        <div className="flex justify-end">
          <button onClick={onClose} className="text-gray-700 text-2xl">
            &times;
          </button>
        </div>
        {children}
      </div>
    </div>
  );
}
