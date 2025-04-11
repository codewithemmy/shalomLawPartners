import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

export default function Home() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacityBg = useTransform(scrollYProgress, [0, 0.7], [1, 0.3]);
  const textColor = useTransform(
    scrollYProgress,
    [0, 1],
    ["#FFFFFF", "#000000"]
  );
  const linkColor = useTransform(
    scrollYProgress,
    [0, 1],
    ["#FFB20F", "#1E3A8A"]
  );

  const headingLines = [
    { text: "Excellence in Legal Representation.", color: "text-amber-400" },
    { text: "Driven by Integrity.", color: "text-sky-400" },
    { text: "Built on Trust.", color: "text-amber-400" },
    { text: "Focused on Results.", color: "text-sky-400" },
    { text: "Committed to You.", color: "text-amber-400" },
  ];

  const [slideIndex, setSlideIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1);
      setSlideIndex((prevIndex) => (prevIndex + 1) % headingLines.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        type: "spring",
        stiffness: 60,
        damping: 15,
      },
    },
    exit: (direction) => ({
      x: direction > 0 ? -100 : 100,
      opacity: 0,
      transition: { duration: 0.3 },
    }),
  };

  return (
    <div ref={ref} className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden">
        <motion.div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('/assets/images/common/2.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            y: yBg,
            opacity: opacityBg,
          }}
        />
        <div className="absolute inset-0 bg-black/70 z-1" />

        <div className="container mx-auto px-4 h-full flex items-center relative z-10">
          <div className="text-center w-full">
            {/* Animated Heading */}
            <motion.div
              className="text-4xl md:text-6xl font-extrabold leading-tight"
              style={{ color: textColor }}
            >
              <motion.span
                key={slideIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className={`${headingLines[slideIndex].color} inline-block`}
              >
                {headingLines[slideIndex].text}
              </motion.span>
            </motion.div>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 3, duration: 0.8 }}
              className="text-xl md:text-2xl mt-6 mb-8 max-w-3xl mx-auto"
              style={{ color: textColor }}
            >
              Chris Okeke & Co. (Affiliate of Shalom Law Partners) delivers
              tailored legal solutions with a legacy of excellence and an eye
              toward your future.
            </motion.p>

            {/* CTA Button with animation */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{
                opacity: 1,
                scale: 1,
                skewX: [0, -5, 5, -5, 5, 0], // Skew left-right-left-right-center
              }}
              transition={{ delay: 3.5, duration: 2, ease: "easeInOut" }}
              whileHover={{ scale: 1.1 }}
            >
              <Link
                to="/contact"
                className="px-8 py-4 rounded-lg font-semibold transition inline-block text-lg shadow-lg bg-sky-500 text-white hover:bg-sky-600"
              >
                Schedule a Consultation
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 4 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10"
        >
          <div className="animate-bounce w-6 h-10 border-4 border-white rounded-full">
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 h-2 bg-white rounded-full mx-auto mt-1"
            />
          </div>
        </motion.div>
      </section>

      {/* Services Preview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-3xl font-bold text-center mb-12 text-black"
          >
            Our Practice Areas
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {servicesPreview.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-gray-50 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all"
              >
                <motion.div
                  className="text-sky-600 text-4xl mb-4"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                >
                  {service.icon}
                </motion.div>
                <h3 className="text-xl font-semibold mb-3 text-black">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <Link
                  to="/services"
                  className="text-sky-600 font-medium hover:underline flex items-center"
                >
                  Learn more
                  <svg
                    className="w-4 h-4 ml-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="md:w-1/2 relative"
            >
              <img
                src="/assets/images/common/4.jpg"
                alt="Law Office"
                className="rounded-xl shadow-2xl w-full"
              />
              <motion.div
                className="absolute -bottom-5 -left-5 bg-amber-400 w-20 h-20 -z-10 rounded-lg"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="md:w-1/2"
            >
              <h2 className="text-3xl font-bold mb-6 text-black">
                About Our Firm
              </h2>
              <p className="text-gray-700 mb-4">
                Founded in 1999, Chris Okeke & Co. has established itself as a
                premier law firm specializing in corporate and litigation
                matters.
              </p>
              <p className="text-gray-700 mb-6">
                As an affiliate of Shalom Law Partners, we bring the resources
                of a multi-lawyer firm while maintaining the personalized
                attention of a boutique practice.
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/about"
                  className="bg-sky-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-sky-700 transition inline-flex items-center shadow-md"
                >
                  Read Our Story
                  <svg
                    className="w-4 h-4 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

const servicesPreview = [
  {
    icon: "⚖️",
    title: "Corporate Law",
    description:
      "Comprehensive corporate legal services for businesses of all sizes.",
  },
  {
    icon: "🏛️",
    title: "Litigation",
    description: "Aggressive representation in civil and commercial disputes.",
  },
  {
    icon: "🏠",
    title: "Real Estate",
    description: "Expert guidance through complex real estate transactions.",
  },
];
