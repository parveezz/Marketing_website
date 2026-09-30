import { FiX } from 'react-icons/fi';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';

const MediaModal = ({ selectedMedia, onClose }) => {
    if (typeof document === 'undefined') return null;

    return createPortal(
        <AnimatePresence>
            {selectedMedia && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/95 p-4 sm:p-8 backdrop-blur-sm"
                >
                    {/* Close Button Background Catch */}
                    <div className="absolute inset-0 z-[1]" onClick={(e) => { e.stopPropagation(); onClose(); }} />
                    
                    <motion.button
                        whileHover={{ scale: 1.08 }}
                        whileTap={{ scale: 0.94 }}
                        onClick={(e) => { e.stopPropagation(); onClose(); }}
                        className="absolute top-4 right-4 sm:top-8 sm:right-8 w-12 h-12 bg-white/10 hover:bg-white/20 text-white rounded-full flex items-center justify-center transition-colors z-[10] cursor-pointer"
                        aria-label="Close modal"
                    >
                        <FiX className="text-3xl" />
                    </motion.button>
                    
                    <motion.div
                        initial={{ scale: 0.94, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.94, opacity: 0 }}
                        transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                        className="w-full h-full max-w-full max-h-screen flex items-center justify-center relative z-[5] pointer-events-none"
                    >
                        {selectedMedia.match(/\.(mp4|webm|ogg)$/i) ? (
                            <video
                                src={selectedMedia}
                                controls
                                autoPlay
                                className="max-w-full max-h-full object-contain rounded-xl pointer-events-auto shadow-none"
                            />
                        ) : (
                            <img
                                src={selectedMedia}
                                alt="Expanded media"
                                className="max-w-full max-h-[90vh] object-contain rounded-xl pointer-events-auto shadow-none"
                            />
                        )}
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>,
        document.body
    );
};

export default MediaModal;

