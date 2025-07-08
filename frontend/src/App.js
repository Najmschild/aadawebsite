import React from "react";
import "./App.css";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Star, ChevronRight, Leaf, Globe, Award, ArrowRight } from "lucide-react";

const AADA_LOGO = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8IS0tIFNpbXBsaWZpZWQgQUFEQSBsb2dvIGJhc2VkIG9uIHRoZSBwcm92aWRlZCBkZXNpZ24gLS0+CiAgPGc+CiAgICA8IS0tIEh1dCBzdHJ1Y3R1cmUgLS0+CiAgICA8cGF0aCBkPSJNNTAgNjBMIDIwIDM0TCA4MCAzNFoiIGZpbGw9IiNEOTc5NDIiLz4KICAgIDxwYXRoIGQ9Ik0yMCAzNEwgMjUgMjBMIDc1IDIwTCA4MCAzNFoiIGZpbGw9IiNBMzQzMzYiLz4KICAgIDxwYXRoIGQ9Ik0yNSA1MEwgNzUgNTBMIDgwIDM0TCAyMCAzNFoiIGZpbGw9IiMyMjc3NDQiLz4KICAgIDx0ZXh0IHg9IjEwMCIgeT0iNTAiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIzNiIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiMyMjc3NDQiPmFkYTwvdGV4dD4KICA8L2c+Cjwvc3ZnPg==";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.6 } }
};

const Hero = () => (
  <section className="relative min-h-screen bg-gradient-to-br from-green-900 via-green-800 to-emerald-900 overflow-hidden">
    <div className="absolute inset-0 bg-black/30"></div>
    <div 
      className="absolute inset-0 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url('https://images.pexels.com/photos/1845853/pexels-photo-1845853.jpeg')`
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-green-900/80 via-green-800/70 to-transparent"></div>
    </div>
    
    <div className="relative container mx-auto px-6 py-8 min-h-screen flex flex-col">
      <motion.nav 
        className="flex items-center justify-between mb-16"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="flex items-center space-x-4">
          <div className="bg-white/95 backdrop-blur-sm rounded-xl p-3 shadow-lg">
            <img src={AADA_LOGO} alt="AADA Logo" className="h-12 w-auto" />
          </div>
        </div>
        <div className="hidden md:flex space-x-8">
          <a href="#products" className="text-white hover:text-orange-300 transition-colors font-medium">Products</a>
          <a href="#clothing" className="text-white hover:text-orange-300 transition-colors font-medium">Clothing</a>
          <a href="#about" className="text-white hover:text-orange-300 transition-colors font-medium">About</a>
          <a href="#contact" className="text-white hover:text-orange-300 transition-colors font-medium">Contact</a>
        </div>
      </motion.nav>

      <div className="flex-1 flex items-center">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 leading-tight">
              Premium
              <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent block">
                Tropical
              </span>
              <span className="text-green-400">Exports</span>
            </h1>
          </motion.div>

          <motion.p
            className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl font-light"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <span className="text-orange-300 font-medium">By Nature, From Earth</span> - 
            Fresh tropical fruits and vegetables from the heart of Senegal, delivered with excellence.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <button className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2 group">
              <span>Explore Products</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/20 transition-all duration-300 shadow-lg">
              Get In Touch
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  </section>
);

