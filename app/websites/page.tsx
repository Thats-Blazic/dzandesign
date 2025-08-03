"use client"

import { motion } from "framer-motion"
import { ArrowLeft, Code, Globe, Smartphone, Zap, Shield, Users, ExternalLink } from "lucide-react"
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

  return (
    <div className="min-h-screen bg-white text-black">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-100 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link href="/" className="text-3xl font-black text-black tracking-tight">
              DZAN DESIGN<span className="text-blue-600">.</span>
            </Link>
            <Link href="/">
              <Button variant="outline" className="flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" />
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-yellow-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div 
              className="w-24 h-24 mx-auto mb-8 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-3xl flex items-center justify-center"
              whileHover={{ scale: 1.1, rotate: 5 }}
              animate={{ rotate: [0, 5, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <Code className="h-12 w-12 text-white" />
            </motion.div>
            <h1 className="text-5xl sm:text-7xl font-black text-black mb-8">
              Websites & Apps
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
              We build modern, high-performance websites and applications that convert visitors into customers and drive sustainable business growth.
            </p>
            <motion.div 
              className="flex flex-wrap justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-3 bg-white px-6 py-3 rounded-full shadow-lg"
                  whileHover={{ scale: 1.05 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                >
                  <div className="text-yellow-600">{service.icon}</div>
                  <span className="font-semibold text-gray-800">{service.title}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl sm:text-6xl font-black text-black mb-8">Our Projects</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
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
                   <Card className="overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500">
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
                         className="inline-block px-3 py-1 bg-yellow-600/10 text-yellow-600 text-sm font-semibold rounded-full mb-4"
                         whileHover={{ scale: 1.05 }}
                       >
                         {project.category}
                       </motion.span>
                       <h3 className="text-2xl font-bold text-black mb-3 group-hover:text-yellow-600 transition-colors duration-300">
                         {project.title}
                       </h3>
                       <p className="text-gray-600 mb-4 leading-relaxed">
                         {project.description}
                       </p>
                       <div className="flex flex-wrap gap-2">
                         {project.features.map((feature, featureIndex) => (
                           <span 
                             key={featureIndex}
                             className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full"
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
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl sm:text-6xl font-black text-black mb-8">Why Choose Us?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
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
                className="text-center p-8 bg-white rounded-3xl shadow-lg hover:shadow-xl transition-all duration-500"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-2xl flex items-center justify-center text-white">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-black mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-yellow-500 to-orange-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl sm:text-6xl font-black mb-8">Ready to Build Something Amazing?</h2>
            <p className="text-xl mb-12 max-w-3xl mx-auto">
              Let's create a website or app that drives real results and grows your business.
            </p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
              whileHover={{ scale: 1.05 }}
            >
              <Button
                size="lg"
                className="bg-white text-yellow-600 hover:bg-gray-100 px-10 py-6 text-lg font-semibold rounded-full"
              >
                Start Your Project
              </Button>
              <Link href="/">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-white text-black hover:bg-white hover:text-yellow-600 px-10 py-6 text-lg font-semibold rounded-full"
                >
                  Back to Services
                </Button>
              </Link>
            </motion.div>
          </motion.div>
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