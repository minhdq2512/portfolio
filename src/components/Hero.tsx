import avatar from "./../assets/MinhDinhQuang.png";

export default function Hero() {
  return (
    <section className="bg-black text-white px-6 md:px-20 py-30">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* LEFT - TEXT */}
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Dinh Quang Minh
          </h1>
          <p className="text-gray-400 mb-8">
            Frontend developer by day, stackoverflow copy-paster by night 🌙{" "}
          </p>
          <a
            href="/DinhQuangMinh-resume.pdf"
            download
            className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-md shadow-lg shadow-green-500/30 transition"
          >
            My resume here
          </a>
        </div>

        {/* RIGHT - AVATAR */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src={avatar}
            alt="Avatar"
            className="w-60 h-60 rounded-full object-cover border-4 border-gray-700 shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
