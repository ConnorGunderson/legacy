import _ from "lodash";
import { AiFillHeart } from "react-icons/ai";
import { MdFullscreenExit } from "react-icons/md";
import faker from "faker";
import axios from "axios";
import { useAuth } from "utils/auth";
import config from "../client.config";
import {useState} from 'react'

const { HOST } = config;

export const PostModal = ({
  title,
  _id,
  author,
  content,
  likes,
  imageURL,
  setShowModal,
}) => {
  const [currentLikes, setCurrentLikes] = useState(0)
  const { user, setError } = useAuth();
  const handleLike = async () => {
    try {
      console.log('hey')
      if (user) {
        const { data } = await axios.post(`${HOST}/api/posts/like`, {id: _id});
        console.log(data)
        if (data) {
          setCurrentLikes(currentLikes + 1)
          return setError(false);
        } else {
          setError("auth/no-user");
        }
      } else {
        setError("auth/no-user");
      }
    } catch (e) {
      console.log(e);
      setError("auth/no-user");
    }
  };
  return (
    <div
      className="relative shadow-md overflow-hidden rounded-xl mx-auto bg-white opacity-80 w-full md:w-3/4"
      style={{ minHeight: "800px" }}
    >
      <div className="relative h-1/2">
        <img
          src={imageURL || faker.image.image()}
          className="w-full  absolute h-full object-cover"
        />
        <div className="flex flex-col justify-end pb-2 text-2xl z-20 absolute pl-4 text-white cardImage h-full w-full">
          <h2 className="page-fade text-4xl font-bold ">
            {title
              .split(" ")
              .map((t) => _.capitalize(t))
              .join(" ")}
          </h2>
          <p className="page-fade italic text-2xl">
            By:{" "}
            {author
              .split(" ")
              .map((t) => _.capitalize(t))
              .join(" ")}
          </p>
        </div>
      </div>
      <div className="page-fade p-4 flex flex-col h-1/2 w-full justify-center items-center">
        <p className="text-xl">{content}</p>
        <button className="active:scale-105 text-red-500 hover:text-red-500 transition-colors py-1 px-4 absolute bottom-2 right-2">
          <AiFillHeart onClick={() => handleLike()} className="inline-block" size="2em" /> {likes + currentLikes}
        </button>
        <button className="absolute bottom-2 left-2">
          <MdFullscreenExit  size="2em" onClick={() => setShowModal()} />
        </button>
      </div>
    </div>
  );
};
