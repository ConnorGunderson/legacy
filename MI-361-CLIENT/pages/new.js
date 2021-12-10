import _ from "lodash";
import { Layout } from "@/components/index";
import { useRouter } from "next/router";
import { useAuth } from "@/utils/auth";
import { useEffect, useState } from "react";
import axios from "axios";

const NewPostPage = () => {
  const { user, setError, error } = useAuth();
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [imageURL, setImageURL] = useState("");
  const [content, setContent] = useState("");
  const [success, setSuccess] = useState(false)
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const {status} = await axios.get(imageURL)

      if (status === 200 && user && e.target.checkValidity()) {
        const res = await axios.post('/api/posts/new', {title, author: user.user.name, content, imageURL, token: user.token})
        setTitle('')
        setImageURL('')
        setContent('')
        setError(false)
        return setSuccess(true)
      } 
    } catch (e) {
      return setError("error/form-validation-error");
    }
  };

  useEffect(() => {
    if (!user) {
      router.push("/");
    }
  }, [user]);

  return (
    <Layout className="w-4/5 2xl:w-4/6 mx-auto flex relative flex-col justify-center items-center">
      <form
        onSubmit={(e) => handleSubmit(e)}
        className=" flex flex-col children:flex w-2/4 children:flex-col children:items-start justify-center items-center bg-white opacity-80 rounded-md mx-auto text-center"
        style={{ height: 600, minWidth: 360 }}
      >
        <h1 className="pb-8 font-bold text-3xl lg:text-4xl">
          Whats on your mind?
        </h1>
        <div className="py-3 w-2/5 md:w-3/5">
          <label htmlFor="title">Title</label>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            type="text"
            placeholder="title"
            name="title"
            className="border p-1 w-full border-raspberry-500"
          />
        </div>
        <div className="py-3 w-2/5 md:w-3/5">
          <label htmlFor="title">Valid Image URL {error == 'error/form-validation-error' ? <span className="italic text-red-500">* Invalid </span> : null}</label>
          <input
            value={imageURL}
            onChange={(e) => setImageURL(e.target.value)}
            type="text"
            placeholder="valid image URL"
            name="imageURL"
            className={`${error == 'error/form-validation-error' ? "border-red-500" : "border-raspberry-500"} border p-1 w-full `}
          />
        </div>
        <div className="py-3 w-3/5 md:w-4/5">
          <label htmlFor="content">Content</label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
            type="text"
            placeholder="I just did this really cool thing..."
            name="content"
            className="border p-1 w-full border-raspberry-500"
            style={{ resize: "none", height: 200 }}
          />
        </div>
        <button
          type="submit"
          className="border hover:bg-raspberry-500 border-raspberry-500 py-1 px-4"
        >
          submit new post
        </button>
      </form>
    </Layout>
  );
};

export default NewPostPage;
