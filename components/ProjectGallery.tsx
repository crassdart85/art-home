'use client';

import { useState, useEffect } from 'react';
import { MapPin, ArrowUpRight, Download } from 'lucide-react';
import { useLanguage } from './LanguageContext';
import SnapshotsModal from './SnapshotsModal';
import projectsData from '@/data/projects.json';


export default function ProjectGallery() {
  const { language } = useLanguage();

  // Define content for both languages
  const content = {
    en: {
      sub: "Selected Works",
      title: "Featured Projects",
      btn: "View More Projects",
      filters: ['All', 'Hospitality', 'Residential', 'Education', 'Commercial']
    },
    ar: {
      sub: "أعمال مختارة",
      title: "مشاريع مميزة",
      btn: "عرض مشاريع اخرى",
      filters: ['الكل', 'ضيافة', 'سكنية', 'تعليمية', 'تجارية']
    }
  };

  const t = content[language];
  const [activeFilter, setActiveFilter] = useState(t.filters[0]);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);

  // Sync active filter when language changes to avoid mismatch
  useEffect(() => {
    const currentIndex = content[language === 'en' ? 'ar' : 'en'].filters.indexOf(activeFilter);
    if (currentIndex !== -1) {
      setActiveFilter(t.filters[currentIndex]);
    } else {
      setActiveFilter(t.filters[0]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [language]);

  const projects = projectsData.projects;
  const portfolio = projectsData.portfolio;

  return (
    <section id="projects" className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">

        {/* Header & Filter */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-xl">
            <h3 className="text-amber-600 font-bold tracking-widest uppercase mb-2">
              {t.sub}
            </h3>
            <h2 className="text-4xl font-bold text-slate-900">
              {t.title}
            </h2>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-2">
            {t.filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 text-sm font-medium rounded-full transition-all ${activeFilter === filter
                  ? 'bg-slate-900 text-white'
                  : 'bg-white text-slate-500 hover:bg-slate-200'
                  }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            // Get current language strings
            const pTitle = project.title[language as 'en' | 'ar'];
            const pCat = project.category[language as 'en' | 'ar'];
            const pLoc = project.location[language as 'en' | 'ar'];
            const pDesc = project.description[language as 'en' | 'ar'];

            // Simple filter logic: Check if "All" is selected OR if the category matches the filter
            // We compare English indices to ensure logic works regardless of language display
            const filterIndex = t.filters.indexOf(activeFilter);
            const categoryMatches = filterIndex === 0 ||
              (filterIndex === 1 && project.category.en === 'Hospitality') ||
              (filterIndex === 2 && project.category.en === 'Residential') ||
              (filterIndex === 3 && project.category.en === 'Education') ||
              (filterIndex === 4 && project.category.en === 'Commercial');

            return categoryMatches && (
              <div
                key={index}
                className="group relative h-[400px] overflow-hidden rounded-sm cursor-pointer bg-slate-200"
              >
                {/* Image */}
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url(${project.image})` }}
                />

                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />

                {/* Content */}
                <div className="absolute bottom-0 left-0 w-full p-8 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <div className="flex justify-between items-start">
                    <div>
                      <span className="text-amber-400 text-sm font-bold uppercase tracking-wider mb-2 block">
                        {pCat}
                      </span>
                      <h3 className="text-2xl font-bold mb-2">{pTitle}</h3>
                      <div className="flex items-center text-slate-300 text-sm mb-4">
                        <MapPin size={16} className="mr-1" />
                        {pLoc}
                      </div>
                      <p className="text-slate-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 max-w-md">
                        {pDesc}
                      </p>
                    </div>
                    <div className="bg-white/20 p-3 rounded-full backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity delay-100">
                      <ArrowUpRight size={24} />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center flex flex-col sm:flex-row justify-center items-center gap-4">
          <button
            onClick={() => setIsGalleryOpen(true)}
            className="px-8 py-3 border border-slate-300 text-slate-600 hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-all font-medium rounded-sm uppercase tracking-wide text-sm"
          >
            {t.btn}
          </button>
          <a
            href={portfolio.file}
            download="Art_Home_Portfolio.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 bg-amber-600 text-white hover:bg-amber-700 transition-all font-medium rounded-sm uppercase tracking-wide text-sm inline-flex items-center gap-2"
          >
            <Download size={18} />
            {portfolio.label[language]}
          </a>
        </div>
      </div>
      <SnapshotsModal isOpen={isGalleryOpen} onClose={() => setIsGalleryOpen(false)} />
    </section>
  );
}