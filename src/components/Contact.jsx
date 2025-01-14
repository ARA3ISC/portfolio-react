import { motion } from 'framer-motion';
import { FiMail, FiGithub, FiLinkedin } from 'react-icons/fi';

const Contact = () => {
  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/ara3isc',
      icon: <FiGithub size={24} />,
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/yourusername',
      icon: <FiLinkedin size={24} />,
    },
    {
      name: 'Email',
      url: 'mailto:your.email@example.com',
      icon: <FiMail size={24} />,
    },
  ];

  return (
    <section id="contact" className="py-20 bg-primary dark:bg-primary-dark">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="section-title text-center mb-12"
            >
              Get In Touch
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-lg text-textSecondary dark:text-textSecondary-dark mb-8"
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
              <motion.a
                href="mailto:your.email@example.com"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="text-textSecondary dark:text-textSecondary-dark hover:text-secondary dark:hover:text-secondary-dark"
              >
                <FiMail className="w-8 h-8" />
              </motion.a>
              <motion.a
                href="https://github.com/ara3isc"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="text-textSecondary dark:text-textSecondary-dark hover:text-secondary dark:hover:text-secondary-dark"
              >
                <FiGithub className="w-8 h-8" />
              </motion.a>
              <motion.a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="text-textSecondary dark:text-textSecondary-dark hover:text-secondary dark:hover:text-secondary-dark"
              >
                <FiLinkedin className="w-8 h-8" />
              </motion.a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <a
                href="mailto:your.email@example.com"
                className="btn-primary"
              >
                Say Hello
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="flex justify-center space-x-8"
            >
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-textPrimary hover:text-secondary transition-colors"
                >
                  {link.icon}
                </motion.a>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
