import { FiX } from 'react-icons/fi';
import { createPortal } from 'react-dom';

const MediaModal = ({ selectedMedia, onClose }) => {
    if (!selectedMedia) return null;

    return createPortal(
        <div className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/95 p-4 sm:p-8 backdrop-blur-sm">
            {/* Close Button Background Catch */}
            <div className="absolute inset-0 z-[1]" onClick={(e) => { e.stopPropagation(); onClose(); }} />
            
            <button
                onClick={(e) => { e.stopPropagation(); onClose(); }}
                className="absolute top-4 right-4 sm:top-8 sm:right-8 w-12 h-12 bg-white/10 hover:bg-white/20 text-white rounded-full flex items-center justify-center transition-colors z-[10]"
                aria-label="Close modal"
            >
                <FiX className="text-3xl" />
            </button>
            
            <div className="w-full h-full max-w-full max-h-screen flex items-center justify-center relative z-[5] pointer-events-none">
                {selectedMedia.match(/\.(mp4|webm|ogg)$/i) ? (
                    <video
                        src={selectedMedia}
                        controls
                        autoPlay
                        className="max-w-full max-h-full object-contain rounded-xl shadow-2xl pointer-events-auto"
                    />
                ) : (
                    <img
                        src={selectedMedia}
                        alt="Expanded media"
                        className="max-w-full max-h-[90vh] object-contain rounded-xl shadow-2xl pointer-events-auto"
                    />
                )}
            </div>
        </div>,
        document.body
    );
};

export default MediaModal;
