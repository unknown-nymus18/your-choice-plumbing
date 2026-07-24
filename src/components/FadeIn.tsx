import { motion } from "framer-motion";

interface props {
  children: React.ReactNode;
}
export default function FadeIn({ children }: props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7 }}
    >
      {children}
    </motion.div>
  );
}
