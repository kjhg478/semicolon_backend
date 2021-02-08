import { prisma } from "../../../../generated/prisma-client";
//import { ROOM_FRAGMENT } from "../../../fragments";
import { isAuthenticated } from "../../../middlewares";

export default {
  Mutation: {
    likeNotificate: async (_, args, { request }) => {
      isAuthenticated(request);
      const { user } = request;
      const { notiId, text, toId } = args;
      let noti;
      console.log(noti)
      if (notiId === undefined) {
        if (user.id !== toId) {
          noti = await prisma.createNoti({
            notito: {
              connect: [{ id: toId }, { id: user.id }]
            }
          });
        }
      } else {
        noti = await prisma.noti({ id: notiId });
      }
      if (!noti) {
        throw Error("noti not found");
      }
      const getTo = noti.notito.filter(
        noti => noti.id !== user.id
      )[0];
      return prisma.createNotification({
        text: text,
        from: {
          connect: { id: user.id }
        },
        to: {
          connect: {
            id: notiId ? getTo.id : toId
          }
        },
        noti: {
          connect: {
            id: noti.id
          }
        }
      });
    }
  }
};