import { TimelineItem, ThinkStage, ProjectItem, LabNode } from '../types/portfolio';

export const PERSONAL_INFO = {
  fullName: 'ADITYA DESFAJ ARIYA DHAMMA',
  shortName: 'ADITYA',
  roleTitles: ['DIGITAL CREATOR', 'AI ENTHUSIAST', 'PROBLEM SOLVER'],
  education: {
    institution: 'Politeknik Internasional Bali',
    program: 'D4 Bisnis Digital',
    semester: 'Semester 3',
    line: 'Mahasiswa Politeknik Internasional Bali / D4 Bisnis Digital / Semester 3'
  },
  mainTagline: 'Building ideas into meaningful digital experiences.',
  baseLocation: 'INDONESIA',
  year: '2026',
  availability: 'AVAILABLE FOR COLLABORATION',
  email: 'adityadesfaj06@gmail.com',
  linkedin: 'https://linkedin.com/in/adityadesfaj',
  instagram: 'https://instagram.com/adityadesfaj',
  bioStatement: 'Bridging human intent and computational intelligence through purposeful digital craftsmanship.',
  bioNarrative: [
    'Saya seorang digital creator dan problem solver asal Indonesia yang berfokus pada persimpangan antara teknologi kecerdasan buatan (AI), rancang bangun produk digital, dan pengalaman pengguna.',
    'Bagi saya, teknologi bukanlah sekadar deretan baris kode atau sekadar automasi mekanis, melainkan medium untuk memecahkan masalah nyata dan merancang pengalaman yang bernilai serta memberdayakan manusia.',
    'Melalui eksplorasi intensif di ekosistem modern seperti Google AI Studio, arsitektur AI generatif, dan teknologi web modern, saya membangun solusi digital secara terukur: dari observasi mendalam, perumusan ide, eksekusi prototipe cepat, hingga evaluasi berkelanjutan.'
  ],
  focusAreas: [
    { title: 'Generative AI & LLM Systems', desc: 'Merancang agen cerdas, structured output, dan alur penalaran multimodal.' },
    { title: 'Digital Product Engineering', desc: 'Membangun aplikasi web berperforma tinggi dengan arsitektur bersih dan responsif.' },
    { title: 'Human-Centered Problem Solving', desc: 'Menganalisis friksi pengguna untuk menghadirkan solusi yang intuitif dan berdampak.' }
  ]
};

export const THINK_STAGES: ThinkStage[] = [
  {
    step: '01',
    title: 'OBSERVE',
    tagline: 'Memahami masalah sebelum menentukan solusi.',
    description: 'Saya memulai setiap inisiatif dengan dekonstruksi masalah secara cermat. Menggali akar hambatan pengguna, menganalisis pola perilaku, dan memetakan alur kerja sistem sebelum menulis satu baris kode pun.',
    details: [
      'Identifikasi akar friksi operasional dan pengalaman pengguna',
      'Pemetaan alur data, batasan sistem, dan ekspektasi manusia',
      'Menghindari asumsi dini dengan observasi berbasis fakta'
    ],
    icon: 'Eye'
  },
  {
    step: '02',
    title: 'EXPLORE',
    tagline: 'Mencari kemungkinan dan mengeksplorasi berbagai pendekatan.',
    description: 'Mengeksplorasi spektrum solusi potensial dengan berpikir lintas disiplin. Membandingkan arsitektur AI versus solusi heuristik, menguji berbagai model prompt, serta menyusun skema interaksi yang paling efisien.',
    details: [
      'Riset perbandingan arsitektur AI dan teknologi komplementer',
      'Eksperimentasi rapid prototyping di Google AI Studio',
      'Validasi kelayakan teknis dan efisiensi pengalaman pengguna'
    ],
    icon: 'Compass'
  },
  {
    step: '03',
    title: 'BUILD',
    tagline: 'Mengubah ide menjadi prototype atau produk nyata.',
    description: 'Mewujudkan konsep menjadi artefak digital yang fungsional, tangguh, dan estetik. Mengintegrasikan model AI, sistem logika backend yang aman, dan antarmuka web modern dengan standar visual tertinggi.',
    details: [
      'Implementasi antarmuka modern yang modular dan accessible',
      'Integrasi model AI dengan validasi schema yang ketat (Zero Slop)',
      'Pengujian end-to-end dengan perhatian mendalam pada micro-interaction'
    ],
    icon: 'Layers'
  },
  {
    step: '04',
    title: 'IMPROVE',
    tagline: 'Mengevaluasi, memperbaiki, dan terus belajar.',
    description: 'Peluncuran awal hanyalah awal pembelajaran. Saya mengevaluasi kinerja produk, mengumpulkan umpan balik pengguna, mengoptimalkan latensi, dan menyempurnakan setiap detail melalui iterasi berkelanjutan.',
    details: [
      'Analisis interaksi nyata untuk memangkas friksi yang tersisa',
      'Refining prompt context window dan tuning response quality',
      'Refleksi sistematis untuk memperkaya kapabilitas karya berikutnya'
    ],
    icon: 'RefreshCw'
  }
];

