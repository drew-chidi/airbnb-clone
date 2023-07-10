'use client';

import { useCallback, useState } from 'react';
import { IoMdClose } from 'react-icons/io5';
import Button from '../Button';

const Modal = ({
  isOpen,
  onClose,
  onSubmit,
  title,
  body,
  footer,
  actionLabel,
  disabled,
  secondaryActionLabel,
  secondaryLabel,
}) => {
  const [showModal, setShowModal] = useState(isOpen);

  const handleClose = useCallback(() => {
    if (disabled) {
      return;
    }
    setShowModal(false);
    setTimeout(() => {
      onClose();
    }, 300);
  }, [disabled, onClose]);

  const handleSubmit = useCallback(() => {
    if (disabled) {
      return;
    }
    onSubmit();
  }, [disabled, onSubmit]);

  const handleSecondaryAction = useCallback(() => {
    if (disabled || secondaryLabel) {
      return;
    }
    secondaryActionLabel();
  }, [disabled, secondaryActionLabel, secondaryLabel]);

  if (!isOpen) return null;

  return (
    <>
      <div className='justify-center items-center flex overflow-x-auto overflow-y-auto fixed inset-0 z-50 outlines-none focus:outline-none bg-neutral-800/70'>
        <div className='relative w-full md:w-4/6 lg:w-3/6 xl:w-2/5 my-6 mx-auto h-full lg:h-auto md:h-auto'>
          {/* CONTENT */}
          <div
            className={`translate duration-300 h-full ${
              showModal ? 'translate-y-0' : 'translate-y-full'
            }`}
          >
            <div className='translate h-full lg:h-auto border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white  outline-none focus:outline-none'>
              {/* HEADER */}
              <div className='flex items-center p-6 rounded-t justify-center relative border-b'>
                <button
                  onClick={handleClose}
                  className='p-1 border-0 hover:opacity-70 transition absolute left-9'
                >
                  <IoMdClose size={18} />
                </button>
                <div className='text-lg font-semibold'>{title}</div>
              </div>
              {/* Body */}
              <div>{body}</div>
              {/* FOOTER */}
              <div className='flex flex-row items-center gap-4 w-full'>
                {secondaryAction && secondaryActionLabel && (
                  <Button
                    outline
                    disabled={disabled}
                    label={secondaryActionLabel}
                    onClick={handleSecondaryAction}
                  />
                )}
                <Button
                  disabled={disabled}
                  label={actionLabel}
                  onClick={handleSubmit}
                />
              </div>
              {footer}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
