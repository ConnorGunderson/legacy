import axios from "axios";
import _ from "lodash";
import { useAuth } from "@/utils/auth";
import { Layout, Post, PostModal } from "@/components/index";
import useSWR from "swr";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const fetcher = async (...args) => {
  const [url, token] = args;
  return await (await axios.post(url, { token })).data;
};

const DashBoardPage = () => {
  const [showModal, setShowModal] = useState(false);
  const [post, setPost] = useState(null);
  const handleClick = (post) => {
    setPost(post);
    return setShowModal(true);
  };
  const { user, login } = useAuth();
  const router = useRouter();
  const { data, error } = useSWR(
    ["/api/user/posts", user ? user.token : false],
    fetcher
  );

  useEffect(() => {
    if (!user) {
      router.push("/");
    }
  }, [user]);

  if (!user) return null;

  return (
    <Layout className="w-4/5 2xl:w-4/6 mx-auto py-8">
      {showModal && post ? (
        <PostModal {...post} setShowModal={setShowModal} />
      ) : (
        <>
          <h2 className="text-6xl">My Dashboard</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 pt-6">
            {data && data.length ? (
              data?.map((post, index) => (
                <a onClick={() => handleClick(post)} key={post.author + index}>
                  <Post {...post} />
                </a>
              ))
            ) : !data ? (
              <div className="w-full absolute pt-5">
                <h3 className="page-fade">
                  No posts available :(. Go make your first one!
                </h3>
              </div>
            ) : null}
          </div>
        </>
      )}
    </Layout>
  );
};

export default DashBoardPage;
