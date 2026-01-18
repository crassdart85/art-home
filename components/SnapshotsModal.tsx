'use client';

import { useState, useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from './LanguageContext';

interface Snapshot {
    src: string;
    desc: {
        en: string;
        ar: string;
    };
}

// 35 images from the snapshots folder
const SNAPSHOTS: Snapshot[] = [
    { src: '/projects/snapshots/WhatsApp Image 2026-01-17 at 12.13.19 AM.jpeg', desc: { en: 'Modern Facade Detail', ar: 'تفاصيل الواجهة الحديثة' } },
    { src: '/projects/snapshots/WhatsApp Image 2026-01-17 at 12.13.20 AM (1).jpeg', desc: { en: 'Interior Finishing', ar: 'التشطيبات الداخلية' } },
    { src: '/projects/snapshots/WhatsApp Image 2026-01-17 at 12.13.20 AM.jpeg', desc: { en: 'Architectural Planning', ar: 'التخطيط المعماري' } },
    { src: '/projects/snapshots/WhatsApp Image 2026-01-17 at 12.13.21 AM (1).jpeg', desc: { en: 'Site Overview', ar: 'نظرة عامة على الموقع' } },
    { src: '/projects/snapshots/WhatsApp Image 2026-01-17 at 12.13.21 AM (2).jpeg', desc: { en: 'Luxury Materials', ar: 'مواد فاخرة' } },
    { src: '/projects/snapshots/WhatsApp Image 2026-01-17 at 12.13.21 AM (3).jpeg', desc: { en: 'Structural Elements', ar: 'العناصر الهيكلية' } },
    { src: '/projects/snapshots/WhatsApp Image 2026-01-17 at 12.13.21 AM.jpeg', desc: { en: 'Design Implementation', ar: 'تنفيذ التصميم' } },
    { src: '/projects/snapshots/WhatsApp Image 2026-01-17 at 12.13.22 AM (1).jpeg', desc: { en: 'Construction Progress', ar: 'تقدم البناء' } },
    { src: '/projects/snapshots/WhatsApp Image 2026-01-17 at 12.13.22 AM (2).jpeg', desc: { en: 'Landscape Integration', ar: 'تكامل المناظر الطبيعية' } },
    { src: '/projects/snapshots/WhatsApp Image 2026-01-17 at 12.13.22 AM (3).jpeg', desc: { en: 'Lighting Fixtures', ar: 'تركيبات الإضاءة' } },
    { src: '/projects/snapshots/WhatsApp Image 2026-01-17 at 12.13.22 AM.jpeg', desc: { en: 'Executive Office', ar: 'مكتب تنفيذي' } },
    { src: '/projects/snapshots/WhatsApp Image 2026-01-17 at 12.13.23 AM (1).jpeg', desc: { en: 'Meeting Hall', ar: 'قاعة اجتماعات' } },
    { src: '/projects/snapshots/WhatsApp Image 2026-01-17 at 12.13.23 AM (2).jpeg', desc: { en: 'Office Corridor', ar: 'ممر المكاتب' } },
    { src: '/projects/snapshots/WhatsApp Image 2026-01-17 at 12.13.23 AM (3).jpeg', desc: { en: 'Reception Area', ar: 'منطقة الاستقبال' } },
    { src: '/projects/snapshots/WhatsApp Image 2026-01-17 at 12.13.23 AM.jpeg', desc: { en: 'Glass Partitioning', ar: 'قواطع زجاجية' } },
    { src: '/projects/snapshots/WhatsApp Image 2026-01-17 at 12.13.24 AM (1).jpeg', desc: { en: 'Detailed Carpentry', ar: 'نجارة تفصيلية' } },
    { src: '/projects/snapshots/WhatsApp Image 2026-01-17 at 12.13.24 AM (2).jpeg', desc: { en: 'Ceiling Design', ar: 'تصميم السقف' } },
    { src: '/projects/snapshots/WhatsApp Image 2026-01-17 at 12.13.24 AM.jpeg', desc: { en: 'Marble Flooring', ar: 'أرضيات رخامية' } },
    { src: '/projects/snapshots/WhatsApp Image 2026-01-17 at 12.13.25 AM (1).jpeg', desc: { en: 'Site Inspection', ar: 'فحص الموقع' } },
    { src: '/projects/snapshots/WhatsApp Image 2026-01-17 at 12.13.25 AM (2).jpeg', desc: { en: 'Worker Safety', ar: 'سلامة العمال' } },
    { src: '/projects/snapshots/WhatsApp Image 2026-01-17 at 12.13.25 AM (3).jpeg', desc: { en: 'Project Milestone', ar: 'مرحلة اكمال المشروع' } },
    { src: '/projects/snapshots/WhatsApp Image 2026-01-17 at 12.13.25 AM.jpeg', desc: { en: 'Facade Cladding', ar: 'تكسية الواجهة' } },
    { src: '/projects/snapshots/WhatsApp Image 2026-01-17 at 12.13.26 AM (1).jpeg', desc: { en: 'Entryway Design', ar: 'تصميم المدخل' } },
    { src: '/projects/snapshots/WhatsApp Image 2026-01-17 at 12.13.26 AM (2).jpeg', desc: { en: 'Residential Unit', ar: 'وحدة سكنية' } },
    { src: '/projects/snapshots/WhatsApp Image 2026-01-17 at 12.13.26 AM (3).jpeg', desc: { en: 'Commercial Space', ar: 'مساحة تجارية' } },
    { src: '/projects/snapshots/WhatsApp Image 2026-01-17 at 12.13.26 AM.jpeg', desc: { en: 'Modern Aesthetics', ar: 'جماليات حديثة' } },
    { src: '/projects/snapshots/WhatsApp Image 2026-01-17 at 12.13.27 AM (1).jpeg', desc: { en: 'Space Planning', ar: 'تخطيط المساحة' } },
    { src: '/projects/snapshots/WhatsApp Image 2026-01-17 at 12.13.27 AM (2).jpeg', desc: { en: 'Window Detailing', ar: 'تفاصيل النوافذ' } },
    { src: '/projects/snapshots/WhatsApp Image 2026-01-17 at 12.13.27 AM (3).jpeg', desc: { en: 'Exterior View', ar: 'منظر خارجي' } },
    { src: '/projects/snapshots/WhatsApp Image 2026-01-17 at 12.13.27 AM.jpeg', desc: { en: 'Project Scale', ar: 'حجم المشروع' } },
    { src: '/projects/snapshots/WhatsApp Image 2026-01-17 at 12.13.28 AM (1).jpeg', desc: { en: 'Engineering Precision', ar: 'الدقة الهندسية' } },
    { src: '/projects/snapshots/WhatsApp Image 2026-01-17 at 12.13.28 AM (2).jpeg', desc: { en: 'Safety Standards', ar: 'معايير السلامة' } },
    { src: '/projects/snapshots/WhatsApp Image 2026-01-17 at 12.13.28 AM (3).jpeg', desc: { en: 'Quality Assurance', ar: 'ضمان الجودة' } },
    { src: '/projects/snapshots/WhatsApp Image 2026-01-17 at 12.13.28 AM.jpeg', desc: { en: 'Final Touches', ar: 'اللمسات الأخيرة' } },
    { src: '/projects/snapshots/WhatsApp Image 2026-01-17 at 12.13.29 AM.jpeg', desc: { en: 'Project Delivery', ar: 'تسليم المشروع' } },
];

interface SnapshotsModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function SnapshotsModal({ isOpen, onClose }: SnapshotsModalProps) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const { language } = useLanguage();

    // Reset index when modal opens
    useEffect(() => {
        if (isOpen) {
            setCurrentIndex(0);
            document.body.style.overflow = 'hidden'; // Lock scroll
        } else {
            document.body.style.overflow = 'unset'; // Unlock scroll
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    const nextSlide = useCallback((e?: React.MouseEvent) => {
        e?.stopPropagation();
        setCurrentIndex((prev) => (prev + 1) % SNAPSHOTS.length);
    }, []);

    const prevSlide = useCallback((e?: React.MouseEvent) => {
        e?.stopPropagation();
        setCurrentIndex((prev) => (prev - 1 + SNAPSHOTS.length) % SNAPSHOTS.length);
    }, []);

    // Keyboard navigation
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (!isOpen) return;
            if (e.key === 'Escape') onClose();
            if (e.key === 'ArrowRight') nextSlide();
            if (e.key === 'ArrowLeft') prevSlide();
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [isOpen, onClose, nextSlide, prevSlide]);

    if (!isOpen) return null;

    const currentImage = SNAPSHOTS[currentIndex];

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md transition-all duration-300"
            onClick={onClose}
        >
            <div
                className="relative w-full max-w-6xl h-[85vh] bg-neutral-900 rounded-sm overflow-hidden shadow-2xl flex flex-col"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Header */}
                <div className="absolute top-0 left-0 right-0 z-10 flex justify-between items-center p-4 bg-gradient-to-b from-black/60 to-transparent">
                    <div className="text-white/80 text-sm font-light tracking-wide">
                        {currentIndex + 1} / {SNAPSHOTS.length}
                    </div>
                    <button
                        onClick={onClose}
                        className="p-2 text-white/70 hover:text-white bg-black/20 hover:bg-black/40 rounded-full transition-colors"
                    >
                        <X size={24} />
                    </button>
                </div>

                {/* Main Image Container */}
                <div className="flex-1 relative flex items-center justify-center bg-black overflow-hidden group">
                    {/* Previous Button */}
                    <button
                        onClick={prevSlide}
                        className="absolute left-4 z-20 p-3 text-white/50 hover:text-white bg-black/10 hover:bg-black/50 rounded-full backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 duration-300"
                    >
                        <ChevronLeft size={32} />
                    </button>

                    {/* Image */}
                    <div className="relative w-full h-full flex items-center justify-center">
                        {/* We use standard img tag for simplicity and to ensure it fits contained */}
                        <img
                            src={currentImage.src}
                            alt={currentImage.desc[language as 'en' | 'ar']}
                            className="max-w-full max-h-full object-contain transition-opacity duration-300"
                        />
                    </div>

                    {/* Next Button */}
                    <button
                        onClick={nextSlide}
                        className="absolute right-4 z-20 p-3 text-white/50 hover:text-white bg-black/10 hover:bg-black/50 rounded-full backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0 duration-300"
                    >
                        <ChevronRight size={32} />
                    </button>

                    {/* Caption Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 via-black/50 to-transparent text-center">
                        <h3 className="text-xl md:text-2xl text-white font-light tracking-wide">
                            {currentImage.desc[language as 'en' | 'ar']}
                        </h3>
                    </div>
                </div>

                {/* Thumbnail Strip (Optional - keeping it clean for now, just indicators) */}
                <div className="h-1 bg-neutral-800 w-full relative">
                    <div
                        className="h-full bg-amber-500 transition-all duration-300 ease-out"
                        style={{ width: `${((currentIndex + 1) / SNAPSHOTS.length) * 100}%` }}
                    />
                </div>
            </div>
        </div>
    );
}
