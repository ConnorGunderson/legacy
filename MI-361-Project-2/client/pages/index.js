import axios from "axios";
import _ from "lodash";
import { Layout, Post } from "@/components/index";
import { HOST } from "../client.config";

const Home = ({ posts }) => {
  return (
    <Layout className="w-4/5 2xl:w-4/6 mx-auto py-8">
      <h2 className="text-6xl">MSU Onion</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 pt-6">
        {posts &&
          posts.map((post, index) => (
            <Post {...post} key={post.author + index} />
          ))}
      </div>
    </Layout>
  );
};

export async function getStaticProps() {
  try {
    const { data } = await axios.get(`${HOST}/api/posts/all`, {
      params: { limit: 20 },
    });
    return {
      props: {
        posts: data,
      },
    };
  } catch (e) {
    console.log(e);
  }
}

export default Home;
