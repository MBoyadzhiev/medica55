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
    <h2 className="text-3xl font-bold text-sky-700 mb-2">Контакти</h2>
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <span className="bg-sky-100 p-3 rounded-full">
          <IconPhone className="w-6 h-6 text-sky-700" />
        </span>
        <div>
          <div className="text-gray-800 font-semibold">Телефон</div>
          <div className="text-gray-600 text-sm">0899 83 48 10</div>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <span className="bg-sky-100 p-3 rounded-full">
          <IconMail className="w-6 h-6 text-sky-700" />
        </span>
        <div>
          <div className="text-gray-800 font-semibold">Email</div>
          <div className="text-gray-600 text-sm">medic55varna@gmail.com</div>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <span className="bg-sky-100 p-3 rounded-full">
          <IconMapPin className="w-6 h-6 text-sky-700" />
        </span>
        <div>
          <div className="text-gray-800 font-semibold">Адрес</div>
          <div className="text-gray-600 text-sm">МЦ &quot;Медика 55&quot;</div>
          <div className="text-gray-600 text-sm">
            Варна бул. &quot;Владислав Варненчик&quot; №142-144, ет. 2
          </div>
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
