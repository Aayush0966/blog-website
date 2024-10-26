'use client'


import React, { useRef, useState } from 'react';
import { Mail, Github, Linkedin, CheckCircle, XCircle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from './ui/button';
import emailjs from 'emailjs-com';

const Contact = () => {
  const formRef = useRef(); // Reference for the form
  const [alert, setAlert] = useState(null); // State for the alert message

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(
      process.env.NEXT_EMAILJS_SERVICE_ID,
      process.env.NEXT_EMAILJS_TEMPLATE_ID,
      formRef.current,
      process.env.NEXT_EMAILJS_USER_ID
    )
    .then((result) => {
        formRef.current.reset(); // Reset form
        setAlert({ type: "success", message: "Message sent successfully!" });
    }, (error) => {
        setAlert({ type: "error", message: "Failed to send message, please try again." });
    });

    // Hide the alert after 3 seconds
    setTimeout(() => setAlert(null), 3000);
  };

  return (
    <div className="max-w-4xl mx-auto p-4 sm:p-6">
      <div className="space-y-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-center dark:text-white">Get in Touch</h2>
        
        {/* Contact Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          <Card className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
            <CardContent className="p-4 sm:p-6">
              <div className="flex items-center space-x-4">
                <Mail className="w-5 sm:w-6 h-5 sm:h-6 text-blue-500 dark:text-blue-400" />
                <div>
                  <h3 className="font-semibold dark:text-white text-sm sm:text-base">Email</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">aayushx699@gmail.com</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Social Links */}
          <Card className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
            <CardContent className="p-4 sm:p-6">
              <h3 className="font-semibold mb-4 dark:text-white text-sm sm:text-base">Social Media</h3>
              <div className="flex space-x-4">
                <a href="https://github.com/Aayush0966" aria-label="GitHub">
                  <Github className="w-5 sm:w-6 h-5 sm:h-6 text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 cursor-pointer transition-colors" />
                </a>
                <a href="https://linkedin.com/in/aayush-budhathoki-102954332" aria-label="LinkedIn">
                  <Linkedin className="w-5 sm:w-6 h-5 sm:h-6 text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 cursor-pointer transition-colors" />
                </a>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Contact Form */}
        <Card className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
          <CardContent className="p-4 sm:p-6">
            <form ref={formRef} className="space-y-4" onSubmit={sendEmail}>
              <div>
                <label className="block text-sm font-medium mb-1 dark:text-white">Name</label>
                <input
                  name="from_name" // Make sure to set a name attribute for emailjs
                  type="text"
                  className="w-full p-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1 dark:text-white">Email</label>
                <input
                  name="from_email" // Make sure to set a name attribute for emailjs
                  type="email"
                  className="w-full p-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1 dark:text-white">Message</label>
                <textarea
                  name="message" // Make sure to set a name attribute for emailjs
                  rows={4}
                  className="w-full p-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent"
                  required
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-blue-500 dark:bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-600 dark:hover:bg-blue-700 transition-colors text-sm sm:text-base"
              >
                Send Message
              </Button>
            </form>
          </CardContent>
        </Card>
        {alert && (
          <div
            className={`fixed bottom-5 left-1/2 transform -translate-x-1/2 px-6 py-3 rounded-lg shadow-lg ${
              alert.type === "success" ? "bg-emerald-600" : "bg-red-600"
            } flex items-center gap-2 text-white`}
          >
            {alert.type === "success" ? (
              <CheckCircle className="w-5 h-5" />
            ) : (
              <XCircle className="w-5 h-5" />
            )}
            <span>{alert.message}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Contact;
