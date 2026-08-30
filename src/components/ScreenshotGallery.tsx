import { useState } from "react";
import { X } from "lucide-react";
import { Reveal } from "@/components/Reveal";

interface ScreenshotGalleryProps {
  images: string[];
  projectName: string;
}

export function ScreenshotGallery({ images, projectName }: ScreenshotGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const isOpen = selectedIndex !== null;

  return (
    <>
      {/* Gallery Grid */}
      <div className="mt-8">
        <p className="font-mono text-xs tracking-widest text-primary uppercase mb-4">
          Screenshots
        </p>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {images.map((image, index) => (
            <Reveal key={image} delay={index * 30}>
              <button
                onClick={() => setSelectedIndex(index)}
                className="group relative aspect-square overflow-hidden rounded-lg border border-border/70 bg-secondary/40 transition-all duration-300 hover:border-primary/40"
                aria-label={`View ${projectName} screenshot ${index + 1}`}
              >
                <img
                  src={image}
                  alt={`${projectName} screenshot ${index + 1}`}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-all duration-300 group-hover:bg-black/20">
                  <span className="rounded-full bg-black/60 px-3 py-1.5 text-xs font-medium text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    View
                  </span>
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
          onClick={() => setSelectedIndex(null)}
        >
          <div className="relative flex h-full w-full items-center justify-center p-4 sm:p-8">
            {/* Close Button */}
            <button
              onClick={() => setSelectedIndex(null)}
              className="absolute right-4 top-4 z-10 rounded-full bg-black/40 p-2 text-white transition-all duration-200 hover:bg-black/60 sm:right-8 sm:top-8"
              aria-label="Close lightbox"
            >
              <X className="h-6 w-6" />
            </button>

            {/* Image Container */}
            <div className="relative max-h-[80vh] w-full max-w-4xl overflow-hidden rounded-lg">
              <img
                src={images[selectedIndex]}
                alt={`${projectName} screenshot ${selectedIndex + 1}`}
                className="h-full w-full object-contain"
              />
            </div>

            {/* Image Counter */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-black/60 px-4 py-2 text-sm text-white sm:bottom-8">
              {selectedIndex + 1} / {images.length}
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setSelectedIndex((i) => (i !== null && i > 0 ? i - 1 : images.length - 1));
              }}
              className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-black/40 p-2 text-white transition-all duration-200 hover:bg-black/60"
              aria-label="Previous image"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                setSelectedIndex((i) => (i !== null && i < images.length - 1 ? i + 1 : 0));
              }}
              className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-black/40 p-2 text-white transition-all duration-200 hover:bg-black/60"
              aria-label="Next image"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  );
}
