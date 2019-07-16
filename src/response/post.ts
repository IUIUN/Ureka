export interface PostDTO {
  sharedFrom: SharedFrom;
  post: Post;
  actionCount: ActionCount;
  tags: Tag[];
  liked: boolean;
  bookmarked: boolean;
  commented: boolean;
  shared: boolean;
  welcome: boolean;
  userName: string;
  userId: number;
}

interface Tag {
  id: number;
  tagName: string;
  creationDate?: any;
}

interface ActionCount {
  Share: number;
  Like: number;
  Comment: number;
  Bookmark: number;
}

export interface Post {
  id: number;
  urekaId?: string;
  postStatus: string;
  category: string;
  displayedCategory?: any;
  fromPersonFollow: boolean;
  channelId?: number;
  channelTitle?: string;
  userId: number;
  userName: string;
  userDisplayedName: string;
  userAvatar: string;
  title: string;
  link: string;
  text: string;
  creationDate: string;
  lastModififedDate: string;
  smallMediaPaths: string[];
  authors: any[];
  role: string;
  commentCount: number;
  channelGroupGroup?: ChannelGroupGroup;
  channelGroup?: ChannelGroup;
}

interface ChannelGroup {
  id: number;
  groupName: string;
  groupNameAbbr: string;
}

interface ChannelGroupGroup {
  id: number;
  groupGroupName: string;
  groupGroupNameAbbr: string;
}

interface SharedFrom {
  id: number;
  urekaId?: any;
  postStatus?: any;
  category?: any;
  displayedCategory?: any;
  fromPersonFollow: boolean;
  channelId?: any;
  channelTitle?: any;
  userId: number;
  userName?: any;
  userDisplayedName?: any;
  userAvatar?: any;
  title?: any;
  link?: any;
  text?: any;
  creationDate?: any;
  lastModififedDate?: any;
  smallMediaPaths?: any;
  authors?: any;
  role?: any;
  commentCount: number;
  channelGroupGroup?: any;
  channelGroup?: any;
}
