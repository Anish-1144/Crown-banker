import { ArrowRight } from "lucide-react";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  // Refs for animation
  const leftColumnRef = useRef(null);
  const rightColumnRef = useRef(null);
  const headingRef = useRef(null);
  const infoItemsRef = useRef(null);
  const formRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    // Common animation settings for smoothness
    const defaults = {
      ease: "power3.out",
      duration: 1,
    };

    // Left column fade-in
    if (leftColumnRef.current) {
      gsap.fromTo(
        leftColumnRef.current,
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          ...defaults,
        }
      );
    }

    // Right column fade-in with slight delay
    if (rightColumnRef.current) {
      gsap.fromTo(
        rightColumnRef.current,
        { opacity: 0, x: 50 },
        {
          opacity: 1,
          x: 0,
          ...defaults,
          delay: 0.3,
        }
      );
    }

    // Heading fade-in
    if (headingRef.current) {
      gsap.fromTo(
        headingRef.current.children,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          ...defaults,
          stagger: 0.2,
        }
      );
    }

    // Info items staggered fade-in
    if (infoItemsRef.current) {
      gsap.fromTo(
        infoItemsRef.current.children,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          ...defaults,
          stagger: 0.2,
          delay: 0.4,
        }
      );
    }

    // Form elements staggered fade-in
    if (formRef.current) {
      gsap.fromTo(
        formRef.current.children,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          ...defaults,
          stagger: 0.15,
          delay: 0.5,
        }
      );
    }

    // Button bounce and fade-in
    if (buttonRef.current) {
      gsap.fromTo(
        buttonRef.current,
        { opacity: 0, scale: 0.8 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.6,
          ease: "back.out(1.7)",
          delay: 1,
        }
      );
    }

    // Cleanup ScrollTriggers on unmount
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div style={{ backgroundImage: `url('/images/backgrounds/4.jpg')` }}>
      <div className="container mx-auto px-4 py-12 md:px-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Column - Contact Information */}
          <div ref={leftColumnRef} className="bg-[#e8f5e9] rounded-lg p-8">
            <div ref={headingRef} className="space-y-8">
              <div>
                <h3 className="text-4xl font-medium text-gray-800 mb-4 font-['Rubik']">
                  Get in touch with us directly
                </h3>
                <p className="text-gray-600 font-['Roboto']">
                  We are here to help you! Tell us how we can help & we'll be in
                  touch with an expert within the next 24 hours.
                </p>
              </div>
            </div>

            <div ref={infoItemsRef} className="space-y-8 mt-8">
              <div>
                <h3 className="text-xl font-medium text-gray-800 mb-4 font-['Rubik']">
                  Send us an email:
                </h3>
                <p className="text-gray-600 font-['Roboto']">
                  support@crownbankers.com
                </p>
              </div>
              <div>
                <h3 className="text-xl font-medium text-gray-800 mb-4 font-['Rubik']">
                  Give us a call:
                </h3>
                <p className="text-gray-600 font-['Roboto']">+44 7452237405</p>
              </div>
              <button
                ref={buttonRef}
                className="bg-[#4CAF50] hover:bg-[#43A047] text-white w-full max-w-[200px] h-12 rounded-md flex items-center justify-center gap-2"
              >
                <ArrowRight className="h-5 w-5" /> Request A Quote
              </button>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div
            ref={rightColumnRef}
            className="bg-white border-green-500 border-4 rounded-xl shadow-xl p-6"
          >
            <h2 className="text-4xl font-semibold text-gray-800 mb-4 font-['Rubik']">
              Get In Touch
            </h2>
            <p className="text-gray-600 mb-8 font-['Roboto']">
              We value your inquiries and are committed to providing you with
              the best assistance. Fill out the form, and we'll respond as soon
              as possible.
            </p>
            <div className="border-t border-gray-200 pt-8">
              <form ref={formRef} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input
                    type="text"
                    placeholder="Name"
                    className="w-full p-3 border border-gray-300 rounded-md font-['Roboto']"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full p-3 border border-gray-300 rounded-md font-['Roboto']"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input
                    type="tel"
                    placeholder="Phone"
                    className="w-full p-3 border border-gray-300 rounded-md font-['Roboto']"
                  />
                  <input
                    type="text"
                    placeholder="Company Name"
                    className="w-full p-3 border border-gray-300 rounded-md font-['Roboto']"
                  />
                </div>
                <textarea
                  placeholder="Additional Details!"
                  className="w-full p-3 border border-gray-300 rounded-md font-['Roboto']"
                  rows={4}
                ></textarea>
                <button className="bg-[#212121] hover:bg-[#000000] text-white px-6 py-3 rounded-md flex items-center gap-2">
                  <ArrowRight className="h-5 w-5" /> Submit Request
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
