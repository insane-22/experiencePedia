import { Hono } from "hono";
import userRouter from "./routes/user";
import experienceRouter from "./routes/experience";

const app = new Hono();

app.get("/", (c) => {
  return c.text("Share your wonderful experiences with experiencePedia!");
});

app.notFound((c) => c.json({ message: "Not Found", ok: false }, 404));

app.route("/api/v1/user", userRouter);
app.route("/api/v1/post", experienceRouter);

export default app;
