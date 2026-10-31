import {
  CodeProjectItem,
  DesignProjectItem,
  ProjectItem,
  TechCategoryItem,
  TrackRecordItem
} from '../types/portfolio';

export interface PersonalInfo {
  name: string;
  role: string;
  roleBadge: string;
  university: string;
  location: string;
  githubUrl: string;
  linkedinUrl: string;
  profileImage: string;
  isAvailable: boolean;
  availabilityLabel: string;
  specialization: string;
  subSpecialization: string;
  handle: string;
  candidatePath: string;
  idStamp: string;
  statusText: string;
  statusAvailability: string;
  degree: string;
  responseTime: string;
  email: string;
  bio: string;
}

export const PERSONAL_INFO: PersonalInfo = {
  name: 'Yahya Alifandi',
  role: 'Web Developer',
  roleBadge: 'Available for Internship',
  university: 'ITERA',
  location: 'Lampung, Indonesia',

  githubUrl: 'https://github.com/yahyaalifandi',
  linkedinUrl: 'https://linkedin.com/in/yahyaalifandi',

  profileImage: '/images/image_profile1.jpg',
  isAvailable: true,
  availabilityLabel: 'Siap Magang',

  specialization: 'Full Stack',
  subSpecialization: 'Web Development',

  handle: 'Yahya Alifandi',
  candidatePath: 'intern-candidate',
  idStamp: 'CANDIDATE',

  statusText: 'Tersedia untuk Magang (Web Developer)',
  statusAvailability: 'Tersedia untuk Magang Segera (Hybrid / Remote)',

  degree: 'S1 Teknik Informatika',
  responseTime: '< 12 jam pada hari kerja',
  email: 'yahya.126140039@student.itera.ac.id',

  bio: 'Membangun aplikasi web end-to-end yang fungsional, terstruktur, dan teroptimasi. Berpengalaman menggunakan React.js, Next.js, Tailwind CSS, Laravel, dan Express.js, serta merancang basis data relasional menggunakan MySQL.',
};

