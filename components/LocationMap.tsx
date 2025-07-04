const LocationMap = () => (
  <div className="bg-white rounded-2xl shadow-xl p-4 w-full max-w-2xl mx-auto">
    <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
      Find Us
    </h3>
    <div className="rounded-lg overflow-hidden w-full h-80">
      <iframe
        title="Whittier Aquatic Center Map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3303.393964479836!2d-118.0333176847826!3d33.9776809806267!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2d1e2e2e2e2e2%3A0x2e2e2e2e2e2e2e2e!2sWhittier%20Aquatic%20Center!5e0!3m2!1sen!2sus!4v1680000000000!5m2!1sen!2sus"
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
      Whittier Aquatic Center, Whittier, CA
    </div>
  </div>
);

export default LocationMap;
