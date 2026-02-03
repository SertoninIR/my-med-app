import './index.css';
import React, { useState, useEffect, useMemo } from 'react';
import { 
  CheckCircle2, 
  Circle, 
  BookOpen, 
  Brain, 
  Pill, 
  FlaskConical, 
  Activity, 
  Bone, 
  Eye, 
  Search, 
  Trophy, 
  Clock,
  ChevronDown,
  LayoutGrid,
  List,
  Stethoscope,
  Microscope,
  Baby,
  Dna,
  Zap,
  TestTube2,
  Heart
} from 'lucide-react';

const lessonData = [
  // NÖROLOJİ
  { id: 1, category: "Nöroloji", title: "Sinir Sisteminin Kısa Anatomisi", instructor: "Dr. G. BÜYÜKŞERBETÇİ", date: "09 Şubat" },
  { id: 2, category: "Nöroloji", title: "Duyu Bozuklukları", instructor: "Dr. G. BÜYÜKŞERBETÇİ", date: "09 Şubat" },
  { id: 8, category: "Nöroloji", title: "Kraniyal Sinirler", instructor: "Dr. İ. Ş. KÖKEN", date: "10 Şubat" },
  { id: 28, category: "Nöroloji", title: "İstemsiz Hareketler", instructor: "Dr. M. KOCATÜRK", date: "16 Şubat" },
  { id: 29, category: "Nöroloji", title: "Koordinasyon Bozuklukları", instructor: "Dr. M. KOCATÜRK", date: "16 Şubat" },
  { id: 30, category: "Nöroloji", title: "Afazi Apraksi Agnozi", instructor: "Dr. N. TEPE", date: "16 Şubat" },
  { id: 31, category: "Nöroloji", title: "Piramidal Sistem ve Refleks Bozuklukları", instructor: "Dr. Ü. S. SARI", date: "16 Şubat" },

  // TIBBİ FARMAKOLOJİ
  { id: 6, category: "Tıbbi Farmakoloji", title: "Santral Sinir Sistemi Farmakolojisine Giriş", instructor: "Dr. E. AKSÖZ", date: "10 Şubat" },
  { id: 15, category: "Tıbbi Farmakoloji", title: "Nöroleptikler", instructor: "Dr. N. C. COŞKUN", date: "11 Şubat" },
  { id: 20, category: "Tıbbi Farmakoloji", title: "İlaç ve Madde Bağımlılığı", instructor: "Dr. N. C. COŞKUN", date: "12 Şubat" },
  { id: 26, category: "Tıbbi Farmakoloji", title: "Antidepresanlar ve Antimanik İlaçlar", instructor: "Dr. E. AKSÖZ", date: "13 Şubat" },
  { id: 51, category: "Tıbbi Farmakoloji", title: "Antiepileptikler", instructor: "Dr. N. C. COŞKUN", date: "19 Şubat" },
  { id: 54, category: "Tıbbi Farmakoloji", title: "Parkinson Tedavisinde Kullanılan İlaçlar", instructor: "Dr. O. KORKUT", date: "20 Şubat" },
  { id: 55, category: "Tıbbi Farmakoloji", title: "Alzheimer Tedavisinde Kullanılan İlaçlar", instructor: "Dr. O. KORKUT", date: "20 Şubat" },
  { id: 61, category: "Tıbbi Farmakoloji", title: "Alkoller", instructor: "Dr. N. C. COŞKUN", date: "23 Şubat" },
  { id: 78, category: "Tıbbi Farmakoloji", title: "Santral Sinir Sistemi Stimülanları", instructor: "Dr. O. KORKUT", date: "26 Şubat" },
  { id: 115, category: "Tıbbi Farmakoloji", title: "NSAİD", instructor: "Dr. C. GÖKBULUT", date: "09 Mart" },
  { id: 119, category: "Tıbbi Farmakoloji", title: "Narkotik Analjezikler", instructor: "Dr. C. GÖKBULUT", date: "10 Mart" },
  { id: 121, category: "Tıbbi Farmakoloji", title: "Lokal Anestezikler", instructor: "Dr. C. GÖKBULUT", date: "11 Mart" },
  { id: 122, category: "Tıbbi Farmakoloji", title: "Genel Anestezikler", instructor: "Dr. C. GÖKBULUT", date: "11 Mart" },
  { id: 124, category: "Tıbbi Farmakoloji", title: "Hipnosedatifler, Benzodiazepinler ve Barbitüratlar", instructor: "Dr. E. AKSÖZ", date: "12 Mart" },

  // RUH SAĞLIĞI VE HASTALIKLARI
  { id: 3, category: "Ruh Sağlığı ve Hastalıkları", title: "Psikiyatrik Muayene", instructor: "Dr. D. ALÇI", date: "09 Şubat" },
  { id: 4, category: "Ruh Sağlığı ve Hastalıkları", title: "Psikiyatrik Semiyoloji-1", instructor: "Dr. R. G. TULACI", date: "09 Şubat" },
  { id: 5, category: "Ruh Sağlığı ve Hastalıkları", title: "Psikiyatrik Semiyoloji-2", instructor: "Dr. R. G. TULACI", date: "09 Şubat" },
  { id: 12, category: "Ruh Sağlığı ve Hastalıkları", title: "Anksiyete Bozukluğu", instructor: "Dr. D. ALÇI", date: "10 Şubat" },
  { id: 13, category: "Ruh Sağlığı ve Hastalıkları", title: "Duygudurum Bozuklukları", instructor: "Dr. D. ALÇI", date: "11 Şubat" },
  { id: 14, category: "Ruh Sağlığı ve Hastalıkları", title: "Psikotik Bozukluk", instructor: "Dr. D. ALÇI", date: "11 Şubat" },
  { id: 19, category: "Ruh Sağlığı ve Hastalıkları", title: "Alkol ve Madde Kullanım Bozuklukları", instructor: "Dr. N. DOLAPOĞLU", date: "12 Şubat" },
  { id: 34, category: "Ruh Sağlığı ve Hastalıkları", title: "Bilişsel Bozukluklar", instructor: "Dr. N. DOLAPOĞLU", date: "16 Şubat" },
  { id: 39, category: "Ruh Sağlığı ve Hastalıkları", title: "Uyku Bozuklukları", instructor: "Dr. S. AKDENİZ GÖRGÜLÜ", date: "17 Şubat" },
  { id: 40, category: "Ruh Sağlığı ve Hastalıkları", title: "Cinsel İşlev Bozuklukları", instructor: "Dr. S. AKDENİZ GÖRGÜLÜ", date: "17 Şubat" },
  { id: 56, category: "Ruh Sağlığı ve Hastalıkları", title: "Genel Tıbbi Duruma Bağlı Psikiyatrik Bozukluklar", instructor: "Dr. M. ŞAHİN CAN", date: "20 Şubat" },
  { id: 57, category: "Ruh Sağlığı ve Hastalıkları", title: "Kişilik Bozuklukları", instructor: "Dr. M. ŞAHİN CAN", date: "20 Şubat" },

  // TIBBİ MİKROBİYOLOJİ
  { id: 17, category: "Tıbbi Mikrobiyoloji", title: "Virolojiye Giriş", instructor: "Dr. A. G. ŞENER", date: "12 Şubat" },
  { id: 18, category: "Tıbbi Mikrobiyoloji", title: "Antiviral İlaçlar", instructor: "Dr. N. İNAL", date: "12 Şubat" },
  { id: 32, category: "Tıbbi Mikrobiyoloji", title: "Poxviruslar, Diğer DNA Viruslar", instructor: "Dr. Y. ÖZEL", date: "16 Şubat" },
  { id: 33, category: "Tıbbi Mikrobiyoloji", title: "HPV, Polyomavirus", instructor: "Dr. Y. ÖZEL", date: "16 Şubat" },
  { id: 43, category: "Tıbbi Mikrobiyoloji", title: "Adenovirus, Coronavirus", instructor: "Dr. N. İNAL", date: "18 Şubat" },
  { id: 45, category: "Tıbbi Mikrobiyoloji", title: "Pikornavirüs, Reovirüs", instructor: "Dr. Y. ÖZEL", date: "19 Şubat" },
  { id: 46, category: "Tıbbi Mikrobiyoloji", title: "Rhabdovirüs, Togavirüs", instructor: "Dr. Y. ÖZEL", date: "19 Şubat" },
  { id: 53, category: "Tıbbi Mikrobiyoloji", title: "Tümör Virüsler", instructor: "Dr. A. G. ŞENER", date: "20 Şubat" },
  { id: 58, category: "Tıbbi Mikrobiyoloji", title: "Orthomyxovirüsler, Paramyxovirüsler", instructor: "Dr. N. İNAL", date: "23 Şubat" },
  { id: 69, category: "Tıbbi Mikrobiyoloji", title: "Hepatit Virüsleri", instructor: "Dr. T. KULA ATİK", date: "25 Şubat" },
  { id: 72, category: "Tıbbi Mikrobiyoloji", title: "Olgu Senaryoları; Hepatit", instructor: "TÜM ÖĞRETİM ÜYELERİ", date: "26 Şubat" },
  { id: 74, category: "Tıbbi Mikrobiyoloji", title: "Uygulama: Olgu Tartışalım Paneli", instructor: "TÜM ÖĞRETİM ÜYELERİ", date: "26 Şubat" },
  { id: 84, category: "Tıbbi Mikrobiyoloji", title: "Retroviruslar ve HIV", instructor: "Dr. T. KULA ATİK", date: "02 Mart" },
  { id: 86, category: "Tıbbi Mikrobiyoloji", title: "Olgu Senaryoları; Cinsel Yolla Bulaşanlar", instructor: "TÜM ÖĞRETİM ÜYELERİ", date: "02 Mart" },
  { id: 88, category: "Tıbbi Mikrobiyoloji", title: "Uygulama: Olgu Senaryoları Tartışalım", instructor: "TÜM ÖĞRETİM ÜYELERİ", date: "02 Mart" },
  { id: 93, category: "Tıbbi Mikrobiyoloji", title: "Prion Hastalıkları", instructor: "Dr. Y. ÖZEL", date: "03 Mart" },
  { id: 101, category: "Tıbbi Mikrobiyoloji", title: "Uygulama: Olgu Senaryoları", instructor: "TÜM ÖĞRETİM ÜYELERİ", date: "05 Mart" },

  // TIBBİ PATOLOJİ
  { id: 35, category: "Tıbbi Patoloji", title: "Santral Sinir Sistemi Tümörleri", instructor: "Dr. G. TURAN", date: "17 Şubat" },
  { id: 41, category: "Tıbbi Patoloji", title: "Santral Sinir Sisteminin Vasküler Hastalıkları", instructor: "Dr. G. TURAN", date: "18 Şubat" },
  { id: 49, category: "Tıbbi Patoloji", title: "Santral Sinir Sisteminin Demiyelinizan Hastalıkları", instructor: "Dr. G. TURAN", date: "19 Şubat" },
  { id: 62, category: "Tıbbi Patoloji", title: "Santral Sinir Sisteminin Enfeksiyöz Hastalıkları", instructor: "Dr. G. TURAN", date: "23 Şubat" },
  { id: 76, category: "Tıbbi Patoloji", title: "Periferik Sinir Hastalıkları ve Kılıfı", instructor: "Dr. G. TURAN", date: "26 Şubat" },
  { id: 90, category: "Tıbbi Patoloji", title: "Kemik ve Kıkırdak Hastalıkları", instructor: "Dr. A. YILDIRIM ÖZLÜK", date: "03 Mart" },
  { id: 92, category: "Tıbbi Patoloji", title: "Kas Hastalıkları", instructor: "Dr. G. TURAN", date: "03 Mart" },
  { id: 94, category: "Tıbbi Patoloji", title: "Eklem Hastalıkları", instructor: "Dr. A. YILDIRIM ÖZLÜK", date: "04 Mart" },
  { id: 126, category: "Tıbbi Patoloji", title: "Yumuşak Doku Tümörleri", instructor: "Dr. G. TURAN", date: "12 Mart" },

  // ORTOPEDİ
  { id: 96, category: "Ortopedi", title: "Osteomyelitler ve Septik Artrit", instructor: "Dr. A. ATİK", date: "04 Mart" },
  { id: 97, category: "Ortopedi", title: "Osteoartrit ve Nonenflamatuvar Artropatiler", instructor: "Dr. A. ATİK", date: "04 Mart" },
  { id: 107, category: "Ortopedi", title: "İskelet Sisteminin Doğuştan Sakatlıkları", instructor: "Dr. A. ATİK", date: "06 Mart" },
  { id: 108, category: "Ortopedi", title: "Çıkıklar-Yumuşak Doku ve Bağ Yaralanmaları", instructor: "Dr. A. ATİK", date: "06 Mart" },
  { id: 109, category: "Ortopedi", title: "Kırık ve Kırık İyileşmesi", instructor: "Dr. S. SARGIN", date: "06 Mart" },
  { id: 110, category: "Ortopedi", title: "Benign ve Malign Kemik Tümörlerine Yaklaşım", instructor: "Dr. S. SARGIN", date: "09 Mart" },
  { id: 112, category: "Ortopedi", title: "Yumuşak Doku Tümörlerine Yaklaşım", instructor: "Dr. S. SARGIN", date: "09 Mart" },
  { id: 128, category: "Ortopedi", title: "Temel El Muayenesi", instructor: "Dr. A. E. ULUSAL", date: "12 Mart" },

  // ENFEKSİYON HASTALIKLARI
  { id: 47, category: "Enfeksiyon Hastalıkları", title: "Kuduz", instructor: "Dr. R. İNAN SARIKAYA", date: "19 Şubat" },
  { id: 60, category: "Enfeksiyon Hastalıkları", title: "Tetanoz", instructor: "Dr. O. YAPICI", date: "23 Şubat" },
  { id: 63, category: "Enfeksiyon Hastalıkları", title: "Santral Sinir Sistemi Enfeksiyonları Menenjit", instructor: "Dr. M. A. TÜZ", date: "23 Şubat" },
  { id: 65, category: "Enfeksiyon Hastalıkları", title: "Santral Sinir Sistemi Enfeksiyonları Ensefalit", instructor: "Dr. M. A. TÜZ", date: "24 Şubat" },
  { id: 66, category: "Enfeksiyon Hastalıkları", title: "Santral Sinir Sistemi Enfeksiyonları Beyin Absesi", instructor: "Dr. M. A. TÜZ", date: "24 Şubat" },

  // FİZİK TED. VE REHABİLİTASYON
  { id: 79, category: "Fizik Ted. ve Rehabilitasyon", title: "Fizik Tedavi ve Rehabilitasyonun Tanımı", instructor: "Dr. E. SALBAŞ", date: "27 Şubat" },
  { id: 80, category: "Fizik Ted. ve Rehabilitasyon", title: "Lomber Omurganın Kinezyolojisi", instructor: "Dr. E. SALBAŞ", date: "27 Şubat" },
  { id: 81, category: "Fizik Ted. ve Rehabilitasyon", title: "Ozon Tedavisi Nedir?", instructor: "Dr. N. ŞAHİN", date: "27 Şubat" },
  { id: 82, category: "Fizik Ted. ve Rehabilitasyon", title: "Alt Ekstremitenin Kinezyolojisi", instructor: "Dr. B. UYSAL", date: "27 Şubat" },
  { id: 83, category: "Fizik Ted. ve Rehabilitasyon", title: "Servikal Omurganın Kinezyolojisi", instructor: "Dr. B. UYSAL", date: "27 Şubat" },

  // ÇOCUK SAĞLIĞI VE HASTALIKLARI
  { id: 21, category: "Çocuk Sağlığı ve Hastalıkları", title: "Çocuklarda Kas İskelet Sistem Muayenesi", instructor: "Dr. İ. DOKUREL ÇETİN", date: "12 Şubat" },
  { id: 22, category: "Çocuk Sağlığı ve Hastalıkları", title: "Çocuklarda Sık Görülen Nörolojik Hastalıklar", instructor: "Dr. İ. DOKUREL ÇETİN", date: "12 Şubat" },
  { id: 23, category: "Çocuk Sağlığı ve Hastalıkları", title: "Çocuk Nörolojik Sistem Hastalıklarında Anamnez", instructor: "Anal. AYDIN", date: "13 Şubat" },
  { id: 24, category: "Çocuk Sağlığı ve Hastalıkları", title: "Çocuklarda Nörolojik Sistem Muayenesi", instructor: "Dr. H. AYDIN", date: "13 Şubat" },
  { id: 25, category: "Çocuk Sağlığı ve Hastalıkları", title: "Çocuklarda Normal Mental Motor Gelişim", instructor: "Dr. H. AYDIN", date: "13 Şubat" },

  // İÇ HASTALIKLARI
  { id: 98, category: "İç Hastalıkları", title: "Romatolojik Hastalıklarda Eklem Bulguları", instructor: "Dr. A. KIRIK", date: "05 Mart" },
  { id: 99, category: "İç Hastalıkları", title: "Romatolojik Hastalıklarda Eklem Dışı Semptomlar", instructor: "Dr. A. KIRIK", date: "05 Mart" },
  { id: 100, category: "İç Hastalıkları", title: "Romatolojik Hast. İnflamatuar Belirteçler, Otoimmunite", instructor: "Dr. A. KIRIK", date: "05 Mart" },

  // GÖZ HASTALIKLARI
  { id: 130, category: "Göz Hastalıkları", title: "Göz Anatomisi", instructor: "Dr. A. ERGİN", date: "13 Mart" },
  { id: 131, category: "Göz Hastalıkları", title: "Göz Fizyolojisi", instructor: "Dr. A. ERGİN", date: "13 Mart" },
  { id: 132, category: "Göz Hastalıkları", title: "Oftalmolojik Muayene", instructor: "Dr. A. ERGİN", date: "13 Mart" },
  { id: 133, category: "Göz Hastalıkları", title: "Acil Göz Hastalıkları", instructor: "Dr. D. AÇAN", date: "13 Mart" },
  { id: 134, category: "Göz Hastalıkları", title: "Optik Sinir Hastalıkları", instructor: "Dr. D. AÇAN", date: "13 Mart" },

  // RADYOLOJİ
  { id: 10, category: "Radyoloji", title: "Nöroradyoloji", instructor: "Dr. A. AYTAÇ", date: "10 Şubat" },
  { id: 113, category: "Radyoloji", title: "Kas İskelet Sistem Radyolojisi", instructor: "Dr. M. AYAZ", date: "09 Mart" },

  // TIBBİ GENETİK
  { id: 37, category: "Tıbbi Genetik", title: "Kalıtsal Kas Hastalıklarının Genetiği", instructor: "Dr. H. BOLAT", date: "17 Şubat" },
  { id: 38, category: "Tıbbi Genetik", title: "Epilepsi ve Genetik", instructor: "Dr. H. BOLAT", date: "17 Şubat" },

  // NÜKLEER TIP
  { id: 117, category: "Nükleer Tıp", title: "SSS Sintigrafileri ve Beyin Perfüzyon Sintigrafisi", instructor: "Dr. H. BOZKURT", date: "10 Mart" },
  { id: 118, category: "Nükleer Tıp", title: "Kemik ve Kemik İliği Sintigrafisi", instructor: "Dr. H. BOZKURT", date: "10 Mart" },

  // TIBBİ BİYOKİMYA
  { id: 67, category: "Tıbbi Biyokimya", title: "Beyin Omurilik Sıvısı Biyokimyası", instructor: "Dr. S. UYSAL", date: "24 Şubat" },

  // MESLEKİ BECERİ
  { id: 105, category: "Mesleki Beceri", title: "MBL: Nörolojik Muayene", instructor: "Dr. G. BÜYÜKŞERBETÇİ", date: "06 Mart" }
];

