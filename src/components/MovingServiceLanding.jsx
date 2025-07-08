"use client" ;
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Separator } from "@/components/ui/separator"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ScrollProgress } from "@/components/ui/scroll-progress"
import { motion, useScroll, useTransform, useInView } from "motion/react"
import { useRef } from "react"
import {
  Truck,
  Clock,
  Phone,
  Mail,
  MapPin,
  Star,
  CheckCircle,
  Package,
  Home,
  Building,
  Award,
  ArrowRight,
  Quote,
  Calendar,
  Headphones,
  FileText,
  Shield,
  Users,
  TrendingUp,
  MessageSquare,
  Play,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  Menu,
  X,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"

export default function MovingServiceLanding() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [currentFloatingImage, setCurrentFloatingImage] = useState(0)
  const [quoteForm, setQuoteForm] = useState({
    name: "",
    email: "",
    phone: "",
    movingFrom: "",
    movingTo: "",
    moveDate: "",
    homeSize: "",
    message: ""
  })

  // Image arrays for rotation (only used in hero section)
  const images = [
    "/assets/image/content/image.jpg",
    "/assets/image/content/image1.jpg", 
    "/assets/image/content/image2.jpg"
  ]

  const imageDescriptions = [
    "Professional movers loading boxes into truck",
    "Moving team in action", 
    "Happy family after successful move"
  ]

  // Auto-rotate images every 4 seconds (only for hero section)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [images.length])

  // Auto-rotate floating images every 3 seconds (offset timing)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFloatingImage((prev) => (prev + 1) % images.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [images.length])

  const handleQuoteFormChange = (field, value) => {
    setQuoteForm(prev => ({ ...prev, [field]: value }))
  }

  const handleQuoteSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Quote form submitted:", quoteForm)
    // Reset form or show success message
  }
  return (
    <div className="flex flex-col min-h-screen">
      <ScrollProgress />
      {/* Header */}
      <header className="px-4 lg:px-6 h-16 flex items-center justify-between border-b bg-white/95 backdrop-blur-sm sticky top-0 z-40 shadow-sm">
        {/* Logo */}
        <Link href="/" className="flex items-center justify-center">
          <div className="relative">
            <Image
              src="/assets/image/logo.png"
              alt="SwiftMove Pro Logo"
              width={200}
              height={200}
              className="h-14 w-auto object-contain"
              priority
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          <Link href="#services" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors relative group">
            Services
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link href="#process" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors relative group">
            How It Works
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link href="#testimonials" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors relative group">
            Reviews
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link href="#about" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors relative group">
            About
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link href="#contact" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors relative group">
            Contact
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
          </Link>
        </nav>

        {/* Right Side Actions */}
        <div className="flex items-center gap-3">
          {/* Phone Button - Hidden on smaller screens */}
          <Button 
            variant="outline" 
            size="sm" 
            className="hidden xl:flex items-center gap-2 bg-transparent border-gray-200 hover:bg-blue-50 hover:border-blue-200 text-gray-700 hover:text-blue-600 transition-all duration-200"
          >
            <Phone className="h-4 w-4" />
            <span className="hidden xl:inline">(555) 123-4567</span>
          </Button>

          {/* CTA Button */}
          <Button 
            size="sm"
            className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-sm hover:shadow-md transition-all duration-200 px-4 py-2"
          >
            Free Quote
          </Button>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="lg:hidden p-2 hover:bg-gray-100 text-gray-700 transition-all duration-200"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="relative w-6 h-6 flex items-center justify-center">
              <div className="absolute w-5 h-0.5 bg-current transform transition-all duration-300 ease-in-out" 
                   style={{ 
                     transform: isMenuOpen ? 'rotate(45deg)' : 'translateY(-6px)' 
                   }}
              />
              <div className="absolute w-5 h-0.5 bg-current transform transition-all duration-300 ease-in-out" 
                   style={{ 
                     opacity: isMenuOpen ? 0 : 1,
                     transform: isMenuOpen ? 'scaleX(0)' : 'scaleX(1)'
                   }}
              />
              <div className="absolute w-5 h-0.5 bg-current transform transition-all duration-300 ease-in-out" 
                   style={{ 
                     transform: isMenuOpen ? 'rotate(-45deg)' : 'translateY(6px)' 
                   }}
              />
            </div>
          </Button>
        </div>
      </header>

      {/* Mobile Menu Backdrop */}
      {isMenuOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-black/20 backdrop-blur-sm z-30 animate-fadeIn"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden fixed top-16 left-0 right-0 bg-white border-b shadow-lg z-40 max-h-[calc(100vh-4rem)] overflow-y-auto animate-slideDown">
          <nav className="flex flex-col py-4">
            <Link 
              href="#services" 
              className="px-6 py-3 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200 border-l-4 border-transparent hover:border-blue-600 animate-fadeInUp"
              style={{ animationDelay: '0.1s' }}
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link 
              href="#process" 
              className="px-6 py-3 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200 border-l-4 border-transparent hover:border-blue-600 animate-fadeInUp"
              style={{ animationDelay: '0.15s' }}
              onClick={() => setIsMenuOpen(false)}
            >
              How It Works
            </Link>
            <Link 
              href="#testimonials" 
              className="px-6 py-3 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200 border-l-4 border-transparent hover:border-blue-600 animate-fadeInUp"
              style={{ animationDelay: '0.2s' }}
              onClick={() => setIsMenuOpen(false)}
            >
              Reviews
            </Link>
            <Link 
              href="#about" 
              className="px-6 py-3 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200 border-l-4 border-transparent hover:border-blue-600 animate-fadeInUp"
              style={{ animationDelay: '0.25s' }}
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              href="#contact" 
              className="px-6 py-3 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200 border-l-4 border-transparent hover:border-blue-600 animate-fadeInUp"
              style={{ animationDelay: '0.3s' }}
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            
            {/* Mobile Actions */}
            <div className="px-6 py-3 space-y-3 border-t border-gray-100 mt-2 animate-fadeInUp" style={{ animationDelay: '0.35s' }}>
              <Button 
                variant="outline" 
                size="sm" 
                className="w-full justify-center gap-2 bg-transparent border-gray-200 hover:bg-blue-50 hover:border-blue-200 text-gray-700 hover:text-blue-600 transform hover:scale-105 transition-all duration-200"
              >
                <Phone className="h-4 w-4" />
                Call: (555) 123-4567
              </Button>
              <Button 
                size="sm"
                className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white transform hover:scale-105 transition-all duration-200"
              >
                Get Free Quote
              </Button>
            </div>
          </nav>
        </div>
      )}

      <main className="flex-1">
        {/* Enhanced Hero Section */}
        <section className="relative w-full py-12 md:py-24 lg:py-32 overflow-hidden min-h-[90vh] flex items-center">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-indigo-50"></div>
          <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
          
          {/* Floating elements for visual interest */}
          <div className="absolute top-20 left-10 w-20 h-20 bg-blue-200 rounded-full opacity-20 animate-bounce"></div>
          <div className="absolute bottom-20 right-10 w-16 h-16 bg-purple-200 rounded-full opacity-20 animate-pulse"></div>
          <div className="absolute top-1/2 right-1/4 w-12 h-12 bg-green-200 rounded-full opacity-20 animate-ping"></div>
          
          <div className="container relative px-4 md:px-6 max-w-7xl mx-auto">
            <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16 items-center">
              <div className="flex flex-col justify-center space-y-8">
                {/* Urgency Banner */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="flex items-center gap-2"
                >
                  <Badge className="bg-gradient-to-r from-red-100 to-orange-100 text-red-800 hover:from-red-200 hover:to-orange-200 border-0 px-4 py-2">
                    🔥 LIMITED TIME: Save 20% This Month Only!
                  </Badge>
                </motion.div>

                {/* Main Headlines */}
                <motion.div 
                  className="space-y-6"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                >
                  <h1 className="text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight leading-none">
                    <span className="text-gray-900">Stress-Free Moving</span>
                    <br />
                    <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
                      Without Breaking
                    </span>
                    <br />
                    <span className="text-green-600">The Bank</span>
                  </h1>
                  
                  <motion.p 
                    className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-2xl"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                  >
                    Professional movers you can trust. 
                    <span className="font-semibold text-blue-600"> 10,000+ successful moves</span>, 
                    <span className="font-semibold text-green-600"> zero damage claims</span>, and 
                    <span className="font-semibold text-purple-600"> 15+ years of excellence</span>.
                  </motion.p>
                </motion.div>

                {/* Trust Indicators */}
                <motion.div 
                  className="flex flex-wrap items-center gap-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  <div className="flex items-center gap-2">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <span className="font-semibold text-gray-900">4.9/5</span>
                    <span className="text-gray-600">(2,847 reviews)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Shield className="h-5 w-5 text-green-600" />
                    <span className="text-gray-600">Fully Insured & Licensed</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Award className="h-5 w-5 text-purple-600" />
                    <span className="text-gray-600">BBB A+ Rated</span>
                  </div>
                </motion.div>

                {/* CTA Buttons */}
                <motion.div 
                  className="flex flex-col sm:flex-row gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                >
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-xl hover:shadow-2xl transition-all duration-300 group text-lg px-8 py-6"
                  >
                    Get FREE Quote in 30 Seconds
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="border-2 border-gray-300 hover:bg-gray-50 group bg-white text-lg px-8 py-6"
                  >
                    <Phone className="mr-2 h-5 w-5 group-hover:animate-pulse" />
                    Call Now: (555) 123-4567
                  </Button>
                </motion.div>

                {/* Quick Stats */}
                <motion.div 
                  className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-6 border-t border-gray-200"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 1 }}
                >
                  {[
                    { value: "10K+", label: "Happy Customers", icon: "👥" },
                    { value: "4.9★", label: "Google Rating", icon: "⭐" },
                    { value: "24/7", label: "Support", icon: "🕐" },
                    { value: "0", label: "Damage Claims", icon: "🛡️" }
                  ].map((stat, index) => (
                    <motion.div 
                      key={index}
                      className="text-center group hover:scale-105 transition-transform cursor-pointer"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 1.1 + (index * 0.1) }}
                    >
                      <div className="text-2xl mb-1">{stat.icon}</div>
                      <div className="text-2xl md:text-3xl font-bold text-gray-900">{stat.value}</div>
                      <div className="text-sm text-gray-600">{stat.label}</div>
                    </motion.div>
                  ))}
                </motion.div>
              </div>

              {/* Right Side - Enhanced Visual with Multiple Real Images */}
              <motion.div 
                className="relative flex items-center justify-center"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.4 }}
              >
                <div className="relative">
                  {/* Background decoration */}
                  <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl opacity-20 blur-xl"></div>
                  
                  {/* Main image container with stacked effect */}
                  <div className="relative">
                    {/* Background cards for depth */}
                    <div className="absolute top-2 right-2 w-full h-full bg-white rounded-2xl shadow-lg opacity-30 rotate-2"></div>
                    <div className="absolute top-1 right-1 w-full h-full bg-white rounded-2xl shadow-lg opacity-50 rotate-1"></div>
                    
                    {/* Main hero image */}
                    <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100">
                      <div className="relative">
                        <motion.div
                          key={currentImageIndex}
                          initial={{ opacity: 0, scale: 1.1 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.9 }}
                          transition={{ duration: 0.8, ease: "easeInOut" }}
                        >
                          <Image
                            src={images[currentImageIndex]}
                            alt={imageDescriptions[currentImageIndex]}
                            width={600}
                            height={400}
                            className="w-full h-64 md:h-80 object-cover"
                            priority
                          />
                        </motion.div>
                        {/* Overlay with trust indicators */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                        
                        {/* Floating trust badges */}
                        <div className="absolute top-4 left-4">
                          <div className="bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2 shadow-lg">
                            <div className="flex items-center gap-2">
                              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                              <span className="text-sm font-medium text-gray-900">Live Tracking</span>
                            </div>
                          </div>
                        </div>
                        
                      
                        
                        {/* Bottom overlay content */}
                        <div className="absolute bottom-4 left-4 right-4">
                          <div className="bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                            <div className="text-center space-y-3">
                              <h3 className="text-lg font-bold text-gray-900">Professional Team Ready</h3>
                              <div className="grid grid-cols-2 gap-3 text-sm">
                                <div className="flex items-center gap-2">
                                  <CheckCircle className="h-4 w-4 text-green-600" />
                                  <span className="text-gray-700">Insured & Licensed</span>
                                </div>
                                <div className="flex items-center gap-2">
                                  <CheckCircle className="h-4 w-4 text-green-600" />
                                  <span className="text-gray-700">Background Checked</span>
                                </div>
                                <div className="flex items-center gap-2">
                                  <CheckCircle className="h-4 w-4 text-green-600" />
                                  <span className="text-gray-700">Expert Handlers</span>
                                </div>
                                <div className="flex items-center gap-2">
                                  <CheckCircle className="h-4 w-4 text-green-600" />
                                  <span className="text-gray-700">On-Time Guarantee</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Floating mini images for visual interest */}
                  <motion.div 
                    className="absolute -top-8 -right-12 bg-white rounded-xl shadow-xl overflow-hidden border-2 border-blue-100"
                    initial={{ opacity: 0, scale: 0, rotate: -10 }}
                    animate={{ opacity: 1, scale: 1, rotate: -5 }}
                    transition={{ duration: 0.8, delay: 1.4 }}
                  >
                    <motion.div
                      key={`floating-1-${currentFloatingImage}`}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6 }}
                    >
                      <Image
                        src={images[(currentFloatingImage + 1) % images.length]}
                        alt="Moving team in action"
                        width={120}
                        height={80}
                        className="w-24 h-16 object-cover"
                      />
                    </motion.div>
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent"></div>
                  </motion.div>
                  
                  <motion.div 
                    className="absolute -bottom-8 -left-12 bg-white rounded-xl shadow-xl overflow-hidden border-2 border-purple-100"
                    initial={{ opacity: 0, scale: 0, rotate: 10 }}
                    animate={{ opacity: 1, scale: 1, rotate: 5 }}
                    transition={{ duration: 0.8, delay: 1.6 }}
                  >
                    <motion.div
                      key={`floating-2-${currentFloatingImage}`}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6 }}
                    >
                      <Image
                        src={images[(currentFloatingImage + 2) % images.length]}
                        alt="Happy family after successful move"
                        width={120}
                        height={80}
                        className="w-24 h-16 object-cover"
                      />
                    </motion.div>
                    <div className="absolute inset-0 bg-gradient-to-t from-purple-600/20 to-transparent"></div>
                  </motion.div>
                  
                  {/* Additional floating elements */}
                
                  
                
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Instant Quote Section */}
        <section className="w-full py-16 md:py-28 lg:py-36 bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700 relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
          <div className="container relative px-6 md:px-8 lg:px-12 max-w-7xl mx-auto">
            <div className="grid gap-12 lg:grid-cols-2 items-center">
              <div className="space-y-6 text-white">
                <Badge className="bg-white/20 text-white hover:bg-white/30 border-0">🚀 Instant Quote</Badge>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Get Your Moving Quote in 60 Seconds
                </h2>
                <p className="text-blue-100 text-lg leading-relaxed">
                  Join thousands of satisfied customers who chose SwiftMove Pro. No hidden fees, no surprises - just honest, professional moving services.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-6 w-6 text-green-400" />
                    <span>Free estimates</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-6 w-6 text-green-400" />
                    <span>No obligation</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-6 w-6 text-green-400" />
                    <span>Instant response</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-6 w-6 text-green-400" />
                    <span>Licensed & insured</span>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 space-y-6">
                <form onSubmit={handleQuoteSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input
                      type="text"
                      placeholder="Your Name"
                      value={quoteForm.name}
                      onChange={(e) => handleQuoteFormChange("name", e.target.value)}
                      className="bg-white/90 border-0 text-gray-900 placeholder:text-gray-600"
                      required
                    />
                    <Input
                      type="email"
                      placeholder="Email Address"
                      value={quoteForm.email}
                      onChange={(e) => handleQuoteFormChange("email", e.target.value)}
                      className="bg-white/90 border-0 text-gray-900 placeholder:text-gray-600"
                      required
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input
                      type="tel"
                      placeholder="Phone Number"
                      value={quoteForm.phone}
                      onChange={(e) => handleQuoteFormChange("phone", e.target.value)}
                      className="bg-white/90 border-0 text-gray-900 placeholder:text-gray-600"
                      required
                    />
                    <Select onValueChange={(value) => handleQuoteFormChange("homeSize", value)}>
                      <SelectTrigger className="bg-white/90 border-0 text-gray-900">
                        <SelectValue placeholder="Home Size" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="studio">Studio/1BR</SelectItem>
                        <SelectItem value="2br">2 Bedroom</SelectItem>
                        <SelectItem value="3br">3 Bedroom</SelectItem>
                        <SelectItem value="4br">4+ Bedroom</SelectItem>
                        <SelectItem value="office">Office</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input
                      type="text"
                      placeholder="Moving From (City, State)"
                      value={quoteForm.movingFrom}
                      onChange={(e) => handleQuoteFormChange("movingFrom", e.target.value)}
                      className="bg-white/90 border-0 text-gray-900 placeholder:text-gray-600"
                      required
                    />
                    <Input
                      type="text"
                      placeholder="Moving To (City, State)"
                      value={quoteForm.movingTo}
                      onChange={(e) => handleQuoteFormChange("movingTo", e.target.value)}
                      className="bg-white/90 border-0 text-gray-900 placeholder:text-gray-600"
                      required
                    />
                  </div>

                  <Input
                    type="date"
                    placeholder="Preferred Move Date"
                    value={quoteForm.moveDate}
                    onChange={(e) => handleQuoteFormChange("moveDate", e.target.value)}
                    className="bg-white/90 border-0 text-gray-900 placeholder:text-gray-600"
                  />

                  <Textarea
                    placeholder="Additional details about your move (optional)"
                    value={quoteForm.message}
                    onChange={(e) => handleQuoteFormChange("message", e.target.value)}
                    className="bg-white/90 border-0 text-gray-900 placeholder:text-gray-600 min-h-[80px]"
                  />

                  <Button type="submit" className="w-full bg-white text-blue-700 hover:bg-gray-100 font-semibold py-3 text-lg">
                    Get My Free Quote Now
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <motion.section 
          className="w-full py-12 bg-white border-y"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { value: "10,000+", label: "Successful Moves", color: "text-blue-600" },
                { value: "99.9%", label: "On-Time Delivery", color: "text-green-600" },
                { value: "4.9/5", label: "Customer Rating", color: "text-purple-600" },
                { value: "0", label: "Damage Claims", color: "text-orange-600" }
              ].map((stat, index) => (
                <motion.div 
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 0.6, 
                    delay: index * 0.2,
                    ease: "easeOut" 
                  }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                >
                  <motion.div 
                    className={`text-3xl md:text-4xl font-bold ${stat.color} mb-2`}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ 
                      duration: 0.5, 
                      delay: index * 0.2 + 0.3,
                      type: "spring",
                      stiffness: 200 
                    }}
                    viewport={{ once: true }}
                  >
                    {stat.value}
                  </motion.div>
                  <div className="text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* How It Works Section */}
        <motion.section 
          id="process" 
          className="w-full py-16 md:py-28 lg:py-36 bg-gray-50"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="container px-6 md:px-8 lg:px-12 max-w-7xl mx-auto">
            <motion.div 
              className="text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Badge className="mb-4 bg-blue-100 text-blue-800">Simple Process</Badge>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-gray-900 mb-4">
                How We Make Moving Easy
              </h2>
              <p className="max-w-[600px] mx-auto text-gray-600 md:text-xl">
                Our streamlined 4-step process ensures your move is handled professionally from start to finish.
              </p>
            </motion.div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  icon: FileText,
                  step: "1",
                  title: "Get Quote",
                  description: "Free, instant quote with no hidden fees. Just honest, upfront pricing.",
                  gradient: "from-blue-500 to-blue-600",
                  bgColor: "bg-blue-100",
                  textColor: "text-blue-600"
                },
                {
                  icon: Calendar,
                  step: "2", 
                  title: "Schedule",
                  description: "Pick your preferred date and time. We work around your schedule.",
                  gradient: "from-green-500 to-green-600",
                  bgColor: "bg-green-100",
                  textColor: "text-green-600"
                },
                {
                  icon: Package,
                  step: "3",
                  title: "Pack & Load", 
                  description: "Our expert team carefully packs and loads your belongings with precision.",
                  gradient: "from-purple-500 to-purple-600",
                  bgColor: "bg-purple-100", 
                  textColor: "text-purple-600"
                },
                {
                  icon: Home,
                  step: "4",
                  title: "Deliver",
                  description: "Safe delivery to your new home with careful unpacking and setup.",
                  gradient: "from-orange-500 to-orange-600",
                  bgColor: "bg-orange-100",
                  textColor: "text-orange-600"
                }
              ].map((item, index) => {
                const Icon = item.icon
                return (
                  <motion.div 
                    key={index}
                    className="text-center group"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ 
                      duration: 0.6, 
                      delay: index * 0.2,
                      ease: "easeOut" 
                    }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="relative mb-6">
                      <motion.div 
                        className={`w-16 h-16 bg-gradient-to-br ${item.gradient} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
                        initial={{ scale: 0, rotate: -180 }}
                        whileInView={{ scale: 1, rotate: 0 }}
                        transition={{ 
                          duration: 0.6, 
                          delay: index * 0.2 + 0.3,
                          type: "spring",
                          stiffness: 200 
                        }}
                        viewport={{ once: true }}
                      >
                        <Icon className="h-8 w-8 text-white" />
                      </motion.div>
                    
                    </div>
                    <motion.h3 
                      className="text-xl font-semibold mb-2"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0.4, delay: index * 0.2 + 0.6 }}
                      viewport={{ once: true }}
                    >
                      {item.title}
                    </motion.h3>
                    <motion.p 
                      className="text-gray-600"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0.4, delay: index * 0.2 + 0.7 }}
                      viewport={{ once: true }}
                    >
                      {item.description}
                    </motion.p>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </motion.section>

        {/* Image Showcase Section */}
        <section className="w-full py-16 md:py-24 lg:py-32 bg-white">
          <div className="container px-6 md:px-8 lg:px-12 max-w-7xl mx-auto">
            <motion.div 
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Badge className="mb-4 bg-blue-100 text-blue-800">See Us In Action</Badge>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-gray-900 mb-4">
                Real Moves, Real Results
              </h2>
              <p className="max-w-2xl mx-auto text-gray-600 md:text-lg">
                Experience the difference of working with true professionals. Every move is handled with care, precision, and dedication.
              </p>
            </motion.div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {/* Main featured image */}
              <motion.div 
                className="lg:col-span-2 relative group"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="/assets/image/content/image.jpg"
                    alt="Professional movers carefully loading furniture"
                    width={800}
                    height={500}
                    className="w-full h-64 md:h-80 object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="space-y-2">
                      <h3 className="text-xl font-bold text-white">Professional Loading & Unloading</h3>
                      <p className="text-blue-100">Expert handling of your valuables with state-of-the-art equipment</p>
                      <div className="flex items-center gap-4 text-sm text-blue-200">
                        <span className="flex items-center gap-1">
                          <CheckCircle className="h-4 w-4" />
                          Safe Transport
                        </span>
                        <span className="flex items-center gap-1">
                          <CheckCircle className="h-4 w-4" />
                          Damage Protection
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Secondary images */}
              <div className="space-y-6">
                <motion.div 
                  className="relative group"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <div className="relative rounded-xl overflow-hidden shadow-lg">
                    <Image
                      src="/assets/image/content/image1.jpg"
                      alt="Moving team in action"
                      width={400}
                      height={300}
                      className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <h4 className="text-white font-semibold">Expert Team</h4>
                      <p className="text-blue-100 text-sm">Licensed & trained professionals</p>
                    </div>
                  </div>
                </motion.div>

                <motion.div 
                  className="relative group"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  viewport={{ once: true }}
                >
                  <div className="relative rounded-xl overflow-hidden shadow-lg">
                    <Image
                      src="/assets/image/content/image2.jpg"
                      alt="Happy customers after successful move"
                      width={400}
                      height={300}
                      className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <h4 className="text-white font-semibold">Happy Customers</h4>
                      <p className="text-blue-100 text-sm">99% customer satisfaction rate</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Trust indicators */}
            <motion.div 
              className="mt-12 pt-8 border-t border-gray-200"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-blue-600">10,000+</div>
                  <div className="text-sm text-gray-600">Successful Moves</div>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-green-600">4.9/5</div>
                  <div className="text-sm text-gray-600">Customer Rating</div>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-purple-600">15+</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-red-600">0</div>
                  <div className="text-sm text-gray-600">Damage Claims</div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Enhanced Services Section */}
        <section id="services" className="w-full py-16 md:py-28 lg:py-36 bg-gray-50">
          <div className="container px-6 md:px-8 lg:px-12 max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-blue-100 text-blue-800">Our Services</Badge>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-gray-900 mb-4">
                Complete Moving Solutions
              </h2>
              <p className="max-w-[800px] mx-auto text-gray-600 md:text-xl">
                From local moves to cross-country relocations, we provide comprehensive moving services tailored to your
                specific needs with guaranteed satisfaction.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <Card className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-blue-200 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-blue-600"></div>
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-100 to-blue-200 group-hover:scale-110 transition-transform duration-300">
                    <Home className="h-8 w-8 text-blue-600" />
                  </div>
                  <CardTitle className="text-xl">Residential Moving</CardTitle>
                  <CardDescription className="text-base">
                    Complete home moving services with professional care for all your belongings
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                      <span className="text-sm">Professional packing & unpacking</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                      <span className="text-sm">Furniture disassembly & assembly</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                      <span className="text-sm">Local & long-distance moves</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                      <span className="text-sm">Storage solutions available</span>
                    </div>
                  </div>
                  <Separator />
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-600">Starting from</span>
                    <span className="text-lg font-bold text-blue-600">$299</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-green-200 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-500 to-green-600"></div>
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-green-100 to-green-200 group-hover:scale-110 transition-transform duration-300">
                    <Building className="h-8 w-8 text-green-600" />
                  </div>
                  <CardTitle className="text-xl">Commercial Moving</CardTitle>
                  <CardDescription className="text-base">
                    Office relocations with minimal downtime and maximum efficiency
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                      <span className="text-sm">Office equipment handling</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                      <span className="text-sm">Weekend & after-hours moves</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                      <span className="text-sm">IT equipment specialists</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                      <span className="text-sm">Project management included</span>
                    </div>
                  </div>
                  <Separator />
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-600">Starting from</span>
                    <span className="text-lg font-bold text-green-600">$599</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-purple-200 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-purple-600"></div>
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-100 to-purple-200 group-hover:scale-110 transition-transform duration-300">
                    <Award className="h-8 w-8 text-purple-600" />
                  </div>
                  <CardTitle className="text-xl">Specialty Items</CardTitle>
                  <CardDescription className="text-base">
                    Expert handling of valuable and delicate items with custom solutions
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                      <span className="text-sm">Piano & instrument moving</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                      <span className="text-sm">Art & antique handling</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                      <span className="text-sm">Custom crating services</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                      <span className="text-sm">White-glove service</span>
                    </div>
                  </div>
                  <Separator />
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-600">Custom pricing</span>
                    <Button variant="outline" size="sm">
                      Get Quote
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Success Stories Section */}
        <section className="w-full py-16 md:py-28 lg:py-36 bg-white">
          <div className="container px-6 md:px-8 lg:px-12 max-w-7xl mx-auto">
            <motion.div 
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Badge className="mb-4 bg-gradient-to-r from-green-100 to-blue-100 text-green-800">Success Stories</Badge>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-gray-900 mb-4">
                Transforming Lives, One Move at a Time
              </h2>
              <p className="max-w-3xl mx-auto text-gray-600 md:text-lg">
                Every successful move represents a new beginning for our customers. Here's how we've helped families and businesses start their next chapter with confidence.
              </p>
            </motion.div>

            <div className="grid gap-8 lg:grid-cols-2 items-center">
              {/* Left side - Story with image */}
              <motion.div 
                className="space-y-6"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
                  <Image
                    src="/assets/image/content/image1.jpg"
                    alt="Professional moving team carefully handling belongings"
                    width={600}
                    height={400}
                    className="w-full h-64 md:h-80 object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="bg-white/95 backdrop-blur-sm rounded-xl p-6 space-y-3">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                          <span className="text-white font-bold">JS</span>
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-900">The Johnson Family</h4>
                          <p className="text-sm text-gray-600">Cross-Country Relocation</p>
                        </div>
                      </div>
                      <blockquote className="text-gray-700 italic">
                        "Moving from New York to California felt overwhelming until we found SwiftMove Pro. They handled everything with such care and professionalism."
                      </blockquote>
                      <div className="flex items-center gap-4 text-sm">
                        <span className="flex items-center gap-1 text-green-600 font-medium">
                          <CheckCircle className="h-4 w-4" />
                          Zero Damages
                        </span>
                        <span className="flex items-center gap-1 text-blue-600 font-medium">
                          <Star className="h-4 w-4 fill-current" />
                          5-Star Experience
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Right side - Story with image */}
              <motion.div 
                className="space-y-6"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
                  <Image
                    src="/assets/image/content/image2.jpg"
                    alt="Happy family in their new home"
                    width={600}
                    height={400}
                    className="w-full h-64 md:h-80 object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="bg-white/95 backdrop-blur-sm rounded-xl p-6 space-y-3">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-teal-600 rounded-full flex items-center justify-center">
                          <span className="text-white font-bold">MC</span>
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-900">Martinez Corporation</h4>
                          <p className="text-sm text-gray-600">Office Relocation</p>
                        </div>
                      </div>
                      <blockquote className="text-gray-700 italic">
                        "Our office move was completed over the weekend with zero downtime. Monday morning we were fully operational in our new space."
                      </blockquote>
                      <div className="flex items-center gap-4 text-sm">
                        <span className="flex items-center gap-1 text-green-600 font-medium">
                          <Clock className="h-4 w-4" />
                          On-Time Delivery
                        </span>
                        <span className="flex items-center gap-1 text-purple-600 font-medium">
                          <Award className="h-4 w-4" />
                          Premium Service
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Featured highlight with main image */}
            <motion.div 
              className="mt-16 relative rounded-3xl overflow-hidden shadow-2xl"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <Image
                src="/assets/image/content/image.jpg"
                alt="Professional moving team with satisfied customers"
                width={1200}
                height={500}
                className="w-full h-64 md:h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-blue-800/70 to-transparent"></div>
              <div className="absolute inset-0 flex items-center">
                <div className="container px-6 md:px-12">
                  <div className="max-w-2xl space-y-6 text-white">
                    <motion.h3 
                      className="text-3xl md:text-4xl font-bold"
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.8, delay: 0.8 }}
                      viewport={{ once: true }}
                    >
                      Ready for Your Success Story?
                    </motion.h3>
                    <motion.p 
                      className="text-xl text-blue-100"
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.8, delay: 1 }}
                      viewport={{ once: true }}
                    >
                      Join thousands of satisfied customers who chose SwiftMove Pro for their most important transitions.
                    </motion.p>
                    <motion.div 
                      className="flex flex-col sm:flex-row gap-4"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 1.2 }}
                      viewport={{ once: true }}
                    >
                      <Button 
                        size="lg" 
                        className="bg-white text-blue-600 hover:bg-blue-50 hover:text-blue-700 font-semibold px-8 py-4"
                      >
                        Start Your Journey
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Button>
                      <Button 
                        variant="outline" 
                        size="lg" 
                        className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4"
                      >
                        <Phone className="mr-2 h-5 w-5" />
                        Call Now
                      </Button>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Video Testimonials Section */}
        <section className="w-full py-16 md:py-28 lg:py-36 bg-gray-900">
          <div className="container px-6 md:px-8 lg:px-12 max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-blue-600 text-white">Video Testimonials</Badge>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-white mb-4">
                See Real Customer Stories
              </h2>
              <p className="max-w-[600px] mx-auto text-gray-300 md:text-xl">
                Watch real customers share their moving experiences with SwiftMove Pro.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <div className="relative group cursor-pointer">
                <div className="relative bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl p-6 h-64 flex items-center justify-center overflow-hidden">
                  <div className="absolute inset-0 bg-black/40"></div>
                  <div className="relative z-10 text-center text-white">
                    <Play className="h-16 w-16 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                    <h3 className="text-xl font-semibold mb-2">Sarah's Local Move</h3>
                    <p className="text-blue-100">3-bedroom home in 4 hours</p>
                  </div>
                </div>
              </div>

              <div className="relative group cursor-pointer">
                <div className="relative bg-gradient-to-br from-green-600 to-green-800 rounded-xl p-6 h-64 flex items-center justify-center overflow-hidden">
                  <div className="absolute inset-0 bg-black/40"></div>
                  <div className="relative z-10 text-center text-white">
                    <Play className="h-16 w-16 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                    <h3 className="text-xl font-semibold mb-2">Mike's Office Move</h3>
                    <p className="text-green-100">Zero downtime relocation</p>
                  </div>
                </div>
              </div>

              <div className="relative group cursor-pointer">
                <div className="relative bg-gradient-to-br from-purple-600 to-purple-800 rounded-xl p-6 h-64 flex items-center justify-center overflow-hidden">
                  <div className="absolute inset-0 bg-black/40"></div>
                  <div className="relative z-10 text-center text-white">
                    <Play className="h-16 w-16 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                    <h3 className="text-xl font-semibold mb-2">Emily's Piano Move</h3>
                    <p className="text-purple-100">Specialty item handling</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="w-full py-16 md:py-28 lg:py-36 bg-gray-50">
          <div className="container px-6 md:px-8 lg:px-12 max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-blue-100 text-blue-800">Customer Reviews</Badge>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-gray-900 mb-4">
                What Our Customers Say
              </h2>
              <p className="max-w-[600px] mx-auto text-gray-600 md:text-xl">
                Don't just take our word for it. Here's what real customers say about their moving experience with us.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <Card className="relative">
                <Quote className="absolute top-4 right-4 h-8 w-8 text-blue-200" />
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <Avatar>
                      <AvatarImage src="/placeholder.svg?height=40&width=40" />
                      <AvatarFallback>SM</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-semibold">Sarah Mitchell</div>
                      <div className="text-sm text-gray-600">Residential Move</div>
                    </div>
                  </div>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    "Absolutely incredible service! The team was professional, careful with our belongings, and made our
                    cross-country move stress-free. Highly recommend SwiftMove Pro!"
                  </p>
                </CardContent>
              </Card>

              <Card className="relative">
                <Quote className="absolute top-4 right-4 h-8 w-8 text-blue-200" />
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <Avatar>
                      <AvatarImage src="/placeholder.svg?height=40&width=40" />
                      <AvatarFallback>MJ</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-semibold">Michael Johnson</div>
                      <div className="text-sm text-gray-600">Office Relocation</div>
                    </div>
                  </div>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    "They moved our entire office over the weekend with zero downtime. Everything was set up perfectly
                    on Monday morning. Outstanding professionalism!"
                  </p>
                </CardContent>
              </Card>

              <Card className="relative">
                <Quote className="absolute top-4 right-4 h-8 w-8 text-blue-200" />
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <Avatar>
                      <AvatarImage src="/placeholder.svg?height=40&width=40" />
                      <AvatarFallback>ER</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-semibold">Emily Rodriguez</div>
                      <div className="text-sm text-gray-600">Piano Moving</div>
                    </div>
                  </div>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    "Moving my grandmother's antique piano was my biggest worry. SwiftMove handled it with such care and
                    expertise. Not a scratch! Thank you so much!"
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* About Us Section */}
        <section id="about" className="w-full py-16 md:py-28 lg:py-36 bg-white">
          <div className="container px-6 md:px-8 lg:px-12 max-w-7xl mx-auto">
            <div className="grid gap-12 lg:grid-cols-2 items-center">
              <div className="space-y-6">
                <Badge className="bg-blue-100 text-blue-800">About SwiftMove Pro</Badge>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-gray-900">
                  15+ Years of Moving Excellence
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Founded in 2009, SwiftMove Pro has grown from a small local moving company to one of the most trusted moving services in the region. Our commitment to excellence, customer satisfaction, and damage-free moves has earned us the loyalty of over 10,000 satisfied customers.
                </p>
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <Shield className="h-6 w-6 text-blue-600" />
                      <span className="font-semibold">Fully Licensed & Insured</span>
                    </div>
                    <p className="text-sm text-gray-600">DOT #123456 • $1M Coverage</p>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <Award className="h-6 w-6 text-green-600" />
                      <span className="font-semibold">Award-Winning Service</span>
                    </div>
                    <p className="text-sm text-gray-600">Best Moving Company 2023</p>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <Users className="h-6 w-6 text-purple-600" />
                      <span className="font-semibold">Expert Team</span>
                    </div>
                    <p className="text-sm text-gray-600">50+ Professional Movers</p>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <TrendingUp className="h-6 w-6 text-orange-600" />
                      <span className="font-semibold">Growing Strong</span>
                    </div>
                    <p className="text-sm text-gray-600">500+ Moves Monthly</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Button className="bg-blue-600 hover:bg-blue-700">
                    Learn More About Us
                  </Button>
                  <Button variant="outline" className="bg-transparent">
                    View Our Certifications
                  </Button>
                </div>
              </div>
              
              <div className="relative">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-4">
                    <div className="bg-white rounded-xl p-6 shadow-lg border">
                      <div className="text-3xl font-bold text-blue-600 mb-2">15+</div>
                      <div className="text-sm text-gray-600">Years in Business</div>
                    </div>
                    <div className="bg-white rounded-xl p-6 shadow-lg border">
                      <div className="text-3xl font-bold text-green-600 mb-2">98%</div>
                      <div className="text-sm text-gray-600">Customer Satisfaction</div>
                    </div>
                  </div>
                  <div className="space-y-4 mt-8">
                    <div className="bg-white rounded-xl p-6 shadow-lg border">
                      <div className="text-3xl font-bold text-purple-600 mb-2">50+</div>
                      <div className="text-sm text-gray-600">Professional Movers</div>
                    </div>
                    <div className="bg-white rounded-xl p-6 shadow-lg border">
                      <div className="text-3xl font-bold text-orange-600 mb-2">0</div>
                      <div className="text-sm text-gray-600">Damage Claims</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-blue-100 text-blue-800">FAQ</Badge>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-gray-900 mb-4">
                Frequently Asked Questions
              </h2>
              <p className="max-w-[600px] mx-auto text-gray-600 md:text-xl">
                Get answers to the most common questions about our moving services.
              </p>
            </div>

            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-left">How much does a move typically cost?</AccordionTrigger>
                  <AccordionContent>
                    Moving costs depend on several factors including distance, size of move, services needed, and
                    timing. Local moves typically start at $299, while long-distance moves vary based on mileage and
                    weight. We provide free, detailed quotes with no hidden fees.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-left">How far in advance should I book my move?</AccordionTrigger>
                  <AccordionContent>
                    We recommend booking at least 2-4 weeks in advance, especially during peak moving season (summer
                    months). However, we can often accommodate last-minute moves depending on availability. Contact us
                    as soon as you know your moving date.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                  <AccordionTrigger className="text-left">Are my belongings insured during the move?</AccordionTrigger>
                  <AccordionContent>
                    Yes! All moves include basic coverage, and we offer additional full-value protection insurance up to
                    $1M. We're fully licensed and bonded, giving you complete peace of mind during your move.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4">
                  <AccordionTrigger className="text-left">
                    Do you provide packing materials and services?
                  </AccordionTrigger>
                  <AccordionContent>
                    We offer complete packing services using high-quality materials. We can pack everything for you, or
                    provide materials for DIY packing. Our team uses specialized techniques to ensure your items are
                    protected.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5">
                  <AccordionTrigger className="text-left">What if my move date changes?</AccordionTrigger>
                  <AccordionContent>
                    We understand that moving dates can change. We offer flexible rescheduling options and will work
                    with you to accommodate changes whenever possible. Contact us as soon as you know about any date
                    changes.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>

        {/* Enhanced CTA Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700 relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
          <div className="container relative px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-8 text-center">
              <div className="space-y-4">
                <Badge className="bg-white/20 text-white hover:bg-white/30 border-0">🎉 Limited Time Offer</Badge>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-white">
                  Book This Month & Save 20%
                </h2>
                <p className="mx-auto max-w-[700px] text-blue-100 text-lg md:text-xl leading-relaxed">
                  Professional moving services at unbeatable prices. Limited time offer for new customers booking their move this month.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 items-center">
                <Button
                  size="lg"
                  className="bg-white text-blue-700 hover:bg-gray-100 font-semibold px-8 py-4 text-lg"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Call: (555) 123-4567
                </Button>
                <div className="text-white/80 text-sm">or</div>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-transparent border-white text-white hover:bg-white hover:text-blue-700 px-8 py-4 text-lg"
                >
                  <MessageSquare className="mr-2 h-5 w-5" />
                  Live Chat Support
                </Button>
              </div>

              <p className="text-xs text-blue-200">
                ✓ Free estimates • ✓ No obligation • ✓ Instant response • ✓ Licensed & insured
              </p>
            </div>
          </div>
        </section>

        {/* Enhanced Contact Section */}
        <section id="contact" className="w-full py-16 md:py-28 lg:py-36 bg-gray-50">
          <div className="container px-6 md:px-8 lg:px-12 max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-blue-100 text-blue-800">Contact Us</Badge>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-gray-900 mb-4">
                Multiple Ways to Reach Us
              </h2>
              <p className="max-w-[600px] mx-auto text-gray-600 md:text-xl">
                We're here to help 24/7. Choose the contact method that works best for you.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-100 to-blue-200">
                    <Phone className="h-8 w-8 text-blue-600" />
                  </div>
                  <CardTitle>Call Us Anytime</CardTitle>
                  <CardDescription>Speak directly with our moving experts</CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-2xl font-bold text-blue-600">(555) 123-4567</p>
                  <p className="text-sm text-gray-600">Available 24/7 for emergencies</p>
                  <p className="text-sm text-gray-600">Mon-Sun: 6AM-10PM for quotes</p>
                  <Button className="mt-4 w-full">Call Now</Button>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-green-100 to-green-200">
                    <Mail className="h-8 w-8 text-green-600" />
                  </div>
                  <CardTitle>Email Support</CardTitle>
                  <CardDescription>Get detailed quotes and information</CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-lg font-semibold text-green-600">info@swiftmovepro.com</p>
                  <p className="text-sm text-gray-600">Response within 1 hour</p>
                  <p className="text-sm text-gray-600">Detailed quotes via email</p>
                  <Button variant="outline" className="mt-4 w-full bg-transparent">
                    Send Email
                  </Button>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow md:col-span-2 lg:col-span-1">
                <CardHeader>
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-100 to-purple-200">
                    <MapPin className="h-8 w-8 text-purple-600" />
                  </div>
                  <CardTitle>Visit Our Office</CardTitle>
                  <CardDescription>Stop by for in-person consultation</CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="font-semibold text-purple-600">123 Moving Street</p>
                  <p className="text-sm text-gray-600">Your City, ST 12345</p>
                  <p className="text-sm text-gray-600">Mon-Fri: 8AM-6PM</p>
                  <Button variant="outline" className="mt-4 w-full bg-transparent">
                    Get Directions
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      {/* Enhanced Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="container px-6 md:px-8 lg:px-12 py-16 max-w-7xl mx-auto">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Image
                  src="/assets/image/logo.png"
                  alt="SwiftMove Pro Logo"
                  width={120}
                  height={120}
                  className="h-12 w-auto object-contain brightness-0 invert"
                />
                <span className="text-xl font-bold">SwiftMove Pro</span>
              </div>
              <p className="text-gray-400 text-sm">
                Your trusted moving partner for over 15 years. Professional, reliable, and fully insured moving
                services.
              </p>
              <div className="flex gap-4">
                <div className="text-center">
                  <div className="text-lg font-bold text-blue-400">4.9★</div>
                  <div className="text-xs text-gray-400">Rating</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold text-green-400">10K+</div>
                  <div className="text-xs text-gray-400">Moves</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold text-purple-400">15+</div>
                  <div className="text-xs text-gray-400">Years</div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Residential Moving
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Commercial Moving
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Long Distance
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Packing Services
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Storage Solutions
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Our Team
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Reviews
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Blog
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Contact Info</h3>
              <div className="space-y-3 text-sm text-gray-400">
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  <span>(555) 123-4567</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  <span>info@swiftmovepro.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  <span>123 Moving St, Your City, ST</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  <span>24/7 Emergency Service</span>
                </div>
              </div>
              
              <div className="mt-6">
                <h4 className="font-semibold mb-3">Follow Us</h4>
                <div className="flex gap-3">
                  <Link href="#" className="p-2 bg-gray-800 rounded-lg hover:bg-blue-600 transition-colors">
                    <Facebook className="h-4 w-4" />
                  </Link>
                  <Link href="#" className="p-2 bg-gray-800 rounded-lg hover:bg-blue-600 transition-colors">
                    <Twitter className="h-4 w-4" />
                  </Link>
                  <Link href="#" className="p-2 bg-gray-800 rounded-lg hover:bg-blue-600 transition-colors">
                    <Instagram className="h-4 w-4" />
                  </Link>
                  <Link href="#" className="p-2 bg-gray-800 rounded-lg hover:bg-blue-600 transition-colors">
                    <Linkedin className="h-4 w-4" />
                  </Link>
                  <Link href="#" className="p-2 bg-gray-800 rounded-lg hover:bg-blue-600 transition-colors">
                    <Youtube className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <Separator className="my-8 bg-gray-800" />

          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-xs text-gray-400">© 2024 SwiftMove Pro Transportation Services. All rights reserved.</p>
            <div className="flex gap-6 text-xs text-gray-400">
              <Link href="#" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link href="#" className="hover:text-white transition-colors">
                License #DOT-123456
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
