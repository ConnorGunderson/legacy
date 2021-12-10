export default {
  HOST:
    process.env.NODE_ENV === "production"
      ? process.env.AWS_DNS
      : "http://localhost:4000",
};
