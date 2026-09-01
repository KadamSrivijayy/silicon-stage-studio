import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";

interface ScreenshotGalleryProps {
  images: string[];
  projectName: string;
}

export function ScreenshotGallery({ images, projectName }: ScreenshotGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const isLightboxOpen = lightboxIndex !== null;

  if (!images || images.length === 0) {
    return null;
  }

  const goToPrevious = () => {
    setCurrentIndex((i) => (i > 0 ? i - 1 : images.length - 1));
  };

  const goToNext = () => {
    setCurrentIndex((i) => (i < images.length - 1 ? i + 1 : 0));
  };

  const goToLightboxPrevious = () => {
    setLightboxIndex((i) => (i !== null && i > 0 ? i - 1 : images.length - 1));
  };

  const goToLightboxNext = () => {
    setLightboxIndex((i) => (i !== null && i < images.length - 1 ? i + 1 : 0));
  };

  return (
    <>
      {/* Main Screenshot Carousel */}
      <Reveal delay={100} className="mt-10">
        <div>
          <p className="font-mono text-xs tracking-widest text-primary uppercase mb-4">
            Screenshots
          </p>

          {/* Main Image Container */}
          <button
            onClick={() => setLightboxIndex(currentIndex)}
            className="group relative w-full overflow-hidden rounded-2xl border border-border/70 bg-secondary/40 transition-all duration-300 hover:border-primary/40"
            aria-label={`View ${projectName} screenshot ${currentIndex + 1} in fullscreen`}
          >
            <div className="relative aspect-16/9 w-full overflow-hidden">
              <img
                src={images[currentIndex]}
                alt={`${projectName} screenshot ${currentIndex + 1}`}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-all duration-300 group-hover:bg-black/10">
                <span className="rounded-full bg-black/60 px-3 py-1.5 text-xs font-medium text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  Click to expand
                </span>
              </div>
            </div>
          </button>

          {/* Controls */}
          <div className="mt-4 flex items-center justify-between gap-3">
            {/* Previous Button */}
            <button
              onClick={goToPrevious}
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-border/70 transition-all duration-200 hover:border-primary/60 hover:bg-primary/10"
              aria-label="Previous screenshot"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            {/* Dot Indicators */}
            <div className="flex items-center gap-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "w-6 bg-primary"
                      : "w-2 bg-border/70 hover:bg-border"
                  }`}
                  aria-label={`Go to screenshot ${index + 1}`}
                  title={`Screenshot ${index + 1} of ${images.length}`}
                />
              ))}
            </div>

            {/* Next Button */}
            <button
              onClick={goToNext}
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-border/70 transition-all duration-200 hover:border-primary/60 hover:bg-primary/10"
              aria-label="Next screenshot"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>

          {/* Screenshot Counter */}
          <div className="mt-3 text-center text-sm text-muted-foreground">
            {currentIndex + 1} / {images.length}
          </div>
        </div>
      </Reveal>

      {/* Lightbox Modal */}
      {isLightboxOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
          onClick={() => setLightboxIndex(null)}
        >
          <div className="relative flex h-full w-full items-center justify-center p-4 sm:p-8">
            {/* Close Button */}
            <button
              onClick={() => setLightboxIndex(null)}
              className="absolute right-4 top-4 z-10 rounded-full bg-black/40 p-2 text-white transition-all duration-200 hover:bg-black/60 sm:right-8 sm:top-8"
              aria-label="Close lightbox"
            >
              <X className="h-6 w-6" />
            </button>

            {/* Image Container */}
            <div className="relative max-h-[80vh] w-full max-w-4xl overflow-hidden rounded-lg">
              <img
                src={images[lightboxIndex]}
                alt={`${projectName} screenshot ${lightboxIndex + 1}`}
                className="h-full w-full object-contain"
              />
            </div>

            {/* Image Counter */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-black/60 px-4 py-2 text-sm text-white sm:bottom-8">
              {lightboxIndex + 1} / {images.length}
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                goToLightboxPrevious();
              }}
              className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-black/40 p-2 text-white transition-all duration-200 hover:bg-black/60"
              aria-label="Previous image in lightbox"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                goToLightboxNext();
              }}
              className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-black/40 p-2 text-white transition-all duration-200 hover:bg-black/60"
              aria-label="Next image in lightbox"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
