import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function contact() {
  return (<>
    <Navbar />
      <p className="m-10 text-3xl text-gray-900">Have any feedback for us?</p>    
      <form action="#" className="m-10">
      <div className="mb-10">
         <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Your email</label>
         <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="name@company.com" required />
      </div>
      <div className="mb-10">
         <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-900">Subject</label>
         <input type="text" id="subject" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Let us know how we can help you" required />
      </div>
      <div className="mb-10">
         <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900">Your message</label>
         <textarea id="message" rows={5} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" placeholder="Your message..."></textarea>
      </div>
      <button type="submit" className="text-white bg-blue-900 hover:bg-blue-500 w-full focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 focus:outline-none block">Send message</button>
   </form>
   <Footer />
  </>)
}