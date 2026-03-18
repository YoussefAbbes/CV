import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from '../i18n';
import './ResumeButton.css';

const DownloadIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
    <polyline points="7 10 12 15 17 10" />
    <line x1="12" y1="15" x2="12" y2="3" />
  </svg>
);

export default function ResumeButton() {
  const { t } = useTranslation();

  return (
    <motion.a
      href="/CV/Youssef_Abbes_CV.pdf"
      download
      className="resume-btn"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.97 }}
    >
      <DownloadIcon />
      {t('resume.download')}
    </motion.a>
  );
}
