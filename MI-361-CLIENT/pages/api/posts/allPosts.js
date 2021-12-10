import axios from "axios";
import config from "../../../client.config";
const { HOST } = config;

export default async (_, res) => {
  try {
    const { data } = await axios.get(`${HOST}/api/posts/all`);
    res.status(200).json(data);
  } catch (e) {
    res.status(404).end("fail");
  }
};
