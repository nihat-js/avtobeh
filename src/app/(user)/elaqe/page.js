// pages/contact.tsx
'use client'
const ContactUs = () => {
  return (
    <main>
      <div className="max-w-4xl mx-auto bg-white p-6 shadow-md rounded-md">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">Contact Us</h1>

        <form className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-600">
              Name
            </label>
            <input
              id="name"
              type="text"
              placeholder="Your Name"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-600">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="you@example.com"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-600">
              Message
            </label>
            <textarea
              id="message"
              placeholder="Write your message here"
              rows={4}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full py-3 px-4 bg-blue-500 text-white font-medium rounded-md hover:bg-blue-600 transition"
          >
            Send Message
          </button>
        </form>

        <div className="mt-8 text-center">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Our Contact Information</h2>
          <p className="text-gray-600">Email: support@avtox.com</p>
          <p className="text-gray-600">Phone: (123) 456-7890</p>
          <p className="text-gray-600">Address: 1234 Car St, New York, NY</p>
        </div>
      </div>
    </main>
  );
};

export default ContactUs;
