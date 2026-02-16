import React from "react";

export default function Map() {
  return (
    <section className="py-12 bg-gray-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="w-full h-[300px] sm:h-[400px] lg:h-[450px] bg-gray-100 rounded-2xl overflow-hidden shadow-lg">
          <iframe
            src="https://maps.google.com/maps?q=Ələskər+Qayıbov+Küçəsi+10,+Bakı,+AZ&t=&z=15&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Map"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
