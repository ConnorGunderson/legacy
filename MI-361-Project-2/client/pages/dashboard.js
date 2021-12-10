import axios from "axios";
import _ from "lodash";
import { useAuth } from "@/utils/auth";
import { Layout, Post } from "@/components/index";
import useSWR from "swr";
import {useRouter} from 'next/router'

const fetcher = async (...args) => {
  const [url, token] = args;
  return await (await axios.post(url, { token })).data;
};

const DashBoardPage = () => {
  const { user, login } = useAuth();
  const router = useRouter()
  const { data, error } = useSWR(
    ["/api/user/posts", user ? user.token : false],
    fetcher
  );

  if (!user) router.push('/')
  return (
    <Layout className="w-4/5 2xl:w-4/6 mx-auto py-8">
      <h1 className="page-fade font-bold text-4xl">Dashboard</h1>
      <div>
        <div className="grid sm:grid-cols-2 relative lg:grid-cols-3 xl:grid-cols-4 gap-8 pt-6">
          {user && data && data.length ? (
            data.map((post) => {
              return <Post {...post} />;
            })
          ) : (
            <div className="w-full absolute pt-5">
              <h3 className="page-fade">No posts available :(. Go make your first one!</h3>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default DashBoardPage;
