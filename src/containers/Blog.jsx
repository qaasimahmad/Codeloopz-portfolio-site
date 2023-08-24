import React from "react";
import { GoArrowUpRight } from "react-icons/go";

const Blog = () => {
  const blogs = [
    {
      what: "About ilustration of the year",
      link: "",
      img: "https://lyndon.qodeinteractive.com/wp-content/uploads/2021/11/Main-Home-blog-img-01.jpg",
    },
    {
      what: "The best design artists 2021",
      link: "",
      img: "https://lyndon.qodeinteractive.com/wp-content/uploads/2021/11/Blog-list-main-home-image-02.jpg",
    },
    {
      what: "The Achilles heel of an artist lies in the hope that his art is only good.",
      link: "",
    },
    {
      what: "Two key steps in logo design",
      link: "",
      img: "https://lyndon.qodeinteractive.com/wp-content/uploads/2021/11/Main-Home-blog-img-01.jpg",
    },
  ];
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-y-[.9px] border-black">
      {blogs.map((w, i) => (
        <BlogCard key={i} what={w.what} img={w.img} />
      ))}
    </div>
  );
};

const BlogCard = ({ what, link, img }) => {
  return (
    <div className="what_we_do border-x-[0.9px] border-b-[.9px] border-black relative flex flex-col">
      <div className="group relative">
        <span className="w-full h-full absolute top-0 left-0 transition-all duration-500 group-hover:bg-black group-hover:bg-opacity-30 ease-linear"></span>
        <img src={img} alt="" />
      </div>
      <div className="relative z-10 p-10">
        {!img && (
          <svg
            className="w-10 mb-5"
            clip-rule="evenodd"
            fill-rule="evenodd"
            stroke-linejoin="round"
            stroke-miterlimit="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="m2.699 20c-.411 0-.699-.312-.699-.662 0-.249.145-.516.497-.703 1.788-.947 3.858-4.226 3.858-6.248-3.016.092-4.326-2.582-4.326-4.258 0-2.006 1.738-4.129 4.308-4.129 3.241 0 4.83 2.547 4.83 5.307 0 5.981-6.834 10.693-8.468 10.693zm10.833 0c-.41 0-.699-.312-.699-.662 0-.249.145-.516.497-.703 1.788-.947 3.858-4.226 3.858-6.248-3.015.092-4.326-2.582-4.326-4.258 0-2.006 1.739-4.129 4.308-4.129 3.241 0 4.83 2.547 4.83 5.307 0 5.981-6.833 10.693-8.468 10.693z"
              fill-rule="nonzero"
            />
          </svg>
        )}
        <small className="text-sm md:text-base">Aug. 22, 2021</small>
        <h3 className="text-xl md:text-2xl font-grotesk font-[500] mb-4 mt-2 capitalize cursor-pointer">
          {what}
        </h3>
        <GoArrowUpRight fontWeight={10} className="text-5xl" />
      </div>
    </div>
  );
};

export default Blog;
