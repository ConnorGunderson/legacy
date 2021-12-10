import axios from "axios";
import _ from "lodash";
import { Layout, Post, PostModal } from "@/components/index";
import config from "../client.config";
import { useState } from "react";

const { HOST } = config;
const Home = ({ posts }) => {
  const [showModal, setShowModal] = useState(false);
  const [post, setPost] = useState(null);
  const handleClick = (post) => {
    setPost(post);
    return setShowModal(true);
  };
  return (
    <Layout className="w-4/5 2xl:w-4/6 mx-auto py-8">
      {showModal && post ? (
        <PostModal {...post} setShowModal={setShowModal} />
      ) : (
        <>
          <h2 className="text-6xl">MSU Onion</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 pt-6">
            {posts &&
              posts.map((post, index) => (
                <a onClick={() => handleClick(post)} key={post.author + index}>
                  <Post {...post}  />
                </a>
              ))}
          </div>
        </>
      )}
    </Layout>
  );
};

export async function getServerSideProps() {
  try {
    const { data } = await axios.get(`${HOST}/api/posts/all`, {
      params: { limit: 50 },
    });
    return {
      props: {
        posts: data,
      },
    };
  } catch (e) {
    return {
      props: {
        posts: null,
      },
    };
  }
}

export default Home;
