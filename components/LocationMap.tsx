const LocationMap = () => (
  <div className="bg-white rounded-2xl shadow-xl p-4 w-full max-w-2xl mx-auto">
    <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
      Къде да ни намерите
    </h3>
    <div className="rounded-lg overflow-hidden w-full h-80">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1453.8767604218726!2d27.898092078422263!3d43.21465883866153!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40a454796f726fe7%3A0xc4933dfa9518eb1e!2zVmFybmEgQ2VudGVyT2Rlc29zLCDQsdGD0LsuIOKAntCS0LvQsNC00LjRgdC70LDQsiDQktCw0YDQvdC10L3Rh9C40LrigJwgMTQyLTE0NCwg0LXRgi4gMiwgOTAwMCBWYXJuYQ!5e0!3m2!1sen!2sbg!4v1752579654940!5m2!1sen!2sbg"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="w-full h-80"
      ></iframe>
    </div>
    <div className="text-center mt-2 text-gray-600 text-sm">
      Варна бул. &quot;Владислав Варненчик&quot; №142-144, ет. 2
    </div>
  </div>
);

export default LocationMap;
