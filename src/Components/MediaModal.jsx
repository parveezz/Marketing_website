import { FiX } from 'react-icons/fi';

const MediaModal = ({ selectedMedia, onClose }) => {
    if (!selectedMedia) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 sm:p-8 backdrop-blur-sm">
            {/* Close Button Background Catch */}
            <div className="absolute inset-0 z-[105]" onClick={onClose} />
            
            <button
                onClick={onClose}
                className="absolute top-4 right-4 sm:top-8 sm:right-8 w-12 h-12 bg-white/10 hover:bg-white/20 text-white rounded-full flex items-center justify-center transition-colors z-[110]"
                aria-label="Close modal"
            >
                <FiX className="text-3xl" />
            </button>
            
            <div className="w-full h-full max-w-full max-h-screen flex items-center justify-center relative z-[110]">
                {selectedMedia.match(/\.(mp4|webm|ogg)$/i) ? (
                    <video
                        src={selectedMedia}
                        controls
                        autoPlay
                        className="max-w-full max-h-full object-contain rounded-xl shadow-2xl"
                    />
                ) : (
                    <img
                        src={selectedMedia}
                        alt="Expanded media"
                        className="max-w-full max-h-[90vh] object-contain rounded-xl shadow-2xl"
                    />
                )}
            </div>
        </div>
    );
};

export default MediaModal;