// ============ FEATURED PROJECTS: KATEGORI CODE ============
export const CODE_PROJECTS: CodeProjectItem[] = [
  {
    id: 'espp-arsiva',
    type: 'code',
    categoryTag: '01 // CLIENT PROJECT',
    year: '2026',
    title: 'ESPP — ARSIVA SPP',
    subtitle: 'Sistem Informasi Administrasi & Pencatatan Keuangan Sekolah',

    description: 'Aplikasi pengelolaan administrasi dan pencatatan keuangan sekolah yang berfokus pada pembayaran SPP. Dikembangkan bersama satu rekan untuk menggantikan proses pencatatan manual menggunakan Excel dengan sistem digital yang interaktif, terstruktur, dan mudah digunakan. Dilengkapi manajemen multi-role, pengolahan data Excel, serta deployment pada server lokal sekolah.',

    mockUrl: 'Local Server // School Network',
    mockType: 'espp',

    techStack: [
      'Laravel 12',
      'MySQL',
      'Tailwind CSS',
      'Alpine.js',
      'Docker'
    ],

    contributions: [
      {
        title: 'Full Stack Application Development',
        description: 'Berkolaborasi dalam pengembangan frontend dan backend aplikasi, mulai dari perancangan antarmuka interaktif, implementasi alur bisnis, hingga pengelolaan proses administrasi pembayaran SPP.',
        icon: 'Code2',
      },
      {
        title: 'Multi-Role & Financial Data Management',
        description: 'Implementasi sistem akses berdasarkan peran admin dan kepala sekolah, pengelolaan data siswa, pencatatan pembayaran, serta penyajian informasi dan rekapitulasi keuangan.',
        icon: 'Users',
      },
      {
        title: 'Excel Data Import & Export',
        description: 'Pengembangan fitur import dan export Excel untuk mempermudah pengelolaan data administrasi, mengurangi pekerjaan input manual, serta mendukung kebutuhan pelaporan sekolah.',
        icon: 'FileSpreadsheet',
      },
      {
        title: 'Relational Database & Local Deployment',
        description: 'Berkolaborasi merancang relasi database MySQL dan melakukan instalasi serta konfigurasi aplikasi pada server lokal sekolah menggunakan Docker agar dapat diakses melalui jaringan Wi-Fi internal sekolah.',
        icon: 'Server',
      },
    ],

    liveDemoUrl: '',
    githubUrl: 'https://github.com/yahyaalifandi/arsiva-spp',
  },
  {
    id: 'jejakkode',
    type: 'code',
    categoryTag: '02 // TEAM COLLABORATION',
    year: '2026',
    title: 'JejakKode',
    subtitle: 'Digital Services Platform & Website Development',

    description: 'Platform layanan pengembangan website dan aplikasi digital yang dikembangkan bersama tim JejakKode. Menyediakan solusi digital sesuai kebutuhan klien, mulai dari landing page, company profile, hingga custom web application. Website dilengkapi halaman beranda, portfolio, blog, dan Website Planner untuk membantu calon klien merencanakan kebutuhan proyek mereka.',

    mockUrl: 'jejakkode.com',
    mockType: 'code',

    techStack: [
      'React',
      'TypeScript / TSX',
      'Docker',
      'Tailwind CSS',
      'Framer Motion'
    ],

    contributions: [
      {
        title: 'Website Development & Redesign',
        description: 'Berkontribusi dalam pengembangan dan redesign website JejakKode, mencakup implementasi antarmuka, struktur komponen, serta penyempurnaan tampilan untuk merepresentasikan layanan digital secara profesional.',
        icon: 'Code2',
      },
      {
        title: 'Interactive Website Planner',
        description: 'Berkontribusi dalam pengembangan antarmuka Website Planner yang membantu calon klien menyusun kebutuhan dan merencanakan spesifikasi website custom sesuai kebutuhan bisnis mereka.',
        icon: 'ClipboardList',
      },
      {
        title: 'Blog Content & Website Updates',
        description: 'Melakukan pembaruan konten blog, pemeliharaan tampilan, serta pengembangan dan penyempurnaan website secara berkala setelah proses implementasi awal.',
        icon: 'RefreshCw',
      },
      {
        title: 'Team Collaboration & Development Environment',
        description: 'Berkolaborasi dengan tim dalam pengembangan platform serta menggunakan Docker untuk membantu standardisasi lingkungan development antaranggota.',
        icon: 'Users',
      },
    ],

    liveDemoUrl: 'jejakkode.com',
    githubUrl: 'https://github.com/jejakkodedot-id/jejak_kode_profile',
  },
  {
    id: 'altapedia',
    type: 'code',
    categoryTag: '03 // DIGITAL COMMERCE',
    year: '2026',
    title: 'Altapedia',
    subtitle: 'Game Top-Up & Digital Currency Commerce Platform',

    description: 'Platform perdagangan produk digital yang berfokus pada layanan top-up mata uang game. Dikembangkan bersama rekan tim dengan sistem transaksi terintegrasi yang memungkinkan pengguna membeli produk digital melalui payment gateway Midtrans. Dilengkapi dashboard administrasi untuk mengelola katalog game, denominasi mata uang, konfigurasi provider top-up, serta pemantauan transaksi.',

    mockUrl: 'Altapedia',
    mockType: 'topup',

    techStack: [
      'Laravel',
      'MySQL',
      'Tailwind CSS',
      'Alpine.js',
      'Midtrans',
      'Third-Party API'
    ],

    contributions: [
      {
        title: 'Full Stack Application Development',
        description: 'Berkolaborasi dalam pengembangan frontend dan backend platform, mencakup antarmuka pembelian produk digital, alur pemesanan, validasi input pengguna, serta pengelolaan proses transaksi.',
        icon: 'Code2',
      },
      {
        title: 'Payment Gateway Integration',
        description: 'Implementasi integrasi payment gateway Midtrans untuk memproses pembayaran, menangani respons transaksi, serta menyinkronkan status pembayaran dengan sistem pesanan.',
        icon: 'CreditCard',
      },
      {
        title: 'Game & Provider Management System',
        description: 'Pengembangan sistem administrasi untuk mengelola katalog game, denominasi mata uang, serta konfigurasi provider top-up dan API pihak ketiga seperti UniPin, APIGames, dan Digiflazz.',
        icon: 'Settings2',
      },
      {
        title: 'Relational Database & Transaction Management',
        description: 'Berkontribusi dalam perancangan dan implementasi database MySQL untuk mengelola data produk, konfigurasi provider, pesanan, invoice, serta pencatatan status transaksi secara terstruktur.',
        icon: 'Database',
      },
    ],

    liveDemoUrl: '',
    githubUrl: 'https://github.com/YahyaAlifandi/altapedia.id',
  },
];

