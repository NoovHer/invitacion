import React from 'react';
import { MapPin, Clock, Sparkles, Gift } from 'lucide-react';
import CountdownTimer from './components/CountdownTimer';
import RSVPForm from './components/RSVPForm';
import Snowfall from './components/Snowfall';
import LocationShare from './components/LocationShare';

function App() {
  const venueLocation = {
    address: "Champ de Mars, 5 Av. Anatole France, 75007 Paris, France",
    latitude: 48.8584,
    longitude: 2.2945
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1a472a] to-[#2d5a40]">
      <Snowfall />
      {/* Hero Section */}
      <header className="relative h-screen flex items-center justify-center text-center"
              style={{
                backgroundImage: 'url("https://images.unsplash.com/photo-1543589077-47d81606c1bf?auto=format&fit=crop&q=80")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}>
        <div className="absolute inset-0 bg-black bg-opacity-60" />
        <div className="relative z-10 px-4">
          <div className="text-red-500 text-6xl mb-4">🎄</div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">Christmas Year-End Celebration</h1>
          <p className="text-xl md:text-2xl text-red-100 mb-8">Join us for a magical evening of holiday cheer!</p>
          <div className="inline-flex items-center space-x-2 text-white bg-red-600 px-6 py-3 rounded-full">
            <Clock className="w-6 h-6" />
            <span className="text-xl">December 6th, 2024 • 7:00 PM</span>
          </div>
        </div>
      </header>

      {/* Countdown Section */}
      <section className="py-16 px-4 bg-[#1a472a] relative overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10">
          <CountdownTimer />
        </div>
      </section>

      {/* Location Section */}
      <section className="py-16 px-4 bg-white relative">
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[#1a472a] to-transparent"></div>
        <div className="max-w-6xl mx-auto relative">
          <div className="flex items-center justify-center space-x-2 mb-8">
            <MapPin className="w-6 h-6 text-red-600" />
            <h2 className="text-3xl font-semibold text-gray-800">Venue Location</h2>
          </div>
          <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-lg mb-6">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.9916256937595!2d2.2922926!3d48.8583736!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e2964e34e2d%3A0x8ddca9ee380ef7e0!2sEiffel%20Tower!5e0!3m2!1sen!2sus!4v1647834755695!5m2!1sen!2sus"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <LocationShare 
            address={venueLocation.address}
            latitude={venueLocation.latitude}
            longitude={venueLocation.longitude}
          />
        </div>
      </section>

      {/* Dress Code Section */}
      <section className="py-16 px-4 bg-red-50 relative">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-8">
            <Sparkles className="w-6 h-6 text-red-600" />
            <h2 className="text-3xl font-semibold text-gray-800">Holiday Dress Code</h2>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg border-2 border-red-100">
            <h3 className="text-2xl font-semibold text-red-600 mb-4">Festive Cocktail Attire</h3>
            <p className="text-gray-600 mb-6">
              Gentlemen: Dark suit or blazer with holiday accents<br />
              Ladies: Cocktail dress in festive colors or elegant pantsuit
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Holiday Spirit</h4>
                <ul className="text-gray-600 space-y-2">
                  <li>• Festive colors (red, green, gold)</li>
                  <li>• Holiday accessories</li>
                  <li>• Elegant winter fabrics</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Avoid</h4>
                <ul className="text-gray-600 space-y-2">
                  <li>• Casual holiday sweaters</li>
                  <li>• Costume-like attire</li>
                  <li>• Beach or summer wear</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RSVP Section */}
      <section className="py-16 px-4 bg-[#1a472a] relative">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center space-x-2 mb-8">
            <Gift className="w-8 h-8 text-red-400" />
            <h2 className="text-3xl font-semibold text-center text-white">RSVP</h2>
          </div>
          <RSVPForm />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0f2817] text-gray-300 py-8 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="mb-4">For any questions, please contact the event team</p>
          <p className="text-sm">© 2024 Company Name. All rights reserved.</p>
          <div className="text-2xl mt-4">🎄 🎅 ⛄</div>
        </div>
      </footer>
    </div>
  );
}

export default App;