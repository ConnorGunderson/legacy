import { useState } from "react";
import _ from "lodash";
import { useAuth } from "@/utils/auth";
import { Layout } from "@/components/index";
import { useRouter } from 'next/router'

const LoginPage = () => {
  const { user, loading } = useAuth()
  const router = useRouter()
  const [tab, setTab] = useState("");

  if (loading ) return null;

  if (user) router.push('/');
  
  return (
    <Layout className="w-4/5 2xl:w-4/6 mx-auto flex flex-col justify-center items-center">
      <div
        className="bg-white p-16 opacity-80 flex flex-col shadow-lg transition-shadow hover:shadow-xl"
        style={{ height: "500px", width: "400px" }}
        >
        <h1 className="page-fade font-extrabold text-4xl text-center py-4">MSU Onion</h1>
        <ul className="page-fade w-56 children:hover:cursor-pointer children:font-bold py-2 flex flex-row justify-around mx-auto">
          <a
            onClick={() => setTab("signin")}
            className={tab === "signin" ? "text-raspberry-500" : null}
          >
            Sign In
          </a>
          <a
            onClick={() => setTab("create")}
            className={tab === "signin" ? null : "text-raspberry-500"}
          >
            Create
          </a>
        </ul>
        {tab === "signin" ? <SignInForm tab={tab} /> : <CreateForm tab={tab} />}
      </div>
    </Layout>
  );
};

const SignInForm = () => {
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (email && password) {
      return await login(email, password);
    }
  };
  return (
    <form
      onSubmit={(e) => handleSubmit(e)}
      className="page-fade flex flex-col p-4 flex-1 w-3/4 mx-auto justify-end items-center children:my-2 children:border-2 children:border-raspberry-500"
    >
      <div>
        <input
          type="email"
          value={email}
          className="p-2 select-none"
          placeholder="@example.com"
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <input
          type="password"
          value={password}
          className="p-2"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button
        type="submit"
        className="py-1 px-4 bg-white transition-colors shadow-md active:scale-105 hover:bg-raspberry-500"
      >
        Sign In
      </button>
    </form>
  );
};

const CreateForm = () => {
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (email && password) {
      const res = await login(email, password);
    }
  };

  return (
    <form
      onSubmit={(e) => handleSubmit(e)}
      className="page-fade flex flex-col p-4 flex-1 w-3/4 mx-auto justify-end items-center children:my-2 children:border-2 children:border-raspberry-500"
    >
      <div>
        <input
          type="name"
          value={fullName}
          className="p-2 select-none"
          placeholder="full name"
          onChange={(e) => setFullName(e.target.value)}
        />
      </div>
      <div>
        <input
          type="email"
          value={email}
          className="p-2 select-none"
          placeholder="@example.com"
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <input
          type="password"
          value={password}
          className="p-2"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button
        type="submit"
        className="py-1 px-4 bg-white transition-colors shadow-md active:scale-105 hover:bg-raspberry-500"
      >
        Create
      </button>
    </form>
  );
};

export default LoginPage;
