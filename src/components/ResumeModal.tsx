import React from 'react';
import { X, Printer, Download, MapPin, Mail, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-900/50 backdrop-blur-md overflow-y-auto">
        <motion.div 
          initial={{ opacity: 0, scale: 0.96, y: 8 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 8 }}
          transition={{ duration: 0.2 }}
          className="relative w-full max-w-4xl bg-white border border-slate-200/90 rounded-2xl shadow-2xl overflow-hidden my-auto"
        >
          {/* Top Control Bar */}
          <div className="flex items-center justify-between px-6 py-4 bg-slate-900 text-white text-xs font-mono no-print">
            <div className="flex items-center gap-2.5">
              <span className="w-2.5 h-2.5 rounded-full bg-blue-500" />
              <span className="font-bold tracking-wider">CURRICULUM VITAE // YAHYA ALIFANDI</span>
            </div>

            <div className="flex items-center gap-3">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handlePrint}
                className="flex items-center gap-1.5 bg-blue-600 hover:bg-blue-700 text-white px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all shadow-sm"
              >
                <Printer className="w-3.5 h-3.5" />
                <span>Cetak / Simpan PDF</span>
              </motion.button>
              <button
                onClick={onClose}
                className="p-1.5 hover:bg-slate-800 rounded-lg text-slate-400 hover:text-white transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Printable Resume Document */}
          <div className="p-8 sm:p-12 text-slate-800 bg-white font-editorial-body text-xs sm:text-sm max-h-[80vh] overflow-y-auto print:max-h-none print:p-0">
            {/* Header */}
            <div className="border-b-2 border-slate-900 pb-6 mb-6">
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                <div>
                  <h1 className="text-3xl font-display font-bold text-slate-900 tracking-tight mb-1">
                    {PERSONAL_INFO.name}
                  </h1>
                  <p className="text-sm font-mono font-bold text-blue-600">
                    Web Developer Intern / Full-Stack Software Engineer
                  </p>
                </div>

                <div className="text-xs font-mono text-slate-500 space-y-1 sm:text-right">
                  <div className="flex items-center sm:justify-end gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-blue-600" />
                    <span>Lampung, Indonesia</span>
                  </div>
                  <div className="flex items-center sm:justify-end gap-1.5">
                    <Mail className="w-3.5 h-3.5 text-blue-600" />
                    <span>{PERSONAL_INFO.email}</span>
                  </div>
                  <div className="flex items-center sm:justify-end gap-1.5">
                    <Globe className="w-3.5 h-3.5 text-blue-600" />
                    <span>arga.dev • github.com/yahya-alifandi</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Ringkasan Profil */}
            <div className="mb-6">
              <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-blue-600 border-b border-slate-200 pb-1 mb-2">
                Ringkasan Profesional
              </h2>
              <p className="text-slate-600 leading-relaxed">
                Mahasiswa tingkat akhir S1 Teknik Informatika di Institut Teknologi Sumatera (ITERA) dengan keahlian praktis dalam pengembangan web full-stack modern. Berpengalaman merancang antarmuka reaktif berbasis Next.js/React dan arsitektur server-side dengan Node.js, Prisma ORM, dan PostgreSQL. Terbiasa memecahkan masalah konkurensi data (race condition), penerapan RBAC terisolasi, serta penulisan kode terstruktur, modular, dan type-safe menggunakan TypeScript.
              </p>
            </div>

            {/* Keahlian Teknis */}
            <div className="mb-6">
              <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-blue-600 border-b border-slate-200 pb-1 mb-2">
                Keahlian Teknis
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono">
                <div>
                  <strong className="text-slate-900">Frontend:</strong> React.js, Next.js, Inertia.js, Tailwind CSS, Framer Motion, HTML, CSS, JavaScript
                </div>
                <div>
                  <strong className="text-slate-900">Backend:</strong> Laravel, Express.js
                </div>
                <div>
                  <strong className="text-slate-900">Database:</strong> MySQL (Relasional, Integritas Foreign Key)
                </div>
                <div>
                  <strong className="text-slate-900">Tools &amp; Deployment:</strong> Git, GitHub, Docker, Vercel
                </div>
                <div className="sm:col-span-2">
                  <strong className="text-slate-900">UI/UX Design:</strong> Figma (Wireframing, Component System, Interactive Prototyping)
                </div>
              </div>
            </div>

            {/* Proyek Unggulan */}
            <div className="mb-6">
              <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-blue-600 border-b border-slate-200 pb-1 mb-3">
                Proyek Unggulan
              </h2>
              <div className="space-y-4">
                <div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-display font-bold text-sm text-slate-900">
                      ESPP &mdash; ARSIVA SPP (Platform Pengelolaan SPP Sekolah)
                    </span>
                    <span className="font-mono text-slate-500">2025</span>
                  </div>
                  <p className="text-[11px] font-mono text-blue-600 mb-1">
                    Laravel 12, Tailwind CSS, Alpine.js, MySQL, Docker
                  </p>
                  <ul className="list-disc list-inside text-xs text-slate-600 space-y-0.5 leading-relaxed">
                    <li>Platform pengelolaan pembayaran dan administrasi SPP sekolah digital terintegrasi.</li>
                    <li>Merancang skema database relasional MySQL untuk integritas data pembayaran dan tagihan siswa.</li>
                    <li>Menyusun environment Docker untuk kemudahan dan konsistensi deployment di server sekolah.</li>
                  </ul>
                </div>

                <div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-display font-bold text-sm text-slate-900">
                      JejakKode &mdash; Company Profile &amp; Layanan Web Development
                    </span>
                    <span className="font-mono text-slate-500">2024</span>
                  </div>
                  <p className="text-[11px] font-mono text-blue-600 mb-1">
                    React, TypeScript/TSX, Docker, Tailwind CSS, Framer Motion
                  </p>
                  <ul className="list-disc list-inside text-xs text-slate-600 space-y-0.5 leading-relaxed">
                    <li>Platform company profile layanan web development yang dikembangkan bersama tim JejakKode.</li>
                    <li>Kolaborasi tim dalam merancang identitas digital dan arsitektur komponen frontend modern.</li>
                    <li>Penerapan Tailwind CSS dan Framer Motion untuk navigasi interaktif dan responsif.</li>
                  </ul>
                </div>

                <div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-display font-bold text-sm text-slate-900">
                      Altapedia &mdash; Platform Top-Up Game &amp; Produk Digital
                    </span>
                    <span className="font-mono text-slate-500">2024</span>
                  </div>
                  <p className="text-[11px] font-mono text-blue-600 mb-1">
                    Laravel, MySQL, Tailwind CSS, Payment Gateway
                  </p>
                  <ul className="list-disc list-inside text-xs text-slate-600 space-y-0.5 leading-relaxed">
                    <li>Platform top-up produk digital game dengan integrasi webhook payment gateway otomatis.</li>
                    <li>Alur transaksi dan validasi akun pengguna real-time dengan skema transaksi MySQL terstruktur.</li>
                  </ul>
                </div>

                <div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-display font-bold text-sm text-slate-900">
                      Sehatin &mdash; Platform Layanan Kesehatan Digital (UI/UX)
                    </span>
                    <span className="font-mono text-emerald-600 font-semibold">Finalis HMIF Point Project 4.0</span>
                  </div>
                  <p className="text-[11px] font-mono text-purple-600 mb-1">
                    Figma, UI/UX Design, Prototyping &bull; Tim Pappoy Mamboo
                  </p>
                  <ul className="list-disc list-inside text-xs text-slate-600 space-y-0.5 leading-relaxed">
                    <li>Perancangan antarmuka digital dan prototipe interaktif layanan kesehatan terstandar aksesibilitas.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Pengalaman & Organisasi */}
            <div className="mb-6">
              <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-blue-600 border-b border-slate-200 pb-1 mb-3">
                Pengalaman &amp; Kepemimpinan
              </h2>
              <div className="space-y-3">
                <div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-display font-bold text-sm text-slate-900">
                      Asisten Laboratorium Rekayasa Perangkat Lunak &amp; Basis Data
                    </span>
                    <span className="font-mono text-slate-500">2024 &ndash; Sekarang</span>
                  </div>
                  <p className="text-xs font-mono text-slate-500">Institut Teknologi Sumatera (ITERA)</p>
                  <p className="text-xs text-slate-600 mt-0.5">
                    Membimbing 80+ mahasiswa praktikan dalam pemrograman web full-stack, memfasilitasi workshop Git, serta melakukan code review tugas akhir praktikum.
                  </p>
                </div>

                <div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-display font-bold text-sm text-slate-900">
                      Web Development Lead &amp; Core Team
                    </span>
                    <span className="font-mono text-slate-500">2023 &ndash; 2024</span>
                  </div>
                  <p className="text-xs font-mono text-slate-500">Google Developer Student Clubs (GDSC) Chapter Lampung</p>
                  <p className="text-xs text-slate-600 mt-0.5">
                    Memimpin kurikulum workshop web development modern, melatih 150+ anggota dalam ekosistem React, Next.js, dan Git teamwork.
                  </p>
                </div>
              </div>
            </div>

            {/* Pendidikan & Sertifikasi */}
            <div>
              <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-blue-600 border-b border-slate-200 pb-1 mb-2">
                Pendidikan &amp; Prestasi
              </h2>
              <div className="flex flex-col sm:flex-row justify-between text-xs mb-2">
                <div>
                  <span className="font-bold text-slate-900">S1 Teknik Informatika</span> &mdash; Institut Teknologi Sumatera (ITERA)
                  <p className="text-slate-500">Fokus: Rekayasa Perangkat Lunak, Struktur Data &amp; Basis Data</p>
                </div>
                <div className="font-mono text-sm font-bold text-blue-600 sm:text-right">
                  Status: Mahasiswa Tingkat Akhir
                </div>
              </div>
              <div className="text-xs text-slate-500 font-mono">
                Juara 2 National Web Development Hackathon 2024 &bull; Meta Front-End Developer Specialization
              </div>
            </div>
          </div>

          {/* Modal Footer */}
          <div className="p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between no-print">
            <span className="text-xs font-mono text-slate-500">
              Format Standar A4 &bull; Siap Dicetak / Disimpan ke PDF
            </span>
            <div className="flex items-center gap-2.5">
              <button
                onClick={handlePrint}
                className="flex items-center gap-1.5 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-xl text-xs font-heading font-bold shadow-sm shadow-blue-500/25 transition-all"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Simpan PDF</span>
              </button>
              <button
                onClick={onClose}
                className="bg-white hover:bg-slate-100 text-slate-700 border border-slate-200 px-3.5 py-2 rounded-xl text-xs font-heading font-semibold transition-all"
              >
                Tutup
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
