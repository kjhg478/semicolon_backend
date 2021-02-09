import { prisma } from "../../../../generated/prisma-client";
import { isAuthenticated } from "../../../middlewares";

export default {
    Subscription: {
        sendSubscription: {
            subscribe: (_, args) => {
                // isAuthenticated(request);
                const { to } = args;
                
                return prisma.$subscribe.notification({
                    AND: [
                        { mutation_in: "CREATED" },
                        {
                            node: {
                                to: { id: to }
                            }
                        }
                    ]
                }).node();
            },
            resolve: payload => payload 
        }
    }
}
               