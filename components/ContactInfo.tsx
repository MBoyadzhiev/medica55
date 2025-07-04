import {
  IconPhone,
  IconMail,
  IconMapPin,
  IconBrandInstagram,
  IconBrandFacebook,
  IconBrandYoutube,
} from "@tabler/icons-react";

const ContactInfo = () => (
  <div className="bg-white rounded-2xl p-8 w-full max-w-md mx-auto flex flex-col gap-8">
    <h2 className="text-3xl font-bold text-sky-700 mb-2">Contact Us</h2>
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <span className="bg-sky-100 p-3 rounded-full">
          <IconPhone className="w-6 h-6 text-sky-700" />
        </span>
        <div>
          <div className="text-gray-800 font-semibold">Phone</div>
          <div className="text-gray-600 text-sm">+1 (562) 555-0123</div>
          <div className="text-gray-600 text-sm">+1 (562) 555-0124</div>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <span className="bg-sky-100 p-3 rounded-full">
          <IconMail className="w-6 h-6 text-sky-700" />
        </span>
        <div>
          <div className="text-gray-800 font-semibold">Email</div>
          <div className="text-gray-600 text-sm">info@whittierclubwpf.com</div>
          <div className="text-gray-600 text-sm">
            coaching@whittierclubwpf.com
          </div>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <span className="bg-sky-100 p-3 rounded-full">
          <IconMapPin className="w-6 h-6 text-sky-700" />
        </span>
        <div>
          <div className="text-gray-800 font-semibold">Address</div>
          <div className="text-gray-600 text-sm">Whittier Aquatic Center</div>
          <div className="text-gray-600 text-sm">12345 Whittier Blvd</div>
          <div className="text-gray-600 text-sm">Whittier, CA 90601</div>
        </div>
      </div>
    </div>
    <div className="pt-4">
      <div className="flex gap-4">
        <a
          href="https://www.instagram.com/whittierclubwpf/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform"
        >
          <IconBrandInstagram className="w-5 h-5" />
        </a>
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform"
        >
          <IconBrandFacebook className="w-5 h-5" />
        </a>
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform"
        >
          <IconBrandYoutube className="w-5 h-5" />
        </a>
      </div>
    </div>
  </div>
);

export default ContactInfo;
