

export default function Contact() {
  return (
    <section id="contact" className="bg-black text-white px-6 md:px-20 py-24">
      {/* Title */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold">Get In Touch</h2>
        <p className="text-gray-400 mt-4 max-w-xl mx-auto">
        Let’s connect — I’d love to hear from you!</p>
      </div>

      {/* Form */}
      <form className="max-w-md mx-auto w-full space-y-6">
        {/* Email */}
        <div>
          <label className="block text-sm font-bold mb-1">Email</label>
          <input
            type="email"
            placeholder="Please enter your email"
            className="w-full px-4 py-2 text-sm text-gray-800 bg-white rounded outline-none"
          />
        </div>

        {/* Mobile */}
        <div>
          <label className="block text-sm font-bold mb-1">Mobile</label>
          <input
            type="text"
            placeholder="Enter mobile"
            className="w-full px-4 py-2 text-sm text-gray-800 bg-white rounded outline-none"
          />
        </div>

        {/* Message */}
        <div>
          <label className="block text-sm font-bold mb-1">Message</label>
          <textarea
            rows={4}
            placeholder="Enter your message"
            className="w-full px-4 py-2 text-sm text-gray-800 bg-white rounded outline-none resize-none"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 rounded shadow-lg shadow-green-500/30 transition"
        >
          Submit →
        </button>
      </form>

      {/* Icons */}
  

      {/* Footer */}
      <div className="mt-12 text-center text-sm text-gray-500">
        Made with ❤️
      </div>
    </section>
  );
}
