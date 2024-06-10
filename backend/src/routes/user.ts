import { Hono } from "hono";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { Bindings } from "../binding";
import { sign } from "hono/jwt";

const userRouter = new Hono<{ Bindings: Bindings }>();

userRouter.post("/signup", async (c) => {
  try {
    const body = await c.req.json();
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());

    if (!body.email) {
      c.status(401);
      return c.json({ error: "Email is required" });
    }
    if (!body.name) {
      c.status(401);
      return c.json({ error: "Name is required" });
    }
    if (!body.password) {
      c.status(401);
      return c.json({ error: "Password is required" });
    }

    const existingUser = await prisma.user.findUnique({
      where: {
        email: body.email,
      },
    });
    if (existingUser) {
      c.status(401);
      return c.json({ error: "Already Registered! Login to continue" });
    }

    const user = await prisma.user.create({
      data: {
        email: body.email,
        password: body.password,
        name: body.name,
      },
    });

    const token = await sign({ id: user.id }, c.env.JWT_SECRET);

    return c.json({ jwt: token });
  } catch (error) {
    console.error("Error during signup:", error);
    return c.json({ error: "Internal server error" });
  }
});

userRouter.post("/signin", async (c) => {
  const body = await c.req.json();
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  if (!body.email || !body.password) {
    c.status(401);
    return c.json({ error: "Provide details to signin" });
  }

  const existingUser = await prisma.user.findUnique({
    where: {
      email: body.email,
      password: body.password
    },
  });
  if (!existingUser) {
    return c.json({ error: "Not Registered! Signup to continue" });
  }

  const token = await sign({ id: existingUser.id }, c.env.JWT_SECRET);

  return c.json({ jwt: token });
});

export default userRouter;
