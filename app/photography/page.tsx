export default function Photography() {
  const imageUrlArray = [
    '/img/DSCF0187.jpg',
    '/img/DSCF0385.jpg',
    '/img/DSCF0431.jpg',
    '/img/DSCF0480.jpg',
    '/img/DSCF0560.jpg',
  ];

  return (
    <div
      className="hero min-h-screen bg-base-200"
      style={{
        backgroundImage: `url(${
          imageUrlArray[Math.floor(Math.random() * imageUrlArray.length)]
        })`,
      }}
    >
      <div className="hero-content text-center">
        <div className="max-w-md backdrop-blur bg-white/25 rounded py-10 px-16">
          <h1 className="text-5xl font-bold">Hello there</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
}
