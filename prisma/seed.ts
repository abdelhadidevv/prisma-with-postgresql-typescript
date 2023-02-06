import { db } from "../src/utils/db.server";

type User = {
  email: string;
  name: string;
};

type Post = {
  published: boolean;
  title: string;
};

async function seed() {
  await Promise.all(
    getUsers().map((user) => {
      return db.user.create({
        data: {
          email: user.email,
          name: user.name,
        },
      });
    })
  );

  const user = await db.user.findFirst({
    where: {
      name: "Abd Elhadi",
    },
  });

  await Promise.all(
    getPosts().map((post) => {
      return db.post.create({
        data: {
          published: post.published,
          title: post.title,
          authorId: user?.id,
        },
      });
    })
  );
}

seed();

function getUsers(): Array<User> {
  return [
    {
      email: "abdelhadi@gmail.com",
      name: "Abd Elhadi",
    },
    {
      email: "ahmad@gmail.com",
      name: "Ahmad",
    },
    {
      email: "mohammad@gmail.com",
      name: "Mohammad",
    },
  ];
}

function getPosts(): Array<Post> {
  return [
    {
      published: true,
      title: "How to create React JS app using vite?",
    },
    {
      published: true,
      title: "How to create Next JS app In 2023?",
    },
    {
      published: true,
      title: "How to create Node JS backend with Prisma and Typescript?",
    },
  ];
}
