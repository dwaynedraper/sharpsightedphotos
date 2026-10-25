'use client';

import { useState } from 'react';
import { galleryFolders, GalleryFolder } from '@/content/gallery';
import GalleryModal from './GalleryModal';
import { getGalleryImages, CloudinaryImage } from '@/app/actions/gallery';

export default function GalleryGrid() {
  const [selectedFolder, setSelectedFolder] = useState<GalleryFolder | null>(null);
  const [images, setImages] = useState<CloudinaryImage[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleFolderClick = async (folder: GalleryFolder) => {
    setIsLoading(true);
    setSelectedFolder(folder);
    try {
      setImages(await getGalleryImages(folder.cloudinaryFolder));
    } catch (error) {
      console.error('Failed to load images', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <ul className="collections">
        {galleryFolders.map((folder) => (
          <li key={folder.id}>
            <button type="button" className="collection" onClick={() => handleFolderClick(folder)} disabled={isLoading}>
              <figure className="frame" style={{ margin: 0 }}>
                <span className="mat">
                  <span className="bevel">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={folder.coverImage} alt={`Story portrait collection, ${folder.title}`} loading="lazy" decoding="async" />
                  </span>
                </span>
              </figure>
              <span className="plaque">
                <b>{folder.title}</b>
                <span>{isLoading && selectedFolder?.id === folder.id ? 'Opening the collection…' : 'Open the collection'}</span>
              </span>
            </button>
          </li>
        ))}
      </ul>
      {selectedFolder && (
        <GalleryModal folder={selectedFolder} images={images} loading={isLoading} onClose={() => { setSelectedFolder(null); setImages([]); }} />
      )}
    </>
  );
}
