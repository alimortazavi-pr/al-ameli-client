export const PATHS = {
  HOME: "/",
  ARTICLES: "/articles",
  ARTICLE: (articleSlug: string) => `/articles/${articleSlug}`,
  IMAGES: "/images",
  IMAGE: (imageId: string) => `/images/${imageId}`,
  DOCUMENTS: "/documents",
  DOCUMENT: (documentId: string) => `/documents/${documentId}`,
  VIDEOS: "/videos",
  VIDEO: (videoId: string) => `/videos/${videoId}`,
};
