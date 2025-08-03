"use client"

import { motion } from "framer-motion"
import { ArrowLeft, ExternalLink, Calendar, Users, Zap, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { useParams } from "next/navigation"

export default function ProjectDetailsPage() {
  const params = useParams()
  const projectId = params.project as string

  // Project data - in real app this would come from API or database
  const projectDetails = {
    "website-project-1": {
      title: "Modern Business Website",
      category: "Business",
      image: "/sajt/sajt1.png",
      description: "Professional business website with modern design, responsive layout, and excellent user experience.",
      longDescription: "This project involved creating a modern business website that serves as the digital face of the company. We implemented responsive design, modern UI/UX, fast performance optimization, and SEO best practices. The website focuses on professionalism while maintaining modern aesthetics and excellent user experience across all devices.",
      features: ["Responsive Design", "Modern UI/UX", "Fast Performance", "SEO Optimized", "Contact Forms", "Analytics Integration"],
      technologies: ["Next.js", "React", "Tailwind CSS", "TypeScript", "Vercel"],
      timeline: "2 months",
      team: "3 developers",
      results: [
        { label: "Page Speed", value: "95/100", icon: <Zap className="h-5 w-5" /> },
        { label: "Mobile Score", value: "100/100", icon: <Shield className="h-5 w-5" /> },
        { label: "User Engagement", value: "+200%", icon: <Users className="h-5 w-5" /> }
      ],
      gallery: [
        "/sajt/sajt1.png",
        "/sajt/sajt1.png",
        "/sajt/sajt1.png",
        "/sajt/sajt1.png"
      ]
    },
    "website-project-2": {
      title: "E-commerce Platform",
      category: "E-commerce",
      image: "/sajt/saj2.jpg",
      description: "Full-featured e-commerce website with payment processing, product management, and customer portal.",
      longDescription: "A comprehensive e-commerce solution that revolutionized online shopping experience with advanced features and seamless user interface. We implemented advanced payment processing, product management, customer portal, and mobile-responsive design. The platform handles thousands of products, multiple payment gateways, and provides real-time analytics for business owners.",
      features: ["Payment Integration", "Product Management", "Customer Portal", "Mobile Responsive", "Analytics Dashboard", "Inventory System"],
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "AWS"],
      timeline: "3 months",
      team: "4 developers",
      results: [
        { label: "Conversion Rate", value: "+180%", icon: <Zap className="h-5 w-5" /> },
        { label: "Sales Increase", value: "+320%", icon: <Users className="h-5 w-5" /> },
        { label: "Customer Satisfaction", value: "98%", icon: <Shield className="h-5 w-5" /> }
      ],
      gallery: [
        "/sajt/saj2.jpg",
        "/sajt/saj2.jpg",
        "/sajt/saj2.jpg",
        "/sajt/saj2.jpg"
      ]
    },
    "website-project-3": {
      title: "Creative Portfolio Site",
      category: "Portfolio",
      image: "/sajt/sajt3.jpg",
      description: "Creative portfolio website showcasing work with smooth animations and modern design elements.",
      longDescription: "A creative portfolio website that showcases work with smooth animations and modern design elements. The project includes portfolio gallery, smooth animations, creative design elements, and modern layout. The website is optimized for showcasing creative work with an engaging user experience and beautiful visual presentation.",
      features: ["Portfolio Gallery", "Smooth Animations", "Creative Design", "Modern Layout", "Contact Forms", "Social Integration"],
      technologies: ["React", "Framer Motion", "Tailwind CSS", "Next.js", "Vercel"],
      timeline: "1.5 months",
      team: "2 developers",
      results: [
        { label: "Visitor Engagement", value: "+250%", icon: <Users className="h-5 w-5" /> },
        { label: "Project Views", value: "+400%", icon: <Zap className="h-5 w-5" /> },
        { label: "Client Inquiries", value: "+300%", icon: <Calendar className="h-5 w-5" /> }
      ],
      gallery: [
        "/sajt/sajt3.jpg",
        "/sajt/sajt3.jpg",
        "/sajt/sajt3.jpg",
        "/sajt/sajt3.jpg"
      ]
    }
  }

  const project = projectDetails[projectId as keyof typeof projectDetails]

  if (!project) {
    return (
      <div className="min-h-screen bg-white text-black flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <Link href="/websites">
            <Button>Back to Projects</Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white text-black">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-100 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link href="/" className="text-3xl font-black text-black tracking-tight">
              DZAN DESIGN<span className="text-blue-600">.</span>
            </Link>
            <div className="flex gap-4">
              <Link href="/websites">
                <Button variant="outline" className="flex items-center gap-2">
                  <ArrowLeft className="h-4 w-4" />
                  Back to Projects
                </Button>
              </Link>
              <Link href="/">
                <Button variant="outline" className="flex items-center gap-2">
                  <ArrowLeft className="h-4 w-4" />
                  Home
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-yellow-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div>
              <motion.span 
                className="inline-block px-4 py-2 bg-yellow-600/10 text-yellow-600 text-sm font-semibold rounded-full mb-6"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                {project.category}
              </motion.span>
              <motion.h1 
                className="text-5xl sm:text-7xl font-black text-black mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                {project.title}
              </motion.h1>
              <motion.p 
                className="text-xl text-gray-600 mb-8 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                {project.description}
              </motion.p>
              
              <motion.div 
                className="flex flex-wrap gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                <div className="flex items-center gap-2 text-gray-600">
                  <Calendar className="h-5 w-5" />
                  <span>{project.timeline}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <Users className="h-5 w-5" />
                  <span>{project.team}</span>
                </div>
              </motion.div>
            </div>
            
            <motion.div 
              className="relative"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full rounded-3xl shadow-2xl"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold text-black mb-8">Project Overview</h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                  {project.longDescription}
                </p>
                
                <h3 className="text-2xl font-bold text-black mb-6">Key Features</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
                  {project.features.map((feature, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className="w-2 h-2 bg-yellow-600 rounded-full"></div>
                      <span className="text-gray-700 font-medium">{feature}</span>
                    </motion.div>
                  ))}
                </div>

                <h3 className="text-2xl font-bold text-black mb-6">Technologies Used</h3>
                <div className="flex flex-wrap gap-3 mb-12">
                  {project.technologies.map((tech, index) => (
                    <motion.span
                      key={index}
                      className="px-4 py-2 bg-yellow-600/10 text-yellow-600 rounded-full text-sm font-semibold"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <motion.div
                className="sticky top-32"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <Card className="p-8 shadow-xl">
                  <h3 className="text-2xl font-bold text-black mb-6">Results</h3>
                  <div className="space-y-6">
                    {project.results.map((result, index) => (
                      <motion.div
                        key={index}
                        className="text-center p-6 bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <div className="w-12 h-12 mx-auto mb-4 bg-yellow-600 rounded-xl flex items-center justify-center text-white">
                          {result.icon}
                        </div>
                        <div className="text-2xl font-bold text-yellow-600 mb-2">{result.value}</div>
                        <div className="text-sm text-gray-600">{result.label}</div>
                      </motion.div>
                    ))}
                  </div>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl sm:text-6xl font-black text-black mb-8">Project Gallery</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore the different pages and features of this project.
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {project.gallery.map((image, index) => (
              <motion.div
                key={index}
                className="group cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <div className="relative overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500">
                  <motion.div 
                    className="aspect-[4/3]"
                    whileHover={{ scale: 1.02 }}
                  >
                    <img
                      src={image}
                      alt={`${project.title} - Screenshot ${index + 1}`}
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
      <section className="py-20 bg-gradient-to-br from-yellow-500 to-orange-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl sm:text-6xl font-black mb-8">Ready to Start Your Project?</h2>
            <p className="text-xl mb-12 max-w-3xl mx-auto">
              Let's create something amazing together and bring your vision to life.
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
              <Link href="/websites">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-white text-black hover:bg-white hover:text-yellow-600 px-10 py-6 text-lg font-semibold rounded-full"
                >
                  View All Projects
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
} 