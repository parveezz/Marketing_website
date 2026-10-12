import React, { useState, useEffect } from 'react';
import { Link, useParams, useSearchParams, useNavigate } from 'react-router-dom';
import SEO from '../../Components/SEO';
import ProjectCard from '../../Components/ProjectCard';
import ImageCarousel from '../../Components/ImageCarousel';
import VideoCarousel from '../../Components/VideoCarousel';
import {
    FiUploadCloud,
    FiCheck,
    FiArrowLeft,
    FiPlus,
    FiTrash2,
    FiEye,
    FiFilm,
    FiImage,
    FiEdit3,
    FiAlertCircle,
    FiExternalLink,
    FiLayers,
    FiFileText,
    FiArrowUpRight
} from 'react-icons/fi';

const CATEGORY_OPTIONS = [
    'Events',
    'Branding',
    'Digital',
    'Social Media',
    'Sports',
    'Corporate',
    'Media Production'
];

const PostWork = () => {
    const { id: routeId } = useParams();
    const [searchParams, setSearchParams] = useSearchParams();
    const navigate = useNavigate();

    // Determine if we're in edit mode based on route param or query param
    const editId = routeId || searchParams.get('edit') || searchParams.get('id') || '';
    const isEditMode = Boolean(editId);

    // List of existing projects for quick dropdown switcher
    const [allProjectsList, setAllProjectsList] = useState([]);
    const [initialLoading, setInitialLoading] = useState(false);
    const [notFoundError, setNotFoundError] = useState(false);

    // -------------------------------------------------------------
    // 1. Basic & Catalog Card State
    // -------------------------------------------------------------
    const [title, setTitle] = useState('');
    const [category, setCategory] = useState('Events');
    const [customCategory, setCustomCategory] = useState('');
    const [cardDescription, setCardDescription] = useState('');
    const [imagePosition, setImagePosition] = useState('right');

    // Cover Photo (File or existing URL)
    const [mainImageFile, setMainImageFile] = useState(null);
    const [existingMainImage, setExistingMainImage] = useState('');
    const [mainImagePreview, setMainImagePreview] = useState('');

    // -------------------------------------------------------------
    // 2. Case Study Hero Header State
    // -------------------------------------------------------------
    const [subtitle, setSubtitle] = useState('');
    const [headline, setHeadline] = useState('');
    const [clientName, setClientName] = useState('');
    const [topIntro, setTopIntro] = useState('');

    // -------------------------------------------------------------
    // 3. About Section State
    // -------------------------------------------------------------
    const [aboutTitle, setAboutTitle] = useState('About the Project');
    const [aboutText, setAboutText] = useState('');

    // -------------------------------------------------------------
    // 4. Challenges & Solutions State
    // -------------------------------------------------------------
    const [challengesSubtitle, setChallengesSubtitle] = useState('Challenges');
    const [challengesTitle, setChallengesTitle] = useState('Capturing the Vision & Overcoming Obstacles');
    const [challengesDescription, setChallengesDescription] = useState('');
    const [challenges, setChallenges] = useState([
        { title: 'Real-Time Delivery & Execution', description: 'Fast turnaround of high-grade assets under tight event deadlines.' },
        { title: 'Multi-Channel Brand Consistency', description: 'Deploying uniform visual identity across physical spaces and digital streams.' }
    ]);

    // -------------------------------------------------------------
    // 5. Multiple Photo & Video Files (Existing + New Uploads)
    // -------------------------------------------------------------
    const [existingCarouselImages, setExistingCarouselImages] = useState([]);
    const [carouselImageFiles, setCarouselImageFiles] = useState([]);
    const [carouselImagePreviews, setCarouselImagePreviews] = useState([]);

    const [videoHighlightsTitle, setVideoHighlightsTitle] = useState('Video Highlights');
    const [videoHighlightsDescription, setVideoHighlightsDescription] = useState('Watch key moments and final video deliverables from our engagement.');
    const [existingCarouselVideos, setExistingCarouselVideos] = useState([]);
    const [videoFiles, setVideoFiles] = useState([]);
    const [videoPreviews, setVideoPreviews] = useState([]);

    // -------------------------------------------------------------
    // 6. Testimonial State
    // -------------------------------------------------------------
    const [testimonialQuote, setTestimonialQuote] = useState('');
    const [testimonialAuthor, setTestimonialAuthor] = useState('');
    const [testimonialPosition, setTestimonialPosition] = useState('');

    // -------------------------------------------------------------
    // Status & UI State
    // -------------------------------------------------------------
    const [loading, setLoading] = useState(false);
    const [errorMsg, setErrorMsg] = useState('');
    const [createdProject, setCreatedProject] = useState(null);
    const [previewMode, setPreviewMode] = useState(false);
    const [previewTab, setPreviewTab] = useState('both'); // 'both' | 'card' | 'detail'

    // -------------------------------------------------------------
    // Fetch all projects for quick switcher dropdown
    // -------------------------------------------------------------
    useEffect(() => {
        let isMounted = true;
        const loadList = async () => {
            try {
                const res = await fetch('/api/post-work.php').catch(() => null);
                if (res && res.ok) {
                    const data = await res.json();
                    if (Array.isArray(data) && isMounted) {
                        setAllProjectsList(data);
                        return;
                    }
                }
                const fallbackRes = await fetch('/data/projects.json').catch(() => null);
                if (fallbackRes && fallbackRes.ok) {
                    const data = await fallbackRes.json();
                    if (Array.isArray(data) && isMounted) {
                        setAllProjectsList(data);
                    }
                }
            } catch (e) {
                console.error('Failed to load projects list:', e);
            }
        };
        loadList();
        return () => { isMounted = false; };
    }, []);

    // -------------------------------------------------------------
    // Load existing project data if in Edit Mode
    // -------------------------------------------------------------
    useEffect(() => {
        if (!editId) {
            setNotFoundError(false);
            return;
        }

        let isMounted = true;
        setInitialLoading(true);
        setNotFoundError(false);
        setErrorMsg('');
        setCreatedProject(null);

        const loadExisting = async () => {
            try {
                // 1. Fetch by direct ID endpoint
                const res = await fetch(`/api/post-work.php?id=${encodeURIComponent(editId)}`).catch(() => null);
                let proj = null;
                if (res && res.ok) {
                    const json = await res.json();
                    if (json?.project) proj = json.project;
                }

                // 2. Fallback to full list from API
                if (!proj) {
                    const listRes = await fetch('/api/post-work.php').catch(() => null);
                    if (listRes && listRes.ok) {
                        const list = await listRes.json();
                        if (Array.isArray(list)) proj = list.find(p => p.id === editId) || null;
                    }
                }

                // 3. Fallback to static JSON file
                if (!proj) {
                    const fileRes = await fetch('/data/projects.json').catch(() => null);
                    if (fileRes && fileRes.ok) {
                        const list = await fileRes.json();
                        if (Array.isArray(list)) proj = list.find(p => p.id === editId) || null;
                    }
                }

                if (!proj) {
                    if (isMounted) setNotFoundError(true);
                    return;
                }

                if (isMounted) {
                    setTitle(proj.title || '');
                    if (CATEGORY_OPTIONS.includes(proj.category)) {
                        setCategory(proj.category);
                        setCustomCategory('');
                    } else {
                        setCategory('Other');
                        setCustomCategory(proj.category || '');
                    }
                    setCardDescription(proj.cardDescription || '');
                    setImagePosition(proj.imagePosition || 'right');

                    // Cover
                    setExistingMainImage(proj.mainImage || '');
                    setMainImagePreview(proj.mainImage || '');
                    setMainImageFile(null);

                    // Hero
                    setSubtitle(proj.subtitle || '');
                    setHeadline(proj.headline || '');
                    setClientName(proj.client || proj.title || '');
                    setTopIntro(Array.isArray(proj.topSectionParagraphs) ? proj.topSectionParagraphs.join('\n\n') : (proj.topSectionParagraphs || ''));

                    // About
                    setAboutTitle(proj.aboutTitle || 'About the Project');
                    setAboutText(Array.isArray(proj.aboutParagraphs) ? proj.aboutParagraphs.join('\n\n') : (proj.aboutParagraphs || ''));

                    // Challenges
                    setChallengesSubtitle(proj.challengesSubtitle || 'Challenges');
                    setChallengesTitle(proj.challengesTitle || 'Capturing the Vision & Overcoming Obstacles');
                    setChallengesDescription(proj.challengesDescription || '');
                    setChallenges(Array.isArray(proj.challenges) && proj.challenges.length > 0 ? proj.challenges : [{ title: '', description: '' }]);

                    // Photo carousel
                    setExistingCarouselImages(Array.isArray(proj.carouselImages) ? proj.carouselImages : []);
                    setCarouselImageFiles([]);
                    setCarouselImagePreviews([]);

                    // Videos
                    setVideoHighlightsTitle(proj.videoHighlightsTitle || 'Video Highlights');
                    setVideoHighlightsDescription(proj.videoHighlightsDescription || '');
                    setExistingCarouselVideos(Array.isArray(proj.carouselVideos) ? proj.carouselVideos : []);
                    setVideoFiles([]);
                    setVideoPreviews([]);

                    // Testimonial
                    setTestimonialQuote(proj.testimonial?.quote || '');
                    setTestimonialAuthor(proj.testimonial?.author || '');
                    setTestimonialPosition(proj.testimonial?.position || '');
                }
            } catch (err) {
                console.error("Failed to load project details for editing:", err);
                if (isMounted) setErrorMsg("Could not load project details to edit.");
            } finally {
                if (isMounted) setInitialLoading(false);
            }
        };

        loadExisting();
        return () => { isMounted = false; };
    }, [editId]);

    // -------------------------------------------------------------
    // Reset Form for New Upload
    // -------------------------------------------------------------
    const handleSwitchToCreateNew = () => {
        if (routeId) {
            navigate('/post-work');
        } else {
            setSearchParams({});
        }
        setTitle('');
        setCategory('Events');
        setCustomCategory('');
        setCardDescription('');
        setImagePosition('right');
        setMainImageFile(null);
        setExistingMainImage('');
        setMainImagePreview('');
        setSubtitle('');
        setHeadline('');
        setClientName('');
        setTopIntro('');
        setAboutTitle('About the Project');
        setAboutText('');
        setChallengesSubtitle('Challenges');
        setChallengesTitle('Capturing the Vision & Overcoming Obstacles');
        setChallengesDescription('');
        setChallenges([
            { title: 'Real-Time Delivery & Execution', description: 'Fast turnaround of high-grade assets under tight event deadlines.' },
            { title: 'Multi-Channel Brand Consistency', description: 'Deploying uniform visual identity across physical spaces and digital streams.' }
        ]);
        setExistingCarouselImages([]);
        setCarouselImageFiles([]);
        setCarouselImagePreviews([]);
        setVideoHighlightsTitle('Video Highlights');
        setVideoHighlightsDescription('Watch key moments and final video deliverables from our engagement.');
        setExistingCarouselVideos([]);
        setVideoFiles([]);
        setVideoPreviews([]);
        setTestimonialQuote('');
        setTestimonialAuthor('');
        setTestimonialPosition('');
        setCreatedProject(null);
        setErrorMsg('');
        setNotFoundError(false);
    };

    // -------------------------------------------------------------
    // Delete Project Handler
    // -------------------------------------------------------------
    const handleDeleteProject = async () => {
        if (!window.confirm(`Are you sure you want to permanently delete the case study "${title || editId}"? This action cannot be undone.`)) {
            return;
        }

        setLoading(true);
        setErrorMsg('');
        try {
            const response = await fetch(`/api/post-work.php?id=${encodeURIComponent(editId)}`, {
                method: 'DELETE'
            });
            const result = await response.json();

            if (!response.ok || result.status !== 'success') {
                throw new Error(result.message || 'Failed to delete project.');
            }

            alert('Case study deleted successfully.');
            navigate('/our-work');
        } catch (err) {
            console.error('Delete error:', err);
            setErrorMsg(err.message || 'Failed to delete project.');
        } finally {
            setLoading(false);
        }
    };

    // -------------------------------------------------------------
    // File Handlers
    // -------------------------------------------------------------
    const handleMainImageChange = (e) => {
        const file = e.target.files?.[0];
        if (file) {
            setMainImageFile(file);
            setMainImagePreview(URL.createObjectURL(file));
        }
    };

    const removeMainImage = () => {
        setMainImageFile(null);
        setExistingMainImage('');
        setMainImagePreview('');
    };

    // Multiple Images handlers
    const handleCarouselImagesChange = (e) => {
        const files = Array.from(e.target.files || []);
        if (files.length > 0) {
            setCarouselImageFiles(prev => [...prev, ...files]);
            const newPreviews = files.map(f => URL.createObjectURL(f));
            setCarouselImagePreviews(prev => [...prev, ...newPreviews]);
        }
    };

    const removeExistingCarouselImage = (index) => {
        setExistingCarouselImages(prev => prev.filter((_, i) => i !== index));
    };

    const removeNewCarouselImage = (index) => {
        setCarouselImageFiles(prev => prev.filter((_, i) => i !== index));
        setCarouselImagePreviews(prev => prev.filter((_, i) => i !== index));
    };

    // Multiple Videos handlers
    const handleVideoFilesChange = (e) => {
        const files = Array.from(e.target.files || []);
        if (files.length > 0) {
            setVideoFiles(prev => [...prev, ...files]);
            const newPreviews = files.map(f => URL.createObjectURL(f));
            setVideoPreviews(prev => [...prev, ...newPreviews]);
        }
    };

    const removeExistingCarouselVideo = (index) => {
        setExistingCarouselVideos(prev => prev.filter((_, i) => i !== index));
    };

    const removeNewVideoFile = (index) => {
        setVideoFiles(prev => prev.filter((_, i) => i !== index));
        setVideoPreviews(prev => prev.filter((_, i) => i !== index));
    };

    // Challenges handlers
    const addChallenge = () => {
        setChallenges(prev => [...prev, { title: '', description: '' }]);
    };

    const updateChallenge = (index, field, value) => {
        setChallenges(prev => {
            const updated = [...prev];
            updated[index][field] = value;
            return updated;
        });
    };

    const removeChallenge = (index) => {
        setChallenges(prev => prev.filter((_, i) => i !== index));
    };

    // -------------------------------------------------------------
    // Form Submit (Handles both Create & Update)
    // -------------------------------------------------------------
    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrorMsg('');

        if (!title.trim()) {
            setErrorMsg('Project title is required.');
            return;
        }

        setLoading(true);

        try {
            const formData = new FormData();
            const finalCategory = category === 'Other' ? (customCategory.trim() || 'General') : category;

            // If editing, pass the existing project ID
            if (isEditMode) {
                formData.append('id', editId);
            }

            // 1. Basics & Card
            formData.append('title', title.trim());
            formData.append('category', finalCategory);
            formData.append('cardDescription', cardDescription.trim() || title);
            formData.append('imagePosition', imagePosition);

            // 2. Case study header
            formData.append('subtitle', subtitle.trim() || title.toUpperCase());
            formData.append('headline', headline.trim() || title);
            formData.append('client', clientName.trim() || title);
            formData.append('topSectionParagraphs', topIntro.trim());

            // 3. About section
            formData.append('aboutTitle', aboutTitle.trim() || 'About the Project');
            formData.append('aboutParagraphs', aboutText.trim());

            // 4. Challenges
            formData.append('challengesSubtitle', challengesSubtitle.trim() || 'Challenges');
            formData.append('challengesTitle', challengesTitle.trim() || 'Challenges & Solutions');
            formData.append('challengesDescription', challengesDescription.trim());
            const validChallenges = challenges.filter(c => c.title.trim() || c.description.trim());
            if (validChallenges.length > 0) {
                formData.append('challenges', JSON.stringify(validChallenges));
            }

            // 5. Main Cover Image: newly selected file OR preserved existing URL
            if (mainImageFile) {
                formData.append('mainImage', mainImageFile);
            } else if (existingMainImage) {
                formData.append('existingMainImage', existingMainImage);
            }

            // 6. Multiple Carousel Gallery Images: retained existing + newly uploaded files
            formData.append('existingCarouselImages', JSON.stringify(existingCarouselImages));
            carouselImageFiles.forEach((file) => {
                formData.append('carouselImages[]', file);
            });

            // 7. Multiple Videos: retained existing + newly uploaded files
            formData.append('existingCarouselVideos', JSON.stringify(existingCarouselVideos));
            videoFiles.forEach((file) => {
                formData.append('carouselVideos[]', file);
            });
            formData.append('videoHighlightsTitle', videoHighlightsTitle.trim() || 'Video Highlights');
            formData.append('videoHighlightsDescription', videoHighlightsDescription.trim());

            // 8. Testimonial
            if (testimonialQuote.trim()) {
                formData.append('testimonial', JSON.stringify({
                    quote: testimonialQuote.trim(),
                    author: testimonialAuthor.trim() || 'Client Partner',
                    position: testimonialPosition.trim() || ''
                }));
            }

            const response = await fetch('/api/post-work.php', {
                method: 'POST',
                body: formData
            });

            const result = await response.json();

            if (!response.ok || result.status !== 'success') {
                throw new Error(result.message || 'Failed to save project.');
            }

            setCreatedProject(result.project);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } catch (err) {
            console.error('Submission error:', err);
            setErrorMsg(err.message || 'Something went wrong while uploading.');
        } finally {
            setLoading(false);
        }
    };

    const totalGalleryCount = existingCarouselImages.length + carouselImagePreviews.length;
    const totalVideoCount = existingCarouselVideos.length + videoFiles.length;

    // Derived values for Live Previews
    const previewCategory = category === 'Other' ? (customCategory.trim() || 'Special Feature') : category;
    const previewCoverImage = mainImagePreview || '/images/project-fallback.jpg';
    const previewGalleryImages = [
        ...existingCarouselImages,
        ...carouselImagePreviews
    ];
    const previewVideoList = [
        ...existingCarouselVideos,
        ...videoPreviews
    ];
    const previewChallengesList = challenges.filter(c => c.title.trim() || c.description.trim());
    const previewTopParagraphs = topIntro.trim()
        ? topIntro.split(/\r?\n/).map(s => s.trim()).filter(Boolean)
        : ['We provided comprehensive creative direction, digital strategy, and media production deliverables to drive impactful reach and engagement for this initiative.'];
    const previewAboutParagraphs = aboutText.trim()
        ? aboutText.split(/\r?\n/).map(s => s.trim()).filter(Boolean)
        : ['Our production and strategy teams collaborated closely with key stakeholders from pre-event planning through post-production delivery—ensuring every visual asset reinforced a cohesive, high-impact brand narrative.'];

    return (
        <main className="min-h-screen bg-[#0a0a0a] text-white pt-24 pb-24 px-4 sm:px-6 md:px-10 lg:px-16 font-sans">
            <SEO
                title={isEditMode ? `Edit ${title || 'Case Study'} | ZIH` : "Publish Project | Add Work | ZIH"}
                description={isEditMode ? "Edit project details, modify media, and update case study." : "Easily upload photos and videos to publish a new case study."}
            />

            <div className="max-w-6xl mx-auto">
                {/* Header Bar */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-6 border-b border-white/10">
                    <div>
                        <div className="flex items-center gap-3 mb-2">
                            <Link
                                to="/our-work"
                                className="inline-flex items-center gap-2 text-xs font-semibold text-[#a1a1aa] hover:text-[#c4f82a] transition"
                            >
                                <FiArrowLeft /> Back to All Work
                            </Link>
                            {isEditMode && (
                                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-[#c4f82a]/15 text-[#c4f82a] border border-[#c4f82a]/30">
                                    <FiEdit3 className="text-[10px]" /> Edit Mode Active
                                </span>
                            )}
                        </div>
                        <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-white flex items-center gap-3">
                            {isEditMode ? (
                                <>Edit Project: <span className="text-[#c4f82a] font-normal">{title || editId}</span></>
                            ) : (
                                "Upload Work & Publish Case Study"
                            )}
                        </h1>
                        <p className="text-xs sm:text-sm text-[#a1a1aa] mt-1">
                            {isEditMode
                                ? "Update any incorrect details, change or add photos, and preview before saving changes to the live project."
                                : "Add a brand new project to your portfolio with photos, video highlights, and metrics."}
                        </p>
                    </div>

                    <div className="flex flex-wrap items-center gap-2 self-start sm:self-auto">
                        {isEditMode && (
                            <button
                                type="button"
                                onClick={handleDeleteProject}
                                disabled={loading}
                                className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold bg-red-500/10 border border-red-500/30 hover:bg-red-500/20 text-red-400 transition cursor-pointer"
                                title="Delete this project permanently"
                            >
                                <FiTrash2 /> Delete Project
                            </button>
                        )}

                        <button
                            type="button"
                            onClick={() => setPreviewMode(!previewMode)}
                            className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold border transition cursor-pointer ${previewMode
                                    ? 'bg-[#c4f82a] text-black border-[#c4f82a] shadow-[0_0_15px_-3px_rgba(196,248,42,0.4)]'
                                    : 'bg-white/5 border-white/10 hover:bg-white/10 text-white'
                                }`}
                        >
                            <FiEye className="text-sm" /> {previewMode ? 'Return to Form Editor' : 'Live Previews (Card & Page)'}
                        </button>
                    </div>
                </div>

                {/* Primary Mode Tabs (Create New vs Edit Existing) */}
                <div className="mb-8 p-2 rounded-2xl bg-[#141215] border border-white/10 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
                    <div className="inline-flex rounded-xl bg-black/40 p-1 border border-white/5">
                        <button
                            type="button"
                            onClick={handleSwitchToCreateNew}
                            className={`flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg text-xs font-semibold transition cursor-pointer ${!isEditMode
                                    ? 'bg-[#c4f82a] text-black shadow-[0_0_15px_-3px_rgba(196,248,42,0.4)]'
                                    : 'text-[#a1a1aa] hover:text-white hover:bg-white/5'
                                }`}
                        >
                            <FiPlus className="text-sm" />
                            <span>Upload New Case Study</span>
                        </button>

                        <button
                            type="button"
                            onClick={() => {
                                if (allProjectsList.length > 0 && !isEditMode) {
                                    navigate(`/post-work?edit=${encodeURIComponent(allProjectsList[0].id)}`);
                                }
                            }}
                            className={`flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg text-xs font-semibold transition cursor-pointer ${isEditMode
                                    ? 'bg-[#c4f82a] text-black shadow-[0_0_15px_-3px_rgba(196,248,42,0.4)]'
                                    : 'text-[#a1a1aa] hover:text-white hover:bg-white/5'
                                }`}
                        >
                            <FiEdit3 className="text-sm" />
                            <span>Edit Existing Project</span>
                        </button>
                    </div>

                    {/* Choose Project to Edit Dropdown */}
                    <div className="flex items-center gap-2.5 px-1">
                        <span className="text-xs text-[#a1a1aa] font-medium shrink-0">
                            {isEditMode ? "Currently Editing:" : "Select project to edit:"}
                        </span>
                        <select
                            value={editId}
                            onChange={(e) => {
                                if (e.target.value) {
                                    navigate(`/post-work?edit=${encodeURIComponent(e.target.value)}`);
                                } else {
                                    handleSwitchToCreateNew();
                                }
                            }}
                            className="w-full md:w-auto px-4 py-2 rounded-xl text-xs font-semibold bg-[#1a1a1c] border border-white/10 text-white hover:border-[#c4f82a]/50 transition cursor-pointer focus:outline-none focus:border-[#c4f82a]"
                        >
                            <option value="">-- Choose a Project to Edit --</option>
                            {allProjectsList.map((p) => (
                                <option key={p.id} value={p.id}>
                                    {p.title || p.id} ({p.category || 'Events'})
                                </option>
                            ))}
                        </select>
                    </div>
                </div>

                {/* Initial Loading Spinner for Edit Mode */}
                {initialLoading && (
                    <div className="p-12 flex flex-col items-center justify-center rounded-2xl bg-[#121214] border border-white/10 mb-8">
                        <div className="w-8 h-8 border-2 border-white/20 border-t-[#c4f82a] rounded-full animate-spin mb-3" />
                        <p className="text-sm text-[#a1a1aa]">Loading project data for editing...</p>
                    </div>
                )}

                {/* Not Found Error */}
                {notFoundError && (
                    <div className="mb-8 p-6 rounded-2xl bg-[#181214] border border-red-500/40 text-red-300">
                        <div className="flex items-center gap-2 font-semibold text-base mb-1">
                            <FiAlertCircle className="text-xl" /> Project Not Found
                        </div>
                        <p className="text-xs sm:text-sm text-[#e4e4e7] mb-4">
                            We couldn&apos;t locate a project with ID <code>{editId}</code> to edit.
                        </p>
                        <button
                            type="button"
                            onClick={handleSwitchToCreateNew}
                            className="px-4 py-2 rounded-xl bg-[#c4f82a] text-black font-semibold text-xs hover:bg-[#b0f516] transition"
                        >
                            Create a New Project Instead
                        </button>
                    </div>
                )}

                {/* Success Card */}
                {createdProject && (
                    <div className="mb-8 p-6 rounded-2xl bg-[#141d11] border border-[#c4f82a]/40 shadow-[0_0_30px_-10px_rgba(196,248,42,0.3)]">
                        <div className="flex items-center gap-3 text-[#c4f82a] mb-2 font-semibold text-lg">
                            <span className="w-8 h-8 rounded-full bg-[#c4f82a] text-black flex items-center justify-center font-bold text-sm">
                                <FiCheck />
                            </span>
                            {isEditMode ? 'Case Study Updated Successfully!' : 'Case Study Published Successfully!'}
                        </div>
                        <p className="text-sm text-[#e4e4e7] mb-4">
                            <strong>{createdProject.title}</strong> is live and updated at URL: <code className="text-[#c4f82a]">/our-work/{createdProject.id}</code>.
                        </p>
                        <div className="flex flex-wrap gap-3">
                            <Link
                                to={`/our-work/${createdProject.id}`}
                                className="px-5 py-2.5 rounded-xl bg-[#c4f82a] text-black font-semibold text-xs tracking-wide hover:bg-[#b0f516] transition inline-flex items-center gap-1.5"
                            >
                                <FiExternalLink /> Open Live Case Study Page &rarr;
                            </Link>
                            <Link
                                to="/our-work"
                                className="px-5 py-2.5 rounded-xl bg-white/10 text-white font-semibold text-xs hover:bg-white/20 transition"
                            >
                                View on /our-work Catalog
                            </Link>
                            <button
                                type="button"
                                onClick={handleSwitchToCreateNew}
                                className="px-4 py-2.5 text-xs text-[#a1a1aa] hover:text-white"
                            >
                                + Upload Another Project
                            </button>
                        </div>
                    </div>
                )}

                {/* Error Banner */}
                {errorMsg && (
                    <div className="mb-6 p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-xs sm:text-sm">
                        {errorMsg}
                    </div>
                )}

                {/* =========================================================
                    PREVIEW MODE: BOTH PROJECT CARD & FULL CASE STUDY PAGE (/our-work/:id)
                ========================================================== */}
                {previewMode ? (
                    <div className="space-y-10">
                        {/* Preview Navigation Tabs & Quick Action Bar */}
                        <div className="p-4 rounded-2xl bg-[#141215] border border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                            <div className="flex items-center gap-2">
                                <span className="text-xs font-semibold text-[#a1a1aa] mr-2">Preview Mode:</span>
                                <div className="inline-flex rounded-xl bg-black/50 p-1 border border-white/10">
                                    <button
                                        type="button"
                                        onClick={() => setPreviewTab('both')}
                                        className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition cursor-pointer flex items-center gap-1.5 ${previewTab === 'both' ? 'bg-[#c4f82a] text-black' : 'text-[#a1a1aa] hover:text-white'
                                            }`}
                                    >
                                        <FiLayers /> Both Previews
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => setPreviewTab('card')}
                                        className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition cursor-pointer flex items-center gap-1.5 ${previewTab === 'card' ? 'bg-[#c4f82a] text-black' : 'text-[#a1a1aa] hover:text-white'
                                            }`}
                                    >
                                        <FiImage /> Catalog Card (/our-work)
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => setPreviewTab('detail')}
                                        className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition cursor-pointer flex items-center gap-1.5 ${previewTab === 'detail' ? 'bg-[#c4f82a] text-black' : 'text-[#a1a1aa] hover:text-white'
                                            }`}
                                    >
                                        <FiFileText /> Dedicated Case Study (/our-work/:id)
                                    </button>
                                </div>
                            </div>

                            <div className="flex items-center gap-2 w-full md:w-auto justify-end">
                                <button
                                    type="button"
                                    onClick={() => setPreviewMode(false)}
                                    className="px-4 py-2 rounded-xl bg-white/10 text-white text-xs font-semibold hover:bg-white/15 transition cursor-pointer"
                                >
                                    Return to Edit Form
                                </button>
                                <button
                                    type="button"
                                    onClick={handleSubmit}
                                    disabled={loading}
                                    className="px-5 py-2 rounded-xl bg-[#c4f82a] text-black text-xs font-semibold hover:bg-[#b0f516] transition cursor-pointer flex items-center gap-1.5"
                                >
                                    <FiCheck /> {isEditMode ? "Save Changes Now" : "Publish Case Study"}
                                </button>
                            </div>
                        </div>

                        {/* -------------------------------------------------------------
                            PREVIEW 1: THE CATALOG CARD (/our-work)
                        -------------------------------------------------------------- */}
                        {(previewTab === 'both' || previewTab === 'card') && (
                            <section className="space-y-3">
                                <div className="flex items-center justify-between px-1">
                                    <div className="flex items-center gap-2">
                                        <span className="w-5 h-5 rounded-full bg-[#c4f82a] text-black text-[11px] font-bold flex items-center justify-center">1</span>
                                        <h2 className="text-sm sm:text-base font-semibold text-white">
                                            Catalog Card Preview <span className="text-[#a1a1aa] font-normal text-xs">(as shown on /our-work)</span>
                                        </h2>
                                    </div>
                                    <span className="text-[11px] font-mono text-[#c4f82a] bg-[#c4f82a]/10 px-2 py-0.5 rounded border border-[#c4f82a]/20">
                                        Alignment: {imagePosition === 'left' ? 'Image on Left' : 'Image on Right'}
                                    </span>
                                </div>

                                <div className="rounded-2xl border border-white/10 bg-[#0d0d0f] overflow-hidden shadow-2xl">
                                    {/* Mock Browser Header */}
                                    <div className="flex items-center justify-between px-4 py-2.5 bg-black/60 border-b border-white/10 text-xs">
                                        <div className="flex items-center gap-2">
                                            <span className="w-2.5 h-2.5 rounded-full bg-red-500/60 inline-block" />
                                            <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/60 inline-block" />
                                            <span className="w-2.5 h-2.5 rounded-full bg-green-500/60 inline-block" />
                                            <span className="ml-2 font-mono text-[11px] text-[#71717a]">
                                                https://yourwebsite.com/our-work
                                            </span>
                                        </div>
                                        <span className="text-[10px] uppercase tracking-wider text-[#c4f82a] font-semibold bg-[#c4f82a]/10 px-2 py-0.5 rounded border border-[#c4f82a]/20">
                                            Catalog Card
                                        </span>
                                    </div>

                                    {/* Real ProjectCard render using the live state */}
                                    <div className="bg-[#0a0a0a]">
                                        <ProjectCard
                                            title={title || 'Project Title Placeholder'}
                                            category={previewCategory}
                                            description={cardDescription || 'Your short project overview summarizing the deliverables and impact across marketing, branding, and production.'}
                                            image={previewCoverImage}
                                            imagePosition={imagePosition}
                                            buttonText="View Case Study"
                                            buttonLink="#"
                                        />
                                    </div>
                                </div>
                            </section>
                        )}

                        {/* -------------------------------------------------------------
                            PREVIEW 2: DEDICATED CASE STUDY DETAIL PAGE (/our-work/:id)
                        -------------------------------------------------------------- */}
                        {(previewTab === 'both' || previewTab === 'detail') && (
                            <section className="space-y-3">
                                <div className="flex items-center justify-between px-1">
                                    <div className="flex items-center gap-2">
                                        <span className="w-5 h-5 rounded-full bg-[#c4f82a] text-black text-[11px] font-bold flex items-center justify-center">2</span>
                                        <h2 className="text-sm sm:text-base font-semibold text-white">
                                            Dedicated Case Study Page Preview <span className="text-[#a1a1aa] font-normal text-xs">(as shown on /our-work/:id)</span>
                                        </h2>
                                    </div>
                                    <span className="text-[11px] font-mono text-[#c4f82a] bg-[#c4f82a]/10 px-2 py-0.5 rounded border border-[#c4f82a]/20">
                                        Live Slug: /our-work/{editId || (title ? title.toLowerCase().replace(/[^a-z0-9]+/g, '-') : 'project-slug')}
                                    </span>
                                </div>

                                <div className="rounded-2xl border border-white/10 bg-[#0d0d0f] overflow-hidden shadow-2xl">
                                    {/* Mock Browser Header */}
                                    <div className="flex items-center justify-between px-4 py-2.5 bg-black/60 border-b border-white/10 text-xs">
                                        <div className="flex items-center gap-2">
                                            <span className="w-2.5 h-2.5 rounded-full bg-red-500/60 inline-block" />
                                            <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/60 inline-block" />
                                            <span className="w-2.5 h-2.5 rounded-full bg-green-500/60 inline-block" />
                                            <span className="ml-2 font-mono text-[11px] text-[#71717a]">
                                                https://yourwebsite.com/our-work/{editId || (title ? title.toLowerCase().replace(/[^a-z0-9]+/g, '-') : 'project-slug')}
                                            </span>
                                        </div>
                                        <span className="text-[10px] uppercase tracking-wider text-[#c4f82a] font-semibold bg-[#c4f82a]/10 px-2 py-0.5 rounded border border-[#c4f82a]/20">
                                            Dedicated Page (/our-work/:id)
                                        </span>
                                    </div>

                                    {/* Faithfully Structured Live Case Study Page Preview */}
                                    <div className="bg-[#0a0a0a] text-white">
                                        {/* 1. Header & Hero */}
                                        <div className="p-6 sm:p-10 lg:p-12 border-b border-white/5">
                                            {/* Breadcrumb Mock */}
                                            <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
                                                <div className="inline-flex items-center gap-2 font-sans text-[12.5px] font-medium text-[#a1a1aa]">
                                                    <FiArrowLeft className="text-sm" />
                                                    <span>Back to All Work</span>
                                                </div>

                                                <div className="flex items-center gap-2">
                                                    <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 font-sans text-[11px] font-medium text-[#d4d4d8]">
                                                        {previewCategory}
                                                    </span>
                                                    <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 font-sans text-[11px] font-semibold uppercase tracking-wider text-[#c4f82a]">
                                                        Case Study
                                                    </span>
                                                </div>
                                            </div>

                                            {/* Headline and Metadata */}
                                            <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12 items-start">
                                                <div className="lg:col-span-8 flex flex-col">
                                                    <span className="mb-2 font-sans text-[11px] font-bold uppercase tracking-[1.8px] text-[#c4f82a]">
                                                        {subtitle || (title ? title.toUpperCase() : 'PROJECT SPOTLIGHT')}
                                                    </span>
                                                    <h1 className="font-sans text-[26px] sm:text-[34px] md:text-[40px] font-semibold text-white tracking-tight leading-[1.15] mb-5">
                                                        {headline || title || 'Elevating Brand Identity Through High-Impact Launch Campaign'}
                                                    </h1>

                                                    <div className="space-y-3 font-sans text-[14px] sm:text-[15px] leading-relaxed text-[#a1a1aa] max-w-2xl">
                                                        {previewTopParagraphs.map((p, idx) => (
                                                            <p key={idx}>{p}</p>
                                                        ))}
                                                    </div>
                                                </div>

                                                <div className="lg:col-span-4 flex flex-col divide-y divide-white/10 pt-2 lg:pt-0">
                                                    <div className="pb-3">
                                                        <span className="block font-sans text-[10.5px] uppercase tracking-wider text-[#71717a]">
                                                            Client / Initiative
                                                        </span>
                                                        <span className="font-sans text-[13.5px] font-semibold text-white mt-1 block">
                                                            {clientName || title || 'Brand Partner'}
                                                        </span>
                                                    </div>
                                                    <div className="py-3">
                                                        <span className="block font-sans text-[10.5px] uppercase tracking-wider text-[#71717a]">
                                                            Core Practice
                                                        </span>
                                                        <span className="font-sans text-[13px] font-medium text-[#d4d4d8] mt-1 block">
                                                            {previewCategory}
                                                        </span>
                                                    </div>
                                                    <div className="py-3">
                                                        <span className="block font-sans text-[10.5px] uppercase tracking-wider text-[#71717a]">
                                                            Agency Role
                                                        </span>
                                                        <span className="font-sans text-[13px] font-medium text-[#d4d4d8] mt-1 block">
                                                            End-to-End Creative &amp; Media Production
                                                        </span>
                                                    </div>
                                                    <div className="pt-3">
                                                        <span className="font-sans text-[11.5px] font-semibold text-[#c4f82a]">
                                                            Successfully Executed &amp; Deployed
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* 2. Cover / Showcase Banner */}
                                        <div className="px-6 sm:px-10 lg:px-12 py-8">
                                            <div className="w-full aspect-[16/9] max-h-[460px] rounded-2xl overflow-hidden border border-white/10 relative bg-black/60">
                                                <img
                                                    src={previewCoverImage}
                                                    alt="Cover"
                                                    className="w-full h-full object-cover"
                                                />
                                                <div className="absolute bottom-4 left-4 px-3 py-1.5 rounded-xl bg-black/80 backdrop-blur-md border border-white/10 text-xs font-semibold text-white">
                                                    Featured Hero Cover
                                                </div>
                                            </div>
                                        </div>

                                        {/* 3. About the Project Section */}
                                        <div className="px-6 sm:px-10 lg:px-12 py-8 border-t border-white/5">
                                            <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12 items-start">
                                                <div className="lg:col-span-7 flex flex-col items-start">
                                                    <span className="mb-2 font-sans text-[11px] font-bold uppercase tracking-[1.5px] text-[#c4f82a]">
                                                        Context &amp; Scope
                                                    </span>
                                                    <h2 className="font-sans text-[22px] sm:text-[26px] font-semibold text-white tracking-tight leading-snug mb-3">
                                                        {aboutTitle || 'About the Project'}
                                                    </h2>
                                                    <div className="space-y-3 font-sans text-[13.5px] sm:text-[14.5px] leading-relaxed text-[#a1a1aa] w-full">
                                                        {previewAboutParagraphs.map((p, idx) => (
                                                            <p key={idx}>{p}</p>
                                                        ))}
                                                    </div>
                                                </div>

                                                <div className="lg:col-span-5 flex flex-col pt-2 lg:pt-0">
                                                    <span className="font-sans text-[11px] font-bold uppercase tracking-wider text-[#c4f82a] mb-3">
                                                        Engagement Overview
                                                    </span>
                                                    <div className="grid grid-cols-2 gap-4 pb-4 border-b border-white/10">
                                                        <div>
                                                            <p className="font-sans text-[10.5px] uppercase tracking-wider text-[#71717a]">
                                                                Media Deliverables
                                                            </p>
                                                            <p className="mt-1 font-sans text-[16px] font-semibold text-white">
                                                                {(totalGalleryCount + totalVideoCount) > 0 ? `${totalGalleryCount + totalVideoCount}+ Curated Assets` : 'Curated Assets'}
                                                            </p>
                                                        </div>
                                                        <div>
                                                            <p className="font-sans text-[10.5px] uppercase tracking-wider text-[#71717a]">
                                                                Execution Standard
                                                            </p>
                                                            <p className="mt-1 font-sans text-[16px] font-semibold text-[#c4f82a]">
                                                                4K Broadcast &amp; Print
                                                            </p>
                                                        </div>
                                                    </div>

                                                    <p className="mt-4 mb-2 font-sans text-[11px] font-semibold uppercase tracking-wider text-[#d4d4d8]">
                                                        Core Deliverables Executed:
                                                    </p>
                                                    <div className="flex flex-wrap gap-1.5">
                                                        {[
                                                            'Creative Direction',
                                                            'Multi-Cam Coverage',
                                                            'Brand Collateral',
                                                            'Social Media Reels',
                                                            'Color Grading & Post',
                                                            'Audience Engagement'
                                                        ].map((tag) => (
                                                            <span
                                                                key={tag}
                                                                className="rounded-md border border-white/10 bg-white/[0.02] px-2.5 py-1 font-sans text-[11.5px] text-[#a1a1aa]"
                                                            >
                                                                {tag}
                                                            </span>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* 4. Photo Gallery & Challenges */}
                                        <div className="px-6 sm:px-10 lg:px-12 py-8 border-t border-white/5">
                                            <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-10 items-stretch">
                                                {/* Left: Gallery Showcase */}
                                                <div className="lg:col-span-6">
                                                    <span className="font-sans text-[11px] font-bold uppercase tracking-[1.5px] text-[#c4f82a] block mb-2">
                                                        Gallery Deliverables ({previewGalleryImages.length} Photos)
                                                    </span>
                                                    {previewGalleryImages.length > 0 ? (
                                                        <div className="overflow-hidden rounded-xl border border-white/10 bg-transparent h-full min-h-[300px]">
                                                            <ImageCarousel items={previewGalleryImages} />
                                                        </div>
                                                    ) : (
                                                        <div className="p-8 rounded-xl border border-dashed border-white/15 text-center text-[#71717a] text-xs flex flex-col items-center justify-center min-h-[220px]">
                                                            <FiImage className="text-3xl mb-2 opacity-50" />
                                                            Upload multiple photos in Section 2 to see the photo carousel here.
                                                        </div>
                                                    )}
                                                </div>

                                                {/* Right: Challenges */}
                                                <div className="lg:col-span-6 flex flex-col justify-between gap-4">
                                                    <div>
                                                        <span className="font-sans text-[11px] font-bold uppercase tracking-[1.5px] text-[#c4f82a]">
                                                            {challengesSubtitle || 'Strategic Execution'}
                                                        </span>
                                                        <h2 className="font-sans text-[22px] sm:text-[26px] font-semibold text-white tracking-tight leading-tight mt-1 mb-2">
                                                            {challengesTitle || 'Key Challenges & Solutions'}
                                                        </h2>
                                                        {challengesDescription && (
                                                            <p className="font-sans text-[13.5px] leading-relaxed text-[#a1a1aa] mb-4">
                                                                {challengesDescription}
                                                            </p>
                                                        )}

                                                        <div className="flex flex-col divide-y divide-white/10 border-t border-white/10">
                                                            {previewChallengesList.map((ch, idx) => (
                                                                <div key={idx} className="py-3.5 flex items-start gap-3.5">
                                                                    <span className="font-mono text-[13px] font-bold text-[#c4f82a] mt-0.5 shrink-0">
                                                                        {String(idx + 1).padStart(2, '0')}
                                                                    </span>
                                                                    <div>
                                                                        <h3 className="font-sans text-[14px] font-semibold text-white">
                                                                            {ch.title}
                                                                        </h3>
                                                                        <p className="mt-0.5 font-sans text-[12.5px] leading-relaxed text-[#a1a1aa]">
                                                                            {ch.description}
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* 5. Client Testimonial */}
                                        {testimonialQuote.trim() && (
                                            <div className="px-6 sm:px-10 lg:px-12 py-8 border-t border-white/5">
                                                <div className="max-w-3xl mx-auto">
                                                    <span className="font-sans text-[10.5px] font-bold uppercase tracking-[1.8px] text-[#c4f82a]">
                                                        Client Validation
                                                    </span>
                                                    <blockquote className="mt-3 font-sans text-[17px] sm:text-[20px] font-normal italic text-[#fafafa] leading-relaxed">
                                                        &ldquo;{testimonialQuote}&rdquo;
                                                    </blockquote>
                                                    <div className="mt-4 pt-4 border-t border-white/10 flex items-center justify-between">
                                                        <div>
                                                            <h4 className="font-sans text-[14px] font-semibold text-white">
                                                                {testimonialAuthor || 'Client Partner'}
                                                            </h4>
                                                            {testimonialPosition && (
                                                                <p className="font-sans text-[12px] text-[#a1a1aa] mt-0.5">
                                                                    {testimonialPosition}
                                                                </p>
                                                            )}
                                                        </div>
                                                        <span className="font-sans text-[11px] font-bold uppercase tracking-wider text-[#c4f82a]">
                                                            Verified Partner
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        )}

                                        {/* 6. Video Highlights Carousel */}
                                        {previewVideoList.length > 0 && (
                                            <div className="px-6 sm:px-10 lg:px-12 py-8 border-t border-white/5">
                                                <div className="mb-6 text-center max-w-2xl mx-auto">
                                                    <span className="font-sans text-[11px] font-bold uppercase tracking-[1.8px] text-[#c4f82a]">
                                                        Live Deliverables
                                                    </span>
                                                    <h2 className="mt-1 font-sans text-[22px] sm:text-[26px] font-semibold text-white tracking-tight">
                                                        {videoHighlightsTitle || 'Video Highlights'}
                                                    </h2>
                                                    {videoHighlightsDescription && (
                                                        <p className="mt-2 font-sans text-[13.5px] leading-relaxed text-[#a1a1aa]">
                                                            {videoHighlightsDescription}
                                                        </p>
                                                    )}
                                                </div>
                                                <VideoCarousel items={previewVideoList} />
                                            </div>
                                        )}

                                        {/* 7. Next Steps CTA */}
                                        <div className="px-6 sm:px-10 lg:px-12 py-10 bg-white/[0.02] border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-5">
                                            <div>
                                                <span className="font-sans text-[10.5px] font-bold uppercase tracking-[2px] text-[#c4f82a]">
                                                    Next Steps
                                                </span>
                                                <h3 className="mt-1 font-sans text-[20px] sm:text-[24px] font-semibold text-white">
                                                    Inspired by this case study? Let&apos;s build yours.
                                                </h3>
                                                <p className="text-xs text-[#a1a1aa] mt-1">
                                                    Ready to engineer growth through end-to-end strategy, production, and marketing.
                                                </p>
                                            </div>
                                            <div className="px-6 py-2.5 rounded-xl bg-[#c4f82a] text-black font-semibold text-xs tracking-wide">
                                                Start Your Project &rarr;
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        )}
                    </div>
                ) : (
                    /* =========================================================
                       THE CLEAN FORM: SUPPORTS BOTH EDITING & NEW UPLOADS
                    ========================================================== */
                    <form onSubmit={handleSubmit} className="space-y-8">
                        {/* -------------------------------------------------------------
                            SECTION 1: CATALOG CARD & COVER PHOTO
                        -------------------------------------------------------------- */}
                        <div className="p-6 sm:p-8 rounded-2xl bg-[#121214] border border-white/10 space-y-5">
                            <div className="flex items-center gap-2 text-sm font-semibold text-white">
                                <span className="w-6 h-6 rounded-full bg-[#c4f82a] text-black text-xs font-bold flex items-center justify-center">1</span>
                                <h2>Project Identity &amp; Cover Photo</h2>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="space-y-1.5 sm:col-span-2">
                                    <label className="text-xs font-medium text-[#e4e4e7]">
                                        Project Title <span className="text-[#c4f82a]">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        required
                                        value={title}
                                        onChange={(e) => setTitle(e.target.value)}
                                        placeholder="e.g. Hyderabad Chai Company Outlet Launch"
                                        className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-[#c4f82a] transition"
                                    />
                                </div>

                                <div className="space-y-1.5">
                                    <label className="text-xs font-medium text-[#e4e4e7]">Category</label>
                                    <select
                                        value={category}
                                        onChange={(e) => setCategory(e.target.value)}
                                        className="w-full px-4 py-2.5 rounded-xl bg-[#1a1a1c] border border-white/10 text-white text-sm focus:outline-none focus:border-[#c4f82a] transition"
                                    >
                                        {CATEGORY_OPTIONS.map(c => (
                                            <option key={c} value={c}>{c}</option>
                                        ))}
                                        <option value="Other">Other (Custom)</option>
                                    </select>
                                </div>

                                {category === 'Other' ? (
                                    <div className="space-y-1.5">
                                        <label className="text-xs font-medium text-[#e4e4e7]">Custom Category Name</label>
                                        <input
                                            type="text"
                                            value={customCategory}
                                            onChange={(e) => setCustomCategory(e.target.value)}
                                            placeholder="e.g. Influencer Campaign"
                                            className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-[#c4f82a] transition"
                                        />
                                    </div>
                                ) : (
                                    <div className="space-y-1.5">
                                        <label className="text-xs font-medium text-[#e4e4e7]">Card Image Alignment</label>
                                        <select
                                            value={imagePosition}
                                            onChange={(e) => setImagePosition(e.target.value)}
                                            className="w-full px-4 py-2.5 rounded-xl bg-[#1a1a1c] border border-white/10 text-white text-sm focus:outline-none focus:border-[#c4f82a] transition"
                                        >
                                            <option value="right">Image on Right (Default)</option>
                                            <option value="left">Image on Left</option>
                                        </select>
                                    </div>
                                )}

                                <div className="space-y-1.5 sm:col-span-2">
                                    <label className="text-xs font-medium text-[#e4e4e7]">
                                        Card Summary (Short overview shown on the /our-work list)
                                    </label>
                                    <textarea
                                        rows={2}
                                        value={cardDescription}
                                        onChange={(e) => setCardDescription(e.target.value)}
                                        placeholder="Brief 1-2 sentence overview of the project deliverables and impact..."
                                        className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-[#c4f82a] transition"
                                    />
                                </div>
                            </div>

                            {/* Main Cover Image */}
                            <div className="pt-3 border-t border-white/5">
                                <label className="text-xs font-medium text-[#e4e4e7] block mb-2">
                                    Cover Photo <span className="text-[#a1a1aa]">(Main image for the project card and header)</span>
                                </label>

                                {mainImagePreview ? (
                                    <div className="relative aspect-video max-h-56 rounded-xl overflow-hidden bg-black/40 border border-white/15 group">
                                        <img src={mainImagePreview} alt="Cover preview" className="w-full h-full object-cover" />
                                        <div className="absolute top-3 right-3 flex items-center gap-2">
                                            {existingMainImage && !mainImageFile && (
                                                <span className="px-2.5 py-1 rounded-lg bg-black/80 text-[11px] font-semibold text-[#c4f82a]">
                                                    Current Cover
                                                </span>
                                            )}
                                            <button
                                                type="button"
                                                onClick={removeMainImage}
                                                className="p-2 rounded-lg bg-black/80 text-red-400 hover:text-red-300 transition flex items-center gap-1.5 text-xs font-semibold cursor-pointer"
                                            >
                                                <FiTrash2 /> Remove
                                            </button>
                                        </div>
                                    </div>
                                ) : (
                                    <label className="flex flex-col items-center justify-center p-8 border-2 border-dashed border-white/15 rounded-xl hover:border-[#c4f82a]/50 bg-white/[0.02] cursor-pointer transition">
                                        <FiUploadCloud className="text-3xl text-[#c4f82a] mb-2" />
                                        <span className="text-sm font-semibold text-white">Click or Drag &amp; Drop to Upload Cover Photo</span>
                                        <span className="text-xs text-[#71717a] mt-1">Supports JPG, PNG, WebP</span>
                                        <input
                                            type="file"
                                            accept="image/*"
                                            onChange={handleMainImageChange}
                                            className="hidden"
                                        />
                                    </label>
                                )}
                            </div>
                        </div>

                        {/* -------------------------------------------------------------
                            SECTION 2: MULTIPLE GALLERY PHOTOS
                        -------------------------------------------------------------- */}
                        <div className="p-6 sm:p-8 rounded-2xl bg-[#121214] border border-white/10 space-y-5">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2 text-sm font-semibold text-white">
                                    <span className="w-6 h-6 rounded-full bg-[#c4f82a] text-black text-xs font-bold flex items-center justify-center">2</span>
                                    <h2>Multiple Gallery Photos (Photo Carousel)</h2>
                                </div>
                                {totalGalleryCount > 0 && (
                                    <span className="text-xs font-semibold text-[#c4f82a] bg-[#c4f82a]/10 px-3 py-1 rounded-full border border-[#c4f82a]/30">
                                        {totalGalleryCount} photo{totalGalleryCount > 1 ? 's' : ''} total
                                    </span>
                                )}
                            </div>

                            <label className="flex flex-col items-center justify-center p-8 border-2 border-dashed border-white/15 rounded-xl hover:border-[#c4f82a]/50 bg-white/[0.02] cursor-pointer transition">
                                <FiImage className="text-3xl text-[#c4f82a] mb-2" />
                                <span className="text-sm font-semibold text-white">
                                    {isEditMode ? "Add More Gallery Photos" : "Choose Multiple Photos (Upload at once or add more)"}
                                </span>
                                <span className="text-xs text-[#71717a] mt-1">Select any number of photos from your device</span>
                                <input
                                    type="file"
                                    accept="image/*"
                                    multiple
                                    onChange={handleCarouselImagesChange}
                                    className="hidden"
                                />
                            </label>

                            {/* Gallery Preview Thumbnails: Existing + Newly Added */}
                            {totalGalleryCount > 0 && (
                                <div className="space-y-3 pt-2">
                                    <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-3">
                                        {/* Existing Saved Photos */}
                                        {existingCarouselImages.map((src, idx) => (
                                            <div key={`existing-${idx}`} className="relative aspect-square rounded-xl overflow-hidden bg-black/40 border border-white/10 group">
                                                <img src={src} alt="existing gallery" className="w-full h-full object-cover" />
                                                <span className="absolute bottom-1.5 left-1.5 px-1.5 py-0.5 rounded text-[9px] font-semibold bg-black/70 text-[#c4f82a]">
                                                    Saved
                                                </span>
                                                <button
                                                    type="button"
                                                    onClick={() => removeExistingCarouselImage(idx)}
                                                    className="absolute top-1.5 right-1.5 p-1.5 rounded-lg bg-black/80 text-red-400 hover:text-red-300 opacity-0 group-hover:opacity-100 transition cursor-pointer"
                                                    title="Delete saved photo"
                                                >
                                                    <FiTrash2 className="text-xs" />
                                                </button>
                                            </div>
                                        ))}

                                        {/* Newly Uploaded Photos */}
                                        {carouselImagePreviews.map((preview, idx) => (
                                            <div key={`new-${idx}`} className="relative aspect-square rounded-xl overflow-hidden bg-black/40 border border-[#c4f82a]/40 group">
                                                <img src={preview} alt="new upload" className="w-full h-full object-cover" />
                                                <span className="absolute bottom-1.5 left-1.5 px-1.5 py-0.5 rounded text-[9px] font-semibold bg-[#c4f82a] text-black">
                                                    New
                                                </span>
                                                <button
                                                    type="button"
                                                    onClick={() => removeNewCarouselImage(idx)}
                                                    className="absolute top-1.5 right-1.5 p-1.5 rounded-lg bg-black/80 text-red-400 hover:text-red-300 opacity-0 group-hover:opacity-100 transition cursor-pointer"
                                                    title="Delete photo"
                                                >
                                                    <FiTrash2 className="text-xs" />
                                                </button>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* -------------------------------------------------------------
                            SECTION 3: MULTIPLE PROJECT VIDEOS
                        -------------------------------------------------------------- */}
                        <div className="p-6 sm:p-8 rounded-2xl bg-[#121214] border border-white/10 space-y-5">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2 text-sm font-semibold text-white">
                                    <span className="w-6 h-6 rounded-full bg-[#c4f82a] text-black text-xs font-bold flex items-center justify-center">3</span>
                                    <h2>Multiple Project Videos (Video Highlights)</h2>
                                </div>
                                {totalVideoCount > 0 && (
                                    <span className="text-xs font-semibold text-[#c4f82a] bg-[#c4f82a]/10 px-3 py-1 rounded-full border border-[#c4f82a]/30">
                                        {totalVideoCount} video{totalVideoCount > 1 ? 's' : ''} total
                                    </span>
                                )}
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="space-y-1.5">
                                    <label className="text-xs font-medium text-[#e4e4e7]">Video Section Title</label>
                                    <input
                                        type="text"
                                        value={videoHighlightsTitle}
                                        onChange={(e) => setVideoHighlightsTitle(e.target.value)}
                                        placeholder="Video Highlights"
                                        className="w-full px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-white text-xs focus:outline-none focus:border-[#c4f82a]"
                                    />
                                </div>
                                <div className="space-y-1.5">
                                    <label className="text-xs font-medium text-[#e4e4e7]">Video Section Description</label>
                                    <input
                                        type="text"
                                        value={videoHighlightsDescription}
                                        onChange={(e) => setVideoHighlightsDescription(e.target.value)}
                                        placeholder="Watch key moments and deliverables from our engagement..."
                                        className="w-full px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-white text-xs focus:outline-none focus:border-[#c4f82a]"
                                    />
                                </div>
                            </div>

                            {/* Multi-video File Picker */}
                            <label className="flex flex-col items-center justify-center p-8 border-2 border-dashed border-white/15 rounded-xl hover:border-[#c4f82a]/50 bg-white/[0.02] cursor-pointer transition">
                                <FiFilm className="text-3xl text-[#c4f82a] mb-2" />
                                <span className="text-sm font-semibold text-white">
                                    {isEditMode ? "Add More Video Files" : "Select One or Multiple Video Files"}
                                </span>
                                <span className="text-xs text-[#71717a] mt-1">Supports MP4, WebM, MOV</span>
                                <input
                                    type="file"
                                    accept="video/*"
                                    multiple
                                    onChange={handleVideoFilesChange}
                                    className="hidden"
                                />
                            </label>

                            {/* Chosen Videos List: Existing + New */}
                            {totalVideoCount > 0 && (
                                <div className="space-y-2 pt-2">
                                    {/* Existing Saved Videos */}
                                    {existingCarouselVideos.map((vUrl, idx) => (
                                        <div key={`existing-video-${idx}`} className="flex items-center justify-between p-3 rounded-xl bg-white/[0.03] border border-white/10">
                                            <div className="flex items-center gap-3">
                                                <FiFilm className="text-[#c4f82a] text-lg shrink-0" />
                                                <div>
                                                    <p className="text-xs font-semibold text-white truncate max-w-xs sm:max-w-md">{vUrl}</p>
                                                    <span className="text-[10px] font-semibold text-[#c4f82a]">Current Saved Video</span>
                                                </div>
                                            </div>
                                            <button
                                                type="button"
                                                onClick={() => removeExistingCarouselVideo(idx)}
                                                className="p-1.5 text-red-400 hover:text-red-300 transition cursor-pointer"
                                                title="Remove saved video"
                                            >
                                                <FiTrash2 className="text-sm" />
                                            </button>
                                        </div>
                                    ))}

                                    {/* Newly Uploaded Videos */}
                                    {videoFiles.map((vf, idx) => (
                                        <div key={`new-video-${idx}`} className="flex items-center justify-between p-3 rounded-xl bg-white/[0.03] border border-[#c4f82a]/40">
                                            <div className="flex items-center gap-3">
                                                <FiFilm className="text-[#c4f82a] text-lg shrink-0" />
                                                <div>
                                                    <p className="text-xs font-semibold text-white truncate max-w-xs sm:max-w-md">{vf.name}</p>
                                                    <p className="text-[11px] text-[#71717a]">{(vf.size / (1024 * 1024)).toFixed(1)} MB (New Upload)</p>
                                                </div>
                                            </div>
                                            <button
                                                type="button"
                                                onClick={() => removeNewVideoFile(idx)}
                                                className="p-1.5 text-red-400 hover:text-red-300 transition cursor-pointer"
                                                title="Remove video"
                                            >
                                                <FiTrash2 className="text-sm" />
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* -------------------------------------------------------------
                            SECTION 4: CASE STUDY STORY (HEADLINE & PARAGRAPHS)
                        -------------------------------------------------------------- */}
                        <div className="p-6 sm:p-8 rounded-2xl bg-[#121214] border border-white/10 space-y-5">
                            <div className="flex items-center gap-2 text-sm font-semibold text-white">
                                <span className="w-6 h-6 rounded-full bg-[#c4f82a] text-black text-xs font-bold flex items-center justify-center">4</span>
                                <h2>Case Study Story &amp; Details (/our-work/:id)</h2>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="space-y-1.5">
                                    <label className="text-xs font-medium text-[#e4e4e7]">Eyebrow / Subtitle</label>
                                    <input
                                        type="text"
                                        value={subtitle}
                                        onChange={(e) => setSubtitle(e.target.value)}
                                        placeholder="e.g. HYDERABAD CHAI COMPANY LAUNCH"
                                        className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-[#c4f82a] transition"
                                    />
                                </div>

                                <div className="space-y-1.5">
                                    <label className="text-xs font-medium text-[#e4e4e7]">Client Name</label>
                                    <input
                                        type="text"
                                        value={clientName}
                                        onChange={(e) => setClientName(e.target.value)}
                                        placeholder="e.g. Hyderabad Chai Company"
                                        className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-[#c4f82a] transition"
                                    />
                                </div>

                                <div className="space-y-1.5 sm:col-span-2">
                                    <label className="text-xs font-medium text-[#e4e4e7]">Main Hero Headline</label>
                                    <input
                                        type="text"
                                        value={headline}
                                        onChange={(e) => setHeadline(e.target.value)}
                                        placeholder="e.g. Elevating Brand Identity Through High-Impact Launch Campaign"
                                        className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-[#c4f82a] transition"
                                    />
                                </div>

                                <div className="space-y-1.5 sm:col-span-2">
                                    <label className="text-xs font-medium text-[#e4e4e7]">Top Intro Paragraphs</label>
                                    <textarea
                                        rows={3}
                                        value={topIntro}
                                        onChange={(e) => setTopIntro(e.target.value)}
                                        placeholder="We provided comprehensive event branding, digital marketing, and media coverage..."
                                        className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-[#c4f82a] transition"
                                    />
                                </div>

                                <div className="space-y-1.5 sm:col-span-2">
                                    <label className="text-xs font-medium text-[#e4e4e7]">About Section Title</label>
                                    <input
                                        type="text"
                                        value={aboutTitle}
                                        onChange={(e) => setAboutTitle(e.target.value)}
                                        placeholder="About the Project (or About the Launch)"
                                        className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-[#c4f82a] transition"
                                    />
                                </div>

                                <div className="space-y-1.5 sm:col-span-2">
                                    <label className="text-xs font-medium text-[#e4e4e7]">In-Depth Narrative &amp; Execution Details</label>
                                    <textarea
                                        rows={4}
                                        value={aboutText}
                                        onChange={(e) => setAboutText(e.target.value)}
                                        placeholder="Our goal was to create a dynamic visual identity... From designing collateral to capturing real-time updates..."
                                        className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-[#c4f82a] transition"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* -------------------------------------------------------------
                            SECTION 5: CHALLENGES & SOLUTIONS
                        -------------------------------------------------------------- */}
                        <div className="p-6 sm:p-8 rounded-2xl bg-[#121214] border border-white/10 space-y-5">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2 text-sm font-semibold text-white">
                                    <span className="w-6 h-6 rounded-full bg-[#c4f82a] text-black text-xs font-bold flex items-center justify-center">5</span>
                                    <h2>Key Challenges &amp; Solutions</h2>
                                </div>
                                <button
                                    type="button"
                                    onClick={addChallenge}
                                    className="inline-flex items-center gap-1.5 text-xs text-[#c4f82a] font-semibold hover:underline cursor-pointer"
                                >
                                    <FiPlus /> Add Item
                                </button>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="space-y-1.5">
                                    <label className="text-xs font-medium text-[#e4e4e7]">Challenges Eyebrow</label>
                                    <input
                                        type="text"
                                        value={challengesSubtitle}
                                        onChange={(e) => setChallengesSubtitle(e.target.value)}
                                        placeholder="Challenges (or Services)"
                                        className="w-full px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-white text-xs focus:outline-none focus:border-[#c4f82a]"
                                    />
                                </div>
                                <div className="space-y-1.5">
                                    <label className="text-xs font-medium text-[#e4e4e7]">Challenges Section Title</label>
                                    <input
                                        type="text"
                                        value={challengesTitle}
                                        onChange={(e) => setChallengesTitle(e.target.value)}
                                        placeholder="Capturing the Energy of Live Sports"
                                        className="w-full px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-white text-xs focus:outline-none focus:border-[#c4f82a]"
                                    />
                                </div>
                            </div>

                            <div className="space-y-1.5">
                                <label className="text-xs font-medium text-[#e4e4e7]">Challenges Summary</label>
                                <textarea
                                    rows={2}
                                    value={challengesDescription}
                                    onChange={(e) => setChallengesDescription(e.target.value)}
                                    placeholder="Brief overview of challenges faced and how the team addressed them..."
                                    className="w-full px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-white text-xs focus:outline-none focus:border-[#c4f82a]"
                                />
                            </div>

                            {/* Challenge Items */}
                            <div className="space-y-3 pt-2">
                                {challenges.map((c, index) => (
                                    <div key={index} className="p-4 rounded-xl bg-white/[0.02] border border-white/5 relative space-y-2">
                                        <div className="flex items-center justify-between gap-2">
                                            <span className="text-[11px] font-mono font-bold text-[#c4f82a]">
                                                #{String(index + 1).padStart(2, '0')}
                                            </span>
                                            <input
                                                type="text"
                                                value={c.title}
                                                onChange={(e) => updateChallenge(index, 'title', e.target.value)}
                                                placeholder={`Challenge Item #${index + 1} Title`}
                                                className="w-full px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-white text-xs focus:outline-none focus:border-[#c4f82a]"
                                            />
                                            {challenges.length > 1 && (
                                                <button
                                                    type="button"
                                                    onClick={() => removeChallenge(index)}
                                                    className="p-1.5 text-[#71717a] hover:text-red-400 transition cursor-pointer"
                                                >
                                                    <FiTrash2 className="text-sm" />
                                                </button>
                                            )}
                                        </div>
                                        <textarea
                                            rows={2}
                                            value={c.description}
                                            onChange={(e) => updateChallenge(index, 'description', e.target.value)}
                                            placeholder="Detail the problem solved or execution delivered..."
                                            className="w-full px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-white text-xs focus:outline-none focus:border-[#c4f82a]"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* -------------------------------------------------------------
                            SECTION 6: CLIENT TESTIMONIAL
                        -------------------------------------------------------------- */}
                        <div className="p-6 sm:p-8 rounded-2xl bg-[#121214] border border-white/10 space-y-5">
                            <div className="flex items-center gap-2 text-sm font-semibold text-white">
                                <span className="w-6 h-6 rounded-full bg-[#c4f82a] text-black text-xs font-bold flex items-center justify-center">6</span>
                                <h2>Client Testimonial (Optional)</h2>
                            </div>

                            <div className="space-y-4">
                                <div className="space-y-1.5">
                                    <label className="text-xs font-medium text-[#e4e4e7]">Client Quote</label>
                                    <textarea
                                        rows={2}
                                        value={testimonialQuote}
                                        onChange={(e) => setTestimonialQuote(e.target.value)}
                                        placeholder="The visual coverage and strategic execution delivered by the team was phenomenal..."
                                        className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-[#c4f82a] transition"
                                    />
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div className="space-y-1.5">
                                        <label className="text-xs font-medium text-[#e4e4e7]">Author Name</label>
                                        <input
                                            type="text"
                                            value={testimonialAuthor}
                                            onChange={(e) => setTestimonialAuthor(e.target.value)}
                                            placeholder="e.g. Sports Director / Brand Head"
                                            className="w-full px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-white text-xs focus:outline-none focus:border-[#c4f82a]"
                                        />
                                    </div>
                                    <div className="space-y-1.5">
                                        <label className="text-xs font-medium text-[#e4e4e7]">Organization / Position</label>
                                        <input
                                            type="text"
                                            value={testimonialPosition}
                                            onChange={(e) => setTestimonialPosition(e.target.value)}
                                            placeholder="e.g. Indus International School"
                                            className="w-full px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-white text-xs focus:outline-none focus:border-[#c4f82a]"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Submit Button */}
                        <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
                            <p className="text-xs text-[#71717a]">
                                {isEditMode
                                    ? "Saving will immediately overwrite existing details while keeping non-replaced media intact."
                                    : "Uploaded media and text are stored directly on your server and appear live immediately."}
                            </p>

                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full sm:w-auto px-9 py-3.5 rounded-xl bg-[#c4f82a] text-black font-semibold text-sm tracking-wide hover:bg-[#b0f516] disabled:opacity-50 transition-all duration-200 cursor-pointer shadow-[0_0_25px_-5px_rgba(196,248,42,0.4)] flex items-center justify-center gap-2"
                            >
                                {loading ? (
                                    <>
                                        <div className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
                                        <span>{isEditMode ? "Saving Updates..." : "Uploading & Publishing..."}</span>
                                    </>
                                ) : (
                                    <>
                                        <FiCheck className="text-base" />
                                        <span>{isEditMode ? "Save Changes to Live Project" : "Publish Full Case Study Now"}</span>
                                    </>
                                )}
                            </button>
                        </div>
                    </form>
                )}
            </div>
        </main>
    );
};

export default PostWork;
