'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Dispatch, SetStateAction, useState } from 'react';

export interface Photo {
  url: string;
  info?: {
    aperture: string;
    shutterSpeed: string;
    focalLength: string;
  };
}

export default function PhotoGallery() {
  const [selectedImage, setSelectedImage] = useState<Photo | undefined>();
  const [isOpen, setIsOpen] = useState(false);
  const imageUrlArray: Photo[] = [
    { url: '/img/DSCF0187.jpg' },
    { url: '/img/DSCF0385.jpg' },
    { url: '/img/DSCF0431.jpg' },
    { url: '/img/DSCF0480.jpg' },
    { url: '/img/DSCF0560.jpg' },
    { url: '/img/DSCF0602.jpg' },
  ];

  return (
    <div className="flex justify-center items-center mt-12 py-24 px-12">
      <div className="grid grid-cols-2 grid-flow-row gap-x-5 gap-y-4 md:grid-cols-3 lg:grid-cols-4">
        {imageUrlArray.map((image) => {
          return (
            <>
              <motion.div
                key={image.url}
                className="aspect-square overflow-hidden w-[320px] h-[320px] hover:backdrop-brightness-75 hover:p-2 hover:max-h-[580px]"
                whileHover={{
                  scale: 2,
                  transitionDuration: '100ms',
                }}
              >
                <div className="w-full h-full rounded-lg overflow-hidden">
                  <Image
                    alt="gallery"
                    className="block h-full w-full rounded-lg object-cover object-center hover:object-contain"
                    onClick={() => {
                      setSelectedImage(image);
                      setIsOpen(true);
                    }}
                    width={1080}
                    height={1080}
                    src={image.url}
                  />
                </div>
              </motion.div>
              <PhotoModal
                image={selectedImage!}
                isOpen={isOpen}
                setIsOpen={setIsOpen}
              />
            </>
          );
        })}
      </div>
    </div>
  );
}

interface PhotoModalProps {
  image: Photo;
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}
function PhotoModal({ isOpen, setIsOpen, image }: PhotoModalProps) {
  return (
    <dialog open={isOpen} className="modal">
      <form method="dialog" className="modal-box">
        <Image
          src={image.url}
          alt=""
          width={1080}
          height={1080}
          className="object-contain"
        />
        <p className="py-4">Click the button below to close</p>
        <div className="modal-action">
          {/* if there is a button in form, it will close the modal */}
          <button className="btn" onClick={() => setIsOpen(false)}>
            Close
          </button>
        </div>
      </form>
    </dialog>
  );
}