// ============ FEATURED PROJECTS: KATEGORI DESIGN ============
export const DESIGN_PROJECTS: DesignProjectItem[] = [
  {
    id: 'sehatin',
    type: 'design',
    categoryTag: '01 // UI/UX CASE STUDY',
    year: '2026',
    title: 'Sehatin',
    subtitle: 'Family Health Education & Monitoring Platform',

    description: 'Konsep platform edukasi kesehatan digital yang dirancang untuk membantu berbagai kelompok usia memahami dan menjaga kesehatan melalui materi edukasi serta tutorial kesehatan. Menghadirkan fitur pemantauan kesehatan keluarga agar anggota keluarga dapat saling terhubung, serta pengalaman penggunaan khusus lansia dengan navigasi yang lebih sederhana dan mudah diakses. Dikembangkan bersama tim Pappoy Mamboo dan berhasil menjadi finalis HMIF Point Project 4.0.',

    mockUrl: 'Figma // Sehatin',
    mockType: 'health',

    tools: [
      'Figma',
      'UI/UX Design',
      'Information Architecture',
      'UX Research',
      'Prototyping',
      'Design System'
    ],

    achievement: 'Finalis HMIF Point Project 4.0',
    team: 'Tim Pappoy Mamboo',

    designFocus: [
      {
        title: 'Health Education Experience',
        description: 'Perancangan struktur informasi dan pengalaman edukasi kesehatan yang menyajikan materi serta tutorial secara terorganisir agar mudah dipahami oleh pengguna dari berbagai kelompok usia.',
        icon: 'BookOpen',
      },
      {
        title: 'Family Health Monitoring',
        description: 'Perancangan alur pemantauan kesehatan keluarga yang memungkinkan anggota keluarga saling terhubung dan memantau informasi kesehatan dalam satu ekosistem.',
        icon: 'Users',
      },
      {
        title: 'Elderly-Friendly Interface',
        description: 'Perancangan halaman khusus lansia dengan navigasi sederhana, hierarki informasi yang jelas, dan elemen antarmuka yang mudah dikenali untuk meningkatkan kemudahan penggunaan.',
        icon: 'Accessibility',
      },
      {
        title: 'UX Research & Information Architecture',
        description: 'Melakukan riset kebutuhan pengguna, eksplorasi alur penggunaan, serta penyusunan Information Architecture untuk membangun struktur navigasi dan pengalaman aplikasi yang terarah.',
        icon: 'Network',
      },
    ],

    prototypeUrl: '',
    liveDemoUrl: 'https://www.figma.com/proto/9tyT6RRcxSW6x6DZdeJnNN/Sehatin?node-id=433-69&p=f&t=YY2ALJ6JMMUZad3l-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=433%3A56',

    caseStudyUrl: '#case-study-sehatin',
  },
  {
    id: 'ui-basic-espp',
    type: 'design',
    categoryTag: '02 // UI EXPLORATION',
    year: '2025',
    title: 'UI Exploration — ARSIVA SPP',
    subtitle: 'Initial Interface Design for School Financial Management',

    description: 'Eksplorasi desain antarmuka awal untuk sistem administrasi dan pencatatan pembayaran SPP sekolah. Dirancang sebagai fondasi visual dan struktural sebelum dikembangkan lebih lanjut menjadi aplikasi ARSIVA SPP. Berfokus pada penyusunan hierarki informasi, kemudahan pengelolaan data administrasi, serta konsistensi komponen antarmuka.',

    mockUrl: 'Figma // ARSIVA SPP UI Exploration',
    mockType: 'school-design',

    tools: [
      'Figma',
      'UI/UX Design',
      'Wireframing',
      'UI Layout',
      'Component Design',
      'Information Architecture'
    ],

    designFocus: [
      {
        title: 'Initial Interface & Layout Design',
        description: 'Merancang konsep awal antarmuka aplikasi, termasuk struktur dashboard, navigasi, dan tata letak halaman administrasi sebagai fondasi pengembangan ARSIVA SPP.',
        icon: 'Layout',
      },
      {
        title: 'Information Architecture & Data Presentation',
        description: 'Menyusun hierarki informasi dan struktur penyajian data siswa, tagihan, serta riwayat pembayaran agar mudah dipahami dan dikelola oleh staf administrasi sekolah.',
        icon: 'Database',
      },
      {
        title: 'UI Components & Visual Consistency',
        description: 'Merancang komponen antarmuka, elemen formulir, indikator status pembayaran, dan pola visual yang konsisten untuk mendukung pengalaman penggunaan aplikasi.',
        icon: 'Component',
      },
      {
        title: 'Independent UI/UX Design Contribution',
        description: 'Bertanggung jawab penuh atas proses perancangan desain antarmuka awal, mulai dari eksplorasi layout, penyusunan struktur halaman, hingga standardisasi elemen visual menggunakan Figma.',
        icon: 'Palette',
      },
    ],

    prototypeUrl: '#prototype-espp',
    liveDemoUrl: '',
  },
  {
    id: 'xenova-store',
    type: 'design',
    categoryTag: '03 // INTERACTIVE PROTOTYPE',
    year: '2025',
    title: 'Xenova Store',
    subtitle: 'Interactive UI/UX Prototype for Game Top-Up & Digital Vouchers',
    description: 'Prototipe UI/UX platform top-up game dan voucher digital yang dirancang bersama rekan sebagai gambaran visual dan acuan pengembangan website. Berfokus pada perancangan alur transaksi, navigasi produk, serta interaksi antarmuka yang intuitif. Desain ini juga digunakan sebagai referensi dalam proses implementasi dan slicing antarmuka ke dalam kode website.',
    mockUrl: 'Figma // Xenova Store',
    mockType: 'game-design',
    tools: [
      'Figma',
      'Interactive Components',
      'E-Commerce UX',
      'Mobile UI',
      'Prototyping'
    ],
    designFocus: [
      {
        title: 'Checkout Flow & Transaction Journey',
        description: 'Merancang alur checkout bertahap mulai dari pemilihan game, pengisian User ID, hingga pemilihan metode pembayaran untuk menciptakan proses transaksi yang ringkas dan mudah diikuti.',
        icon: 'Gamepad2',
      },
      {
        title: 'Interactive Denomination Selection',
        description: 'Mengembangkan interaksi prototipe pada pemilihan nominal voucher dengan feedback visual untuk memperjelas pilihan paket dan memberikan respons terhadap tindakan pengguna.',
        icon: 'Sparkles',
      },
      {
        title: 'Transaction Information & Status',
        description: 'Menyusun tampilan informasi transaksi yang mencakup rincian biaya administrasi, detail pesanan, dan estimasi pengiriman voucher agar pengguna memperoleh informasi sebelum melakukan konfirmasi.',
        icon: 'CreditCard',
      },
      {
        title: 'Design-to-Code Collaboration',
        description: 'Berkolaborasi dalam penyusunan desain dan menjadikannya acuan implementasi antarmuka website melalui proses slicing, dengan menjaga kesesuaian antara rancangan visual dan hasil pengembangan.',
        icon: 'Code2',
      },
    ],
    prototypeUrl: '#prototype-xenova',
  },
{
  id: 'blogify',
  type: 'design',
  categoryTag: '04 // EDITORIAL UX',
  year: '2025',
  title: 'Blogify',
  subtitle: 'Editorial & Blog Publishing Platform UI/UX',
  description: 'Prototipe UI/UX platform publikasi dan editorial blog yang dirancang bersama rekan sebagai gambaran visual dan acuan pengembangan website. Berfokus pada pengalaman membaca, struktur penyajian konten, navigasi kategori, serta kenyamanan pengguna dalam mengakses artikel. Hasil desain digunakan sebagai referensi dalam proses implementasi dan slicing antarmuka ke dalam kode website.',
  mockUrl: 'Figma // Blogify',
  mockType: 'blog-design',
  tools: [
    'Figma',
    'Editorial Layout',
    'Typography System',
    'Reader UX',
    'Interactive Prototyping'
  ],
  designFocus: [
    {
      title: 'Reading Experience & Typography',
      description: 'Merancang hierarki tipografi, proporsi ukuran teks, line-height, dan lebar kolom artikel untuk menciptakan pengalaman membaca yang nyaman dalam durasi panjang.',
      icon: 'BookOpen',
    },
    {
      title: 'Content Structure & Category Navigation',
      description: 'Menyusun struktur konten berdasarkan kategori dan topik bahasan, dilengkapi informasi estimasi waktu baca serta rekomendasi artikel terkait untuk membantu pengguna menemukan tulisan yang relevan.',
      icon: 'Compass',
    },
    {
      title: 'Minimalist Editorial Interface',
      description: 'Merancang tata letak antarmuka yang bersih dan terstruktur dengan meminimalkan elemen visual yang mengganggu agar konten artikel tetap menjadi fokus utama.',
      icon: 'Layers',
    },
    {
      title: 'Design-to-Code Collaboration',
      description: 'Berkolaborasi dalam penyusunan desain UI/UX sebagai acuan pengembangan website, termasuk proses slicing antarmuka dengan menjaga konsistensi antara rancangan visual dan implementasi.',
      icon: 'Code2',
    },
  ],
  prototypeUrl: '#prototype-blogify',
  liveDemoUrl: 'https://www.figma.com/proto/cSnxjf84cvrNkojhPt7G9G/Untitled?node-id=10-293&t=cjl38Khs2Kvz6oCZ-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=10%3A293&show-proto-sidebar=1',
}
];

