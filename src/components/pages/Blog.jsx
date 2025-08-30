import React from "react";
import blog from "../../assets/blog.png";
const Blog = () => {
  return (
    <div>
      <div className="container">
        <div className="text-center flex-col justify-center mb-25">
          <h2 className=" text-center text-[48px] w-[830px] flex justify-self-center font-semibold ">
            A UX Case Study on Creating a Studious Environment for Students
          </h2>
          <p className="mb-10 mt-5">
            Andrew Jonson Posted on 27th January 2021
          </p>
          <img src={blog} alt="" />
          <p className="w-[700px] flex justify-self-center mt-15 ">
            Apparently we had reached a great height in the atmosphere, for the
            sky was a dead black, and the stars had ceased to twinkle. By the
            same illusion which lifts the horizon of the sea to the level of the
            spectator on a hillside.
          </p>
          <a className="text-blue-700" href="#">
            Read more
          </a>
        </div>
      </div>
    </div>
  );
};

export default Blog;
