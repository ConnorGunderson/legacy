import _ from "lodash";
import { Layout } from "@/components/index";
import { useRouter } from "next/router";
import { useAuth } from "@/utils/auth";

const NewPostPage = () => {
  const { user } = useAuth();
  const router = useRouter();

  if (!user) router.push("/");

  const handleSubmit = (e) => {
    e.preventDefault();

    try {
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Layout className="w-4/5 2xl:w-4/6 mx-auto flex relative flex-col justify-center items-center">
      <form
        onSubmit={(e) => handleSubmit(e)}
        className=" flex flex-col children:flex w-2/4 children:flex-col children:items-start justify-center items-center bg-white opacity-80 rounded-md mx-auto text-center"
        style={{ height: 600, minWidth: 360 }}
      >
        <h1 className="pb-12 font-bold text-3xl lg:text-4xl">
          Whats on your mind?
        </h1>
        <div className="py-3 w-2/5 md:w-3/5">
          <label htmlFor="title">hey</label>
          <input
            type="text"
            placeholder="title"
            name="title"
            className="border p-1 w-full border-raspberry-500"
          />
        </div>
        <div className="py-3 w-2/5 md:w-3/5">
          <label htmlFor="imageURL">image URL</label>
          <input
            type="text"
            placeholder="Valid Image URL"
            name="imageURL"
            className="border p-1 w-full border-raspberry-500"
          />
        </div>
        <div className="py-3 w-3/5 md:w-4/5">
          <label htmlFor="content">Content</label>
          <textarea
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
