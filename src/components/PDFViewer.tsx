import { Download, FileText, ExternalLink } from "lucide-react";
import { Reveal } from "@/components/Reveal";

interface PDFViewerProps {
  pdfUrl: string;
  title?: string;
}

export function PDFViewer({ pdfUrl, title = "CV" }: PDFViewerProps) {
  const isPdfAvailable = pdfUrl && !pdfUrl.includes("undefined");

  return (
    <Reveal className="mt-10">
      <div className="space-y-6">
        {/* Action Buttons */}
        <div className="flex flex-wrap gap-3">
          <a
            href={isPdfAvailable ? pdfUrl : undefined}
            download
            aria-disabled={!isPdfAvailable}
            title={!isPdfAvailable ? "PDF not yet added" : "Download CV"}
            className="inline-flex items-center gap-2 rounded-full accent-gradient px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform duration-300 hover:-translate-y-0.5 aria-disabled:pointer-events-none aria-disabled:opacity-50"
          >
            <Download className="h-4 w-4" /> Download CV
          </a>
          <a
            href={isPdfAvailable ? pdfUrl : undefined}
            target="_blank"
            rel="noopener noreferrer"
            aria-disabled={!isPdfAvailable}
            title={!isPdfAvailable ? "PDF not yet added" : "Open CV in new tab"}
            className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/60 hover:text-primary aria-disabled:pointer-events-none aria-disabled:opacity-50"
          >
            <ExternalLink className="h-4 w-4" /> Open CV
          </a>
        </div>

        {/* PDF Viewer Container */}
        <div className="glass rounded-3xl p-7 sm:p-10">
          {isPdfAvailable ? (
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-border/70 pb-4">
                <div className="flex items-center gap-3">
                  <div className="rounded-lg bg-primary/10 p-2">
                    <FileText className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">CV Document</h3>
                    <p className="text-xs text-muted-foreground">srivijay-kadam-cv.pdf</p>
                  </div>
                </div>
              </div>

              {/* PDF Embed - Responsive Container */}
              <div className="relative w-full bg-secondary/40 rounded-xl overflow-hidden border border-border/70">
                {/* Mobile-optimized PDF viewer */}
                <div className="aspect-[8.5/11] w-full overflow-hidden">
                  <iframe
                    src={`${pdfUrl}#toolbar=1&navpanes=0&scrollbar=1`}
                    title={`${title} PDF Viewer`}
                    className="h-full w-full border-0"
                    allowFullScreen
                    loading="lazy"
                  />
                </div>

                {/* Mobile fallback info */}
                <div className="hidden sm:hidden absolute inset-0 flex flex-col items-center justify-center bg-black/50 p-4">
                  <FileText className="mb-2 h-8 w-8 text-white" />
                  <p className="text-center text-sm text-white">
                    PDF viewer optimized for desktop. Tap "Open CV" to view in full screen.
                  </p>
                </div>
              </div>

              <p className="text-center text-xs text-muted-foreground">
                Use the toolbar to navigate pages, search, and download the PDF
              </p>
            </div>
          ) : (
            /* Placeholder when PDF is not available */
            <div className="space-y-6 py-12 text-center">
              <div className="inline-flex items-center justify-center rounded-full bg-primary/10 p-4">
                <FileText className="h-8 w-8 text-primary" />
              </div>

              <div className="space-y-2">
                <h3 className="font-semibold text-lg">CV Coming Soon</h3>
                <p className="text-sm text-muted-foreground">
                  I'll be adding my latest CV here shortly.
                </p>
              </div>

              <div className="rounded-lg border border-dashed border-border bg-secondary/40 p-4">
                <p className="font-mono text-xs text-muted-foreground">
                  Add your PDF to: <span className="text-primary">/public/srivijay-kadam-cv.pdf</span>
                </p>
              </div>

              <p className="text-xs text-muted-foreground">
                In the meantime, you can explore my projects and skills to learn more about my work.
              </p>
            </div>
          )}
        </div>
      </div>
    </Reveal>
  );
}
