import { prisma } from "../../../generated/prisma-client";

export default {
  Post: {
    files: ({ id }) => prisma.post({ id }).files(),
    comments: ({ id }) => prisma.post({ id }).comments(),
    user: ({ id }) => prisma.post({ id }).user(),
    likes: ({ id }) => prisma.post({ id }).likes(),
    notifications:({ id }) => prisma.post({ id }).notifications(),
    isLiked: (parent, _, { request }) => {
      const { user } = request;
      const { id } = parent;
      return prisma.$exists.like({
        AND: [
          {
            user: {
              id: user.id
            }
          },
          {
            post: {
              id
            }
          }
        ]
      });
    },
    likeCount: parent =>
      prisma
        .likesConnection({
          where: { post: { id: parent.id } }
        })
        .aggregate()
        .count()
    ,
    commentCount: parent =>
      prisma
        .commentsConnection({
          where: { post: { id: parent.id } }
        })
        .aggregate()
        .count()
  },
  Comment: {
    isCommented: (parent, _, { request }) => {
      const { user } = request;
      const { id } = parent;
      return prisma.$exists.commentLike({
        AND: [
          {
            user: {
              id: user.id
            }
          },
          {
            comment: {
              id
            }
          }
        ]
      });
    }
  }
    
};