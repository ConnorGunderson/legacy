import axios from "axios";
import config from "../../../client.config";
const { HOST } = config;

export default async (req, res) => {
  try {
    const { data } = await axios.post(`${HOST}/api/posts/new`, {...req.body}, {
      headers: { Authorization: `Bearer ${req.body.token}` },
    });
    res.status(200).json(data);
  } catch (e) {
    res.status(404).end("fail");
  }
};
