'use client'

import React from 'react'
import { Mail, Phone, MapPin, Send, ArrowRight, Instagram, Twitter, Facebook, Linkedin } from 'lucide-react'
import { AnimatedSection, AnimatedCard, AnimatedIcon, fadeInUp } from '../_components/animated/AnimatedSection'

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <AnimatedSection className="relative overflow-hidden bg-gradient-to-r from-gray-900 to-gray-100 py-20">
        <div className="absolute inset-0 opacity-80">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1374&auto=format&fit=crop')] bg-cover bg-center mix-blend-overlay" />
        </div>
        <div className="container relative mx-auto px-4">
          <div className="max-w-2xl">
            <AnimatedCard className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-white backdrop-blur-sm">
              <Send className="h-5 w-5 text-white" />
              <span>Get in Touch</span>
            </AnimatedCard>
            <h1 className="text-5xl font-bold text-white">Contact Us</h1>
            <p className="mt-4 text-xl text-white/80">
              We'd love to hear from you. Let's start a conversation.
            </p>
          </div>
        </div>
      </AnimatedSection>

      {/* Contact Info Section */}
      <AnimatedSection className="container mx-auto px-4 py-16">
        <div className="grid gap-8 md:grid-cols-3">
          {[
            {
              icon: Mail,
              title: "Email Us",
              description: "info@example.com",
              link: "mailto:info@example.com",
              color: "from-gray-500 to-gray-600"
            },
            {
              icon: Phone,
              title: "Call Us",
              description: "+1 (555) 123-4567",
              link: "tel:+15551234567",
              color: "from-gray-500 to-gray-600"
            },
            {
              icon: MapPin,
              title: "Visit Us",
              description: "123 Business Street, City, Country",
              link: "#",
              color: "from-gray-500 to-gray-600"
            }
          ].map((item, index) => (
            <AnimatedCard
              key={index}
              className="group relative overflow-hidden rounded-2xl bg-white p-8 shadow-lg transition-all hover:shadow-xl"
            >
              <div className={`absolute inset-0 bg-gradient-to-r ${item.color} opacity-0 transition-opacity group-hover:opacity-10`} />
              <AnimatedIcon className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gray-900 text-white transition-transform group-hover:scale-110">
                <item.icon className="h-6 w-6" />
              </AnimatedIcon>
              <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
              <p className="mt-2 text-gray-600">{item.description}</p>
              <a
                href={item.link}
                className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-gray-900 transition-colors hover:text-blue-600"
              >
                <span>Contact Now</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </AnimatedCard>
          ))}
        </div>
      </AnimatedSection>

      {/* Contact Form Section */}
      <AnimatedSection className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900">Send Us a Message</h2>
              <p className="mt-4 text-gray-600">
                Fill out the form below and we'll get back to you as soon as possible.
              </p>
            </div>
            <form className="mt-8 space-y-6">
              <div className="grid gap-6 sm:grid-cols-2">
                <AnimatedCard className="group">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                  />
                </AnimatedCard>
                <AnimatedCard className="group">
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                  />
                </AnimatedCard>
              </div>
              <AnimatedCard className="group">
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                />
              </AnimatedCard>
              <AnimatedCard className="group">
                <textarea
                  placeholder="Your Message"
                  rows={4}
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                />
              </AnimatedCard>
              <AnimatedCard>
                <button
                  type="submit"
                  className="group flex w-full items-center justify-center gap-2 rounded-lg bg-gray-900 px-6 py-3 font-medium text-white transition-all hover:bg-gray-800 hover:shadow-lg"
                >
                  <span>Send Message</span>
                  <Send className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </button>
              </AnimatedCard>
            </form>
          </div>
        </div>
      </AnimatedSection>

      {/* Social Media Section */}
      <AnimatedSection className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900">Follow Us</h2>
            <p className="mt-4 text-gray-600">
              Stay connected with us on social media
            </p>
          </div>
          <div className="mt-8 flex justify-center gap-6">
            {[
              { icon: Instagram, color: "from-gray-500 to-gray-900" },
              { icon: Twitter, color: "from-gray-400 to-gray-900" },
              { icon: Facebook, color: "from-gray-600 to-gray-900" },
              { icon: Linkedin, color: "from-gray-700 to-gray-900" }
            ].map((social, index) => (
              <AnimatedIcon
                key={index}
                className="group relative h-12 w-12 overflow-hidden rounded-full bg-white p-3 shadow-lg transition-all hover:shadow-xl"
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${social.color} opacity-0 transition-opacity group-hover:opacity-10`} />
                <social.icon className="h-6 w-6 text-gray-600 transition-colors group-hover:text-dark-600" />
              </AnimatedIcon>
            ))}
          </div>
        </div>
      </AnimatedSection>
    </div>
  )
}

export default ContactPage