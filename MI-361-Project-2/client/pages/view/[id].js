import axios from "axios";
import _ from "lodash";
import { Layout } from "@/components/index";
import { AiFillHeart } from "react-icons/ai";

const ViewPostByIdPage = ({ post }) => {
  return (
    <Layout className="flex flex-col justify-center items-center w-4/5 2xl:w-4/6 mx-auto py-8">
      <div
        className="relative shadow-md overflow-hidden rounded-xl bg-white opacity-80 w-full md:w-3/4"
        style={{ minHeight: "800px" }}
      >
        <div className="relative h-1/2">
          <img
            src={post.imageURL}
            className="w-full absolute h-full object-cover"
          />
          <div className="flex flex-col justify-end pb-2 text-2xl z-20 absolute pl-4 text-white cardImage h-full w-full">
            <h2 className="page-fade text-4xl font-bold ">
              {post.title
                .split(" ")
                .map((t) => _.capitalize(t))
                .join(" ")}
            </h2>
            <p className="page-fade italic text-2xl">
              By:{" "}
              {post.author
                .split(" ")
                .map((t) => _.capitalize(t))
                .join(" ")}
            </p>
          </div>
        </div>
        <div className="page-fade flex flex-col h-1/2 w-full justify-center items-center">
          <p className="text-xl">{post.content}</p>
          <button className="active:scale-105 text-red-500 hover:text-strawberry-500 transition-colors py-1 px-4 absolute bottom-2 right-2">
            <AiFillHeart className="inline-block" size="2em" /> {post.likes}
          </button>
        </div>
      </div>
    </Layout>
  );
};

export async function getStaticPaths() {
  const { data } = await axios.get("/api/posts/allPosts");
  const paths = data.map((post) => ({
    params: { id: post._id },
  }));

  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const { id } = params;
  const { data } = await axios.get(`/api/posts/${id}`);
  return {
    props: {
      post: data,
    },
  };
}

export default ViewPostByIdPage;
