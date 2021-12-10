import { useEffect, useState } from "react";
import _ from "lodash";
import { useAuth } from "@/utils/auth";
import { Layout } from "@/components/index";
import { useRouter } from "next/router";
import axios from "axios";
import config from "../client.config";

const { HOST } = config;

const LoginPage = () => {
  const { user, loading, setError, error } = useAuth();
  const router = useRouter();
  const [tab, setTab] = useState("");

  useEffect(() => {
    if (user) router.push("/");
  }, [user]);

  const handleClick = (tab) => {
    setTab(tab)
    setError(false)
  }

  return (
    <Layout className="w-4/5 2xl:w-4/6 mx-auto flex flex-col justify-center items-center">
      <div
        className="bg-white p-16 opacity-80 flex flex-col shadow-lg transition-shadow hover:shadow-xl"
        style={{ height: "500px", width: "400px" }}
      >
        <h1 className="page-fade font-extrabold text-4xl text-center py-4">
          MSU Onion
        </h1>
        <ul className="page-fade w-56 children:hover:cursor-pointer children:font-bold py-2 flex flex-row justify-around mx-auto">
          <a
            onClick={() => handleClick("signin")}
            className={tab === "signin" ? "text-raspberry-500" : null}
          >
            Sign In
          </a>
          <a
            onClick={() => handleClick("create")}
            className={tab === "signin" ? null : "text-raspberry-500"}
          >
            Create
          </a>
        </ul>
        {error === "error/auth-invalid-credentials" ? (
          <p className="w-full text-center pt-2 text-red-500">
            invalid user name or password
          </p>
        ) : null}
        {tab === "signin" ? <SignInForm tab={tab} /> : <CreateForm tab={tab} />}
      </div>
    </Layout>
  );
};

const SignInForm = () => {
  const { login, error } = useAuth();
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
      className="page-fade flex flex-col p-4 flex-1 w-3/4 mx-auto justify-end items-center children:my-2 "
    >
      <div>
        <input
          type="email"
          className={`${
            error === "error/auth-invalid-credentials"
              ? "border-red-500"
              : "border-raspberry-500"
          } border-2 p-2`}
          placeholder="@example.com"
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <input
          type="password"
          className={`${
            error === "error/auth-invalid-credentials"
              ? "border-red-500"
              : "border-raspberry-500"
          } border-2 p-2`}
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
  const { login, error } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (email && password && fullName && e.target.checkValidity) {
      const { status } = await axios.post(`${HOST}/api/auth/new`, {
        name: fullName,
        email,
        password,
      });
      if (status === 200) {
        return await login(email, password);
      } else {
        setError("auth/invalid-fields");
      }
    }
  };

  return (
    <form
      onSubmit={(e) => handleSubmit(e)}
      className="page-fade flex flex-col p-4 flex-1 w-3/4 mx-auto justify-end items-center children:my-2 children:border-2 children:border-raspberry-500"
    >
      <div>
        <input
          required
          type="name"
          className="p-2 select-none"
          placeholder="full name"
          onChange={(e) => setFullName(e.target.value)}
        />
      </div>
      <div>
        <input
          required
          type="email"
          className="p-2 select-none"
          placeholder="@example.com"
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <input
          required
          type="password"
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
