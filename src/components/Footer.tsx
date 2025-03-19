"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Facebook, Youtube, MessageCircle } from "lucide-react";

const links = [
  { label: "Video library", href: "#" },
  { label: "Blog", href: "#" },
  { label: "Contact", href: "#" },
  { label: "Giới thiệu về Future Software Engineers", href: "#" },
  { label: "Terms & Policy", href: "#" },
];

const quickLinks = [
  { label: "Blog", href: "#" },
  { label: "Thư viện video", href: "#" },
  { label: "Giới thiệu", href: "#" },
  { label: "Liên hệ", href: "#" },
];

export function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-4">
        <div className="py-12">
          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold mb-4">Bạn cần tư vấn?</h3>
            <p className="text-white/80 mb-6 max-w-xl mx-auto">
              Nhắn tin ngay cho chúng tôi để được tư vấn dịch vụ Mock Interview
              và các ưu đãi mới nhất.
            </p>
            <Button
              asChild
              className="bg-white text-primary hover:bg-gray-100 border-white"
            >
              <a
                href="https://m.me/FSEcourse"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2"
              >
                <MessageCircle size={18} />
                Liên hệ nhận tư vấn
              </a>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-white/20 pt-8">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <div className="w-10 h-10 rounded-md bg-white flex items-center justify-center text-primary font-bold">
                  MI
                </div>
                <span className="text-lg font-bold">FSE Mock Interview</span>
              </div>

              <ul className="space-y-2 mb-6">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-white/80 hover:text-white transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <div className="flex flex-wrap gap-4 mb-6">
                {quickLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="text-white/80 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>

              <div className="flex gap-4 mb-6">
                <Link
                  href="https://www.facebook.com/FSEcourse/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                >
                  <Facebook size={20} />
                </Link>
                <Link
                  href="https://www.youtube.com/channel/UCCNv8QKpWySb5iRogNUYiAg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                >
                  <Youtube size={20} />
                </Link>
              </div>

              <p className="text-white/60 text-sm">
                © 2022 by FSE. Powered by Elementor.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
