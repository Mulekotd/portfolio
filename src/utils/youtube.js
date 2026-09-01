export const getEmbedUrl = (video) => {
  try {
    const parsedUrl = new URL(video);
    const isYouTube = /(^|\.)youtube\.com$/.test(parsedUrl.hostname);
    const isShortYouTubeUrl = parsedUrl.hostname === "youtu.be";

    if (isShortYouTubeUrl) {
      return `https://www.youtube.com/embed/${parsedUrl.pathname.slice(1)}`;
    }

    if (isYouTube && parsedUrl.pathname === "/watch") {
      const videoId = parsedUrl.searchParams.get("v");

      return videoId ? `https://www.youtube.com/embed/${videoId}` : video;
    }
  } catch {
    return video;
  }

  return video;
};
