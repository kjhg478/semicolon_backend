import { prisma } from "../../../../generated/prisma-client";
import { isAuthenticated } from "../../../middlewares";

export default {
    Subscription: {
        notificateLike: {
            subscribe: (_, args) => {
                //isAuthenticated(request);
                const { postId } = args;
                return prisma.$subscribe.like({
                    AND: [
                        { mutation_in: "CREATED" },
                        {
                            node: {
                                post: { id: postId }
                            }
                        }
                    ]
                }).node();
            },
            resolve: payload => payload 
        }
    }
}
               