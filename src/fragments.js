export const USER_FRAGMENT = `
    id
    username
    firstName
    lastName
    avatar
`;

export const COMMENTLIKE_FRAGMENT = `
    id
    commentLikes
    user {
        ${USER_FRAGMENT}
    }
`

export const COMMENT_FRAGMENT = `
    id
    text
    commentLikes
    user {
        ${USER_FRAGMENT} {
            post {

            }
        }
    }
`;

export const FILE_FRAGMENT = `
    id
    url
`;

export const MESSAGE_FRAGMENT = `
    id
    text
    to {
        ${USER_FRAGMENT}
    }
    from {
        ${USER_FRAGMENT}
    }
`;

export const FULL_POST_FRAGMENT = `
    fragment PostParts on Post{
        id
        location
        caption
        files {
            ${FILE_FRAGMENT}
        }
        comments {
            ${COMMENT_FRAGMENT}
        }
        user {
            ${USER_FRAGMENT}
        }
        likes {
            id
            user {
                ${USER_FRAGMENT}
            }
        }
    }
`;

export const ROOM_FRAGMENT = `
    fragment RoomParts on Room {
        id
        participants {
            ${USER_FRAGMENT}
        }
        messages { 
            ${MESSAGE_FRAGMENT}
        }
    }
`;
