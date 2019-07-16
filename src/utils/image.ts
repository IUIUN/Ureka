const avatarUrl = `/api/avatar`;
const postUrl = `/api/post`;

export const getAvatar = path => `${avatarUrl}/${path}/downloadMedia`;
export const getPostImage = path => `${postUrl}/${path}/downloadMedia?mediaFidelity=Medium`;