// Combined PROJECTS array for backward compatibility
export const PROJECTS: ProjectItem[] = [...CODE_PROJECTS, ...DESIGN_PROJECTS];

// ============ SKILLS & TECH STACK: 5 KATEGORI DENGAN 16 TEKNOLOGI AKTUAL ============
export const SKILL_CATEGORIES: TechCategoryItem[] = [
  {
    id: 'frontend',
    code: '01',
    title: 'Frontend Development',
    subtitle: 'Antarmuka reaktif, komponen modular, & pengalaman pengguna dinamis',
    iconName: 'Layout',
    summary: 'Membangun antarmuka web modern yang responsif, terstruktur, dan interaktif dengan ekosistem React, Next.js, Inertia.js, serta styling Tailwind CSS.',
    highlight: 'Komponen Modular, Desain Responsif, & Micro-animations Halus',
    skills: [
      {
        name: 'React.js',
        icon: 'Code2',
        practicalFocus: 'Pengembangan komponen UI modular, state management reaktif, dan lifecycle hooks.',
        appliedInProjects: ['JejakKode'],
      },
      {
        name: 'Next.js',
        icon: 'Globe',
        practicalFocus: 'Arsitektur web modern, page routing terstruktur, dan optimasi performa rendering.',
        appliedInProjects: ['Eksplorasi Web Modern'],
      },
      {
        name: 'Inertia.js',
        icon: 'Layers',
        practicalFocus: 'Penghubung arsitektur monolitik Laravel dengan antarmuka Single Page Application (SPA).',
        appliedInProjects: ['Integrasi Laravel-SPA'],
      },
      {
        name: 'Tailwind CSS',
        icon: 'Palette',
        practicalFocus: 'Utility-first styling, desain responsif berbasis sistem token, dan penataan layout cepat.',
        appliedInProjects: ['ESPP — ARSIVA SPP', 'JejakKode', 'Altapedia'],
      },
      {
        name: 'Framer Motion',
        icon: 'Sparkles',
        practicalFocus: 'Animasi transisi antarmuka, accordion dinamis, micro-interactions, dan feedback visual pengguna.',
        appliedInProjects: ['JejakKode', 'Portofolio Interaktif'],
      },
      {
        name: 'HTML',
        icon: 'FileCode2',
        practicalFocus: 'Struktur semantik dokumen web standar, keterbacaan kode, dan fondasi aksesibilitas.',
        appliedInProjects: ['Semua Proyek Web'],
      },
      {
        name: 'CSS',
        icon: 'Palette',
        practicalFocus: 'Layouting flexbox dan grid, styling responsif adaptif, dan efek transisi visual.',
        appliedInProjects: ['Semua Proyek Web'],
      },
      {
        name: 'JavaScript',
        icon: 'Terminal',
        practicalFocus: 'Logika pemrograman sisi klien, manipulasi DOM interaktif, dan penanganan asynchronous event.',
        appliedInProjects: ['Semua Proyek Web'],
      },
    ],
  },
  {
    id: 'backend',
    code: '02',
    title: 'Backend Development',
    subtitle: 'Logika bisnis sisi server, alur request, & RESTful API',
    iconName: 'Server',
    summary: 'Membangun logika aplikasi sisi server, manajemen routing, autentikasi terstruktur, dan komunikasi data antar-layanan web.',
    highlight: 'Arsitektur MVC Terstruktur & RESTful Endpoint Handal',
    skills: [
      {
        name: 'Laravel',
        icon: 'Server',
        practicalFocus: 'Penerapan arsitektur MVC, Eloquent ORM, migrasi skema, middleware, dan autentikasi aplikasi.',
        appliedInProjects: ['ESPP — ARSIVA SPP', 'Altapedia'],
      },
      {
        name: 'Express.js',
        icon: 'Send',
        practicalFocus: 'Pembuatan RESTful API ringan berbasis Node.js, routing endpoint, dan pengelolaan middleware request.',
        appliedInProjects: ['Layanan API & Endpoint Web'],
      },
    ],
  },
  {
    id: 'database',
    code: '03',
    title: 'Database',
    subtitle: 'Perancangan skema relasional, normalisasi tabel, & integritas data',
    iconName: 'Database',
    summary: 'Merancang model data relasional yang bersih, menjaga konsistensi transaksi data, dan mengoptimalkan relasi antar-entitas aplikasi.',
    highlight: 'Skema Relasional Ternormalisasi & Integritas Transaksi Terjaga',
    skills: [
      {
        name: 'MySQL',
        icon: 'Database',
        practicalFocus: 'Perancangan skema relasional, normalisasi tabel, integritas foreign key, dan query transaksi.',
        appliedInProjects: ['ESPP — ARSIVA SPP', 'Altapedia'],
      },
    ],
  },
  {
    id: 'tools-deployment',
    code: '04',
    title: 'Tools & Deployment',
    subtitle: 'Version control, kontainerisasi lingkungan kerja, & deployment web',
    iconName: 'Wrench',
    summary: 'Pemanfaatan alat kendali versi terstruktur, standardisasi lingkungan pengembangan menggunakan kontainer, dan publikasi aplikasi.',
    highlight: 'Workflow Git Kolaboratif & Standardisasi Lingkungan Kontainer',
    skills: [
      {
        name: 'Git',
        icon: 'GitPullRequest',
        practicalFocus: 'Manajemen versi kode lokal, branching per fitur, commit message terstruktur, dan penggabungan kode.',
        appliedInProjects: ['Semua Proyek'],
      },
      {
        name: 'GitHub',
        icon: 'GitPullRequest',
        practicalFocus: 'Hosting repositori remote, kolaborasi tim, pengelolaan pull request, dan riwayat kontribusi.',
        appliedInProjects: ['JejakKode', 'Proyek Tim'],
      },
      {
        name: 'Docker',
        icon: 'Container',
        practicalFocus: 'Pembuatan Dockerfile dan Docker Compose untuk isolasi serta standarisasi runtime aplikasi dan database.',
        appliedInProjects: ['ESPP — ARSIVA SPP', 'JejakKode'],
      },
      {
        name: 'Vercel',
        icon: 'Cloud',
        practicalFocus: 'Deployment otomatis aplikasi berbasis Next.js dan React dengan preview branch dan live hosting.',
        appliedInProjects: ['Portofolio & Web App'],
      },
    ],
  },
  {
    id: 'uiux-design',
    code: '05',
    title: 'UI/UX Design',
    subtitle: 'Wireframing, prototipe interaktif, & perancangan pengalaman antarmuka',
    iconName: 'Figma',
    summary: 'Merancang konsep visual, menyusun alur pengguna yang intuitif, serta membuat prototipe interaktif digital sebelum tahap pengodean.',
    highlight: 'Prototipe Interaktif & Konsistensi Hierarki Desain',
    skills: [
      {
        name: 'Figma',
        icon: 'Figma',
        practicalFocus: 'Pembuatan wireframe, eksplorasi antarmuka digital, prototipe interaktif, dan penyusunan komponen desain.',
        appliedInProjects: ['Sehatin', 'UI Basic — ESPP ARSIVA SPP', 'Xenova Store', 'Blogify'],
      },
    ],
  },
];

