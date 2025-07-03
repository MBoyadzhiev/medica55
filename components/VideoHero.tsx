const VideoHero = () => (
  <section
    id="video-hero-section"
    className="relative h-[250px] md:h-[350px] lg:h-[600px] 2xl:h-[1064px] flex items-center justify-center overflow-hidden shadow-lg"
  >
    <video
      src="/video.mp4"
      className="w-full h-full object-cover"
      autoPlay
      loop
      muted
      playsInline
    >
      If you see this text, the video cannot be loaded or played.
    </video>
  </section>
);

export default VideoHero;
