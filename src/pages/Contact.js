const Contact = () => {
  return (
    <div className="py-16 bg-pink-200">
      <div className="max-w-4xl mx-auto text-center px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Contact Me</h2>
        <p className="text-lg md:text-xl text-gray-700 mb-10">
          Let's collaborate! Fill out the form below to reach out to me.
        </p>

        {/* Contact Form */}
        <form className="bg-white shadow-lg rounded-2xl p-8 text-left max-w-2xl mx-auto">
          <label className="block text-lg font-semibold text-gray-800 mb-2">Agency Name</label>
          <input
            type="text"
            placeholder="Enter agency name"
            className="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-gray-400 transition duration-300 mb-4"
          />

          <label className="block text-lg font-semibold text-gray-800 mb-2">Type of Work</label>
          <select className="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-gray-400 transition duration-300 mb-4">
            <option value="">Select work type</option>
            <option value="Photo Shoot">Photo Shoot</option>
            <option value="Advertisement">Advertisement</option>
            <option value="Runway Collaboration">Runway Collaboration</option>
            <option value="Web Series">Web Series</option>
            <option value="Music Video">Music Video</option>
          </select>

          <label className="block text-lg font-semibold text-gray-800 mb-2">Message</label>
          <textarea
            placeholder="Write your message..."
            rows="4"
            className="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-gray-400 transition duration-300 mb-4"
          ></textarea>

          <label className="block text-lg font-semibold text-gray-800 mb-2">Your Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-gray-400 transition duration-300 mb-6"
          />

          <button className="w-full bg-gray-900 text-white py-3 rounded-lg text-lg font-semibold hover:bg-gray-700 transition duration-300">
            Send Message
          </button>
        </form>

        <p className="mt-6 text-gray-700">
          Or email me directly at:{" "}
          <a href="mailto:sunenasahu4@gmail.com" className="text-gray-900 font-semibold hover:underline">
            sunenasahu4@gmail.com
          </a>
        </p>
      </div>
    </div>
  );
};

export default Contact;
