interface YoutubeEmbedProps {
  videoId: string;
  title?: string;
}

const YoutubeEmbed = ({ videoId, title }: YoutubeEmbedProps) => {
  return (
    <div className="w-full overflow-hidden rounded-lg shadow-lg aspect-video">
      <iframe
        className="w-full h-full"
        src={`https://www.youtube.com/embed/${videoId}`}
        title={title || "YouTube video player"}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default YoutubeEmbed;