const categoryConfig = {
  "Tıbbi Mikrobiyoloji": { icon: Microscope, color: "text-emerald-600", bg: "bg-emerald-50", border: "border-emerald-100", accent: "bg-emerald-600" },
  "Tıbbi Farmakoloji": { icon: Pill, color: "text-purple-600", bg: "bg-purple-50", border: "border-purple-100", accent: "bg-purple-600" },
  "Ruh Sağlığı ve Hastalıkları": { icon: BookOpen, color: "text-rose-600", bg: "bg-rose-50", border: "border-rose-100", accent: "bg-rose-600" },
  "Tıbbi Patoloji": { icon: Activity, color: "text-amber-600", bg: "bg-amber-50", border: "border-amber-100", accent: "bg-amber-600" },
  "Ortopedi": { icon: Bone, color: "text-orange-600", bg: "bg-orange-50", border: "border-orange-100", accent: "bg-orange-600" },
  "Nöroloji": { icon: Brain, color: "text-blue-600", bg: "bg-blue-50", border: "border-blue-100", accent: "bg-blue-600" },
  "Çocuk Sağlığı ve Hastalıkları": { icon: Baby, color: "text-cyan-600", bg: "bg-cyan-50", border: "border-cyan-100", accent: "bg-cyan-600" },
  "Enfeksiyon Hastalıkları": { icon: FlaskConical, color: "text-red-600", bg: "bg-red-50", border: "border-red-100", accent: "bg-red-600" },
  "Fizik Ted. ve Rehabilitasyon": { icon: Zap, color: "text-lime-600", bg: "bg-lime-50", border: "border-lime-100", accent: "bg-lime-600" },
  "Göz Hastalıkları": { icon: Eye, color: "text-indigo-600", bg: "bg-indigo-50", border: "border-indigo-100", accent: "bg-indigo-600" },
  "İç Hastalıkları": { icon: Stethoscope, color: "text-sky-600", bg: "bg-sky-50", border: "border-sky-100", accent: "bg-sky-600" },
  "Radyoloji": { icon: LayoutGrid, color: "text-slate-600", bg: "bg-slate-50", border: "border-slate-100", accent: "bg-slate-600" },
  "Tıbbi Genetik": { icon: Dna, color: "text-pink-600", bg: "bg-pink-50", border: "border-pink-100", accent: "bg-pink-600" },
  "Nükleer Tıp": { icon: Activity, color: "text-violet-600", bg: "bg-violet-50", border: "border-violet-100", accent: "bg-violet-600" },
  "Tıbbi Biyokimya": { icon: TestTube2, color: "text-teal-600", bg: "bg-teal-50", border: "border-teal-100", accent: "bg-teal-600" },
  "Mesleki Beceri": { icon: Trophy, color: "text-yellow-600", bg: "bg-yellow-50", border: "border-yellow-100", accent: "bg-yellow-600" }
};

