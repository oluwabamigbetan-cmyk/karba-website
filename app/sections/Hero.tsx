"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-6 py-20 lg:py-28">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left */}

          <motion.div
            initial={{opacity:0,x:-40}}
            animate={{opacity:1,x:0}}
            transition={{duration:0.7}}
          >

            <span className="inline-block rounded-full bg-yellow-100 text-yellow-700 px-4 py-2 text-sm font-semibold">
              Trusted Insurance & Property Advisory
            </span>

            <h1 className="mt-8 text-5xl lg:text-7xl font-black text-slate-900 leading-tight">
              Protect Today.
              <br />
              Build Tomorrow.
              <br />
              Leave a Legacy.
            </h1>

            <p className="mt-8 text-xl text-slate-600 leading-9 max-w-xl">
              Helping individuals, families and businesses make confident financial decisions through professional Insurance Advisory, Property Advisory and Wealth Planning.
            </p>

            <div className="mt-10 flex flex-wrap gap-5">

              <a
                href="/book-consultation"
                className="rounded-xl bg-[#D4AF37] px-8 py-4 font-bold shadow-lg hover:scale-105 transition"
              >
                Book Consultation
              </a>

              <a
                href="https://wa.me/message/5RKGRI57IBIWG1"
                target="_blank"
                className="rounded-xl border-2 border-slate-900 px-8 py-4 font-bold hover:bg-slate-900 hover:text-white transition"
              >
                WhatsApp
              </a>

            </div>

          </motion.div>

          {/* Right */}

          <motion.div
            initial={{opacity:0,x:40}}
            animate={{opacity:1,x:0}}
            transition={{duration:0.8}}
            className="flex justify-center"
          >

            <Image
              src="/images/founder/founder.jpg"
              alt="Founder"
              width={560}
              height={650}
              priority
              className="rounded-3xl shadow-2xl"
            />

          </motion.div>

        </div>

      </div>
    </section>
  );
}