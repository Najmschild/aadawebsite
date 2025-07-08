import React, { useState } from "react";
import "./App.css";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Star, ChevronRight, Leaf, Globe, Award, ArrowRight, Shield, Users, Truck, FileText, CheckCircle, Languages, Euro, Clock, ChevronDown, Package, CreditCard, Calendar, AlertCircle } from "lucide-react";

const AADA_LOGO = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8IS0tIFNpbXBsaWZpZWQgQUFEQSBsb2dvIGJhc2VkIG9uIHRoZSBwcm92aWRlZCBkZXNpZ24gLS0+CiAgPGc+CiAgICA8IS0tIEh1dCBzdHJ1Y3R1cmUgLS0+CiAgICA8cGF0aCBkPSJNNTAgNjBMIDIwIDM0TCA4MCAzNFoiIGZpbGw9IiNEOTc5NDIiLz4KICAgIDxwYXRoIGQ9Ik0yMCAzNEwgMjUgMjBMIDc1IDIwTCA4MCAzNFoiIGZpbGw9IiNBMzQzMzYiLz4KICAgIDxwYXRoIGQ9Ik0yNSA1MEwgNzUgNTBMIDgwIDM0TCAyMCAzNFoiIGZpbGw9IiMyMjc3NDQiLz4KICAgIDx0ZXh0IHg9IjEwMCIgeT0iNTAiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIzNiIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiMyMjc3NDQiPmFkYTwvdGV4dD4KICA8L2c+Cjwvc3ZnPg==";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.6 } }
};

const LanguageToggle = ({ language, setLanguage }) => (
  <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-lg p-2">
    <button
      onClick={() => setLanguage('en')}
      className={`px-3 py-1 rounded text-sm font-medium transition-all ${
        language === 'en' ? 'bg-orange-500 text-white' : 'text-white/80 hover:text-white'
      }`}
    >
      EN
    </button>
    <button
      onClick={() => setLanguage('fr')}
      className={`px-3 py-1 rounded text-sm font-medium transition-all ${
        language === 'fr' ? 'bg-orange-500 text-white' : 'text-white/80 hover:text-white'
      }`}
    >
      FR
    </button>
  </div>
);

const Hero = ({ language, setLanguage }) => (
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
          <div className="hidden sm:block">
            <p className="text-white/90 text-sm font-medium">REX Number: SN-REX-2024-001</p>
            <p className="text-white/70 text-xs">Registered EU Exporter</p>
          </div>
        </div>
        <div className="flex items-center space-x-6">
          <LanguageToggle language={language} setLanguage={setLanguage} />
          <div className="hidden md:flex space-x-8">
            <a href="#certifications" className="text-white hover:text-orange-300 transition-colors font-medium">
              {language === 'fr' ? 'Certifications' : 'Certifications'}
            </a>
            <a href="#products" className="text-white hover:text-orange-300 transition-colors font-medium">
              {language === 'fr' ? 'Produits' : 'Products'}
            </a>
            <a href="#clothing" className="text-white hover:text-orange-300 transition-colors font-medium">
              {language === 'fr' ? 'Vêtements' : 'Clothing'}
            </a>
            <a href="#contact" className="text-white hover:text-orange-300 transition-colors font-medium">
              {language === 'fr' ? 'Contact' : 'Contact'}
            </a>
          </div>
        </div>
      </motion.nav>

      <div className="flex-1 flex items-center">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-6"
          >
            <div className="flex items-center space-x-4 mb-4">
              <div className="bg-green-600 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center space-x-2">
                <Shield className="w-4 h-4" />
                <span>{language === 'fr' ? 'Certifié UE' : 'EU Certified'}</span>
              </div>
              <div className="bg-orange-600 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center space-x-2">
                <Award className="w-4 h-4" />
                <span>{language === 'fr' ? 'Origine Sénégal' : 'Origin Senegal'}</span>
              </div>
            </div>
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 leading-tight">
              {language === 'fr' ? (
                <>
                  Exportation
                  <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent block">
                    Tropicale
                  </span>
                  <span className="text-green-400">Premium</span>
                </>
              ) : (
                <>
                  Premium
                  <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent block">
                    Tropical
                  </span>
                  <span className="text-green-400">Exports</span>
                </>
              )}
            </h1>
          </motion.div>

          <motion.p
            className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl font-light"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <span className="text-orange-300 font-medium">
              {language === 'fr' ? 'Par Nature, De la Terre' : 'By Nature, From Earth'}
            </span> - 
            {language === 'fr' 
              ? 'Fruits et légumes tropicaux frais du cœur du Sénégal, livrés avec excellence vers l\'Europe.'
              : 'Fresh tropical fruits and vegetables from the heart of Senegal, delivered with excellence to Europe.'}
          </motion.p>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
              <Truck className="w-6 h-6 text-orange-400 mx-auto mb-2" />
              <p className="text-white/90 text-sm font-medium">
                {language === 'fr' ? 'Livraison UE' : 'EU Delivery'}
              </p>
              <p className="text-white/70 text-xs">
                {language === 'fr' ? '7-10 jours' : '7-10 days'}
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
              <Shield className="w-6 h-6 text-green-400 mx-auto mb-2" />
              <p className="text-white/90 text-sm font-medium">
                {language === 'fr' ? 'Certifié Bio' : 'Organic Certified'}
              </p>
              <p className="text-white/70 text-xs">OEKO-TEX®</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
              <Euro className="w-6 h-6 text-orange-400 mx-auto mb-2" />
              <p className="text-white/90 text-sm font-medium">
                {language === 'fr' ? 'Prix EUR' : 'EUR Pricing'}
              </p>
              <p className="text-white/70 text-xs">
                {language === 'fr' ? 'Transparent' : 'Transparent'}
              </p>
            </div>
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <button className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2 group">
              <span>{language === 'fr' ? 'Voir les Produits' : 'View Products'}</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/20 transition-all duration-300 shadow-lg">
              {language === 'fr' ? 'Demande de Devis' : 'Request Quote'}
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  </section>
);

