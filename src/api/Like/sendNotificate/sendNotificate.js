import { prisma } from "../../../../generated/prisma-client";
import { isAuthenticated } from "../../../middlewares"

export default {
    Mutation: {
        sendNotificate: async (_, args, { request }) => {
            isAuthenticated(request);
            const { to, follow, message, post, state } = args;

            if (state === "1") {
                const notification = await prisma.createNotification({
                    to: { connect: { id: to } },
                    follow:{connect:{id:follow}}
                    
                });
                return notification;

            } else if (state === "2") {
                
                const notification = await prisma.createNotification({
                    to: { connect: { id: to } },
                    message:{connect:{id:message}}
                    
                });
                return notification;

            } else if (state==="3") { 
                const notification = await prisma.createNotification({
                to:{connect:{id:to}},
                post:{connect:{id:post}}
                
                });
                return notification;
            }


        }
    }
}