export const SKILLS_SUMMARY = {
  totalSkills: 14,
  totalCategories: 5,
  lastUpdated: 'Oktober 2026',
};

// ============ TRACK RECORD ============

export const TRACK_RECORD: TrackRecordItem[] = [
  {
    id: 'jejakkode',
    institutionKey: 'jejakkode',
    role: 'Web Developer',
    organization: 'JejakKode — Digital Services Initiative',
    location: 'Bandar Lampung, ID',
    period: 'Juni 2026 - Sekarang',
    badge: 'Digital Initiative',
    type: 'experience',
    description:
      'Berkontribusi dalam pengembangan inisiatif layanan digital bersama dua rekan, dengan fokus pada penyediaan solusi website untuk UMKM, sekolah, dan bisnis, mulai dari landing page dan company profile hingga web application dan website kustom sesuai kebutuhan klien.',
    highlights: [
      'Mengembangkan website company profile JejakKode yang dapat diakses melalui jejakkode.com untuk memperkenalkan layanan, portofolio, dan identitas brand',
      'Berkontribusi dalam pengembangan antarmuka website JejakKode dengan memperhatikan tampilan visual, responsivitas, dan pengalaman pengguna',
      'Mendukung pengembangan media sosial JejakKode untuk memperkuat identitas brand dan memperkenalkan layanan digital kepada calon klien',
      'Mengeksplorasi dan menyesuaikan teknologi pengembangan website berdasarkan kebutuhan serta ruang lingkup setiap proyek',
    ],
    skills: [
      'Web Development',
      'React',
      'TypeScript',
      'Tailwind CSS',
      'Framer Motion',
      'Responsive Web Design',
      'UI Development',
      'Brand Development',
    ],
  },

  {
    id: 'freelance',
    institutionKey: 'freelance',
    role: 'Full-Stack Web Developer',
    organization: 'ARSIVA SPP — Sistem Informasi Pembayaran SPP',
    location: 'Bandar Lampung, ID',
    period: 'Maret 2026 - Juni 2026',
    badge: 'Client Project',
    type: 'project',
    description:
      'Mengembangkan sistem informasi pembayaran SPP berdasarkan kebutuhan instansi pendidikan untuk mendigitalisasi pencatatan keuangan sekolah. Bekerja sama dengan satu rekan dalam pengembangan aplikasi menggunakan Laravel 12, Tailwind CSS, dan Alpine.js, serta melakukan deployment pada Linux server sekolah.',
    highlights: [
      'Mengembangkan dashboard untuk mendukung pemantauan dan pengelolaan data pembayaran SPP',
      'Mengimplementasikan fitur impor dan ekspor data menggunakan Excel untuk mendukung pengolahan data administrasi',
      'Mengembangkan fitur pembuatan dan pencetakan invoice pembayaran SPP',
      'Membangun otomatisasi pengecekan data dan pembuatan tagihan untuk membantu proses administrasi pembayaran',
      'Menggunakan Docker untuk mendukung lingkungan pengembangan aplikasi',
      'Melakukan instalasi dan deployment aplikasi pada Linux server sekolah',
      'Berkolaborasi dengan satu rekan dalam pengembangan aplikasi berdasarkan kebutuhan instansi',
    ],
    skills: [
      'Laravel 12',
      'PHP',
      'MySQL',
      'Tailwind CSS',
      'Alpine.js',
      'Docker',
      'Linux Server',
      'Application Deployment',
      'Excel Data Processing',
      'Client Requirements Analysis',
    ],
  },

  {
    id: 'altapedia',
    institutionKey: 'altapedia',
    role: 'Full-Stack Web Developer',
    organization: 'Altapedia — Game Top-Up Platform',
    location: 'Personal Project',
    period: 'Maret 2025',
    badge: 'Collaborative Project',
    type: 'project',
    description:
      'Mengembangkan website top-up game bersama satu rekan dalam waktu sekitar satu bulan. Aplikasi dibangun menggunakan Laravel 12 dengan integrasi payment gateway dalam sandbox mode untuk mengimplementasikan alur transaksi pembayaran digital.',
    highlights: [
      'Mengembangkan aplikasi web menggunakan Laravel 12 sebagai framework backend, Alpine.js untuk interaktivitas antarmuka, dan Tailwind CSS untuk styling',
      'Mengintegrasikan payment gateway dalam sandbox mode untuk menguji alur pembayaran tanpa menggunakan transaksi uang sungguhan',
      'Mengembangkan alur pembelian produk top-up game dari pemilihan produk hingga proses pembayaran',
      'Berkolaborasi dengan satu rekan dalam pengembangan dan penyelesaian project selama kurang lebih satu bulan',
    ],
    skills: [
      'Laravel 12',
      'PHP',
      'Alpine.js',
      'Tailwind CSS',
      'Payment Gateway Integration',
      'API Integration',
      'Transaction Flow',
      'Team Collaboration',
    ],
  },

  // {
  //   id: 'gampangin',
  //   institutionKey: 'gampangin',
  //   role: 'Full-Stack Developer',
  //   organization: 'GampangIn — SME Operations Platform',
  //   location: 'Competition Project',
  //   period: '2026',
  //   badge: 'Project Kompetisi',
  //   type: 'project',
  //   description:
  //     'Mengembangkan platform digitalisasi operasional UMKM yang dirancang untuk mendukung pengelolaan pesanan, inventaris, produksi, dan operasional bisnis.',
  //   highlights: [
  //     'Merancang struktur database relasional untuk kebutuhan operasional UMKM',
  //     'Menyiapkan fondasi autentikasi dan alur akses multi-role',
  //     'Mengembangkan aplikasi menggunakan Laravel, Inertia.js, TypeScript, dan MySQL',
  //   ],
  //   skills: [
  //     'Laravel',
  //     'PHP',
  //     'Inertia.js',
  //     'TypeScript',
  //     'MySQL',
  //     'Database Design',
  //   ],
  // },

  {
    id: 'sehatin',
    institutionKey: 'hackathon',
    role: 'UI/UX Designer — Tim Pappoy Mamboo',
    organization: 'HMIF Point Project 4.0 — Sehatin',
    location: 'Institut Teknologi Sumatera, Lampung',
    period: '2026',
    badge: 'Finalis Kompetisi Inovasi',
    type: 'achievement',
    description:
      'Berkolaborasi dalam tim Pappoy Mamboo untuk merancang konsep solusi digital di bidang kesehatan dalam kompetisi HMIF Point Project 4.0 yang diselenggarakan oleh Himpunan Mahasiswa Informatika ITERA. Berfokus pada perancangan UI/UX, pembuatan prototipe interaktif, dan penyusunan proposal solusi.',
    highlights: [
      'Merancang user flow dan antarmuka pengguna untuk platform kesehatan Sehatin menggunakan Figma',
      'Mengembangkan prototipe interaktif untuk menggambarkan alur dan pengalaman pengguna dalam menggunakan solusi',
      'Menyusun proposal yang menjelaskan konsep, permasalahan yang diangkat, dan solusi digital yang diusulkan',
      'Berkolaborasi bersama tim dalam mengembangkan konsep produk sesuai tema kompetisi tentang ekosistem masa depan yang cerdas, inklusif, dan berkelanjutan',
      'Lolos sebagai finalis HMIF Point Project 4.0',
    ],
    skills: [
      'Figma',
      'UI/UX Design',
      'User Flow',
      'Interactive Prototyping',
      'Product Design',
      'Proposal Writing',
      'Team Collaboration',
    ],
  },

  {
    id: 'lks-2025',
    institutionKey: 'lks',
    role: 'Juara Harapan 1 — LKS Web Technology',
    organization: 'Lomba Kompetensi Siswa (LKS) SMK 2025',
    location: 'Provinsi Lampung, ID',
    period: '2025',
    badge: 'Prestasi Kompetensi',
    type: 'achievement',
    description:
      'Mengikuti kompetisi LKS bidang Web Technology melalui penyelesaian studi kasus pengembangan aplikasi web pada tingkat kabupaten dan provinsi, dengan pendekatan teknologi yang berbeda di setiap tahap kompetisi.',
    highlights: [
      'Tingkat Kabupaten — Meraih Juara 1 melalui penyelesaian studi kasus pengembangan platform e-commerce UMKM menggunakan Laravel 12, Bootstrap, dan JavaScript Native',
      'Tingkat Provinsi — Meraih Juara Harapan 1 melalui studi kasus konsumsi REST API menggunakan React.js, termasuk pengelolaan data berformat JSON dan implementasi operasi CRUD',
    ],
    skills: [
      'Laravel 12',
      'PHP',
      'Bootstrap',
      'JavaScript',
      'React.js',
      'REST API',
      'JSON',
      'CRUD',
      'Problem Solving',
    ],
  },
  {
    id: 'jurnalistik-smk',
    institutionKey: 'jurnalistik',
    role: 'Anggota Ekstrakurikuler Jurnalistik',
    organization: 'SMK Pangudi Luhur Seputih Mataram',
    period: '2023 - 2025',
    badge: 'Organisasi Sekolah',
    type: 'organization',
    description:
      'Terlibat dalam berbagai kegiatan produksi media dan publikasi sekolah, mulai dari peliputan langsung hingga produksi audiovisual, dengan pengalaman menangani tahapan produksi dari perencanaan sampai penyuntingan akhir.',
    highlights: [
      'Menangani dokumentasi kegiatan sekolah melalui fotografi, videografi, dan live reporting',
      'Melakukan post-processing foto dan penyuntingan video untuk kebutuhan publikasi sekolah',
      'Memproduksi short movie mulai dari pengembangan naskah, pengambilan gambar, hingga editing akhir',
      'Berkolaborasi dalam proses produksi konten, koordinasi pengambilan gambar, dan penyelesaian materi publikasi',
    ],
    skills: [
      'Fotografi',
      'Videografi',
      'Live Reporting',
      'Scriptwriting',
      'Video Production',
      'Video Editing',
      'Adobe Premiere Pro',
      'Adobe Lightroom',
      'Team Collaboration',
    ],
  },
];

