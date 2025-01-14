import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';

const Contact = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const formData = new FormData(e.target);
      const response = await fetch('https://formsubmit.co/ajax/5591e746d90203af907f2a4118667ea2', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(Object.fromEntries(formData))
      });

      const data = await response.json();

      if (data.success === "true" || response.ok) {
        setSubmitStatus('success');
        e.target.reset(); // Clear the form
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-primary dark:bg-primary-dark" data-scroll-section>
      <div className="container mx-auto px-4" ref={containerRef}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="section-title">Get In Touch</h2>
          <p className="text-textSecondary dark:text-textSecondary-dark mb-8">
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi,
            I'll try my best to get back to you!
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <input type="hidden" name="_captcha" value="false" />
            <input
              type="hidden"
              name="_next"
              value={window.location.href} // Returns to the same page after submission
            />
            <input type="hidden" name="_template" value="box" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  className="w-full px-4 py-3 bg-tertiary/30 dark:bg-tertiary-dark/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary dark:focus:ring-secondary-dark text-textPrimary dark:text-textPrimary-dark placeholder-textSecondary/50 dark:placeholder-textSecondary-dark/50"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                  className="w-full px-4 py-3 bg-tertiary/30 dark:bg-tertiary-dark/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary dark:focus:ring-secondary-dark text-textPrimary dark:text-textPrimary-dark placeholder-textSecondary/50 dark:placeholder-textSecondary-dark/50"
                />
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <textarea
                name="message"
                placeholder="Your Message"
                required
                rows={6}
                className="w-full px-4 py-3 bg-tertiary/30 dark:bg-tertiary-dark/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary dark:focus:ring-secondary-dark text-textPrimary dark:text-textPrimary-dark placeholder-textSecondary/50 dark:placeholder-textSecondary-dark/50"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary px-8 py-3 relative overflow-hidden group"
              >
                <span className="relative z-10">
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </span>
              </button>
            </motion.div>

            {/* Status Messages */}
            {submitStatus === 'success' && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-green-500 dark:text-green-400"
              >
                Message sent successfully!
              </motion.div>
            )}
            {submitStatus === 'error' && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-red-500 dark:text-red-400"
              >
                Failed to send message. Please try again.
              </motion.div>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
