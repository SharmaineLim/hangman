import React from 'react';

import Control from '../Control';
import CrossIcon from '../Icon/CrossIcon';

// Control button styles
const CONTROL_STYLES = 'absolute right-2 sm:right-3 top-2 sm:top-3';

// Modal styles
const MODAL_BOX_BORDERS =
    'rounded-t-lg sm:rounded-t-xl md:rounded-tr-none md:rounded-l-xl';
const MODAL_BOX_PADDINGS =
    'p-6 pr-3 pt-8 sm:p-8 sm:pr-5 sm:pt-12 md:p-12 md:pr-9';
const MODAL_BOX_STYLES =
    'bg-white flex flex-col justify-center overflow-y-hidden transition-all';
const MODAL_POSITION_STYLES =
    'absolute bottom-0 md:h-full max-h-screen md:right-0 w-full md:w-3/4 lg:w-1/2';
const MODAL_CLOSED_STYLES =
    'md:translate-x-full translate-y-full md:translate-y-0';
const MODAL_OPEN_STYLES = 'translate-y-0 md:translate-x-0';

// Modal content styles
const MODAL_CONTENT_STYLES = 'flex flex-col overflow-y-auto pr-4';

// Screen overlay styles
const SCREEN_STYLES = 'bg-black fixed inset-0 transitions-all z-10';
const SCREEN_CLOSED_STYLES = 'bg-opacity-0 pointer-events-none';
const SCREEN_OPEN_STYLES = 'bg-opacity-50';

type ModalProps = {
    children: React.ReactNode;
    isModalOpen: boolean;
    setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const Modal = ({ children, isModalOpen, setIsModalOpen }: ModalProps) => {
    const screenStyles = [SCREEN_STYLES];
    const styles = [
        MODAL_BOX_BORDERS,
        MODAL_BOX_PADDINGS,
        MODAL_BOX_STYLES,
        MODAL_POSITION_STYLES,
    ];

    if (isModalOpen) {
        styles.push(MODAL_OPEN_STYLES);
        screenStyles.push(SCREEN_OPEN_STYLES);
    } else {
        styles.push(MODAL_CLOSED_STYLES);
        screenStyles.push(SCREEN_CLOSED_STYLES);
    }

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        // Screen overlay
        <div
            aria-hidden={!isModalOpen}
            className={screenStyles.join(' ')}
            onClick={closeModal}
        >
            {/* Modal box */}
            <div
                aria-modal={true}
                className={styles.join(' ')}
                onClick={(e) => {
                    e.stopPropagation();
                }}
                role="alertdialog"
            >
                {/* Close button */}
                <Control
                    aria-label="close the modal"
                    extraClasses={CONTROL_STYLES}
                    onClick={closeModal}
                >
                    <CrossIcon aria-hidden={true} className="h-full w-full" />
                </Control>

                {/* Modal content */}
                <div className={MODAL_CONTENT_STYLES}>{children}</div>
            </div>
        </div>
    );
};

export default Modal;
