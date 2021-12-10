import axios from "axios";
import _ from "lodash";
import { Layout, Post, PostModal } from "@/components/index";
import config from "../client.config";
import { useState } from "react";

const { HOST } = config;
const AboutUsPage = ({ posts }) => {
  return (
    <Layout className="w-4/5 2xl:w-4/6 mx-auto py-8 ">
      <h2 className="text-4xl text-center font-bold mt-16">
        About Us
      </h2>
      <p className="py-2 text-xl">
        MSU Onion was created by a group if current MSU students for the Media and Information course, Network Management and Security. Our names are Matt Keasy, Connor Gunderson, Amber Kienutske, Bruno Takahashi, Jing Hu, and Kaixuan Xu.
      </p>
      <p className="py-2 text-xl">
      Coming into this project, we all had different interests, skills, education levels, and backgrounds. However, we all came together to develop a unique idea that piqued our interests and collaborated to bring it to fruition. Our idea, MSU Onion, is dedicated to satirical posts and images - inspired by platforms and media outlets such as The Onion, Tumblr and Clickhole. To make this happen we took our idea, and built a platform. We each had differing roles, but a common goal.
      </p>
      <p className="py-2 text-xl">
      Our vision is that users will be able to use MSU Onion to share posts from individual accounts and backgrounds while finding common interests using humor and satire. Users are able to post and manage their own content while engaging with others. We hope that you enjoy our website!
      </p>
    </Layout>
  );
};


export default AboutUsPage