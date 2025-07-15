const Footer = () => (
  <footer className="bg-white m-4 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
    <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
      <div className="flex items-center mb-4 md:mb-0">
        <img src="/logo.png" className="h-16 mr-3" alt="Whittier Club Logo" />
        <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
          МЦ &quot;Медика 55&quot;
        </span>
      </div>
      <div className="flex flex-col items-center mb-4 md:mb-0 text-center w-full md:max-w-md md:mx-auto">
        <h1 className="self-center text-xl font-semibold whitespace-nowrap dark:text-white mb-4">
          Лични Данни
        </h1>
        <p className="text-sm text-gray-700 dark:text-gray-300">
          Вашите лични данни се обработват въз основа на Вашето свободно
          изразено, конкретно, информирано и недвусмислено съгласие, дадено в
          писмена или електронна форма.
        </p>
      </div>
      <div className="mt-6 md:mt-0 text-sm text-gray-700 dark:text-gray-300 text-right md:text-right">
        <div>Email: medic55varna@gmail.com</div>
        <div>МЦ &quot;Медика 55&quot;</div>
        <div>© 2025 Медицински център &quot;Медика 55&quot;</div>
        <div>Варна бул. &quot;Владислав Варненчик&quot; №142-144, ет. 2</div>
        <div>0899 83 48 10</div>
      </div>
    </div>
    <div className="w-full mx-auto max-w-screen-xl p-4 pt-0 border-t border-gray-200 dark:border-gray-700 text-center">
      <span className="text-sm text-gray-500 dark:text-gray-400">
        © {new Date().getFullYear()} Медицински център &quot;Медика 55&quot;.
        Всички права запазени.
      </span>
    </div>
  </footer>
);

export default Footer;
