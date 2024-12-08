import { useState, useEffect } from 'react';

const Modal = ({ isOpen, onClose }) => {
  const [isMinimized, setIsMinimized] = useState(false);
  const [isMaximized, setIsMaximized] = useState(false);

  // Handle "Esc" key press
  useEffect(() => {
    const handleEsc = (event) => {
      console.log(event.key)
      // console.log('ESC KEY PRESSED');
      if (event.key === 'Escape') {
        onClose();
      }
    };

    // Add event listener on mount
    window.addEventListener('keydown', handleEsc);

    // Clean up the event listener on unmount
    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [onClose]);

  if (!isOpen) return null;

  const handleMinimize = () => {
    setIsMinimized(!isMinimized);
  };

  const handleMaximize = () => {
    setIsMaximized(!isMaximized);
  };

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
      <div
        className={`bg-white p-2 rounded-lg transition-all ${
          isMaximized ? 'h-full w-full' : isMinimized ? 'h-16 w-40' : 'h-[300px] w-[400px]'
        }`}
        style={{ transition: 'all 0.3s ease' }}
      >
        <div className="flex justify-end items-center p-2 bg-gray-50 rounded-t-lg">
          <div className="flex space-x-2">
            {/* <button
              className="w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-600 focus:outline-none"
              onClick={handleMinimize}
            /> */}
            <button
              className="w-3 h-3 rounded-full bg-green-500 hover:bg-green-600 focus:outline-none"
              onClick={handleMaximize}
            />
            <button
              className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-600 focus:outline-none"
              onClick={onClose}
            />
          </div>
        </div>

        {!isMinimized && (
          <div className="p-4">
            <h2 className="text-xl">Modal Title</h2>
            <p>Some content goes here...</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Modal;
