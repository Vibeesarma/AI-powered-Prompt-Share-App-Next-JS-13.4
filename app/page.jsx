import Feed from "@components/Feed";

function Home() {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Discover & Share
        <br className="max-md:hidden" />
        <span className="orange_gradient">AI-Powered Prompt</span>
      </h1>
      <p className="desc text-center">
        Promptopia is an open-source AI promoting tool for modern world to
        discover, create and share creative prompts
      </p>

      {/* Feed */}
      <Feed />
    </section>
  );
}

export default Home;
