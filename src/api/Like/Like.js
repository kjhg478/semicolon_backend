import { prisma } from "../../../generated/prisma-client";

export default {
  Like: {
    post: ({ id }) => prisma.like({ id }).post(),
    user: ({ id }) => prisma.like({ id }).user()
  },
  Notification: {
    to: ({ id }) => prisma.notification({id}).to(),
    follow: ({ id }) => prisma.notification({ id }).follow(),
    message: ({ id }) => prisma.notification({ id }).message(),
    post: ({ id }) => prisma.notification({ id }).post(),
  }
};