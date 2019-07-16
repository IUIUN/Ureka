export interface channelGroupTreeDTO {
  channelGroupGroup: ChannelGroupGroup[];
}

export interface ChannelGroupGroup {
  numChannels: number;
  id: number;
  numPosts: number;
  groupGroupName: string;
  channelGroups: ChannelGroup[];
  groupGroupNameAbbr: string;
  numSubscribers: number;
}

interface ChannelGroup {
  numChannels: number;
  subscribed: boolean;
  id: number;
  groupNameAbbr: string;
  numPosts: number;
  general: boolean;
  groupName: string;
  imagePath: string;
  numSubscribers: number;
}
