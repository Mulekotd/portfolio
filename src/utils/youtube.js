const createEmbedUrl = (videoId) => {
  const embedUrl = new URL(`https://www.youtube.com/embed/${videoId}`);

  embedUrl.searchParams.set("autoplay", "0");
  embedUrl.searchParams.set("mute", "0");
  embedUrl.searchParams.set("playsinline", "1");

  return embedUrl.toString();
};

export const getEmbedUrl = (video) => {
  try {
    const parsedUrl = new URL(video);
    const isYouTube = /(^|\.)youtube\.com$/.test(parsedUrl.hostname);
    const isShortYouTubeUrl = parsedUrl.hostname === "youtu.be";

    if (isShortYouTubeUrl) {
      return createEmbedUrl(parsedUrl.pathname.slice(1));
    }

    if (isYouTube && parsedUrl.pathname === "/watch") {
      const videoId = parsedUrl.searchParams.get("v");

      return videoId ? createEmbedUrl(videoId) : video;
    }
  } catch {
    return video;
  }

  return video;
};
