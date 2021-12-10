import axios from "axios";
import config from "../../../client.config";
const { HOST } = config;

export default async (req, res) => {
  try {
    const { token } = req.body;
    if (token) {
      const { data } = await axios.get(`${HOST}/api/posts/user`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      return res.status(200).json(data);
    } else {
      return res.end("error/auth-invalid-token");
    }
  } catch (e) {
    return res.end("fail");
  }
};
