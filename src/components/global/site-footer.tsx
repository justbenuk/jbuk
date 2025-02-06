import React from "react";
import Container from "./container";
import Link from "next/link";
import { FaClock, FaEnvelope, FaPhone } from "react-icons/fa";

export default function SiteFooter() {
  return (
    <footer className="bg-gray-900 text-gray-200 pt-10 mt-10">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 py-8 gap-6">
          <div className="md:col-span-2">
            <h1 className="text-4xl uppercase font-semibold">Just Ben UK</h1>
            <p className="w-2/3 py-4">
              Self-Taught Web Developer: Powered by Coffee, Google, and Panic!!!
            </p>
          </div>
          <div className="lg:col-span-1">
            <h1 className="text-xl uppercase font-semibold pb-2">
              Quick Links
            </h1>
            <ul className="flex flex-col gap-2">
              <Link href="/">Home</Link>
              <Link href="/services">Services</Link>
              <Link href="/work">Work</Link>
              <Link href="/dashboard">Client Portal</Link>
            </ul>
          </div>
          <div className="lg:col-span-1">
            <h1 className="text-xl uppercase font-semibold pb-2">
              Contact Information
            </h1>
            <ul className="flex flex-col gap-2">
              <p className="flex flex-row items-center gap-6">
                <span>
                  <FaClock />
                </span>
                24/7
              </p>
              <p className="flex flex-row items-center gap-6">
                <span>
                  <FaPhone />
                </span>
                07916 019 809
              </p>
              <p className="flex flex-row items-center gap-6">
                <span>
                  <FaEnvelope />
                </span>
                justbenuk@gmail.com
              </p>
            </ul>
          </div>
        </div>
      </Container>
      <div className="py-2 border-t border-white/10">
        <Container>
          <p>&copy; Ben Andrews </p>
        </Container>
      </div>
    </footer>
  );
}
