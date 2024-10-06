import React from "react";

const Home = () => {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 mt-12 md:mt-24 space-y-2">
            <span className="text-xl">Welcome In My Feed</span>
            <div className="flex space-x-l text-2xl md:text-4xl">
                <h1>Hello, I'm </h1>
                <span className="text-red-600 font-bold">Developer</span>
            </div>
            <br/>
            <p className="text-sm md:text-md text-justify">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Exercitationem omnis reiciendis voluptate reprehenderit, similique
              labore quo suscipit quisquam sequi sint tempora enim eligendi,
              eveniet qasi tenetur totam! Pariatur, impedit voluptates?
            </p>
            <br/>
            {/*Social Media icon */}
          </div>
          <div className="md:w-1/2">Right</div>
        </div>
      </div>
    </>
  );
};

export default Home;
