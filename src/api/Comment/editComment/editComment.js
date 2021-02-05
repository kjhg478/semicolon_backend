import { prisma } from "../../../../generated/prisma-client";
import { isAuthenticated } from "../../../middlewares";

export default {
    Mutation: {
        editComment: async (_, agrs, { request }) => {
            isAuthenticated(request);
            const { user } = request;
            const { commentId, text } = agrs;
            const comment = await prisma.$exists.comment({ id, user: { id: user.id } })
            // 포스트가 있는지 확인하고 지금 로그인 한 유저가 포스트를 만든 유저인지 확인.
            if (comment) {
                await prisma.updateComment({
                    data: { text },
                    where: { commentId }
                })
                return true;
            } else {
                return false
            }
        }
    }
};