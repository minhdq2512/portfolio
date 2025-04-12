import avatar from "./../assets/MinhDinhQuang.png"
export default function AboutMe() {
  return (
    <section
      id="about"
      className="bg-black text-white px-6 md:px-20 py-24"
    >
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          A short intro about who you are, what you love doing, and what makes you unique as a developer or designer.
        </p>
      </div>

      <div className="max-w-4xl mx-auto bg-[#111] rounded-lg p-6 md:p-10 border border-gray-800 flex flex-col md:flex-row items-center gap-8">
        {/* Avatar */}
        <img
          src={avatar}
          alt="Me"
          className="w-28 h-28 rounded-full object-cover border-2 border-white shadow-md"
        />

        {/* Text */}
        <div className="text-left">
          <h3 className="text-xl font-semibold">Dinh Quang Minh</h3>
          <p className="text-sm text-gray-400">Frontend Developer / UI Enthusiast</p>

          <p className="mt-4 text-gray-300 leading-relaxed">
            I’m passionate about building clean and beautiful interfaces that enhance user experience.
            With a background in modern web technologies and a love for minimalism, I strive to create impactful digital products.
          </p>
        </div>
      </div>
    </section>
  );
}
