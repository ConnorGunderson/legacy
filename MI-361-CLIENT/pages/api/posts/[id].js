import axios from "axios";
import config from "../../../client.config";
const {HOST} = config

export default async (req, res) => {
  try {
    const { data } = await axios.get(`${HOST}/api/posts/${req.query.id}`);
    if (data) {
      res.status(200).json(data);
    } else {
      res.status(404).end("error/post-invalid-id");
    }
  } catch (e) {
    res.status(404).end('fail')
  }
};
