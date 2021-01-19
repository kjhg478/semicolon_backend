import { prisma } from "../../../../generated/prisma-client";


export default {
    Query: {
        seeUser : async (_, args) => {
            const {id} = args;
            const UserProfile = await prisma.user({ id });            
            const posts = await prisma.user({ id }).posts();
            
            return {
                user: UserProfile,
                posts
            };
        }
    }
};