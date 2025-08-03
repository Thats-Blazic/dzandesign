"use client"

import { motion } from "framer-motion"
import { ArrowLeft, TrendingUp, BarChart3, Target, Award, Users, DollarSign, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

export default function ResultsPage() {
  const caseStudies = [
    {
      title: "TechStart Rebrand",
      category: "Brand Identity",
      image: "/placeholder.svg?height=400&width=600&text=TechStart+Results",
      description: "Complete visual identity redesign that transformed brand perception and market position.",
      metrics: [
        { label: "Brand Recognition", value: "+300%", icon: <Target className="h-5 w-5" /> },
        { label: "Customer Engagement", value: "+450%", icon: <Users className="h-5 w-5" /> },
        { label: "Revenue Growth", value: "+200%", icon: <DollarSign className="h-5 w-5" /> }
      ]
    },
    {
      title: "E-commerce Platform",
      category: "Web Development",
      image: "/placeholder.svg?height=400&width=600&text=E-commerce+Results",
      description: "Modern e-commerce platform that revolutionized online shopping experience.",
      metrics: [
        { label: "Conversion Rate", value: "+180%", icon: <TrendingUp className="h-5 w-5" /> },
        { label: "Page Load Speed", value: "-60%", icon: <Zap className="h-5 w-5" /> },
        { label: "Sales Increase", value: "+320%", icon: <DollarSign className="h-5 w-5" /> }
      ]
    },
    {
      title: "Marketing Campaign",
      category: "Digital Marketing",
      image: "/placeholder.svg?height=400&width=600&text=Marketing+Results",
      description: "Comprehensive digital marketing campaign that exceeded all expectations.",
      metrics: [
        { label: "Lead Generation", value: "+500%", icon: <Users className="h-5 w-5" /> },
        { label: "ROI", value: "+400%", icon: <BarChart3 className="h-5 w-5" /> },
        { label: "Market Share", value: "+150%", icon: <Target className="h-5 w-5" /> }
      ]
    }
  ]

  const services = [
    {
      icon: <BarChart3 className="h-8 w-8" />,
      title: "Analytics & Reporting",
      description: "Comprehensive data analysis and performance reporting."
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: "Performance Tracking",
      description: "Real-time monitoring of key performance indicators."
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Growth Strategy",
      description: "Data-driven strategies for sustainable business growth."
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Results Optimization",
      description: "Continuous optimization to maximize ROI and performance."
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
      <section className="pt-32 pb-20 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div 
              className="w-24 h-24 mx-auto mb-8 bg-gradient-to-br from-green-600 to-emerald-600 rounded-3xl flex items-center justify-center"
              whileHover={{ scale: 1.1, rotate: 5 }}
            >
              <TrendingUp className="h-12 w-12 text-white" />
            </motion.div>
            <h1 className="text-5xl sm:text-7xl font-black text-black mb-8">
              Results & Performance
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
              We don't just create beautiful designs and websites - we deliver measurable results that drive real business growth and success.
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
                  <div className="text-green-600">{service.icon}</div>
                  <span className="font-semibold text-gray-800">{service.title}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl sm:text-6xl font-black text-black mb-8">Case Studies</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real results from real clients. See how our work has transformed businesses and driven measurable success.
            </p>
          </motion.div>

          <motion.div 
            className="space-y-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {caseStudies.map((study, index) => (
              <motion.div
                key={index}
                className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <motion.div 
                  className="relative overflow-hidden rounded-3xl shadow-2xl"
                  whileHover={{ scale: 1.02 }}
                >
                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-full h-80 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="inline-block px-4 py-2 bg-green-600 text-white text-sm font-semibold rounded-full">
                      {study.category}
                    </span>
                  </div>
                </motion.div>
                
                <div className="space-y-8">
                  <div>
                    <h3 className="text-3xl font-bold text-black mb-4">{study.title}</h3>
                    <p className="text-lg text-gray-600 leading-relaxed">{study.description}</p>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                    {study.metrics.map((metric, metricIndex) => (
                      <motion.div
                        key={metricIndex}
                        className="text-center p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl"
                        whileHover={{ scale: 1.05 }}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: metricIndex * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <div className="w-12 h-12 mx-auto mb-4 bg-green-600 rounded-xl flex items-center justify-center text-white">
                          {metric.icon}
                        </div>
                        <div className="text-2xl font-bold text-green-600 mb-2">{metric.value}</div>
                        <div className="text-sm text-gray-600">{metric.label}</div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-br from-green-600 to-emerald-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl sm:text-6xl font-black mb-8">Our Impact</h2>
            <p className="text-xl max-w-3xl mx-auto">
              Numbers don't lie. Here's what we've achieved for our clients over the years.
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
              { number: "500+", label: "Projects Completed", icon: <Award className="h-8 w-8" /> },
              { number: "98%", label: "Client Satisfaction", icon: <Users className="h-8 w-8" /> },
              { number: "300%", label: "Average ROI", icon: <TrendingUp className="h-8 w-8" /> },
              { number: "24/7", label: "Support Available", icon: <Zap className="h-8 w-8" /> }
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center p-8 bg-white/10 backdrop-blur-sm rounded-3xl"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-16 h-16 mx-auto mb-6 bg-white/20 rounded-2xl flex items-center justify-center">
                  {stat.icon}
                </div>
                <div className="text-4xl font-bold mb-4">{stat.number}</div>
                <div className="text-lg">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl sm:text-6xl font-black text-black mb-8">Ready to See Results?</h2>
            <p className="text-xl mb-12 max-w-3xl mx-auto text-gray-600">
              Let's work together to achieve extraordinary results and transform your business.
            </p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
              whileHover={{ scale: 1.05 }}
            >
              <Button
                size="lg"
                className="bg-green-600 hover:bg-green-700 text-white px-10 py-6 text-lg font-semibold rounded-full"
              >
                Start Your Project
              </Button>
              <Link href="/">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white px-10 py-6 text-lg font-semibold rounded-full"
                >
                  Back to Services
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
} 