const Certifications = ({ language }) => (
  <section id="certifications" className="py-20 bg-white">
    <div className="container mx-auto px-6">
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-5xl font-bold text-gray-900 mb-6">
          {language === 'fr' ? 'Certifications & Conformité' : 'Certifications & Compliance'}
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-green-600 mx-auto mb-6"></div>
        <p className="text-xl text-gray-700 max-w-3xl mx-auto">
          {language === 'fr'
            ? 'Conformité totale aux normes européennes avec certifications officielles pour garantir la qualité et la sécurité.'
            : 'Full compliance with European standards with official certifications to guarantee quality and safety.'}
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          {
            title: language === 'fr' ? 'Exportateur Enregistré UE' : 'EU Registered Exporter',
            subtitle: 'REX Number: SN-REX-2024-001',
            description: language === 'fr' 
              ? 'Statut officiel d\'exportateur enregistré pour le commerce avec l\'Union Européenne.'
              : 'Official registered exporter status for trade with the European Union.',
            icon: <Globe className="w-8 h-8 text-blue-600" />
          },
          {
            title: language === 'fr' ? 'Origine Sénégal' : 'Origin Senegal',
            subtitle: language === 'fr' ? 'Certification Officielle' : 'Official Certification',
            description: language === 'fr'
              ? 'Certificat d\'origine officiel pour tous nos produits exportés du Sénégal.'
              : 'Official certificate of origin for all our products exported from Senegal.',
            icon: <Award className="w-8 h-8 text-green-600" />
          },
          {
            title: 'Masters of FLAX FIBRE™',
            subtitle: language === 'fr' ? 'Tissus du Portugal' : 'Fabrics from Portugal',
            description: language === 'fr'
              ? 'Certification premium pour nos tissus en lin naturel importés du Portugal.'
              : 'Premium certification for our natural linen fabrics imported from Portugal.',
            icon: <Leaf className="w-8 h-8 text-orange-600" />
          },
          {
            title: 'OEKO-TEX® Standard',
            subtitle: language === 'fr' ? 'Matériaux Végétaliens' : 'Vegan Materials',
            description: language === 'fr'
              ? 'Logos FloraPap® certifiés OEKO-TEX®, matériau végétalien en cellulose et latex.'
              : 'FloraPap® logos certified OEKO-TEX®, vegan material in cellulose and latex.',
            icon: <Shield className="w-8 h-8 text-green-600" />
          },
          {
            title: language === 'fr' ? 'Étiquettes Bio' : 'Organic Labels',
            subtitle: language === 'fr' ? 'Coton Biologique' : 'Organic Cotton',
            description: language === 'fr'
              ? 'Étiquettes de composition fabriquées avec du coton biologique certifié.'
              : 'Composition labels made with certified organic cotton.',
            icon: <CheckCircle className="w-8 h-8 text-green-600" />
          },
          {
            title: language === 'fr' ? 'Numéro NINE' : 'NINE Number',
            subtitle: 'SN-NINE-2024-0001',
            description: language === 'fr'
              ? 'Numéro d\'identification nationale pour l\'exportation vers l\'Europe.'
              : 'National identification number for export to Europe.',
            icon: <FileText className="w-8 h-8 text-blue-600" />
          }
        ].map((cert, index) => (
          <motion.div
            key={index}
            className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="mb-4">{cert.icon}</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">{cert.title}</h3>
            <p className="text-green-600 font-medium mb-3">{cert.subtitle}</p>
            <p className="text-gray-600 text-sm leading-relaxed">{cert.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const About = ({ language }) => (
  <section id="about" className="py-20 bg-gradient-to-br from-green-50 to-orange-50">
    <div className="container mx-auto px-6">
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-5xl font-bold text-gray-900 mb-6">
          {language === 'fr' ? 'À Propos d\'AADA' : 'About AADA'}
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-green-600 mx-auto mb-6"></div>
        <p className="text-xl text-gray-700 max-w-3xl mx-auto">
          {language === 'fr'
            ? 'Des terres fertiles du Sénégal à votre table européenne, AADA vous apporte les meilleurs produits tropicaux et la mode durable avec un engagement envers la qualité et la nature.'
            : 'From the fertile lands of Senegal to your European table, AADA brings you the finest tropical produce and sustainable fashion with a commitment to quality and nature.'}
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              {language === 'fr' ? 'Informations Société' : 'Company Information'}
            </h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                <span className="text-gray-700">
                  <strong>{language === 'fr' ? 'Fondée:' : 'Founded:'}</strong> 2024
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                <span className="text-gray-700">
                  <strong>{language === 'fr' ? 'Siège:' : 'Headquarters:'}</strong> Dakar, Sénégal
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                <span className="text-gray-700">
                  <strong>{language === 'fr' ? 'Spécialité:' : 'Specialty:'}</strong> 
                  {language === 'fr' ? ' Export tropical vers UE' : ' Tropical export to EU'}
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                <span className="text-gray-700">
                  <strong>{language === 'fr' ? 'Réponse:' : 'Response:'}</strong> 
                  {language === 'fr' ? ' Sous 24h garanties' : ' Within 24h guaranteed'}
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg">
            <div className="h-48 bg-cover bg-center" style={{
              backgroundImage: `url('https://images.pexels.com/photos/96417/pexels-photo-96417.jpeg')`
            }}></div>
            <div className="p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-2">
                {language === 'fr' ? 'Agriculture Sénégalaise' : 'Senegalese Agriculture'}
              </h4>
              <p className="text-gray-600 text-sm">
                {language === 'fr'
                  ? 'Nos produits proviennent directement des terres fertiles du Sénégal, cultivés avec des méthodes durables.'
                  : 'Our products come directly from the fertile lands of Senegal, grown with sustainable methods.'}
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {[
          {
            icon: <Globe className="w-8 h-8 text-green-600" />,
            title: language === 'fr' ? 'Portée Européenne' : 'European Reach',
            description: language === 'fr'
              ? 'Export de fruits et légumes tropicaux premium de Dakar vers les marchés européens.'
              : 'Exporting premium tropical fruits and vegetables from Dakar to European markets.'
          },
          {
            icon: <Leaf className="w-8 h-8 text-green-600" />,
            title: language === 'fr' ? 'Naturel & Bio' : 'Natural & Organic',
            description: language === 'fr'
              ? 'Produits 100% naturels, issus de sources durables et transformés dans le respect de notre terre.'
              : '100% natural products, sustainably sourced and processed with respect for our earth.'
          },
          {
            icon: <Award className="w-8 h-8 text-green-600" />,
            title: language === 'fr' ? 'Qualité Assurée' : 'Quality Assured',
            description: language === 'fr'
              ? 'Contrôle qualité rigoureux garantissant que seuls les meilleurs produits atteignent nos clients.'
              : 'Rigorous quality control ensuring only the finest products reach our customers.'
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

const Products = ({ language }) => (
  <section id="products" className="py-20 bg-white">
    <div className="container mx-auto px-6">
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-5xl font-bold text-gray-900 mb-6">
          {language === 'fr' ? 'Nos Produits' : 'Our Products'}
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-green-600 mx-auto mb-6"></div>
        <p className="text-xl text-gray-700 max-w-3xl mx-auto">
          {language === 'fr'
            ? 'Produits tropicaux frais et premium, directement sourcés des terres fertiles du Sénégal.'
            : 'Fresh, premium tropical produce sourced directly from Senegal\'s fertile lands.'}
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
                  {language === 'fr' ? 'Disponible' : 'Available Now'}
                </span>
              </div>
            </div>
          </div>
          <div className="p-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              {language === 'fr' ? 'Gombo Premium' : 'Premium Gombo'}
            </h3>
            <p className="text-gray-600 mb-4">
              {language === 'fr'
                ? 'Okra frais et tendre, récolté à maturité optimale. Riche en vitamines et parfait pour les plats traditionnels.'
                : 'Fresh, tender okra harvested at peak ripeness. Rich in vitamins and perfect for traditional dishes.'}
            </p>
            <div className="space-y-2 mb-4">
              <div className="flex items-center space-x-2 text-green-600 text-sm">
                <CheckCircle className="w-4 h-4" />
                <span>{language === 'fr' ? 'Origine Sénégal certifiée' : 'Certified Senegal origin'}</span>
              </div>
              <div className="flex items-center space-x-2 text-green-600 text-sm">
                <CheckCircle className="w-4 h-4" />
                <span>{language === 'fr' ? 'Livraison UE 7-10 jours' : 'EU delivery 7-10 days'}</span>
              </div>
              <div className="flex items-center space-x-2 text-green-600 text-sm">
                <CheckCircle className="w-4 h-4" />
                <span>{language === 'fr' ? 'Emballage export professionnel' : 'Professional export packaging'}</span>
              </div>
            </div>
            <button className="w-full bg-green-600 text-white py-3 rounded-xl font-semibold hover:bg-green-700 transition-colors">
              {language === 'fr' ? 'Demander un Devis' : 'Request Quote'}
            </button>
          </div>
        </motion.div>

        {/* Coming Soon Products */}
        {[
          {
            name: language === 'fr' ? 'Melons Frais' : 'Fresh Melons',
            description: language === 'fr'
              ? 'Melons sucrés et juteux avec une saveur et un arôme exceptionnels.'
              : 'Sweet, juicy melons with exceptional flavor and aroma.',
            image: "https://images.pexels.com/photos/8367553/pexels-photo-8367553.jpeg",
            season: language === 'fr' ? 'Disponible Automne 2024' : 'Available Fall 2024'
          },
          {
            name: language === 'fr' ? 'Pastèques' : 'Watermelons',
            description: language === 'fr'
              ? 'Pastèques volumineuses et rafraîchissantes, parfaites pour les climats chauds.'
              : 'Large, refreshing watermelons perfect for hot climates.',
            image: "https://images.pexels.com/photos/594059/pexels-photo-594059.jpeg",
            season: language === 'fr' ? 'Disponible Été 2024' : 'Available Summer 2024'
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
                  {language === 'fr' ? 'Prochainement' : 'Coming Soon'}
                </span>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{product.name}</h3>
              <p className="text-gray-600 mb-3">{product.description}</p>
              <p className="text-orange-600 font-medium text-sm mb-4">{product.season}</p>
              <button className="w-full bg-orange-600 text-white py-3 rounded-xl font-semibold hover:bg-orange-700 transition-colors">
                {language === 'fr' ? 'Me Notifier' : 'Notify Me'}
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const Clothing = ({ language }) => (
  <section id="clothing" className="py-20 bg-gradient-to-br from-orange-50 to-green-50">
    <div className="container mx-auto px-6">
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-5xl font-bold text-gray-900 mb-6">
          {language === 'fr' ? 'Vêtements Naturels' : 'Natural Clothing'}
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-green-600 mx-auto mb-6"></div>
        <p className="text-xl text-gray-700 max-w-3xl mx-auto">
          {language === 'fr'
            ? 'Mode durable fabriquée à partir de fibres 100% naturelles de lin et chanvre.'
            : 'Sustainable fashion made from 100% natural linen and hemp fibers.'}
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
          <h3 className="text-3xl font-bold text-gray-900">
            {language === 'fr' ? 'Mode Éco-Responsable' : 'Eco-Friendly Fashion'}
          </h3>
          <p className="text-gray-700 text-lg leading-relaxed">
            {language === 'fr'
              ? 'Notre ligne de vêtements propose des vêtements premium en lin et chanvre, soigneusement confectionnés pour le confort et la durabilité. Chaque pièce est conçue pour durer, fabriquée à partir de fibres naturelles qui respirent avec votre corps.'
              : 'Our clothing line features premium linen and hemp garments, carefully crafted for comfort and sustainability. Each piece is designed to last, made from natural fibers that breathe with your body.'}
          </p>
          
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
            <h4 className="text-xl font-semibold text-gray-900 mb-4">
              {language === 'fr' ? 'Certifications Textiles' : 'Textile Certifications'}
            </h4>
            <div className="space-y-3">
              {[
                {
                  title: "Masters of FLAX FIBRE™",
                  detail: language === 'fr' ? 'Tissus du Portugal' : 'Fabrics from Portugal'
                },
                {
                  title: "OEKO-TEX® Standard",
                  detail: language === 'fr' ? 'Matériaux végétaliens' : 'Vegan materials'
                },
                {
                  title: language === 'fr' ? 'Étiquettes Bio' : 'Organic Labels',
                  detail: language === 'fr' ? 'Coton biologique' : 'Organic cotton'
                },
                {
                  title: "FloraPap® Logos",
                  detail: language === 'fr' ? 'Lavable 60°C' : 'Washable 60°C'
                }
              ].map((cert, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-medium text-gray-900">{cert.title}</span>
                    <p className="text-sm text-gray-600">{cert.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            {[
              language === 'fr' ? 'Lin & Chanvre 100% Naturels' : '100% Natural Linen & Hemp',
              language === 'fr' ? 'Designs Manches Longues' : 'Long Sleeve Designs',
              language === 'fr' ? 'Collections Homme & Femme' : 'Men\'s & Women\'s Collections',
              language === 'fr' ? 'Respirant & Confortable' : 'Breathable & Comfortable',
              language === 'fr' ? 'Approvisionnement Durable' : 'Sustainably Sourced'
            ].map((feature, index) => (
              <div key={index} className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                <span className="text-gray-700">{feature}</span>
              </div>
            ))}
          </div>

          <button className="bg-gradient-to-r from-green-600 to-orange-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-green-700 hover:to-orange-700 transition-all duration-300 shadow-lg hover:shadow-xl">
            {language === 'fr' ? 'Voir la Collection' : 'View Collection'}
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
              <h4 className="font-semibold text-gray-900">
                {language === 'fr' ? 'Collection Homme' : 'Men\'s Collection'}
              </h4>
              <p className="text-sm text-gray-600">
                {language === 'fr' ? 'Chemises lin manches longues' : 'Long sleeve linen shirts'}
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 mt-8">
            <div className="h-48 bg-cover bg-center" style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1616057653867-d3edfb20a736?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDN8MHwxfHNlYXJjaHwyfHxsaW5lbiUyMGNsb3RoaW5nfGVufDB8fHxncmVlbnwxNzUxOTk3MTE2fDA&ixlib=rb-4.1.0&q=85')`
            }}></div>
            <div className="p-4">
              <h4 className="font-semibold text-gray-900">
                {language === 'fr' ? 'Collection Femme' : 'Women\'s Collection'}
              </h4>
              <p className="text-sm text-gray-600">
                {language === 'fr' ? 'Vêtements mélange chanvre' : 'Hemp blend garments'}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

const PricingOrderInfo = ({ language }) => (
  <section className="py-20 bg-gradient-to-br from-blue-50 to-green-50">
    <div className="container mx-auto px-6">
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-5xl font-bold text-gray-900 mb-6">
          {language === 'fr' ? 'Tarifs & Commandes' : 'Pricing & Orders'}
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-green-600 mx-auto mb-6"></div>
        <p className="text-xl text-gray-700 max-w-3xl mx-auto">
          {language === 'fr'
            ? 'Conditions commerciales transparentes pour les professionnels européens.'
            : 'Transparent commercial terms for European professionals.'}
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <motion.div
          className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center space-x-3 mb-6">
            <div className="bg-green-100 p-3 rounded-full">
              <Package className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900">
              {language === 'fr' ? 'Informations Produits' : 'Product Information'}
            </h3>
          </div>
          
          <div className="space-y-6">
            <div className="border-l-4 border-green-500 pl-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-2">
                {language === 'fr' ? 'Gombo Premium' : 'Premium Gombo'}
              </h4>
              <div className="space-y-2 text-gray-700">
                <p><strong>{language === 'fr' ? 'Prix:' : 'Price:'}</strong> €3.20-€3.80/kg</p>
                <p><strong>{language === 'fr' ? 'Commande min:' : 'Min order:'}</strong> 500kg</p>
                <p><strong>{language === 'fr' ? 'Emballage:' : 'Packaging:'}</strong> {language === 'fr' ? 'Cartons 10kg' : 'Boxes 10kg'}</p>
                <p><strong>{language === 'fr' ? 'Saison:' : 'Season:'}</strong> {language === 'fr' ? 'Toute l\'année' : 'Year-round'}</p>
              </div>
            </div>

            <div className="border-l-4 border-orange-500 pl-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-2">
                {language === 'fr' ? 'Melons (Prochainement)' : 'Melons (Coming Soon)'}
              </h4>
              <div className="space-y-2 text-gray-700">
                <p><strong>{language === 'fr' ? 'Prix estimé:' : 'Estimated price:'}</strong> €2.50-€3.00/kg</p>
                <p><strong>{language === 'fr' ? 'Commande min:' : 'Min order:'}</strong> 300kg</p>
                <p><strong>{language === 'fr' ? 'Disponible:' : 'Available:'}</strong> {language === 'fr' ? 'Automne 2024' : 'Fall 2024'}</p>
              </div>
            </div>

            <div className="border-l-4 border-red-500 pl-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-2">
                {language === 'fr' ? 'Pastèques (Prochainement)' : 'Watermelons (Coming Soon)'}
              </h4>
              <div className="space-y-2 text-gray-700">
                <p><strong>{language === 'fr' ? 'Prix estimé:' : 'Estimated price:'}</strong> €1.80-€2.20/kg</p>
                <p><strong>{language === 'fr' ? 'Commande min:' : 'Min order:'}</strong> 800kg</p>
                <p><strong>{language === 'fr' ? 'Disponible:' : 'Available:'}</strong> {language === 'fr' ? 'Été 2024' : 'Summer 2024'}</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center space-x-3 mb-6">
            <div className="bg-blue-100 p-3 rounded-full">
              <CreditCard className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900">
              {language === 'fr' ? 'Conditions Commerciales' : 'Commercial Terms'}
            </h3>
          </div>
          
          <div className="space-y-6">
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-3">
                {language === 'fr' ? 'Conditions de Paiement' : 'Payment Terms'}
              </h4>
              <div className="space-y-2 text-gray-700">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>{language === 'fr' ? '30% acompte à la commande' : '30% deposit on order'}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>{language === 'fr' ? '70% avant expédition' : '70% before shipment'}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>{language === 'fr' ? 'Virement bancaire SEPA' : 'SEPA bank transfer'}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>{language === 'fr' ? 'Lettre de crédit acceptée' : 'Letter of credit accepted'}</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-3">
                {language === 'fr' ? 'Remises Volume' : 'Volume Discounts'}
              </h4>
              <div className="space-y-2 text-gray-700">
                <div className="flex justify-between">
                  <span>500kg - 1 tonne:</span>
                  <span className="font-semibold text-green-600">{language === 'fr' ? 'Prix standard' : 'Standard price'}</span>
                </div>
                <div className="flex justify-between">
                  <span>1-5 tonnes:</span>
                  <span className="font-semibold text-green-600">-3%</span>
                </div>
                <div className="flex justify-between">
                  <span>5-10 tonnes:</span>
                  <span className="font-semibold text-green-600">-5%</span>
                </div>
                <div className="flex justify-between">
                  <span>10+ tonnes:</span>
                  <span className="font-semibold text-green-600">-8%</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-3">
                {language === 'fr' ? 'Livraison' : 'Delivery'}
              </h4>
              <div className="space-y-2 text-gray-700">
                <div className="flex items-center space-x-2">
                  <Truck className="w-4 h-4 text-blue-500" />
                  <span>{language === 'fr' ? 'FOB Dakar inclus' : 'FOB Dakar included'}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Truck className="w-4 h-4 text-blue-500" />
                  <span>{language === 'fr' ? 'CIF ports UE: +€0.15/kg' : 'CIF EU ports: +€0.15/kg'}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4 text-blue-500" />
                  <span>{language === 'fr' ? 'Délai: 7-10 jours' : 'Transit: 7-10 days'}</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="bg-gradient-to-r from-orange-500 to-green-600 rounded-2xl p-8 text-white text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h3 className="text-2xl font-bold mb-4">
          {language === 'fr' ? 'Prêt à Commander ?' : 'Ready to Order?'}
        </h3>
        <p className="text-lg mb-6 opacity-90">
          {language === 'fr'
            ? 'Contactez-nous pour un devis personnalisé et des échantillons gratuits.'
            : 'Contact us for a personalized quote and free samples.'}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-white text-orange-600 px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors">
            {language === 'fr' ? 'Demander un Devis' : 'Request Quote'}
          </button>
          <button className="bg-white/20 backdrop-blur-sm border border-white/30 text-white px-8 py-3 rounded-xl font-semibold hover:bg-white/30 transition-colors">
            {language === 'fr' ? 'Commander Échantillons' : 'Order Samples'}
          </button>
        </div>
      </motion.div>
    </div>
  </section>
);

const FAQ = ({ language }) => {
  const [openFAQ, setOpenFAQ] = useState(null);

  const faqs = [
    {
      question: language === 'fr' ? 'Quelle est la fraîcheur garantie de vos produits ?' : 'What is the guaranteed freshness of your products?',
      answer: language === 'fr' 
        ? 'Nos produits sont récoltés et expédiés dans les 48h. Grâce à notre chaîne du froid, ils arrivent en Europe avec une fraîcheur optimale de 8-12 jours après récolte.'
        : 'Our products are harvested and shipped within 48h. Thanks to our cold chain, they arrive in Europe with optimal freshness of 8-12 days after harvest.'
    },
    {
      question: language === 'fr' ? 'Quels sont vos délais de livraison vers l\'Europe ?' : 'What are your delivery times to Europe?',
      answer: language === 'fr'
        ? 'Délai standard de 7-10 jours par transport maritime réfrigéré. Expédition express aérienne disponible en 2-3 jours (supplément +€2.50/kg).'
        : 'Standard 7-10 days by refrigerated sea transport. Express air shipping available in 2-3 days (surcharge +€2.50/kg).'
    },
    {
      question: language === 'fr' ? 'Proposez-vous des échantillons avant commande ?' : 'Do you offer samples before ordering?',
      answer: language === 'fr'
        ? 'Oui, nous envoyons des échantillons gratuits (2-5kg) pour tous nos produits. Frais de transport à la charge du client (environ €25-35 par express).'
        : 'Yes, we send free samples (2-5kg) for all our products. Shipping costs borne by customer (approximately €25-35 by express).'
    },
    {
      question: language === 'fr' ? 'Quelles certifications possédez-vous ?' : 'What certifications do you have?',
      answer: language === 'fr'
        ? 'Nous avons le numéro REX (SN-REX-2024-001), certification Origine Sénégal, NINE (SN-NINE-2024-0001), et nos vêtements sont certifiés OEKO-TEX® et Masters of FLAX FIBRE™.'
        : 'We have REX number (SN-REX-2024-001), Senegal Origin certification, NINE (SN-NINE-2024-0001), and our clothing is certified OEKO-TEX® and Masters of FLAX FIBRE™.'
    },
    {
      question: language === 'fr' ? 'Comment gérez-vous le contrôle qualité ?' : 'How do you manage quality control?',
      answer: language === 'fr'
        ? 'Inspection à 3 niveaux : contrôle à la récolte, vérification avant emballage, et inspection finale avant expédition. Photos de qualité envoyées avant chaque expédition.'
        : '3-level inspection: harvest control, pre-packaging verification, and final inspection before shipment. Quality photos sent before each shipment.'
    },
    {
      question: language === 'fr' ? 'Acceptez-vous les paiements européens ?' : 'Do you accept European payments?',
      answer: language === 'fr'
        ? 'Oui, nous acceptons les virements SEPA, lettres de crédit, et avons un compte bancaire en euros. Conditions: 30% acompte, 70% avant expédition.'
        : 'Yes, we accept SEPA transfers, letters of credit, and have a euro bank account. Terms: 30% deposit, 70% before shipment.'
    },
    {
      question: language === 'fr' ? 'Que se passe-t-il en cas de problème de livraison ?' : 'What happens in case of delivery problems?',
      answer: language === 'fr'
        ? 'Nous avons une assurance transport complète et garantissons le remplacement ou remboursement intégral en cas de problème. Service client réactif en moins de 24h.'
        : 'We have comprehensive transport insurance and guarantee full replacement or refund in case of problems. Responsive customer service within 24h.'
    },
    {
      question: language === 'fr' ? 'Proposez-vous des contrats saisonniers ?' : 'Do you offer seasonal contracts?',
      answer: language === 'fr'
        ? 'Oui, nous proposons des contrats annuels avec prix fixes, priorité d\'approvisionnement, et conditions préférentielles. Idéal pour les distributeurs réguliers.'
        : 'Yes, we offer annual contracts with fixed prices, supply priority, and preferential terms. Ideal for regular distributors.'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            {language === 'fr' ? 'Questions Fréquentes' : 'Frequently Asked Questions'}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-green-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            {language === 'fr'
              ? 'Réponses aux questions les plus courantes de nos clients européens.'
              : 'Answers to the most common questions from our European customers.'}
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                className="bg-gray-50 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <button
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-100 transition-colors"
                  onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                >
                  <h3 className="text-lg font-semibold text-gray-900 pr-4">
                    {faq.question}
                  </h3>
                  <ChevronDown 
                    className={`w-5 h-5 text-gray-500 transition-transform ${
                      openFAQ === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                
                {openFAQ === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-4"
                  >
                    <div className="border-t border-gray-200 pt-4">
                      <p className="text-gray-700 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-green-50 to-orange-50 rounded-2xl p-8 inline-block">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <AlertCircle className="w-6 h-6 text-orange-600" />
              <h3 className="text-xl font-semibold text-gray-900">
                {language === 'fr' ? 'Autre Question ?' : 'Other Question?'}
              </h3>
            </div>
            <p className="text-gray-700 mb-4">
              {language === 'fr'
                ? 'Notre équipe répond à toutes vos questions sous 24h.'
                : 'Our team answers all your questions within 24h.'}
            </p>
            <button className="bg-gradient-to-r from-orange-500 to-green-600 text-white px-8 py-3 rounded-xl font-semibold hover:from-orange-600 hover:to-green-700 transition-all duration-300 shadow-lg hover:shadow-xl">
              {language === 'fr' ? 'Nous Contacter' : 'Contact Us'}
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
  <section id="contact" className="py-20 bg-gradient-to-br from-green-900 to-green-800">
    <div className="container mx-auto px-6">
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-5xl font-bold text-white mb-6">
          {language === 'fr' ? 'Contactez-Nous' : 'Get In Touch'}
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-green-400 mx-auto mb-6"></div>
        <p className="text-xl text-white/90 max-w-3xl mx-auto">
          {language === 'fr'
            ? 'Prêt à apporter des produits tropicaux premium à votre marché européen ? Contactez-nous dès aujourd\'hui.'
            : 'Ready to bring premium tropical produce to your European market? Contact us today.'}
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
            <h3 className="text-2xl font-bold text-white mb-6">
              {language === 'fr' ? 'Informations de Contact' : 'Contact Information'}
            </h3>
            
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
                  <p className="text-white font-medium">
                    {language === 'fr' ? 'Localisation' : 'Location'}
                  </p>
                  <p className="text-white/80">Scat Urbam, Grand Yoff<br />Dakar, Sénégal 11500</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="bg-blue-500 p-3 rounded-full">
                  <FileText className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-white font-medium">
                    {language === 'fr' ? 'Numéros Officiels' : 'Official Numbers'}
                  </p>
                  <p className="text-white/80">REX: SN-REX-2024-001<br />NINE: SN-NINE-2024-0001</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="bg-orange-500 p-3 rounded-full">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-white font-medium">
                    {language === 'fr' ? 'Temps de Réponse' : 'Response Time'}
                  </p>
                  <p className="text-white/80">
                    {language === 'fr' ? 'Moins de 24h garanti' : 'Less than 24h guaranteed'}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6">
              {language === 'fr' ? 'Pourquoi Choisir AADA ?' : 'Why Choose AADA?'}
            </h3>
            <div className="space-y-3">
              {[
                language === 'fr' ? 'Produits tropicaux de qualité premium' : 'Premium quality tropical produce',
                language === 'fr' ? 'Pratiques agricoles durables' : 'Sustainable farming practices',
                language === 'fr' ? 'Direct des terres fertiles du Sénégal' : 'Direct from Senegal\'s fertile lands',
                language === 'fr' ? 'Expédition internationale fiable' : 'Reliable international shipping',
                language === 'fr' ? 'Vêtements lin & chanvre naturels' : 'Natural linen & hemp clothing',
                language === 'fr' ? 'Conformité totale UE' : 'Full EU compliance',
                language === 'fr' ? 'Certifications officielles' : 'Official certifications'
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
          <h3 className="text-2xl font-bold text-white mb-6">
            {language === 'fr' ? 'Envoyez-nous un Message' : 'Send Us a Message'}
          </h3>
          <form className="space-y-6">
            <div>
              <label className="block text-white/90 mb-2">
                {language === 'fr' ? 'Nom' : 'Name'}
              </label>
              <input 
                type="text" 
                className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/60 focus:outline-none focus:border-orange-400 transition-colors"
                placeholder={language === 'fr' ? 'Votre nom' : 'Your name'}
              />
            </div>
            <div>
              <label className="block text-white/90 mb-2">
                {language === 'fr' ? 'Société' : 'Company'}
              </label>
              <input 
                type="text" 
                className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/60 focus:outline-none focus:border-orange-400 transition-colors"
                placeholder={language === 'fr' ? 'Nom de votre société' : 'Your company name'}
              />
            </div>
            <div>
              <label className="block text-white/90 mb-2">Email</label>
              <input 
                type="email" 
                className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/60 focus:outline-none focus:border-orange-400 transition-colors"
                placeholder={language === 'fr' ? 'votre@email.com' : 'your@email.com'}
              />
            </div>
            <div>
              <label className="block text-white/90 mb-2">
                {language === 'fr' ? 'Type de Demande' : 'Request Type'}
              </label>
              <select className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-orange-400 transition-colors">
                <option value="" className="text-gray-900">
                  {language === 'fr' ? 'Sélectionnez...' : 'Select...'}
                </option>
                <option value="produce" className="text-gray-900">
                  {language === 'fr' ? 'Fruits & Légumes' : 'Fruits & Vegetables'}
                </option>
                <option value="clothing" className="text-gray-900">
                  {language === 'fr' ? 'Vêtements' : 'Clothing'}
                </option>
                <option value="both" className="text-gray-900">
                  {language === 'fr' ? 'Les Deux' : 'Both'}
                </option>
              </select>
            </div>
            <div>
              <label className="block text-white/90 mb-2">
                {language === 'fr' ? 'Message' : 'Message'}
              </label>
              <textarea 
                rows={4}
                className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/60 focus:outline-none focus:border-orange-400 transition-colors resize-none"
                placeholder={language === 'fr' ? 'Parlez-nous de vos besoins...' : 'Tell us about your requirements...'}
              ></textarea>
            </div>
            <button className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white py-4 rounded-xl font-semibold text-lg hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-lg hover:shadow-xl">
              {language === 'fr' ? 'Envoyer le Message' : 'Send Message'}
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  </section>
);

const Footer = ({ language }) => (
  <footer className="bg-gray-900 text-white py-12">
    <div className="container mx-auto px-6">
      <div className="grid md:grid-cols-4 gap-8">
        <div>
          <div className="flex items-center space-x-3 mb-4">
            <img src={AADA_LOGO} alt="AADA Logo" className="h-8 w-auto" />
          </div>
          <p className="text-gray-400 mb-4">
            {language === 'fr'
              ? 'Exportation tropicale premium du Sénégal. Par Nature, De la Terre.'
              : 'Premium tropical exports from Senegal. By Nature, From Earth.'}
          </p>
          <div className="space-y-1 text-sm text-gray-400">
            <p>REX: SN-REX-2024-001</p>
            <p>NINE: SN-NINE-2024-0001</p>
          </div>
        </div>
        
        <div>
          <h4 className="text-lg font-semibold mb-4">
            {language === 'fr' ? 'Produits' : 'Products'}
          </h4>
          <ul className="space-y-2 text-gray-400">
            <li><a href="#" className="hover:text-white transition-colors">Gombo</a></li>
            <li><a href="#" className="hover:text-white transition-colors">
              {language === 'fr' ? 'Melons (Prochainement)' : 'Melons (Coming Soon)'}
            </a></li>
            <li><a href="#" className="hover:text-white transition-colors">
              {language === 'fr' ? 'Pastèques (Prochainement)' : 'Watermelons (Coming Soon)'}
            </a></li>
          </ul>
        </div>
        
        <div>
          <h4 className="text-lg font-semibold mb-4">
            {language === 'fr' ? 'Vêtements' : 'Clothing'}
          </h4>
          <ul className="space-y-2 text-gray-400">
            <li><a href="#" className="hover:text-white transition-colors">
              {language === 'fr' ? 'Collection Homme' : 'Men\'s Collection'}
            </a></li>
            <li><a href="#" className="hover:text-white transition-colors">
              {language === 'fr' ? 'Collection Femme' : 'Women\'s Collection'}
            </a></li>
            <li><a href="#" className="hover:text-white transition-colors">
              {language === 'fr' ? 'Lin Naturel' : 'Natural Linen'}
            </a></li>
          </ul>
        </div>
        
        <div>
          <h4 className="text-lg font-semibold mb-4">Contact</h4>
          <ul className="space-y-2 text-gray-400">
            <li>Dakar, Sénégal</li>
            <li>+221 76 551 10 22</li>
            <li>WhatsApp {language === 'fr' ? 'Disponible' : 'Available'}</li>
            <li className="text-green-400">
              {language === 'fr' ? 'Réponse < 24h' : 'Response < 24h'}
            </li>
          </ul>
        </div>
      </div>
      
      <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
        <p>&copy; 2024 AADA. {language === 'fr' ? 'Tous droits réservés' : 'All rights reserved'}. | 
          {language === 'fr' ? 'Par Nature, De la Terre' : 'By Nature, From Earth'}
        </p>
      </div>
    </div>
  </footer>
);

function App() {
  const [language, setLanguage] = useState('en');

  return (
    <div className="App">
      <Hero language={language} setLanguage={setLanguage} />
      <Certifications language={language} />
      <About language={language} />
      <Products language={language} />
      <Clothing language={language} />
      <Contact language={language} />
      <Footer language={language} />
    </div>
  );
}

export default App;