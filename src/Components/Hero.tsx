import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

function Hero() {
  return (
    <div
      id="hero"
      className="flex p-28 bg-background text-white items-center justify-between"
    >
      <div className="w-[50%]">
        <h1 className="text-6xl font-bold mb-4">
          Hi, I'm <span className="text-rose-600">Arpit Kaushik</span>
        </h1>
        <h2 className="text-4xl font-bold mb-4 whitespace-pre-line">
          {`Full Stack Web Developer
          &
          AI/ML Engineer`}
        </h2>
        <p className="text-mist-300 text-sm">
          I’m a Full Stack Web Developer and AI/ML Engineer, building complete
          web applications while also working with machine learning models—from
          training and experimentation to evaluation and real-world
          implementation.
        </p>
        <div className="flex gap-4 mt-12">
          <a
            className="bg-black px-4 py-2 rounded-lg"
            href="https://www.linkedin.com/in/arpit-kau-shik/"
          >
            <LinkedInIcon />
          </a>
          <a
            className="bg-black px-4 py-2 rounded-lg"
            href="https://github.com/arpit-ka/"
          >
            <GitHubIcon />
          </a>
        </div>
      </div>
      <img
        src="photo.png"
        alt="Photograph"
        height={100}
        width={350}
        className="rounded-xl"
      />
    </div>
  );
}

export default Hero;
