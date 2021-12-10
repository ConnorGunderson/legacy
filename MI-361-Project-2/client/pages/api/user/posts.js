import axios from "axios";
import { HOST } from "../../../client.config";

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
    console.log(e);
    return res.end("fail");
  }
};
