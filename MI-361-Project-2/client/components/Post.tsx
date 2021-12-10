import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import NextLink from "next/link";
import _ from "lodash";
import { AiFillHeart } from "react-icons/ai";

export const Post = ({ _id, author, title, likes, imageURL }) => {
  const [wasVisible, setWasVisible] = useState(false);

  const { ref, inView } = useInView({
    threshold: 0,
  });

  useEffect(() => {
    if (inView) {
      setTimeout(() => {
        setWasVisible(true);
      }, 350);
    }
  }, [inView]);

  // format title
  title =
    title
      .substr(0, 15)
      .split(" ")
      .map((word) => _.capitalize(word))
      .join(" ") + (title.length > 15 ? "..." : "");

  return (
    <NextLink href={`/view/${_id}`}>
      <figure
        className={`${
          inView && !wasVisible ? "page-fade" : wasVisible ? null : "opacity-0"
        } shadow-lg rounded-xl bg-white hover:bg-strawberry-500 overflow-hidden h-80 cursor-pointer relative transform transition-all duration-300 hover:scale-105`}
        ref={ref}
      >
        <div className="h-5/6 relative">
          <div className="text-2xl z-20 absolute pl-4 text-white cardImage h-full w-full">
            <h3 className="bottom-2 absolute">{title}</h3>
          </div>
          <img className="object-cover h-full w-full" src={imageURL || "/business.jpeg"} />
        </div>
        <figcaption className="h-1/6 flex flex-row justify-around mx-auto items-center w-full">
          <h4 className="text-lg">{_.capitalize(author)}</h4>
          <i>
            <AiFillHeart color="red" className="float-left pr-1" size="1.5em" />{" "}
            <span className="inline-block float-right">{likes}</span>
          </i>
        </figcaption>
      </figure>
    </NextLink>
  );
};
