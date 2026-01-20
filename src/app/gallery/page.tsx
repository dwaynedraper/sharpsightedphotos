import GalleryGrid from '@/components/GalleryGrid';

export default function GalleryPage() {
    return (
        <main className="bg-white dark:bg-navy-900 text-navy-900 dark:text-navy-50 transition-colors duration-300 min-h-screen pt-24 pb-12 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="mb-12 text-center">
                    <h1 className="text-4xl md:text-5xl font-serif text-navy-900 dark:text-white mb-4">Gallery</h1>
                    <p className="text-lg text-navy-600 dark:text-navy-200 font-light max-w-2xl mx-auto">
                        Explore a collection of portraits captured where the story actually happens.
                    </p>
                </div>
                <GalleryGrid />
            </div>
        </main>
    );
}