export const TIMELINE_DATA: TimelineItem[] = [
  {
    id: 'timeline-hospi',
    year: '2026',
    category: 'PROJECTS',
    title: 'HOSPI AI — Hospitality Operations System',
    subtitle: 'AI Concierge & Real-Time PMS Sync',
    description: 'Mengembangkan sistem operasional cerdas untuk manajemen akomodasi dan perhotelan, memadukan concierge AI multibahasa 24/7, sinkronisasi reservasi PMS, dan triage tiket pemeliharaan instan.',
    tags: ['AI Operations', 'Hospitality', 'Google AI Studio', 'Automation']
  },
  {
    id: 'timeline-timsehat',
    year: '2025',
    category: 'PROJECTS',
    title: 'TIM SEHAT — Digital Healthcare Initiative',
    subtitle: 'Preventive Health & Accessible Symptom Triage',
    description: 'Merancang dan membangun antarmuka web ramah pengguna untuk platform edukasi dan asesmen gejala kesehatan preventif berbasis AI guna mempermudah masyarakat mengakses literasi medis terverifikasi.',
    tags: ['HealthTech', 'UX Architecture', 'AI Assessment', 'React']
  },
  {
    id: 'timeline-ais-app1',
    year: '2025',
    category: 'EXPERIMENTS',
    title: 'LinguaPulse',
    subtitle: 'AI-Powered Language Intelligence & Context Engine',
    description: 'Aplikasi AI Studio interaktif berbasis Gemini yang menghadirkan analisis kebahasaan mendalam, sintesis nuansa linguistik, dan alur terjemahan kontekstual adaptif.',
    tags: ['LinguaPulse', 'Google AI Studio', 'Language AI', 'Live App'],
    liveUrl: 'https://aistudio.google.com/apps/88bfcfec-af37-4ad9-916b-e313c8a78af5?showPreview=true&showAssistant=true'
  },
  {
    id: 'timeline-ais-app2',
    year: '2025',
    category: 'EXPERIMENTS',
    title: 'KAWAN LOKAL',
    subtitle: 'Hyperlocal Tourism, Culture & Context Engine',
    description: 'Aplikasi AI eksperimental yang berfokus pada eksplorasi wisata hiperlokal, panduan kebudayaan, dan penalaran multimodal interaktif di Google AI Studio.',
    tags: ['KAWAN LOKAL', 'Google AI Studio', 'Hyperlocal AI', 'Live App'],
    liveUrl: 'https://aistudio.google.com/apps/3d0d59f6-6615-49a6-bfc9-41fd33c2ff10?showPreview=true&showAssistant=true'
  },
  {
    id: 'timeline-ais-app3',
    year: '2025',
    category: 'EXPERIMENTS',
    title: 'GitarAkustik Pro - Studio Gitar & Chord Virtual',
    subtitle: 'Virtual Acoustic Guitar, Tablature & Interactive Chords',
    description: 'Implementasi aplikasi modular di Google AI Studio yang menggabungkan simulator studio gitar akustik virtual, deteksi progresi chord, dan inferensi streaming berlatensi rendah.',
    tags: ['GitarAkustik Pro', 'Music Tech', 'Google AI Studio', 'Live App'],
    liveUrl: 'https://aistudio.google.com/apps/c11885c5-3fb8-4605-bd00-915e3be09b8f?showPreview=true&showAssistant=true'
  },
  {
    id: 'timeline-learning',
    year: '2024',
    category: 'LEARNING',
    title: 'Deepening AI Product Architecture',
    subtitle: 'System Design & Modern Web Stack',
    description: 'Memperdalam arsitektur sistem berbasis cloud, rekayasa prompt tingkat lanjut, optimasi latensi klien, dan integrasi state interaktif modern dengan TypeScript & Tailwind.',
    tags: ['System Design', 'TypeScript', 'Tailwind CSS', 'API Integration']
  },
  {
    id: 'timeline-collab',
    year: '2024',
    category: 'COLLABORATION',
    title: 'Digital Creator Collaborations',
    subtitle: 'Community & Peer Solutions',
    description: 'Berkolaborasi dengan sesama pembangun produk dan kreator digital untuk memvalidasi ide solusi inovatif, mendiskusikan implementasi AI etis, serta mentoring teknologi.',
    tags: ['Mentorship', 'Community', 'Cross-Disciplinary', 'Open Source']
  },
  {
    id: 'timeline-edu-pib',
    year: '2025 - Sekarang',
    category: 'EDUCATION',
    title: 'Politeknik Internasional Bali',
    subtitle: 'D4 Bisnis Digital — Semester 3',
    description: 'Menempuh pendidikan vokasi sarjana terapan D4 Bisnis Digital di Politeknik Internasional Bali (Semester 3). Memadukan strategi transformasi bisnis, ekonomi digital, teknologi komputasi, dan ekosistem digital untuk memecahkan problem nyata.',
    tags: ['Politeknik Internasional Bali', 'D4 Bisnis Digital', 'Semester 3', 'Digital Business']
  },
  {
    id: 'timeline-edu',
    year: '2023 - 2024',
    category: 'EDUCATION',
    title: 'Informatika & Pengembangan Teknologi Digital',
    subtitle: 'Foundations of Computer Science & Problem Solving',
    description: 'Fondasi akademik terstruktur dalam logika komputasi, algoritma, rekayasa perangkat lunak, dan interaksi manusia-komputer (HCI) yang menjadi landasan pola pikir analitis.',
    tags: ['Algorithms', 'Software Engineering', 'HCI', 'Foundations']
  }
];

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: 'hospi-ai',
    number: '01',
    title: 'HOSPI AI',
    tagline: 'AI × Hospitality × Digital Product',
    category: 'AI & Property Management',
    role: 'Product Architect & AI Integration',
    tools: ['Google AI Studio', 'Gemini API', 'TypeScript', 'React', 'Tailwind CSS'],
    overview: 'HOSPI AI adalah platform operasional cerdas untuk industri perhotelan dan manajemen properti/villa. Mengintegrasikan asisten tamu multibahasa 24/7, otomatisasi tiket pemeliharaan, panduan check-in dinamis, dan sinkronisasi reservasi tanpa hambatan.',
    problem: 'Pengelola properti dan staf hotel sering kewalahan menangani puluhan pertanyaan berulang dari berbagai saluran komunikasi secara manual, mengakibatkan respon lambat, keterlambatan check-in, dan tingginya biaya lembur staf.',
    approach: 'Membangun arsitektur AI berbasis graph pengetahuan operasional properti dengan aturan validasi schema yang ketat. Sistem secara otomatis membedakan pertanyaan umum, permintaan reservasi, dan eskalasi darurat, lalu menghubungkannya langsung ke dasbor staf.',
    result: 'Menghadirkan respon tamu instan di bawah 2 detik dengan akurasi kontekstual tinggi, mengeliminasi pekerjaan repetitif staf hotel hingga 70%, dan memastikan pengalaman menginap tamu yang dipersonalisasi.',
    highlights: [
      'Multi-language 24/7 guest concierge engine',
      'Automated issue triage & maintenance ticketing',
      'Smart check-in guidance & property orientation',
      'Zero-latency staff dispatch alerts'
    ],
    layout: 'left-media',
    accentColor: '#5EE7F5',
    previewType: 'hospitality',
    liveUrl: 'https://aistudio.google.com/apps/88bfcfec-af37-4ad9-916b-e313c8a78af5?showPreview=true&showAssistant=true'
  },
  {
    id: 'tim-sehat',
    number: '02',
    title: 'TIM SEHAT',
    tagline: 'HealthTech × AI Diagnostic & Lifestyle Companion',
    category: 'Digital Health & Preventive Wellness',
    role: 'Lead Frontend & UX Engineer',
    tools: ['React', 'Next.js', 'Node.js', 'Gemini Health Intelligence', 'Tailwind CSS'],
    overview: 'TIM SEHAT adalah platform kesehatan digital yang dirancang untuk mempermudah masyarakat mengakses asesmen gejala awal mandiri, rekomendasi gaya hidup preventif, dan panduan literasi medis terverifikasi secara empatik.',
    problem: 'Masyarakat awam kerap menghadapi kecemasan berlebih saat mencari informasi gejala di internet karena banyaknya disinformasi atau bahasa medis yang rumit, sementara akses ke fasilitas kesehatan awal sering terkendala antrean.',
    approach: 'Mengembangkan antarmuka mobile-first yang bersih, menenangkan, dan inklusif. Mengintegrasikan alur asesmen terstruktur dengan penalaran klinis dasar yang selalu menyertakan penafian etis dan rekomendasi konsultasi profesional.',
    result: 'Pengguna dapat memahami kondisi kesehatan awal dalam hitungan menit secara jernih tanpa kepanikan, meningkatkan kepatuhan pencegahan dini, serta mempermudah rujukan ke fasilitas medis resmi.',
    highlights: [
      'Empathetic symptom checker with guided questionnaire',
      'Verified preventative wellness knowledge repository',
      'Medication reminder & hydration tracker interface',
      'Strict clinical safety disclaimers & privacy compliance'
    ],
    layout: 'right-media',
    accentColor: '#6C63FF',
    previewType: 'healthtech',
    liveUrl: 'https://aistudio.google.com/apps/3d0d59f6-6615-49a6-bfc9-41fd33c2ff10?showPreview=true&showAssistant=true'
  },
  {
    id: 'ai-studio-lab',
    number: '03',
    title: 'Google AI Studio Projects',
    tagline: 'Generative AI Tools & Rapid Prototyping Suite',
    category: 'AI Prototyping & Multimodal Systems',
    role: 'Creator & Full-Stack Prototyper',
    tools: ['Google AI Studio', 'Gemini SDK', 'Structured Outputs', 'WebSockets', 'Tailwind CSS'],
    overview: 'Koleksi instrumen digital eksperimental live yang dideploy langsung dari Google AI Studio untuk mengeksplorasi kemampuan model multimodal Gemini dalam memecahkan skenario dunia nyata secara presisi.',
    problem: 'Banyak utilitas AI di pasaran terjebak dalam bentuk chatbot obrolan umum yang tidak terstruktur, menghasilkan keluaran yang inkonsisten dan sulit diintegrasikan ke alur kerja produktivitas nyata.',
    approach: 'Memanfaatkan schema JSON terstruktur, prompt system yang presisi, dan antarmuka web khusus untuk mengonversi data kompleks menjadi aplikasi interaktif yang dapat langsung diakses publik.',
    result: 'Tiga aplikasi Google AI Studio live yang dapat diuji dan dijalankan secara interaktif dengan kemampuan analisis instan, structured parsing, dan zero-latency interaction.',
    highlights: [
      '3 Live Google AI Studio applications with interactive assistants',
      'Strictly-typed JSON schema generation pipelines',
      'Multimodal document inspection & structured extraction',
      'Modular micro-app architecture easily deployable'
    ],
    layout: 'full-media',
    accentColor: '#5EE7F5',
    previewType: 'aistudio',
    liveUrl: 'https://aistudio.google.com/apps/c11885c5-3fb8-4605-bd00-915e3be09b8f?showPreview=true&showAssistant=true',
    studioLinks: [
      {
        name: 'LinguaPulse',
        url: 'https://aistudio.google.com/apps/88bfcfec-af37-4ad9-916b-e313c8a78af5?showPreview=true&showAssistant=true',
        note: 'AI Language Intelligence & Contextual Assistant'
      },
      {
        name: 'KAWAN LOKAL',
        url: 'https://aistudio.google.com/apps/3d0d59f6-6615-49a6-bfc9-41fd33c2ff10?showPreview=true&showAssistant=true',
        note: 'Hyperlocal Tourism, Culture & Context Engine'
      },
      {
        name: 'GitarAkustik Pro - Studio Gitar & Chord Virtual',
        url: 'https://aistudio.google.com/apps/c11885c5-3fb8-4605-bd00-915e3be09b8f?showPreview=true&showAssistant=true',
        note: 'Virtual Acoustic Guitar, Tablature & Interactive Chords'
      }
    ]
  }
];

