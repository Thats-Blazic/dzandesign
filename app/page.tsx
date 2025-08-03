"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  Menu,
  X,
  Code,
  TrendingUp,
  Mail,
  Phone,
  ArrowRight,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import Link from "next/link"

export default function CreativeAgency() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)



  return (
    <div className="min-h-screen bg-white text-black overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-100 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/" className="text-3xl font-black text-black tracking-tight">
                DZAN DESIGN<span className="text-blue-600">.</span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-center space-x-12">
                <button
                  onClick={() => {
                    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-black hover:text-blue-600 transition-all duration-300 font-medium text-lg relative group cursor-pointer"
                >
                  Services
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                </button>

                <button
                  onClick={() => {
                    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-black hover:text-blue-600 transition-all duration-300 font-medium text-lg relative group cursor-pointer"
                >
                  About
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                </button>
                <button
                  onClick={() => {
                    document.getElementById('testimonials')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-black hover:text-blue-600 transition-all duration-300 font-medium text-lg relative group cursor-pointer"
                >
                  Testimonials
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                </button>
                <button
                  onClick={() => {
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-black hover:text-blue-600 transition-all duration-300 font-medium text-lg relative group cursor-pointer"
                >
                  Contact
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                </button>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button variant="ghost" size="icon" onClick={toggleMenu} className="text-black hover:text-blue-600">
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-md">
            <div className="px-4 pt-2 pb-6 space-y-4">
              <button
                onClick={() => {
                  document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
                  toggleMenu();
                }}
                className="block w-full text-left px-4 py-3 text-black hover:text-blue-600 transition-colors duration-200 font-medium text-lg cursor-pointer"
              >
                Services
              </button>

              <button
                onClick={() => {
                  document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
                  toggleMenu();
                }}
                className="block w-full text-left px-4 py-3 text-black hover:text-blue-600 transition-colors duration-200 font-medium text-lg cursor-pointer"
              >
                About
              </button>
              <button
                onClick={() => {
                  document.getElementById('testimonials')?.scrollIntoView({ behavior: 'smooth' });
                  toggleMenu();
                }}
                className="block w-full text-left px-4 py-3 text-black hover:text-blue-600 transition-colors duration-200 font-medium text-lg cursor-pointer"
              >
                Testimonials
              </button>
              <button
                onClick={() => {
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                  toggleMenu();
                }}
                className="block w-full text-left px-4 py-3 text-black hover:text-blue-600 transition-colors duration-200 font-medium text-lg cursor-pointer"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-20 min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-gray-50 to-white relative overflow-hidden">
        {/* Animated Background Elements */}
        <motion.div 
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        ></motion.div>
        <motion.div 
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        ></motion.div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div 
            className="mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.span 
              className="inline-block px-6 py-2 bg-blue-600/10 text-blue-600 font-semibold text-sm uppercase tracking-wider rounded-full mb-8"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Creative Agency
            </motion.span>
          </motion.div>
          
          <motion.h1 
            className="text-5xl sm:text-7xl lg:text-9xl font-black text-black mb-8 leading-none tracking-tight"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            We build brands
            <br />
            that get
            <br />
            <motion.span 
              className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              remembered
            </motion.span>
          </motion.h1>
          
          <motion.p 
            className="text-xl sm:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed font-light"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            Creative solutions that drive results. We craft memorable experiences through design, development, and
            strategic thinking that transforms businesses.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-6 text-lg font-semibold rounded-full transition-all duration-300 hover:shadow-2xl hover:shadow-blue-600/25 group"
                onClick={() => {
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Contact Us
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowRight className="ml-2 h-5 w-5" />
                </motion.div>
              </Button>
            </motion.div>
            
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-black text-black hover:bg-black hover:text-white px-10 py-6 text-lg font-semibold rounded-full transition-all duration-300 bg-transparent"
                onClick={() => {
                  document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                View Our Work
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-32 bg-black text-white relative">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <span className="inline-block px-6 py-2 bg-blue-600/20 text-blue-400 font-semibold text-sm uppercase tracking-wider rounded-full mb-8">
              What We Do
            </span>
            <h2 className="text-5xl sm:text-7xl font-black mb-8">Our Services</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              We offer comprehensive creative solutions that elevate your brand and drive meaningful results.
            </p>
          </div>

          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-2 gap-12"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Graphic Design */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <Link href="/graphic-design">
                <Card className="bg-white/10 backdrop-blur-md border-2 border-white/20 hover:bg-gradient-to-br hover:from-blue-600/30 hover:to-blue-800/30 hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-600/25 transition-all duration-500 cursor-pointer group rounded-3xl overflow-hidden">
                  <CardContent className="p-8 relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-3xl"></div>
                    <div className="relative z-10">
                      <div className="flex items-center mb-6">
                        <motion.div 
                          className="w-16 h-16 bg-gradient-to-br from-blue-600/30 to-blue-800/30 rounded-2xl flex items-center justify-center group-hover:bg-gradient-to-br group-hover:from-blue-600 group-hover:to-blue-800 transition-all duration-500 shadow-lg group-hover:shadow-blue-600/50 mr-4"
                          whileHover={{ scale: 1.1, rotate: 5 }}
                        >
                          <i className="fas fa-eye text-blue-400 group-hover:text-white transition-colors duration-500 text-2xl"></i>
                        </motion.div>
                        <h3 className="text-3xl font-black text-blue-400 group-hover:text-white transition-colors duration-500">
                          Graphic Design
                        </h3>
                      </div>
                      <p className="text-gray-300 group-hover:text-white/95 transition-colors duration-500 text-lg leading-relaxed font-medium mb-8">
                        Visuals, identity, and full brand packages that make your business stand out from the competition and
                        resonate with your audience.
                      </p>
                      
                      {/* Graphic Design Gallery */}
                      <div className="grid grid-cols-3 gap-3">
                        <motion.div 
                          className="aspect-square rounded-2xl overflow-hidden group-hover:scale-105 transition-all duration-500"
                          whileHover={{ scale: 1.05 }}
                        >
                          <img 
                            src="/THUMB/DzanDizajn_Vlog_A.jpg" 
                            alt="Vlog Design A" 
                            className="w-full h-full object-cover"
                          />
                        </motion.div>
                        <motion.div 
                          className="aspect-square rounded-2xl overflow-hidden group-hover:scale-105 transition-all duration-500"
                          whileHover={{ scale: 1.05 }}
                        >
                          <img 
                            src="/THUMB/fix23.png" 
                            alt="Fix 23 Design" 
                            className="w-full h-full object-cover"
                          />
                        </motion.div>
                        <motion.div 
                          className="aspect-square rounded-2xl overflow-hidden group-hover:scale-105 transition-all duration-500"
                          whileHover={{ scale: 1.05 }}
                        >
                          <img 
                            src="/THUMB/circus.png" 
                            alt="Circus Design" 
                            className="w-full h-full object-cover"
                          />
                        </motion.div>
                        <motion.div 
                          className="aspect-square rounded-2xl overflow-hidden group-hover:scale-105 transition-all duration-500"
                          whileHover={{ scale: 1.05 }}
                        >
                          <img 
                            src="/THUMB/gastro dzan2.png" 
                            alt="Gastro Design" 
                            className="w-full h-full object-cover"
                          />
                        </motion.div>
                        <motion.div 
                          className="aspect-square rounded-2xl overflow-hidden group-hover:scale-105 transition-all duration-500"
                          whileHover={{ scale: 1.05 }}
                        >
                          <img 
                            src="/THUMB/redesign.png" 
                            alt="Redesign Project" 
                            className="w-full h-full object-cover"
                          />
                        </motion.div>
                        <motion.div 
                          className="aspect-square rounded-2xl overflow-hidden group-hover:scale-105 transition-all duration-500"
                          whileHover={{ scale: 1.05 }}
                        >
                          <img 
                            src="/THUMB/sushi232.png" 
                            alt="Sushi Design" 
                            className="w-full h-full object-cover"
                          />
                        </motion.div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>

            {/* Websites - Golden Premium */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -15, scale: 1.02 }}
            >
              <Link href="/websites">
                <Card className="bg-gradient-to-br from-yellow-400/30 via-amber-400/25 to-orange-400/30 backdrop-blur-md border-2 border-yellow-500/50 hover:bg-gradient-to-br hover:from-yellow-400/50 hover:via-amber-400/45 hover:to-orange-400/50 hover:border-yellow-400 hover:shadow-2xl hover:shadow-yellow-500/40 transition-all duration-500 cursor-pointer group rounded-3xl overflow-hidden relative">
                  <CardContent className="p-8 text-center relative">
                    <div className="relative z-10">
                      <div className="flex items-center justify-center mb-6">
                        <motion.div 
                          className="w-16 h-16 bg-gradient-to-br from-yellow-500/90 to-orange-500/60 rounded-2xl flex items-center justify-center group-hover:bg-gradient-to-br group-hover:from-yellow-500 group-hover:to-orange-500 transition-all duration-500 shadow-lg group-hover:shadow-yellow-500/50 mr-4"
                          whileHover={{ scale: 1.1, rotate: 10 }}
                          animate={{ rotate: [0, 5, 0] }}
                          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        >
                          <Code className="h-8 w-8 text-white group-hover:text-white transition-all duration-500" />
                        </motion.div>
                        <h3 className="text-3xl font-black text-black group-hover:text-black transition-all duration-500">
                          Websites
                        </h3>
                      </div>
                      
                      <p className="text-lg text-gray-800 group-hover:text-gray-900 transition-all duration-500 leading-relaxed font-medium mb-8">
                        Modern website and app development that converts visitors into customers and drives sustainable
                        business growth.
                      </p>
                      
                      {/* Websites Gallery */}
                      <div className="grid grid-cols-3 gap-3">
                        <motion.div 
                          className="aspect-square rounded-2xl overflow-hidden group-hover:scale-105 transition-all duration-500"
                          whileHover={{ scale: 1.05 }}
                        >
                          <img 
                            src="/sajt/sajt1.png" 
                            alt="Website Project 1" 
                            className="w-full h-full object-cover"
                          />
                        </motion.div>
                        <motion.div 
                          className="aspect-square rounded-2xl overflow-hidden group-hover:scale-105 transition-all duration-500"
                          whileHover={{ scale: 1.05 }}
                        >
                          <img 
                            src="/sajt/saj2.jpg" 
                            alt="Website Project 2" 
                            className="w-full h-full object-cover"
                          />
                        </motion.div>
                        <motion.div 
                          className="aspect-square rounded-2xl overflow-hidden group-hover:scale-105 transition-all duration-500"
                          whileHover={{ scale: 1.05 }}
                        >
                          <img 
                            src="/sajt/sajt3.jpg" 
                            alt="Website Project 3" 
                            className="w-full h-full object-cover"
                          />
                        </motion.div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>



      {/* About Us Section */}
      <section id="about" className="py-32 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <span className="inline-block px-6 py-2 bg-blue-600/10 text-blue-600 font-semibold text-sm uppercase tracking-wider rounded-full mb-8">
              Team
            </span>
            <h2 className="text-5xl sm:text-7xl font-black text-black mb-8">Meet Our Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Talented individuals who bring creativity, expertise, and passion to every project.
            </p>
          </div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-12"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Džan */}
            <motion.div 
              className="text-center group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <div className="relative mb-8">
                <motion.div 
                  className="w-64 h-64 mx-auto bg-gradient-to-br from-gray-200 to-gray-300 rounded-3xl overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                >
                  <img
                    src="/dzan.png"
                    alt="Džan - Senior Graphic Designer"
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                  />
                </motion.div>
                <motion.div 
                  className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500"
                  whileHover={{ scale: 1.1 }}
                >
                  <i className="fas fa-eye text-white text-2xl"></i>
                </motion.div>
              </div>
              <h3 className="text-3xl font-bold mb-3 text-black">Džan</h3>
              <p className="text-blue-600 font-semibold mb-4 text-lg">Senior Graphic Designer</p>
              <p className="text-gray-600 leading-relaxed text-lg">
                Creates visual identities that capture the essence of brands and resonate deeply with target audiences.
              </p>
            </motion.div>

            {/* Jason Kajzer */}
            <motion.div 
              className="text-center group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <div className="relative mb-8">
                <motion.div 
                  className="w-64 h-64 mx-auto bg-gradient-to-br from-gray-200 to-gray-300 rounded-3xl overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                >
                  <img
                    src="/dzeki.jpg"
                    alt="Jason Kajzer - Web & App Developer"
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                  />
                </motion.div>
                <motion.div 
                  className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500"
                  whileHover={{ scale: 1.1 }}
                >
                  <Code className="h-8 w-8 text-white" />
                </motion.div>
              </div>
              <h3 className="text-3xl font-bold mb-3 text-black">Jason Kajzer</h3>
              <p className="text-blue-600 font-semibold mb-4 text-lg">Web & App Developer</p>
              <p className="text-gray-600 leading-relaxed text-lg">
                Builds high-performance websites and applications that deliver exceptional user experiences and drive
                results.
              </p>
            </motion.div>

            {/* Azur */}
            <motion.div 
              className="text-center group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <div className="relative mb-8">
                <motion.div 
                  className="w-64 h-64 mx-auto bg-gradient-to-br from-gray-200 to-gray-300 rounded-3xl overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                >
                  <img
                    src="/azur.jpg"
                    alt="Azur - Appointment Setter and High Ticket Closing"
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                  />
                </motion.div>
                <motion.div 
                  className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500"
                  whileHover={{ scale: 1.1 }}
                >
                  <TrendingUp className="h-8 w-8 text-white" />
                </motion.div>
              </div>
              <h3 className="text-3xl font-bold mb-3 text-black">Azur</h3>
              <p className="text-blue-600 font-semibold mb-4 text-lg">Appointment Setter and High Ticket Closing</p>
              <p className="text-gray-600 leading-relaxed text-lg">
                Specializes in appointment setting and high-ticket sales closing to drive revenue growth and maximize
                business opportunities.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-32 bg-black text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <span className="inline-block px-6 py-2 bg-blue-600/20 text-blue-400 font-semibold text-sm uppercase tracking-wider rounded-full mb-8">
              Testimonials
            </span>
            <h2 className="text-5xl sm:text-7xl font-black mb-8">What Clients Say</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-white/10 backdrop-blur-md border-2 border-white/20 hover:bg-gradient-to-br hover:from-blue-600/30 hover:to-blue-800/30 hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-600/25 transition-all duration-500 cursor-pointer group rounded-3xl overflow-hidden transform hover:-translate-y-2">
              <CardContent className="p-12 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-3xl"></div>
                <div className="relative z-10">
                  <div className="text-7xl text-blue-400 mb-8 group-hover:text-blue-300 transition-colors duration-500">"</div>
                  <p className="text-xl mb-10 italic leading-relaxed text-gray-300 group-hover:text-white/95 transition-colors duration-500 font-medium">
                    Dzan Design helped us increase our CTR by 21% with their strategic design approach. The results were immediate and impressive.
                  </p>
                  <div className="flex items-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-600/30 to-blue-800/30 rounded-2xl mr-6 group-hover:bg-gradient-to-br group-hover:from-blue-600 group-hover:to-blue-800 transition-all duration-500 flex items-center justify-center">
                      <span className="text-white font-bold text-lg">ND</span>
                    </div>
                    <div>
                      <p className="text-blue-400 font-bold text-lg group-hover:text-white transition-colors duration-500">Nauci Dizajn</p>
                      <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-500">Design Education Platform</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-md border-2 border-white/20 hover:bg-gradient-to-br hover:from-blue-600/30 hover:to-blue-800/30 hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-600/25 transition-all duration-500 cursor-pointer group rounded-3xl overflow-hidden transform hover:-translate-y-2">
              <CardContent className="p-12 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-3xl"></div>
                <div className="relative z-10">
                  <div className="text-7xl text-blue-400 mb-8 group-hover:text-blue-300 transition-colors duration-500">"</div>
                  <p className="text-xl mb-10 italic leading-relaxed text-gray-300 group-hover:text-white/95 transition-colors duration-500 font-medium">
                    Working with Dzan Design saved us 40 hours per month. Their efficient workflow and attention to detail is unmatched.
                  </p>
                  <div className="flex items-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-600/30 to-blue-800/30 rounded-2xl mr-6 group-hover:bg-gradient-to-br group-hover:from-blue-600 group-hover:to-blue-800 transition-all duration-500 flex items-center justify-center">
                      <span className="text-white font-bold text-lg">AJ</span>
                    </div>
                    <div>
                      <p className="text-blue-400 font-bold text-lg group-hover:text-white transition-colors duration-500">Aleksa Jovanovic</p>
                      <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-500">Tech Startup Founder</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-md border-2 border-white/20 hover:bg-gradient-to-br hover:from-blue-600/30 hover:to-blue-800/30 hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-600/25 transition-all duration-500 cursor-pointer group rounded-3xl overflow-hidden transform hover:-translate-y-2">
              <CardContent className="p-12 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-3xl"></div>
                <div className="relative z-10">
                  <div className="text-7xl text-blue-400 mb-8 group-hover:text-blue-300 transition-colors duration-500">"</div>
                  <p className="text-xl mb-10 italic leading-relaxed text-gray-300 group-hover:text-white/95 transition-colors duration-500 font-medium">
                    Our conversion rate increased by 35% after implementing their design recommendations. The ROI was incredible.
                  </p>
                  <div className="flex items-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-600/30 to-blue-800/30 rounded-2xl mr-6 group-hover:bg-gradient-to-br group-hover:from-blue-600 group-hover:to-blue-800 transition-all duration-500 flex items-center justify-center">
                      <span className="text-white font-bold text-lg">TC</span>
                    </div>
                    <div>
                      <p className="text-blue-400 font-bold text-lg group-hover:text-white transition-colors duration-500">Tibor Čubrilo</p>
                      <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-500">E-commerce Entrepreneur</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 bg-gradient-to-br from-white via-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <span className="inline-block px-6 py-2 bg-blue-600/10 text-blue-600 font-semibold text-sm uppercase tracking-wider rounded-full mb-8">
              Contact
            </span>
            <h2 className="text-5xl sm:text-7xl font-black text-black mb-8">Let's Work Together</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to transform your brand? Let's discuss your project and create something amazing together.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div>
              <h3 className="text-3xl font-bold mb-12 text-black">Get in Touch</h3>
              <div className="space-y-8">
                <div className="flex items-center group">
                  <div className="w-16 h-16 bg-blue-600/10 rounded-2xl flex items-center justify-center mr-6 group-hover:bg-blue-600 transition-all duration-300">
                    <Mail className="h-8 w-8 text-blue-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div>
                    <p className="text-gray-600 text-sm uppercase tracking-wider font-semibold mb-1">Email</p>
                    <span className="text-xl font-semibold">dzan.dizajn@gmail.com</span>
                  </div>
                </div>
                <div className="flex items-center group">
                  <div className="w-16 h-16 bg-blue-600/10 rounded-2xl flex items-center justify-center mr-6 group-hover:bg-blue-600 transition-all duration-300">
                    <Phone className="h-8 w-8 text-blue-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div>
                    <p className="text-gray-600 text-sm uppercase tracking-wider font-semibold mb-1">Phone</p>
                    <span className="text-xl font-semibold">+387 62780013</span>
                  </div>
                </div>
              </div>

              <div className="mt-16">
                <h4 className="text-2xl font-bold mb-8 text-black">Follow Us</h4>
                                  <div className="flex space-x-6">
                    <Link
                      href="https://www.instagram.com/dzandesigns/"
                      className="w-16 h-16 bg-black rounded-2xl flex items-center justify-center hover:bg-blue-600 transition-all duration-300 group"
                    >
                      <i className="fab fa-instagram text-white text-3xl"></i>
                    </Link>
                    <Link
                      href="https://www.behance.net/dzandesign"
                      className="w-16 h-16 bg-black rounded-2xl flex items-center justify-center hover:bg-blue-600 transition-all duration-300 group"
                    >
                      <i className="fab fa-behance text-white text-3xl"></i>
                    </Link>
                  </div>
              </div>

              <div className="mt-16">
                <Button
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-6 text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-600/25 group"
                  onClick={() => {
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Contact Us
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </div>
            </div>

            {/* Why Choose Us */}
            <div className="bg-white rounded-3xl p-10 shadow-2xl shadow-black/5 border border-gray-100">
              <h3 className="text-3xl font-bold mb-8 text-black">Why Choose Us?</h3>
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-600/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <i className="fas fa-rocket text-blue-600 text-xl"></i>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-black mb-2">Fast Delivery</h4>
                    <p className="text-gray-600 leading-relaxed">
                      We deliver high-quality work quickly without compromising on creativity or attention to detail.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-600/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <i className="fas fa-users text-blue-600 text-xl"></i>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-black mb-2">Client-Focused</h4>
                    <p className="text-gray-600 leading-relaxed">
                      Your vision is our priority. We work closely with you to ensure every project exceeds expectations.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-600/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <i className="fas fa-award text-blue-600 text-xl"></i>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-black mb-2">Proven Results</h4>
                    <p className="text-gray-600 leading-relaxed">
                      Our track record speaks for itself. We've helped countless businesses achieve their goals.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-600/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <i className="fas fa-headset text-blue-600 text-xl"></i>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-black mb-2">24/7 Support</h4>
                    <p className="text-gray-600 leading-relaxed">
                      We're here when you need us. Get support and updates whenever you require assistance.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-10 pt-8 border-t border-gray-100">
                <div className="grid grid-cols-3 gap-6 text-center">
                  <div>
                    <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
                    <div className="text-gray-600 text-sm">Projects Completed</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-blue-600 mb-2">98%</div>
                    <div className="text-gray-600 text-sm">Client Satisfaction</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-blue-600 mb-2">24/7</div>
                    <div className="text-gray-600 text-sm">Support Available</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="text-4xl font-black mb-6">
              Dzan Design<span className="text-blue-600">.</span>
            </div>
            <p className="text-gray-400 text-lg">© {new Date().getFullYear()} Dzan Design. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