const App = () => {
  const [completed, setCompleted] = useState(() => {
    try {
      const saved = localStorage.getItem('medStudyProgress_v10');
      return saved ? JSON.parse(saved) : [];
    } catch (e) { return []; }
  });
  
  const [expandedCategories, setExpandedCategories] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [viewMode, setViewMode] = useState("topics");

  useEffect(() => {
    localStorage.setItem('medStudyProgress_v10', JSON.stringify(completed));
  }, [completed]);

  const toggleLesson = (id) => {
    setCompleted(prev => prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]);
  };

  const toggleCategory = (category) => {
    setExpandedCategories(prev => 
      prev.includes(category) ? prev.filter(c => c !== category) : [...prev, category]
    );
  };

  const getSortableDate = (dateStr) => {
    const months = { "Şubat": 1, "Mart": 2 };
    const parts = dateStr.split(' ');
    const day = parseInt(parts[0]);
    const month = months[parts[1]] || 0;
    return new Date(2026, month, day).getTime();
  };

  const filteredLessons = useMemo(() => {
    return lessonData.filter(lesson => 
      lesson.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
      lesson.instructor.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);

  const sortedGroups = useMemo(() => {
    const groups = {};
    filteredLessons.forEach(lesson => {
      if (!groups[lesson.category]) groups[lesson.category] = [];
      groups[lesson.category].push(lesson);
    });
    
    Object.keys(groups).forEach(cat => {
      groups[cat].sort((a, b) => getSortableDate(a.date) - getSortableDate(b.date));
    });

    return Object.entries(groups).sort((a, b) => b[1].length - a[1].length);
  }, [filteredLessons]);

  useEffect(() => {
    if (searchQuery.length > 1) {
      setExpandedCategories(sortedGroups.map(([cat]) => cat));
    }
  }, [searchQuery, sortedGroups]);

  const totalProgress = Math.round((completed.length / lessonData.length) * 100);

  return (
    <div className="min-h-screen bg-[#F8FAFC] p-3 md:p-6 font-sans text-slate-900 flex flex-col">
      <div className="max-w-3xl mx-auto flex-grow w-full">
        
        {/* Header Section */}
        <header className="mb-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div className="space-y-0.5">
            <h1 className="text-lg md:text-xl font-black text-slate-900 tracking-tight uppercase">STUDY TRACKER</h1>
            <p className="text-[10px] text-slate-500 font-medium italic">Tıp Fakültesi Eğitim Portalı</p>
          </div>
          
          <div className="flex items-center gap-4 bg-white p-4 md:p-6 rounded-[1.5rem] shadow-lg border border-slate-100 min-w-[260px] w-full md:w-auto transform hover:scale-[1.01] transition-transform">
            <div className="flex flex-col text-right flex-grow">
              <span className="text-sm md:text-md font-black text-slate-900 uppercase tracking-tighter leading-none">Genel Başarı</span>
              <div className="mt-2 flex flex-col items-end">
                <span className="text-[10px] text-indigo-600 font-black bg-indigo-50 px-3 py-1 rounded-xl">
                  {completed.length} / {lessonData.length} DERS BİTTİ
                </span>
                <p className="text-[8px] text-slate-400 font-bold mt-1 uppercase tracking-widest">Kalan: {lessonData.length - completed.length}</p>
              </div>
            </div>
            <div className="relative w-16 h-16 md:w-20 md:h-20 flex items-center justify-center flex-shrink-0">
              <svg className="w-full h-full rotate-[-90deg]" viewBox="0 0 36 36">
                <circle cx="18" cy="18" r="16" fill="none" className="stroke-slate-100" strokeWidth="3" />
                <circle cx="18" cy="18" r="16" fill="none" className="stroke-indigo-600 transition-all duration-1000 ease-in-out" 
                        strokeWidth="3.2" strokeDasharray={`${totalProgress} 100`} strokeLinecap="round" />
              </svg>
              <span className="absolute text-md md:text-lg font-black text-slate-900">{totalProgress}%</span>
            </div>
          </div>
        </header>

        {/* Search */}
        <div className="mb-6 flex flex-col gap-3">
          <div className="relative group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-indigo-500 transition-colors" />
            <input 
              type="text" 
              placeholder="Ders veya eğitmen ara..."
              className="w-full pl-10 pr-6 py-2.5 rounded-xl bg-white border border-slate-200 focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500 outline-none transition-all shadow-sm font-bold text-[11px]"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="flex bg-white p-1 rounded-xl border border-slate-200 shadow-sm">
            <button onClick={() => setViewMode("topics")} className={`flex-1 py-1.5 rounded-lg text-[9px] font-black flex items-center justify-center gap-2 transition-all ${viewMode === 'topics' ? 'bg-slate-900 text-white shadow-md' : 'text-slate-500 hover:bg-slate-50'}`}><LayoutGrid className="w-3 h-3" /> BRANŞLAR</button>
            <button onClick={() => setViewMode("list")} className={`flex-1 py-1.5 rounded-lg text-[9px] font-black flex items-center justify-center gap-2 transition-all ${viewMode === 'list' ? 'bg-slate-900 text-white shadow-md' : 'text-slate-500 hover:bg-slate-50'}`}><List className="w-3 h-3" /> LİSTE</button>
          </div>
        </div>

        {/* Topics View - Vertical Single Column */}
        {viewMode === "topics" ? (
          <div className="flex flex-col gap-3">
            {sortedGroups.map(([category, lessons]) => {
              const config = categoryConfig[category] || { icon: TestTube2, color: "text-slate-600", bg: "bg-slate-50", border: "border-slate-100", accent: "bg-slate-600" };
              const Icon = config.icon;
              const catCompleted = lessons.filter(l => completed.includes(l.id)).length;
              const catProgress = Math.round((catCompleted / lessons.length) * 100);
              const isExpanded = expandedCategories.includes(category);

              return (
                <section key={category} className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden flex flex-col transition-all hover:border-indigo-100">
                  <div 
                    onClick={() => toggleCategory(category)}
                    className={`p-3.5 flex items-center justify-between cursor-pointer hover:opacity-95 transition-all ${config.bg} ${isExpanded ? `border-b ${config.border}` : ''}`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`p-1.5 rounded-lg bg-white shadow-sm ${config.color}`}><Icon className="w-4 h-4" /></div>
                      <div>
                        <h2 className="text-[10px] md:text-[11px] font-black text-slate-900 uppercase tracking-tight">{category}</h2>
                        <div className="flex items-center gap-1.5 mt-0.5">
                          <span className="text-[8px] font-black text-slate-500 bg-white/60 px-1.5 py-0.5 rounded border border-slate-100">
                            {catCompleted} / {lessons.length} DERS
                          </span>
                          <span className={`text-[8px] font-black ${config.color} uppercase tracking-tighter`}>%{catProgress} BAŞARI</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      {!isExpanded && (
                        <div className="hidden sm:block w-16 h-1 bg-slate-200 rounded-full overflow-hidden">
                          <div className={`h-full ${config.accent} transition-all duration-700`} style={{ width: `${catProgress}%` }} />
                        </div>
                      )}
                      <div className={`p-1 rounded-full bg-white shadow-sm border border-slate-100 transition-all duration-500 ${isExpanded ? 'rotate-180 bg-slate-900 text-white border-slate-900' : 'text-slate-400'}`}>
                        <ChevronDown className="w-3 h-3" />
                      </div>
                    </div>
                  </div>

                  <div className={`transition-all duration-300 ease-in-out overflow-hidden ${isExpanded ? 'max-h-[5000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                    <div className="h-1 w-full bg-slate-100 overflow-hidden">
                      <div className={`h-full ${config.accent} transition-all duration-700`} style={{ width: `${catProgress}%` }} />
                    </div>
                    
                    <div className="p-2 flex flex-col gap-1.5 bg-white">
                      {lessons.map(lesson => (
                        <div 
                          key={lesson.id} 
                          onClick={(e) => { e.stopPropagation(); toggleLesson(lesson.id); }} 
                          className={`group p-2.5 rounded-lg border transition-all cursor-pointer flex items-center gap-3 ${completed.includes(lesson.id) ? 'bg-emerald-50/20 border-emerald-50 opacity-70' : 'bg-white border-slate-50 hover:border-indigo-50'}`}
                        >
                          <div className={`transition-all duration-300 ${completed.includes(lesson.id) ? 'text-emerald-500 scale-105' : 'text-slate-200'}`}>
                            {completed.includes(lesson.id) ? <CheckCircle2 className="w-4 h-4 fill-emerald-500 text-white shadow-sm rounded-full" /> : <Circle className="w-4 h-4" />}
                          </div>
                          <div className="flex-grow min-w-0">
                            <h4 className={`text-[10px] font-black leading-tight tracking-tight ${completed.includes(lesson.id) ? 'text-slate-400 line-through font-medium' : 'text-slate-800'}`}>{lesson.title}</h4>
                            <div className="flex items-center gap-2 mt-1 text-[8px] text-slate-400 font-bold uppercase tracking-widest">
                              <span className="flex items-center gap-1 bg-slate-50 px-1 py-0.5 rounded whitespace-nowrap"><Clock className="w-2 h-2" /> {lesson.date}</span>
                              <span className="truncate opacity-80">| {lesson.instructor}</span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </section>
              );
            })}
          </div>
        ) : (
          <div className="bg-white rounded-xl border border-slate-200 shadow-lg overflow-hidden overflow-x-auto">
            <table className="w-full text-left border-collapse text-[9px]">
              <thead>
                <tr className="bg-slate-900 text-white font-black uppercase">
                  <th className="p-3">DURUM</th>
                  <th className="p-3">DERS</th>
                  <th className="p-3">BRANŞ</th>
                  <th className="p-3">TARİH</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 font-bold">
                {filteredLessons.map(lesson => (
                  <tr key={lesson.id} onClick={() => toggleLesson(lesson.id)} className={`cursor-pointer hover:bg-indigo-50/30 transition-all ${completed.includes(lesson.id) ? 'opacity-50' : ''}`}>
                    <td className="p-3">{completed.includes(lesson.id) ? <CheckCircle2 className="w-4 h-4 text-emerald-500" /> : <Circle className="w-4 h-4 text-slate-200" />}</td>
                    <td className="p-3"><div className="font-black text-slate-800 tracking-tight">{lesson.title}</div><div className="text-[8px] text-slate-400 uppercase mt-0.5">{lesson.instructor}</div></td>
                    <td className="p-3"><span className="px-1.5 py-0.5 rounded bg-slate-100 text-slate-600 uppercase tracking-tighter">{lesson.category}</span></td>
                    <td className="p-3 text-slate-400">{lesson.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {totalProgress === 100 && (
          <div className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-slate-900 text-white px-6 py-2 rounded-full shadow-2xl flex items-center gap-2 animate-bounce z-50 border-2 border-indigo-500">
            <Trophy className="w-4 h-4 text-yellow-400" />
            <span className="font-black uppercase tracking-wider text-[10px] italic">TEBRİKLER! BİTTİ.</span>
          </div>
        )}
      </div>

      <footer className="mt-8 mb-6 flex flex-col items-center justify-center gap-1.5">
        <div className="h-px w-12 bg-gradient-to-r from-transparent via-slate-200 to-transparent mb-1"></div>
        <div className="group flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-white border border-slate-100 shadow-sm transition-all hover:shadow-md hover:border-indigo-100">
          <span className="text-[7px] font-bold text-slate-400 uppercase tracking-[0.2em]">Developed by</span>
          <span className="text-[9px] font-black text-slate-700 tracking-tight group-hover:text-indigo-600 transition-colors uppercase">MATIN ERSHADIFAR</span>
          <Heart className="w-2 h-2 text-rose-400 fill-rose-400 animate-pulse group-hover:scale-110 transition-transform" />
        </div>
        <p className="text-[7px] font-bold text-slate-300 uppercase tracking-widest">Medical Study System &copy; 2026</p>
      </footer>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
        section { animation: fadeIn 0.4s ease-out forwards; }
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: #F8FAFC; }
        ::-webkit-scrollbar-thumb { background: #CBD5E1; border-radius: 20px; }
        body { overflow-y: scroll; font-size: 12px; }
      `}} />
    </div>
  );
};

export default App;