export const LAB_NODES: LabNode[] = [
  { id: 'n1', label: 'AI', category: 'Intelligence', description: 'Arsitektur kecerdasan buatan terapan untuk memecahkan problem spesifik.', status: 'Active', x: 20, y: 30 },
  { id: 'n2', label: 'GENERATIVE AI', category: 'Language & Vision', description: 'Eksplorasi LLM, penalaran multi-tahap, dan sintesis multimodal.', status: 'Active', x: 50, y: 15 },
  { id: 'n3', label: 'GOOGLE AI STUDIO', category: 'Prototyping Environment', description: 'Pondasi utama untuk eksperimen model Gemini dan iterasi prompt cepat.', status: 'Deep Dive', x: 80, y: 28 },
  { id: 'n4', label: 'DIGITAL PRODUCT', category: 'Engineering', description: 'Rancang bangun perangkat lunak yang scalable, modular, dan fungsional.', status: 'Active', x: 30, y: 70 },
  { id: 'n5', label: 'UI / UX ARCHITECTURE', category: 'Interface Design', description: 'Hierarki visual editorial, tipografi berkarakter, dan zero-friction micro-interaction.', status: 'Active', x: 70, y: 65 },
  { id: 'n6', label: 'RESEARCH', category: 'Methodology', description: 'Investigasi empiris terhadap kebutuhan pengguna dan tren kapabilitas model baru.', status: 'Experimenting', x: 15, y: 55 },
  { id: 'n7', label: 'PROBLEM SOLVING', category: 'Core Philosophy', description: 'Pendekatan analitis berbasis first principles untuk mengurai kompleksitas.', status: 'Deep Dive', x: 85, y: 50 },
  { id: 'n8', label: 'CREATIVE TECHNOLOGY', category: 'Emerging Craft', description: 'Menggabungkan estetika visual avant-garde dengan kode komputasi modern.', status: 'Experimenting', x: 50, y: 85 }
];

