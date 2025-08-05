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
  Eye,
  ExternalLink,
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
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/80 backdrop-blur-md border-b border-white/10 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/" className="text-3xl font-black text-white tracking-tight">
                DZAN DESIGN<span className="text-white">.</span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-center space-x-12">
                <button
                  onClick={() => {
                    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-white hover:text-white/80 transition-all duration-300 font-medium text-lg relative group cursor-pointer"
                >
                  Services
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                </button>

                <button
                  onClick={() => {
                    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-white hover:text-white/80 transition-all duration-300 font-medium text-lg relative group cursor-pointer"
                >
                  About
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                </button>
                <button
                  onClick={() => {
                    document.getElementById('testimonials')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-white hover:text-white/80 transition-all duration-300 font-medium text-lg relative group cursor-pointer"
                >
                  Testimonials
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                </button>
                <button
                  onClick={() => {
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-white hover:text-white/80 transition-all duration-300 font-medium text-lg relative group cursor-pointer"
                >
                  Contact
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                </button>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button variant="ghost" size="icon" onClick={toggleMenu} className="text-white hover:text-white/80">
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-black/95 backdrop-blur-md">
            <div className="px-4 pt-2 pb-6 space-y-4">
              <button
                onClick={() => {
                  document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
                  toggleMenu();
                }}
                className="block w-full text-left px-4 py-3 text-white hover:text-white/80 transition-colors duration-200 font-medium text-lg cursor-pointer"
              >
                Services
              </button>

              <button
                onClick={() => {
                  document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
                  toggleMenu();
                }}
                className="block w-full text-left px-4 py-3 text-white hover:text-white/80 transition-colors duration-200 font-medium text-lg cursor-pointer"
              >
                About
              </button>
              <button
                onClick={() => {
                  document.getElementById('testimonials')?.scrollIntoView({ behavior: 'smooth' });
                  toggleMenu();
                }}
                className="block w-full text-left px-4 py-3 text-white hover:text-white/80 transition-colors duration-200 font-medium text-lg cursor-pointer"
              >
                Testimonials
              </button>
              <button
                onClick={() => {
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                  toggleMenu();
                }}
                className="block w-full text-left px-4 py-3 text-white hover:text-white/80 transition-colors duration-200 font-medium text-lg cursor-pointer"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-20 min-h-screen flex items-center justify-center bg-black relative overflow-hidden">
        {/* Animated Background Elements */}
        <motion.div 
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl"
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
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl"
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
              className="inline-block px-6 py-2 bg-white/10 text-white font-semibold text-sm uppercase tracking-wider rounded-full mb-8"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Creative Agency
            </motion.span>
          </motion.div>
          
          <motion.h1 
            className="text-5xl sm:text-7xl lg:text-9xl font-black text-white mb-8 leading-none tracking-tight"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            We take brands
            <br />
            from seen to
            <br />
            <motion.span 
              className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              unforgettable
            </motion.span>
          </motion.h1>
          
          <motion.p 
            className="text-xl sm:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed font-light"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            Creative solutions that deliver results. We scale brands by crafting memorable experiences through design, development, and strategic thinking that drives transformation.
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
                className="bg-white hover:bg-gray-100 text-black px-10 py-6 text-lg font-semibold rounded-full transition-all duration-300 hover:shadow-2xl hover:shadow-white/25 group"
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
                className="border-2 border-white text-white hover:bg-white hover:text-black px-10 py-6 text-lg font-semibold rounded-full transition-all duration-300 bg-transparent"
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
            <span className="inline-block px-6 py-2 bg-white/20 text-white font-semibold text-sm uppercase tracking-wider rounded-full mb-8">
              What We Do
            </span>
            <h2 className="text-5xl sm:text-7xl font-black mb-8">Our Services</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
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
                <Card className="bg-white/5 backdrop-blur-md border-2 border-white/10 hover:bg-gradient-to-br hover:from-white/10 hover:to-white/5 hover:border-white/30 hover:shadow-2xl hover:shadow-white/10 transition-all duration-500 cursor-pointer group rounded-3xl overflow-hidden">
                  <CardContent className="p-8 relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-3xl"></div>
                    <div className="relative z-10">
                      <div className="flex items-center mb-6">
                        <motion.div 
                          className="w-16 h-16 bg-gradient-to-br from-white/20 to-white/10 rounded-2xl flex items-center justify-center group-hover:bg-gradient-to-br group-hover:from-white/30 group-hover:to-white/20 transition-all duration-500 shadow-lg group-hover:shadow-white/20 mr-4"
                          whileHover={{ scale: 1.1, rotate: 5 }}
                        >
                          <Eye className="h-8 w-8 text-white group-hover:text-white transition-colors duration-500" />
                        </motion.div>
                        <h3 className="text-3xl font-black text-white group-hover:text-white transition-colors duration-500">
                          Graphic Design
                        </h3>
                      </div>
                      <p className="text-gray-300 group-hover:text-white/95 transition-colors duration-500 text-lg leading-relaxed font-medium mb-8">
                        Visuals, identity, and full brand packages that make your business stand out from the competition and
                        resonate with your audience.
                      </p>
                      
                      {/* Clickable Work Preview */}
                      <div className="relative">
                        <motion.div 
                          className="flex items-center justify-center space-x-2 text-white/80 group-hover:text-white transition-colors duration-500 py-8"
                          whileHover={{ scale: 1.05 }}
                        >
                          <motion.div
                            className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mr-4"
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 2, repeat: Infinity }}
                          >
                            <Eye className="h-6 w-6 text-white" />
                          </motion.div>
                          <span className="text-lg font-medium">Click to explore our work</span>
                          <motion.div
                            animate={{ x: [0, 5, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                          >
                            <ExternalLink className="h-5 w-5" />
                          </motion.div>
                        </motion.div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>

            {/* Websites - Premium Gold */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -15, scale: 1.02 }}
            >
              <Link href="/websites">
                <Card className="bg-white/5 backdrop-blur-md border-2 border-white/10 hover:bg-gradient-to-br hover:from-white/10 hover:to-white/5 hover:border-white/30 hover:shadow-2xl hover:shadow-white/10 transition-all duration-500 cursor-pointer group rounded-3xl overflow-hidden">
                  <CardContent className="p-8 relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-3xl"></div>
                    <div className="relative z-10">
                      <div className="flex items-center mb-6">
                        <motion.div 
                          className="w-16 h-16 bg-gradient-to-br from-white/20 to-white/10 rounded-2xl flex items-center justify-center group-hover:bg-gradient-to-br group-hover:from-white/30 group-hover:to-white/20 transition-all duration-500 shadow-lg group-hover:shadow-white/20 mr-4"
                          whileHover={{ scale: 1.1, rotate: 5 }}
                        >
                          <Code className="h-8 w-8 text-white group-hover:text-white transition-colors duration-500" />
                        </motion.div>
                        <h3 className="text-3xl font-black text-white group-hover:text-white transition-colors duration-500">
                          Websites
                        </h3>
                      </div>
                      <p className="text-gray-300 group-hover:text-white/95 transition-colors duration-500 text-lg leading-relaxed font-medium mb-8">
                        Modern website and app development that converts visitors into customers and drives sustainable
                        business growth.
                      </p>
                      
                      {/* Clickable Work Preview */}
                      <div className="relative">
                        <motion.div 
                          className="flex items-center justify-center space-x-2 text-white/80 group-hover:text-white transition-colors duration-500 py-8"
                          whileHover={{ scale: 1.05 }}
                        >
                          <motion.div
                            className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mr-4"
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 2, repeat: Infinity }}
                          >
                            <Code className="h-6 w-6 text-white" />
                          </motion.div>
                          <span className="text-lg font-medium">Click to explore our work</span>
                          <motion.div
                            animate={{ x: [0, 5, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                          >
                            <ExternalLink className="h-5 w-5" />
                          </motion.div>
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
      <section id="about" className="py-32 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <span className="inline-block px-6 py-2 bg-white/10 text-white font-semibold text-sm uppercase tracking-wider rounded-full mb-8">
              Team
            </span>
            <h2 className="text-5xl sm:text-7xl font-black text-white mb-8">Meet Our Team</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
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
                  className="w-64 h-64 mx-auto bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl overflow-hidden border-2 border-white/10"
                  whileHover={{ scale: 1.05 }}
                >
                  <img
                    src="/dzan.png"
                    alt="Džan - Senior Graphic Designer"
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                  />
                </motion.div>
                <motion.div 
                  className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-white rounded-2xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500"
                  whileHover={{ scale: 1.1 }}
                >
                  <Eye className="h-8 w-8 text-black" />
                </motion.div>
              </div>
              <h3 className="text-3xl font-bold mb-3 text-white">Džan</h3>
              <p className="text-white/80 font-semibold mb-4 text-lg">Senior Graphic Designer</p>
              <p className="text-gray-300 leading-relaxed text-lg">
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
                  className="w-64 h-64 mx-auto bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl overflow-hidden border-2 border-white/10"
                  whileHover={{ scale: 1.05 }}
                >
                  <img
                    src="/dzeki.jpg"
                    alt="Jason Kajzer - Web & App Developer"
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                  />
                </motion.div>
                <motion.div 
                  className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-white rounded-2xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500"
                  whileHover={{ scale: 1.1 }}
                >
                  <Code className="h-8 w-8 text-black" />
                </motion.div>
              </div>
              <h3 className="text-3xl font-bold mb-3 text-white">Jason Kajzer</h3>
              <p className="text-white/80 font-semibold mb-4 text-lg">Web & App Developer</p>
              <p className="text-gray-300 leading-relaxed text-lg">
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
                  className="w-64 h-64 mx-auto bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl overflow-hidden border-2 border-white/10"
                  whileHover={{ scale: 1.05 }}
                >
                  <img
                    src="/azur.jpg"
                    alt="Azur - Appointment Setter and High Ticket Closing"
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                  />
                </motion.div>
                <motion.div 
                  className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-white rounded-2xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500"
                  whileHover={{ scale: 1.1 }}
                >
                  <TrendingUp className="h-8 w-8 text-black" />
                </motion.div>
              </div>
              <h3 className="text-3xl font-bold mb-3 text-white">Azur</h3>
              <p className="text-white/80 font-semibold mb-4 text-lg">Appointment Setter and High Ticket Closing</p>
              <p className="text-gray-300 leading-relaxed text-lg">
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
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <span className="inline-block px-6 py-2 bg-white/20 text-white font-semibold text-sm uppercase tracking-wider rounded-full mb-8">
              Testimonials
            </span>
            <h2 className="text-5xl sm:text-7xl font-black mb-8">What Clients Say</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-white/5 backdrop-blur-md border-2 border-white/10 hover:bg-gradient-to-br hover:from-white/10 hover:to-white/5 hover:border-white/30 hover:shadow-2xl hover:shadow-white/10 transition-all duration-500 cursor-pointer group rounded-3xl overflow-hidden transform hover:-translate-y-2">
              <CardContent className="p-12 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-3xl"></div>
                <div className="relative z-10">
                  <div className="text-7xl text-white/60 mb-8 group-hover:text-white/80 transition-colors duration-500">"</div>
                  <p className="text-xl mb-10 italic leading-relaxed text-gray-300 group-hover:text-white/95 transition-colors duration-500 font-medium">
                    Dzan Design helped us increase our CTR by 21% with their strategic design approach. The results were immediate and impressive.
                  </p>
                  <div className="flex items-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-white/20 to-white/10 rounded-2xl mr-6 group-hover:bg-gradient-to-br group-hover:from-white/30 group-hover:to-white/20 transition-all duration-500 flex items-center justify-center">
                      <span className="text-white font-bold text-lg">ND</span>
                    </div>
                    <div>
                      <p className="text-white font-bold text-lg group-hover:text-white transition-colors duration-500">Nauci Dizajn</p>
                      <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-500">Design Education Platform</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/5 backdrop-blur-md border-2 border-white/10 hover:bg-gradient-to-br hover:from-white/10 hover:to-white/5 hover:border-white/30 hover:shadow-2xl hover:shadow-white/10 transition-all duration-500 cursor-pointer group rounded-3xl overflow-hidden transform hover:-translate-y-2">
              <CardContent className="p-12 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-3xl"></div>
                <div className="relative z-10">
                  <div className="text-7xl text-white/60 mb-8 group-hover:text-white/80 transition-colors duration-500">"</div>
                  <p className="text-xl mb-10 italic leading-relaxed text-gray-300 group-hover:text-white/95 transition-colors duration-500 font-medium">
                    Working with Dzan Design saved us 40 hours per month. Their efficient workflow and attention to detail is unmatched.
                  </p>
                  <div className="flex items-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-white/20 to-white/10 rounded-2xl mr-6 group-hover:bg-gradient-to-br group-hover:from-white/30 group-hover:to-white/20 transition-all duration-500 flex items-center justify-center">
                      <span className="text-white font-bold text-lg">OM</span>
                    </div>
                    <div>
                      <p className="text-white font-bold text-lg group-hover:text-white transition-colors duration-500">Ozoit Media</p>
                      <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-500">Tech Startup Founder</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/5 backdrop-blur-md border-2 border-white/10 hover:bg-gradient-to-br hover:from-white/10 hover:to-white/5 hover:border-white/30 hover:shadow-2xl hover:shadow-white/10 transition-all duration-500 cursor-pointer group rounded-3xl overflow-hidden transform hover:-translate-y-2">
              <CardContent className="p-12 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-3xl"></div>
                <div className="relative z-10">
                  <div className="text-7xl text-white/60 mb-8 group-hover:text-white/80 transition-colors duration-500">"</div>
                  <p className="text-xl mb-10 italic leading-relaxed text-gray-300 group-hover:text-white/95 transition-colors duration-500 font-medium">
                    Our conversion rate increased by 35% after implementing their design recommendations. The ROI was incredible.
                  </p>
                  <div className="flex items-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-white/20 to-white/10 rounded-2xl mr-6 group-hover:bg-gradient-to-br group-hover:from-white/30 group-hover:to-white/20 transition-all duration-500 flex items-center justify-center">
                      <span className="text-white font-bold text-lg">TC</span>
                    </div>
                    <div>
                      <p className="text-white font-bold text-lg group-hover:text-white transition-colors duration-500">Tibor Čubrilo</p>
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
      <section id="contact" className="py-32 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <span className="inline-block px-6 py-2 bg-white/10 text-white font-semibold text-sm uppercase tracking-wider rounded-full mb-8">
              Contact
            </span>
            <h2 className="text-5xl sm:text-7xl font-black text-white mb-8">Let's Work Together</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Ready to transform your brand? Let's discuss your project and create something amazing together.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div>
              <h3 className="text-3xl font-bold mb-12 text-white">Get in Touch</h3>
              <div className="space-y-8">
                <div className="flex items-center group">
                  <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mr-6 group-hover:bg-white transition-all duration-300">
                    <Mail className="h-8 w-8 text-white group-hover:text-black transition-colors duration-300" />
                  </div>
                  <div>
                    <p className="text-gray-300 text-sm uppercase tracking-wider font-semibold mb-1">Email</p>
                    <span className="text-xl font-semibold text-white">dzan.dizajn@gmail.com</span>
                  </div>
                </div>
                <div className="flex items-center group">
                  <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mr-6 group-hover:bg-white transition-all duration-300">
                    <Phone className="h-8 w-8 text-white group-hover:text-black transition-colors duration-300" />
                  </div>
                  <div>
                    <p className="text-gray-300 text-sm uppercase tracking-wider font-semibold mb-1">Phone</p>
                    <span className="text-xl font-semibold text-white">+387 62780013</span>
                  </div>
                </div>
              </div>

              <div className="mt-16">
                <h4 className="text-2xl font-bold mb-8 text-white">Follow Us</h4>
                <div className="flex space-x-6">
                  <Link
                    href="https://www.instagram.com/dzandesigns/"
                    className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center hover:bg-white transition-all duration-300 group"
                  >
                    <i className="fab fa-instagram text-white group-hover:text-black text-3xl"></i>
                  </Link>
                  <Link
                    href="https://www.behance.net/dzandesign"
                    className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center hover:bg-white transition-all duration-300 group"
                  >
                    <i className="fab fa-behance text-white group-hover:text-black text-3xl"></i>
                  </Link>
                </div>
              </div>

              <div className="mt-16">
                <Button
                  size="lg"
                  className="bg-white hover:bg-gray-100 text-black px-10 py-6 text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-white/25 group"
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
            <div className="bg-white/5 backdrop-blur-md rounded-3xl p-10 shadow-2xl shadow-white/5 border border-white/10">
              <h3 className="text-3xl font-bold mb-8 text-white">Why Choose Us?</h3>
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <i className="fas fa-rocket text-white text-xl"></i>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">Fast Delivery</h4>
                    <p className="text-gray-300 leading-relaxed">
                      We deliver high-quality work quickly without compromising on creativity or attention to detail.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <i className="fas fa-users text-white text-xl"></i>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">Client-Focused</h4>
                    <p className="text-gray-300 leading-relaxed">
                      Your vision is our priority. We work closely with you to ensure every project exceeds expectations.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <i className="fas fa-award text-white text-xl"></i>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">Proven Results</h4>
                    <p className="text-gray-300 leading-relaxed">
                      Our track record speaks for itself. We've helped countless businesses achieve their goals.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <i className="fas fa-headset text-white text-xl"></i>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">24/7 Support</h4>
                    <p className="text-gray-300 leading-relaxed">
                      We're here when you need us. Get support and updates whenever you require assistance.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-10 pt-8 border-t border-white/10">
                <div className="grid grid-cols-3 gap-6 text-center">
                  <div>
                    <div className="text-3xl font-bold text-white mb-2">500+</div>
                    <div className="text-gray-300 text-sm">Projects Completed</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-white mb-2">98%</div>
                    <div className="text-gray-300 text-sm">Client Satisfaction</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-white mb-2">24/7</div>
                    <div className="text-gray-300 text-sm">Support Available</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-16 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="text-4xl font-black mb-6">
              Dzan Design<span className="text-white">.</span>
            </div>
            <p className="text-gray-400 text-lg">© {new Date().getFullYear()} Dzan Design. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
