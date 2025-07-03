const Footer = () => (
  <footer className="bg-white m-4 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
    <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
      <div className="flex items-center mb-4 md:mb-0">
        <img
          src="/Whittier.png"
          className="h-16 mr-3"
          alt="Whittier Club Logo"
        />
        <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
          Whittier Club Water Polo
        </span>
      </div>
      <div className="mt-6 md:mt-0 text-sm text-gray-700 dark:text-gray-300 text-right md:text-right">
        <div>Email: whittierpoloclub@gmail.com</div>
        <div>Whittier College</div>
        <div>© 2025 Whittier College Athletics</div>
        <div>13847 Earlham Drive Whittier, CA 90602</div>
        <div>(562)907-4271</div>
      </div>
    </div>
    <div className="w-full mx-auto max-w-screen-xl p-4 pt-0 border-t border-gray-200 dark:border-gray-700 text-center">
      <span className="text-sm text-gray-500 dark:text-gray-400">
        © {new Date().getFullYear()} Whittier Club Water Polo. All Rights
        Reserved.
      </span>
    </div>
  </footer>
);

export default Footer;
