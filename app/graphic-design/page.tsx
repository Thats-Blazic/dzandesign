"use client"

import { motion } from "framer-motion"
import { ArrowLeft, Eye, Palette, Layers, Type, Image } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

export default function GraphicDesignPage() {
  const graphicDesignProjects = [
    {
      title: "Vlog Design A",
      category: "Digital Design",
      image: "/THUMB/DzanDizajn_Vlog_A.jpg",
      description: "Modern vlog branding with dynamic visual elements and engaging typography.",
      features: ["Logo Design", "Social Media", "Typography", "Brand Guidelines"]
    },
    {
      title: "Fix 23 Design",
      category: "Brand Identity",
      image: "/THUMB/fix23.png",
      description: "Clean and professional brand identity with modern design principles.",
      features: ["Logo Design", "Color Palette", "Typography", "Brand Guidelines"]
    },
    {
      title: "Circus Design",
      category: "Creative Design",
      image: "/THUMB/circus.png",
      description: "Playful and creative design with vibrant colors and dynamic elements.",
      features: ["Illustration", "Color Design", "Creative Layout", "Visual Identity"]
    },
    {
      title: "Gastro Design",
      category: "Restaurant Branding",
      image: "/THUMB/gastro dzan2.png",
      description: "Warm and inviting restaurant branding with custom illustrations and typography.",
      features: ["Logo Design", "Menu Design", "Illustrations", "Brand Identity"]
    },
    {
      title: "Redesign Project",
      category: "Brand Redesign",
      image: "/THUMB/redesign.png",
      description: "Complete brand redesign with modern aesthetics and improved visual hierarchy.",
      features: ["Brand Redesign", "Logo Design", "Typography", "Visual Identity"]
    },
    {
      title: "Sushi Design",
      category: "Food Branding",
      image: "/THUMB/sushi232.png",
      description: "Elegant sushi restaurant branding with sophisticated design elements.",
      features: ["Logo Design", "Packaging", "Menu Design", "Brand Identity"]
    },
    {
      title: "Vlog Design B",
      category: "Digital Design",
      image: "/THUMB/DzanDizajn_Vlog_B.png",
      description: "Alternative vlog design with different visual approach and styling.",
      features: ["Digital Design", "Social Media", "Typography", "Visual Identity"]
    },
    {
      title: "Sitdown Design",
      category: "Brand Identity",
      image: "/THUMB/DzanDizajn_Sitdown_A.png",
      description: "Professional sitdown branding with clean and modern design elements.",
      features: ["Logo Design", "Brand Identity", "Typography", "Visual Design"]
    },
    {
      title: "Clipzy Design",
      category: "Creative Design",
      image: "/THUMB/clipzy copy.png",
      description: "Creative and innovative design with unique visual elements and styling.",
      features: ["Creative Design", "Illustration", "Typography", "Visual Identity"]
    },
    {
      title: "From Helicopter",
      category: "Photography Design",
      image: "/THUMB/from helicopter.png",
      description: "Aerial photography design with stunning visual composition and layout.",
      features: ["Photography", "Layout Design", "Visual Composition", "Creative Design"]
    },
    {
      title: "Portfolio Design",
      category: "Portfolio",
      image: "/THUMB/za portf2.png",
      description: "Professional portfolio design showcasing creative work and projects.",
      features: ["Portfolio Design", "Layout", "Typography", "Visual Presentation"]
    },
    {
      title: "Redesign Alternative",
      category: "Brand Redesign",
      image: "/THUMB/redesign .png",
      description: "Alternative redesign approach with different visual direction and styling.",
      features: ["Brand Redesign", "Visual Identity", "Typography", "Creative Design"]
    }
  ]

  const services = [
    {
      icon: <Palette className="h-8 w-8" />,
      title: "Brand Identity",
      description: "Complete visual identity systems including logos, color palettes, and brand guidelines."
    },
    {
      icon: <Layers className="h-8 w-8" />,
      title: "Print Design",
      description: "Business cards, brochures, flyers, and other printed materials."
    },
    {
      icon: <Type className="h-8 w-8" />,
      title: "Typography",
      description: "Custom typography and font selection for brand consistency."
    },
    {
      icon: <Image className="h-8 w-8" />,
      title: "Digital Graphics",
      description: "Social media graphics, web banners, and digital marketing materials."
    }
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
              <Button variant="outline" className="flex items-center gap-2 border-white/20 text-black hover:bg-white hover:text-blue-600">
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
            >
              <Eye className="h-12 w-12 text-white" />
            </motion.div>
            <h1 className="text-5xl sm:text-7xl font-black text-white mb-8">
              Graphic Design
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
              We create stunning visual identities that capture the essence of your brand and resonate deeply with your target audience.
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
                  className="flex items-center gap-3 bg-white/10 backdrop-blur-md px-6 py-3 rounded-full shadow-lg border border-white/10"
                  whileHover={{ scale: 1.05 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                >
                  <div className="text-white">{service.icon}</div>
                  <span className="font-semibold text-white">{service.title}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl sm:text-6xl font-black text-white mb-8">Our Gallery</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore our latest graphic design work and creative projects.
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {graphicDesignProjects.map((project, index) => (
              <motion.div
                key={index}
                className="group cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                onClick={() => window.open(project.image, '_blank')}
              >
                <div className="relative overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-white/10">
                  <motion.div 
                    className="aspect-[4/3]"
                    whileHover={{ scale: 1.05 }}
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500"></div>
                  </motion.div>
                </div>
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
            <h2 className="text-4xl sm:text-6xl font-black mb-8">Ready to Transform Your Brand?</h2>
            <p className="text-xl mb-12 max-w-3xl mx-auto text-gray-300">
              Let's create a visual identity that sets your brand apart and drives real results.
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
                  className="border-2 border-white text-black hover:bg-white hover:text-blue-600 px-10 py-6 text-lg font-semibold rounded-full"
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