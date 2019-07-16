export interface CommentDTO {
  id: number;
  postStatus: string;
  userDisplayedName: string;
  lastModififedDate: string;
  rootPostId: number;
  userAvatarPath: string;
  userId: number;
  userName: string;
  smallMediaPaths: any[];
  text: string;
  actionCount: ActionCount;
  liked: boolean;
  creationDate: string;
}

interface ActionCount {
  Comment: number;
  Like: number;
}
