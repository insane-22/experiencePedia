import { Hono } from "hono";
import { Bindings } from "../binding";
import { verify } from "hono/jwt";
import { Variables } from "../variables";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";

const experienceRouter = new Hono<{
  Bindings: Bindings;
  Variables: Variables;
}>();

experienceRouter.use(async (c, next) => {
  const jwt = c.req.header("Authorization");
  if (!jwt) {
    c.status(401);
    return c.json({ error: "unauthorized" });
  }
  const token = jwt;
  const payload = await verify(token, c.env.JWT_SECRET);
  if (!payload) {
    c.status(401);
    return c.json({ error: "unauthorized" });
  }
  c.set("userId", String(payload.id));
  await next();
});

experienceRouter.post("/", async (c) => {
  const body = await c.req.json();
  const userId = c.get("userId");
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  if (!body.title || !body.description) {
    c.status(401);
    return c.json({ error: "Title and Description are required" });
  }

  const post = await prisma.post.create({
    data: {
      title: body.title,
      description: body.description,
      userId: userId,
      likes: 0,
      dislikes: 0,
    },
  });

  return c.json({
    id: post.id,
  });
});

experienceRouter.put("/", async (c) => {
  const body = await c.req.json();
  const userId = c.get("userId");
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  const post = await prisma.post.update({
    where: {
      id: body.id,
      userId: userId,
    },
    data: {
      title: body.title,
      description: body.description,
    },
  });

  if (!post) {
    c.status(404);
    return c.json({ error: "Post not found" });
  }

  return c.json({
    id: post.id,
    message: "updated successfully!",
  });
});

experienceRouter.get("/", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());
  const posts = await prisma.post.findMany();
  return c.json(posts);
});

experienceRouter.get("/:id", async (c) => {
  const id = c.req.param("id");
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());
  const post = await prisma.post.findUnique({ where: { id } });
  return c.json(post);
});

export default experienceRouter;
