'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function PhotoGallery() {
  const imageUrlArray = [
    { url: '/img/DSCF0187.jpg', aspectRatio: '3 / 2' },
    { url: '/img/DSCF0385.jpg', aspectRatio: '3 / 2' },
    { url: '/img/DSCF0431.jpg', aspectRatio: '3 / 2' },
    { url: '/img/DSCF0480.jpg', aspectRatio: '3 / 2' },
    { url: '/img/DSCF0560.jpg', aspectRatio: '3 / 2' },
    { url: '/img/DSCF0602.jpg', aspectRatio: '3 / 2' },
  ];

  return (
    <div className="flex justify-center items-center mt-24 p-12">
      <div className="grid grid-cols-2 grid-flow-row gap-1 md:grid-cols-3 xl:grid-cols-4">
        {imageUrlArray.map((image) => {
          return (
            <motion.div
              key={image.url}
              className={`p-2 aspect-square overflow-hidden`}
              whileHover={{
                scale: 1.5,
                aspectRatio: image.aspectRatio,
                width: 180 * parseInt(image.aspectRatio.split('/')[0]),
                height: 180 * parseInt(image.aspectRatio.split('/')[1]),
                transformOrigin: 'top left',
                transitionDuration: '200ms',
                zIndex: 10,
              }}
            >
              <motion.div
                className="w-full h-full rounded-lg overflow-hidden"
                layout="size"
              >
                <Image
                  alt="gallery"
                  className="block h-full w-full rounded-lg object-cover object-center"
                  width={1080}
                  height={1080}
                  src={image.url}
                />
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );

  // return (
  //   <div className="container mx-auto px-5 py-2 lg:px-32 lg:pt-24">
  //     <div className="-m-1 flex flex-wrap md:-m-2">
  //       <div className="flex w-1/2 flex-wrap">
  //         <div className="w-1/2 p-1 md:p-2">
  //           <Image
  //             alt="gallery"
  //             className="block h-full w-full rounded-lg object-cover object-center"
  //             width={480}
  //             height={480}
  //             src={imageUrlArray[0]}
  //           />
  //         </div>
  //         <div className="w-1/2 p-1 md:p-2">
  //           <Image
  //             alt="gallery"
  //             className="block h-full w-full rounded-lg object-cover object-center"
  //             height={480}
  //             width={480}
  //             src={imageUrlArray[1]}
  //           />
  //         </div>
  //         <div className="w-full p-1 md:p-2">
  //           <Image
  //             alt="gallery"
  //             className="block h-full w-full rounded-lg object-cover object-center"
  //             width={480}
  //             height={480}
  //             src={imageUrlArray[2]}
  //           />
  //         </div>
  //       </div>
  //       <div className="flex w-1/2 flex-wrap">
  //         <div className="w-full p-1 md:p-2">
  //           <Image
  //             alt="gallery"
  //             className="block h-full w-full rounded-lg object-cover object-center"
  //             height={480}
  //             width={480}
  //             src={imageUrlArray[3]}
  //           />
  //         </div>
  //         <div className="w-1/2 p-1 md:p-2">
  //           <Image
  //             alt="gallery"
  //             className="block h-full w-full rounded-lg object-cover object-center"
  //             width={480}
  //             height={480}
  //             src={imageUrlArray[4]}
  //           />
  //         </div>
  //         <div className="w-1/2 p-1 md:p-2">
  //           <Image
  //             alt="gallery"
  //             className="block h-full w-full rounded-lg object-cover object-center"
  //             height={480}
  //             width={480}
  //             src={imageUrlArray[5]}
  //           />
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // );
}
