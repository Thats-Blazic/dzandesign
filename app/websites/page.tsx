"use client"

import { motion } from "framer-motion"
import { ArrowLeft, Code, Globe, Smartphone, Zap, Shield, Users, ExternalLink, Cpu, Database, Cloud } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

export default function WebsitesPage() {
  const websiteProjects = [
    {
      id: "website-project-1",
      title: "Modern Business Website",
      category: "Business",
      image: "/sajt/sajt1.png",
      description: "Professional business website with modern design, responsive layout, and excellent user experience.",
      features: ["Responsive Design", "Modern UI/UX", "Fast Performance", "SEO Optimized"]
    },
    {
      id: "website-project-2",
      title: "E-commerce Platform",
      category: "E-commerce",
      image: "/sajt/saj2.jpg",
      description: "Full-featured e-commerce website with payment processing, product management, and customer portal.",
      features: ["Payment Integration", "Product Management", "Customer Portal", "Mobile Responsive"]
    },
    {
      id: "website-project-3",
      title: "Creative Portfolio Site",
      category: "Portfolio",
      image: "/sajt/sajt3.jpg",
      description: "Creative portfolio website showcasing work with smooth animations and modern design elements.",
      features: ["Portfolio Gallery", "Smooth Animations", "Creative Design", "Modern Layout"]
    }
  ]

  const services = [
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Web Development",
      description: "Custom websites built with modern technologies and best practices."
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: "Mobile Apps",
      description: "Cross-platform mobile applications for iOS and Android."
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Performance",
      description: "Lightning-fast websites optimized for speed and user experience."
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Security",
      description: "Secure websites with SSL certificates and data protection."
    }
  ]

  const techStack = [
    { icon: <Cpu className="h-6 w-6" />, name: "React", color: "from-blue-500 to-cyan-500" },
    { icon: <Database className="h-6 w-6" />, name: "Node.js", color: "from-green-500 to-emerald-500" },
    { icon: <Cloud className="h-6 w-6" />, name: "AWS", color: "from-orange-500 to-red-500" },
    { icon: <Code className="h-6 w-6" />, name: "TypeScript", color: "from-blue-600 to-indigo-600" }
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/80 backdrop-blur-md border-b border-white/10 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link href="/" className="text-3xl font-black text-white tracking-tight">
              DZAN DESIGN<span className="text-white">.</span>
            </Link>
            <Link href="/">
              <Button variant="outline" className="flex items-center gap-2 border-white/20 text-black hover:bg-white hover:text-black">
                <ArrowLeft className="h-4 w-4" />
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-black relative overflow-hidden">
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

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div 
              className="w-24 h-24 mx-auto mb-8 bg-gradient-to-br from-white/20 to-white/10 rounded-3xl flex items-center justify-center"
              whileHover={{ scale: 1.1, rotate: 5 }}
              animate={{ rotate: [0, 5, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <Code className="h-12 w-12 text-white" />
            </motion.div>
            <h1 className="text-5xl sm:text-7xl font-black text-white mb-8">
              Websites & Apps
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
              We build modern, high-performance websites and applications that convert visitors into customers and drive sustainable business growth.
            </p>
            
            {/* Tech Stack Display */}
            <motion.div 
              className="flex flex-wrap justify-center gap-6 mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {techStack.map((tech, index) => (
                <motion.div
                  key={index}
                  className={`flex items-center gap-3 px-4 py-2 bg-gradient-to-r ${tech.color} rounded-full shadow-lg`}
                  whileHover={{ scale: 1.05 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                >
                  <div className="text-white">{tech.icon}</div>
                  <span className="font-semibold text-white text-sm">{tech.name}</span>
                </motion.div>
              ))}
            </motion.div>

            <motion.div 
              className="flex flex-wrap justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-3 bg-white/10 backdrop-blur-md px-6 py-3 rounded-full shadow-lg border border-white/10"
                  whileHover={{ scale: 1.05 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                >
                  <div className="text-white">{service.icon}</div>
                  <span className="font-semibold text-white">{service.title}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl sm:text-6xl font-black text-white mb-8">Our Projects</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore our latest web development projects and see how we've helped businesses achieve extraordinary results.
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {websiteProjects.map((project, index) => (
              <motion.div
                key={index}
                className="group cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <Link href={`/websites/${project.id}`}>
                  <Card className="overflow-hidden border border-white/10 bg-white/5 backdrop-blur-md shadow-lg hover:shadow-2xl transition-all duration-500">
                    <motion.div 
                      className="relative overflow-hidden aspect-[4/3]"
                      whileHover={{ scale: 1.02 }}
                    >
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500"></div>
                      
                      {/* View Details Overlay */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                        <div className="bg-white/90 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg">
                          <span className="text-black font-semibold flex items-center gap-2">
                            View Details
                            <ExternalLink className="h-4 w-4" />
                          </span>
                        </div>
                      </div>
                    </motion.div>
                    <CardContent className="p-6">
                      <motion.span 
                        className="inline-block px-3 py-1 bg-white/10 text-white text-sm font-semibold rounded-full mb-4"
                        whileHover={{ scale: 1.05 }}
                      >
                        {project.category}
                      </motion.span>
                      <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-white transition-colors duration-300">
                        {project.title}
                      </h3>
                      <p className="text-gray-300 mb-4 leading-relaxed">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.features.map((feature, featureIndex) => (
                          <span 
                            key={featureIndex}
                            className="text-xs bg-white/10 text-white px-2 py-1 rounded-full"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl sm:text-6xl font-black text-white mb-8">Why Choose Us?</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We deliver exceptional results with cutting-edge technology and proven methodologies.
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {[
              { icon: <Zap className="h-12 w-12" />, title: "Fast Performance", desc: "Lightning-fast loading times and optimized code" },
              { icon: <Shield className="h-12 w-12" />, title: "Secure & Reliable", desc: "Enterprise-grade security and 99.9% uptime" },
              { icon: <Users className="h-12 w-12" />, title: "User-Focused", desc: "Intuitive design that puts users first" },
              { icon: <Globe className="h-12 w-12" />, title: "SEO Optimized", desc: "Built for search engines and maximum visibility" }
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="text-center p-8 bg-white/5 backdrop-blur-md rounded-3xl shadow-lg hover:shadow-xl transition-all duration-500 border border-white/10"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-white/20 to-white/10 rounded-2xl flex items-center justify-center text-white">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300">{feature.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl sm:text-6xl font-black mb-8">Ready to Build Something Amazing?</h2>
            <p className="text-xl mb-12 max-w-3xl mx-auto text-gray-300">
              Let's create a website or app that drives real results and grows your business.
            </p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
              whileHover={{ scale: 1.05 }}
            >
              <Button
                size="lg"
                className="bg-white text-black hover:bg-gray-100 px-10 py-6 text-lg font-semibold rounded-full"
              >
                Start Your Project
              </Button>
              <Link href="/">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-white text-black hover:bg-white hover:text-black px-10 py-6 text-lg font-semibold rounded-full"
                >
                  Back to Services
                </Button>
              </Link>
            </motion.div>
          </motion.div>
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