const About = () => (
  <section id="about" className="py-20 bg-gradient-to-br from-green-50 to-orange-50">
    <div className="container mx-auto px-6">
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-5xl font-bold text-gray-900 mb-6">About AADA</h2>
        <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-green-600 mx-auto mb-6"></div>
        <p className="text-xl text-gray-700 max-w-3xl mx-auto">
          From the fertile lands of Senegal to your table, AADA brings you the finest tropical produce
          and sustainable fashion with a commitment to quality and nature.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8">
        {[
          {
            icon: <Globe className="w-8 h-8 text-green-600" />,
            title: "Global Reach",
            description: "Exporting premium tropical fruits and vegetables from Dakar, Senegal to markets worldwide."
          },
          {
            icon: <Leaf className="w-8 h-8 text-green-600" />,
            title: "Natural & Organic",
            description: "100% natural products, sustainably sourced and processed with respect for our earth."
          },
          {
            icon: <Award className="w-8 h-8 text-green-600" />,
            title: "Quality Assured",
            description: "Rigorous quality control ensuring only the finest products reach our customers."
          }
        ].map((item, index) => (
          <motion.div
            key={index}
            className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <div className="mb-4">{item.icon}</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
            <p className="text-gray-600 leading-relaxed">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const Products = () => (
  <section id="products" className="py-20 bg-white">
    <div className="container mx-auto px-6">
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-5xl font-bold text-gray-900 mb-6">Our Products</h2>
        <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-green-600 mx-auto mb-6"></div>
        <p className="text-xl text-gray-700 max-w-3xl mx-auto">
          Fresh, premium tropical produce sourced directly from Senegal's fertile lands.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8">
        {/* Current Product - Gombo */}
        <motion.div
          className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="h-64 bg-cover bg-center" style={{
            backgroundImage: `url('https://images.pexels.com/photos/5217779/pexels-photo-5217779.jpeg')`
          }}>
            <div className="h-full bg-gradient-to-t from-black/50 to-transparent flex items-end">
              <div className="p-6">
                <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  Available Now
                </span>
              </div>
            </div>
          </div>
          <div className="p-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Premium Gombo</h3>
            <p className="text-gray-600 mb-4">
              Fresh, tender okra harvested at peak ripeness. Rich in vitamins and perfect for traditional dishes.
            </p>
            <div className="flex items-center space-x-4 mb-4">
              <span className="flex items-center text-green-600">
                <Star className="w-4 h-4 mr-1" />
                Premium Quality
              </span>
            </div>
            <button className="w-full bg-green-600 text-white py-3 rounded-xl font-semibold hover:bg-green-700 transition-colors">
              Request Quote
            </button>
          </div>
        </motion.div>

        {/* Coming Soon Products */}
        {[
          {
            name: "Fresh Melons",
            description: "Sweet, juicy melons with exceptional flavor and aroma.",
            image: "https://images.pexels.com/photos/8367553/pexels-photo-8367553.jpeg"
          },
          {
            name: "Watermelons",
            description: "Large, refreshing watermelons perfect for hot climates.",
            image: "https://images.pexels.com/photos/594059/pexels-photo-594059.jpeg"
          }
        ].map((product, index) => (
          <motion.div
            key={index}
            className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: (index + 1) * 0.2 }}
            viewport={{ once: true }}
          >
            <div className="h-64 bg-cover bg-center relative" style={{
              backgroundImage: `url('${product.image}')`
            }}>
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-4 left-4">
                <span className="bg-orange-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  Coming Soon
                </span>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{product.name}</h3>
              <p className="text-gray-600 mb-4">{product.description}</p>
              <button className="w-full bg-orange-600 text-white py-3 rounded-xl font-semibold hover:bg-orange-700 transition-colors">
                Notify Me
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const Clothing = () => (
  <section id="clothing" className="py-20 bg-gradient-to-br from-orange-50 to-green-50">
    <div className="container mx-auto px-6">
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-5xl font-bold text-gray-900 mb-6">Natural Clothing</h2>
        <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-green-600 mx-auto mb-6"></div>
        <p className="text-xl text-gray-700 max-w-3xl mx-auto">
          Sustainable fashion made from 100% natural linen and hemp fibers.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-gray-900">Eco-Friendly Fashion</h3>
          <p className="text-gray-700 text-lg leading-relaxed">
            Our clothing line features premium linen and hemp garments, carefully crafted for comfort and sustainability. 
            Each piece is designed to last, made from natural fibers that breathe with your body.
          </p>
          
          <div className="space-y-4">
            {[
              "100% Natural Linen & Hemp",
              "Long Sleeve Designs",
              "Men's & Women's Collections",
              "Breathable & Comfortable",
              "Sustainably Sourced"
            ].map((feature, index) => (
              <div key={index} className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                <span className="text-gray-700">{feature}</span>
              </div>
            ))}
          </div>

          <button className="bg-gradient-to-r from-green-600 to-orange-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-green-700 hover:to-orange-700 transition-all duration-300 shadow-lg hover:shadow-xl">
            View Collection
          </button>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 gap-4"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="h-48 bg-cover bg-center" style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1716110260822-86b298a25822?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDN8MHwxfHNlYXJjaHwzfHxsaW5lbiUyMGNsb3RoaW5nfGVufDB8fHxncmVlbnwxNzUxOTk3MTE2fDA&ixlib=rb-4.1.0&q=85')`
            }}></div>
            <div className="p-4">
              <h4 className="font-semibold text-gray-900">Men's Collection</h4>
              <p className="text-sm text-gray-600">Long sleeve linen shirts</p>
            </div>
          </div>

          <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 mt-8">
            <div className="h-48 bg-cover bg-center" style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1616057653867-d3edfb20a736?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDN8MHwxfHNlYXJjaHwyfHxsaW5lbiUyMGNsb3RoaW5nfGVufDB8fHxncmVlbnwxNzUxOTk3MTE2fDA&ixlib=rb-4.1.0&q=85')`
            }}></div>
            <div className="p-4">
              <h4 className="font-semibold text-gray-900">Women's Collection</h4>
              <p className="text-sm text-gray-600">Hemp blend garments</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

const Contact = () => (
  <section id="contact" className="py-20 bg-gradient-to-br from-green-900 to-green-800">
    <div className="container mx-auto px-6">
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-5xl font-bold text-white mb-6">Get In Touch</h2>
        <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-green-400 mx-auto mb-6"></div>
        <p className="text-xl text-white/90 max-w-3xl mx-auto">
          Ready to bring premium tropical produce to your market? Contact us today.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-12">
        <motion.div
          className="space-y-8"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="bg-orange-500 p-3 rounded-full">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-white font-medium">WhatsApp</p>
                  <p className="text-white/80">+221 76 551 10 22</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="bg-green-500 p-3 rounded-full">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-white font-medium">Location</p>
                  <p className="text-white/80">Scat Urbam, Grand Yoff<br />Dakar, Sénégal 11500</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="bg-orange-500 p-3 rounded-full">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-white font-medium">Export Markets</p>
                  <p className="text-white/80">Worldwide shipping available</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6">Why Choose AADA?</h3>
            <div className="space-y-3">
              {[
                "Premium quality tropical produce",
                "Sustainable farming practices",
                "Direct from Senegal's fertile lands",
                "Reliable international shipping",
                "Natural linen & hemp clothing"
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <Star className="w-4 h-4 text-orange-400" />
                  <span className="text-white/90">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          className="bg-white/10 backdrop-blur-sm rounded-2xl p-8"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-white mb-6">Send Us a Message</h3>
          <form className="space-y-6">
            <div>
              <label className="block text-white/90 mb-2">Name</label>
              <input 
                type="text" 
                className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/60 focus:outline-none focus:border-orange-400 transition-colors"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block text-white/90 mb-2">Email</label>
              <input 
                type="email" 
                className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/60 focus:outline-none focus:border-orange-400 transition-colors"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label className="block text-white/90 mb-2">Message</label>
              <textarea 
                rows={4}
                className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/60 focus:outline-none focus:border-orange-400 transition-colors resize-none"
                placeholder="Tell us about your requirements..."
              ></textarea>
            </div>
            <button className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white py-4 rounded-xl font-semibold text-lg hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-lg hover:shadow-xl">
              Send Message
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-gray-900 text-white py-12">
    <div className="container mx-auto px-6">
      <div className="grid md:grid-cols-4 gap-8">
        <div>
          <div className="flex items-center space-x-3 mb-4">
            <img src={AADA_LOGO} alt="AADA Logo" className="h-8 w-auto" />
          </div>
          <p className="text-gray-400 mb-4">
            Premium tropical exports from Senegal. By Nature, From Earth.
          </p>
        </div>
        
        <div>
          <h4 className="text-lg font-semibold mb-4">Products</h4>
          <ul className="space-y-2 text-gray-400">
            <li><a href="#" className="hover:text-white transition-colors">Gombo</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Melons (Coming Soon)</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Watermelons (Coming Soon)</a></li>
          </ul>
        </div>
        
        <div>
          <h4 className="text-lg font-semibold mb-4">Clothing</h4>
          <ul className="space-y-2 text-gray-400">
            <li><a href="#" className="hover:text-white transition-colors">Men's Collection</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Women's Collection</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Natural Linen</a></li>
          </ul>
        </div>
        
        <div>
          <h4 className="text-lg font-semibold mb-4">Contact</h4>
          <ul className="space-y-2 text-gray-400">
            <li>Dakar, Sénégal</li>
            <li>+221 76 551 10 22</li>
            <li>WhatsApp Available</li>
          </ul>
        </div>
      </div>
      
      <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
        <p>&copy; 2024 AADA. All rights reserved. | By Nature, From Earth</p>
      </div>
    </div>
  </footer>
);

function App() {
  return (
    <div className="App">
      <Hero />
      <About />
      <Products />
      <Clothing />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;