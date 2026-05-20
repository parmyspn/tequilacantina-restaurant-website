import React from "react";

function AboutUs() {
  return (
    <div className="mt-10 border-t-2 font leading-6">
      <h1 className="text-2xl text-center mt-8 font-bold mb-2">
        {" "}
        Welcome to Tequila Cantina{" "}
      </h1>
      <div className="m-5">
        <p className="about-us-paragraph text-justify block leading-8 p-6">
          Located at 1933 Lonsdale Avenue in North Vancouver, Tequila Cantina
          offers plenty of convenient parking for our guests.<br></br>
          At Tequila Cantina, we provide an authentic Mexican dining experience
          with a diverse menu featuring traditional Mexican dishes that allow you
          to truly savor the flavors of Mexico.<br></br>
          We use only the finest and freshest ingredients, with recipes crafted
          to be both delicious and wholesome. We never use preservatives,
          artificial coloring, or additives in our cooking. Our house-made salsa
          and guacamole are prepared with all-natural ingredients to ensure a
          fresh and flavorful experience every time.<br></br>
          Don&#39;t miss Taco Tuesday, where you can enjoy special deals on our
          delicious tacos.<br></br>
          Tequila Cantina is open daily, making it easy to enjoy our vibrant
          atmosphere and authentic cuisine whenever you like. To make your
          experience even more special, we also feature live mariachi music on
          the first Friday of every month. Come experience the true taste of
          Mexico at Tequila Cantina where quality and tradition come together.
        </p>
      </div>
      <div className="flex text-center justify-center m-8 space-x-2">
        <a
          href="Menu"
          className="group rounded-lg border border-gray px-3 py-2 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-l font-semibold">Menu{""}</h2>
        </a>

        <a
          href="https://www.clover.com/online-ordering/tequila-cantina-north-vancouver"
          className="group rounded-lg border border-gray px-3 py-2 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-l font-semibold">Order </h2>
        </a>
        <a
          href="https://maps.app.goo.gl/bGA38C9cyksXz6u7A"
          className="group rounded-lg border border-gray px-3 py-2 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-l font-semibold">Map{""}</h2>
        </a>

        <a
          href="https://www.instagram.com/tequilacantinalonsdale"
          className="group rounded-lg border border-gray px-3 py-2 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-l font-semibold">Instagram</h2>
        </a>
        <a
          href="tel:+12365512243"
          className="group rounded-lg border border-gray px-3 py-2 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-l font-semibold">Call{""}</h2>
        </a>
      </div>
      <div className="border-t-2 mb-5"></div>
      <figure className="gallery grid md:grid-cols-3 sm:grid-cols-2">
        <figure className="p-4">
          <img
            src={"/image1.png"}
            alt="mexican restaurant"
            className="desktop-image"
          />
        </figure>
        <figure className="p-4">
          <img
            src={"/image2.png"}
            alt="mexican restaurant"
            className="desktop-image"
          />
        </figure>
        <figure className="p-4">
          <img
            src={"/image3.png"}
            alt="mexican restaurant"
            className="desktop-image"
          />
        </figure>
        <figure className="p-4">
          <img
            src={"/image4.png"}
            alt="mexican restaurant"
            className="desktop-image"
          />
        </figure>
        <figure className="p-4">
          <img
            src={"/image5.png"}
            alt="mexican restaurant"
            className="desktop-image"
          />
        </figure>
        <figure className="p-4">
          <img
            src={"/image6.png"}
            alt="mexican restaurant"
            className="desktop-image"
          />
        </figure>
      </figure>
    </div>
  );
}

export default AboutUs;