export const DIGITAL_DESK = {
  exploring: 'AI & DIGITAL PRODUCTS',
  currentFocus: 'Building meaningful digital experiences',
  mindset: 'Learn → Build → Improve',
  status: 'Open to collaboration',
  systemStatus: 'ALL SYSTEMS ACTIVE · 2026',
  toolchain: [
    'Google AI Studio',
    'Gemini SDK',
    'React 19 & Vite',
    'TypeScript',
    'Tailwind CSS',
    'Motion & Canvas'
  ]
};

export const PHILOSOPHY_PRINCIPLES = [
  {
    keyword: 'LEARN',
    subword: 'DEEPLY',
    hoverText: 'Curiosity and continuous learning',
    description: 'Memahami prinsip mendasar di balik setiap teknologi, bukan hanya meniru permukaan. Rasa ingin tahu yang terarah melahirkan pemahaman yang kokoh.',
    manifesto: 'Belajar secara mendalam membuka perspektif baru terhadap masalah yang tampak rumit.'
  },
  {
    keyword: 'BUILD',
    subword: 'INTENTIONALLY',
    hoverText: 'Turning ideas into something tangible',
    description: 'Setiap fitur, garis pembatas, dan kode dibuat dengan tujuan yang jelas. Menghindari artifisialitas demi menghadirkan kegunaan nyata yang dapat dirasakan langsung.',
    manifesto: 'Membangun dengan intensi berarti menghargai waktu pengguna dan esensi karya.'
  },
  {
    keyword: 'IMPROVE',
    subword: 'CONTINUOUSLY',
    hoverText: 'Iteration, feedback, and growth',
    description: 'Kesempurnaan bukan titik akhir statis, melainkan proses iterasi tanpa henti. Mendengar umpan balik, mengevaluasi hasil, dan senantiasa berkembang.',
    manifesto: 'Peningkatan berkelanjutan mengubah prototipe sederhana menjadi karya yang luar biasa.'
  }
];
