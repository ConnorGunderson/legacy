import axios from "axios";
import { HOST } from "../../../client.config";

export default async (_, res) => {
  try {
    const { data } = await axios.get(`${HOST}/api/posts/all`);

    res.status(200).json(data);
  } catch (e) {
    console.log(e);
  }
};
