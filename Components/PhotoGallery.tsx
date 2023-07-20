import Image from 'next/image';

export default function PhotoGallery() {
  const imageUrlArray = [
    '/img/DSCF0187.jpg',
    '/img/DSCF0385.jpg',
    '/img/DSCF0431.jpg',
    '/img/DSCF0480.jpg',
    '/img/DSCF0560.jpg',
    '/img/DSCF0602.jpg',
  ];
  return (
    <div className="container mx-auto px-5 py-2 lg:px-32 lg:pt-24">
      <div className="-m-1 flex flex-wrap md:-m-2">
        <div className="flex w-1/2 flex-wrap">
          <div className="w-1/2 p-1 md:p-2">
            <Image
              alt="gallery"
              className="block h-full w-full rounded-lg object-cover object-center"
              width={480}
              height={480}
              src={imageUrlArray[0]}
            />
          </div>
          <div className="w-1/2 p-1 md:p-2">
            <Image
              alt="gallery"
              className="block h-full w-full rounded-lg object-cover object-center"
              height={480}
              width={480}
              src={imageUrlArray[1]}
            />
          </div>
          <div className="w-full p-1 md:p-2">
            <Image
              alt="gallery"
              className="block h-full w-full rounded-lg object-cover object-center"
              width={480}
              height={480}
              src={imageUrlArray[2]}
            />
          </div>
        </div>
        <div className="flex w-1/2 flex-wrap">
          <div className="w-full p-1 md:p-2">
            <Image
              alt="gallery"
              className="block h-full w-full rounded-lg object-cover object-center"
              height={480}
              width={480}
              src={imageUrlArray[3]}
            />
          </div>
          <div className="w-1/2 p-1 md:p-2">
            <Image
              alt="gallery"
              className="block h-full w-full rounded-lg object-cover object-center"
              width={480}
              height={480}
              src={imageUrlArray[4]}
            />
          </div>
          <div className="w-1/2 p-1 md:p-2">
            <Image
              alt="gallery"
              className="block h-full w-full rounded-lg object-cover object-center"
              height={480}
              width={480}
              src={imageUrlArray[5]}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
