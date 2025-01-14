import { motion } from 'framer-motion';
import { FiInstagram, FiGithub, FiLinkedin } from 'react-icons/fi';

const Contact = () => {
  const socialLinks = [
    {
      href: 'https://www.instagram.com/arabi.xpm/',
      icon: FiInstagram,
      label: 'instagram'
    },
    {
      href: 'https://github.com/ara3isc',
      icon: FiGithub,
      label: 'Github'
    },
    {
      href: 'https://linkedin.com/in/mohamed-aneddame',
      icon: FiLinkedin,
      label: 'LinkedIn'
    }
  ];

  return (
    <section id="contact" className="py-20 w-full">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="section-title"
            >
              Get In Touch
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-textSecondary max-w-2xl mx-auto mb-8"
            >
              I'm currently looking for new opportunities! Whether you have a question
              or just want to say hi, I'll try my best to get back to you!
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex justify-center space-x-8 mb-12"
            >
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-textSecondary dark:text-textSecondary-dark hover:text-secondary dark:hover:text-secondary-dark transition-colors duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <link.icon className="w-8 h-8" />
                  <span className="sr-only">{link.label}</span>
                </motion.a>
              ))}
            </motion.div>

            <motion.form
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div>
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full px-4 py-3 rounded-lg bg-tertiary/30 dark:bg-tertiary-dark/30 border border-tertiary/50 dark:border-tertiary-dark/50 text-textPrimary dark:text-textPrimary-dark focus:outline-none focus:border-secondary dark:focus:border-secondary-dark"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-4 py-3 rounded-lg bg-tertiary/30 dark:bg-tertiary-dark/30 border border-tertiary/50 dark:border-tertiary-dark/50 text-textPrimary dark:text-textPrimary-dark focus:outline-none focus:border-secondary dark:focus:border-secondary-dark"
                />
              </div>
              <div>
                <textarea
                  placeholder="Message"
                  rows="5"
                  className="w-full px-4 py-3 rounded-lg bg-tertiary/30 dark:bg-tertiary-dark/30 border border-tertiary/50 dark:border-tertiary-dark/50 text-textPrimary dark:text-textPrimary-dark focus:outline-none focus:border-secondary dark:focus:border-secondary-dark"
                ></textarea>
              </div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="btn-primary w-full"
              >
                Send Message
              </motion.button>
            </motion.form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
