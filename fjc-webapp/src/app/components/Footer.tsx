'use client';
import Image from "next/image";
import { socials } from "../constants";

const Footer = () => {
  return (
    <section
      className="!px-0 !py-4 bg-n-5"
      id="footer"
    >
      <div className="container">
        <div className="bg-n-1 rounded-2xl px-8 py-6 mx-4">
          <div className="flex sm:justify-between justify-center items-center gap-10 max-sm:flex-col">
            <p className="caption text-n-6 lg:block">
              © {new Date().getFullYear()}. All rights reserved.
            </p>
            <ul className="flex gap-5 flex-wrap">
              {socials.map((item) => (
                <li key={item.id}>
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-10 h-10 bg-n-6 rounded-full transition-colors hover:bg-n-5"
                  >
                    <Image
                      src={item.iconUrl}
                      alt={item.title}
                      width={16}
                      height={16}
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;