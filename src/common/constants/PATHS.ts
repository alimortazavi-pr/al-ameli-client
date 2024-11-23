export const PATHS = {
  HOME: "/",
  ARTICLES: "/articles",
  ARTICLE: (articleSlug: string) => `/articles/${articleSlug}`,
  IMAGES: "/images",
  IMAGE: (imageId: string) => `/images/${imageId}`,
  DOCUMENTS: "/documents",
  DOCUMENT: (documentId: string) => `/documents/${documentId}`,
  PLAYLISTS: "/videos",
  PLAYLIST: (videoId: string) => `/videos/${videoId}`,
};
