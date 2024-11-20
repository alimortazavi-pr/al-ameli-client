export interface IVideosState {
  videos: IVideo[];
}

export interface IVideo {
  kind: string;
  etag: string;
  id: string;
  snippet: {
    publishedAt: string;
    channelId: string;
    title: string;
    description: string;
    thumbnails: {
      default: {
        url: string;
      };
      medium: {
        url: string;
      };
      high: {
        url: string;
      };
    };
    channelTitle: string;
    localized: {
      title: string;
      description: string;
    };
  };
  contentDetails: {
    itemCount: number;
  };
}
