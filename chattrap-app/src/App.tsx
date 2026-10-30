import { useState } from 'react';
import { ShieldAlert, Search, Upload, Link as LinkIcon, CheckCircle2, AlertTriangle, ArrowRight, RefreshCw, FileText, Lock, Sun, ArrowUpRight } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<'home' | 'trapscan' | 'traplink' | 'result'>('home');
  const [loading, setLoading] = useState(false);
  const [scanType, setScanType] = useState<'image' | 'url'>('image');
  
  const [inputVal, setInputVal] = useState('');
  const [resultData, setResultData] = useState<any>(null);

  const handleSimulateScan = (type: 'image' | 'url') => {
    setLoading(true);
    setScanType(type);
    setTimeout(() => {
      setLoading(false);
      setActiveTab('result');
      setResultData({
        riskLevel: 'Tinggi (High Risk)',
        summary: type === 'image' 
          ? 'Bukti percakapan terindikasi pola social engineering dan permintaan transfer dana mencurigakan.'
          : 'URL terdeteksi menyerupai domain resmi perbankan palsu (Phishing Indicator).',
        redFlags: [
          type === 'image' ? 'Permintaan transfer dana mendesak ke rekening pribadi.' : 'Domain menggunakan karakter tiruan (typosquatting).',
          'Menggunakan iming-iming hadiah atau ancaman pemblokiran akun.',
          'Tidak memiliki sertifikat SSL yang valid atau terdaftar di database ancaman.'
        ],
        actions: [
          'Jangan klik tautan atau lakukan transfer dana apa pun.',
          'Blokir nomor pengirim atau laporkan akun tersebut ke platform terkait.',
          'Gunakan fitur pengaduan resmi (misal: cekrekening.id atau aduankonten.id).'
        ]
      });
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col font-sans selection:bg-indigo-500 selection:text-white">
      
      {/* NAVBAR */}
      <header className="border-b border-slate-200 bg-white/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          
          {/* Logo & Brand */}
          <div className="flex items-center space-x-3 cursor-pointer group" onClick={() => setActiveTab('home')}>
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center shadow-md shadow-indigo-500/20 group-hover:scale-105 transition">
              <ShieldAlert className="w-5 h-5 text-white" />
            </div>
            <div>
              <span className="font-bold text-xl tracking-tight text-slate-900">ChatTrap</span>
              <span className="text-[11px] block text-slate-500 font-medium">Scan Before You Trust</span>
            </div>
          </div>

          {/* Nav Links */}
          <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-slate-600">
            <button onClick={() => setActiveTab('home')} className="hover:text-indigo-600 transition">Beranda</button>
            <button onClick={() => setActiveTab('home')} className="hover:text-indigo-600 transition">Tentang</button>
            <button onClick={() => setActiveTab('home')} className="hover:text-indigo-600 transition">Fitur</button>
            <button onClick={() => setActiveTab('home')} className="hover:text-indigo-600 transition">Edukasi</button>
            <button onClick={() => setActiveTab('home')} className="hover:text-indigo-600 transition">FAQ</button>
          </nav>

          {/* Right Action */}
          <div className="flex items-center space-x-4">
            <button 
              onClick={() => setActiveTab('trapscan')}
              className="px-5 py-2.5 rounded-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-sm transition shadow-lg shadow-indigo-500/25 flex items-center space-x-2">
              <span>Mulai Sekarang</span>
            </button>
            <button className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-slate-100 transition">
              <Sun className="w-4 h-4" />
            </button>
          </div>

        </div>
      </header>

      {/* MAIN CONTAINER */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-6 py-8 flex flex-col justify-center">
        
        {/* HERO SECTION */}
        {activeTab === 'home' && (
          <div className="space-y-16 animate-fadeIn">
            
            {/* Top Banner & Hero Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center pt-6">
              
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-indigo-50 border border-indigo-200/80 text-indigo-700 text-xs font-bold tracking-wide">
                  <span>MIT-WEEK 2026 — GUARDIANS OF THE DIGITAL SPACE</span>
                </div>
                
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 leading-[1.1]">
                  Lindungi Ruang Digitalmu dari <span className="text-indigo-600 underline decoration-indigo-300 decoration-wavy decoration-2">Penipuan.</span>
                </h1>
                
                <p className="text-slate-600 text-base sm:text-lg max-w-xl leading-relaxed">
                  Platform cerdas berbasis web untuk menganalisis screenshot percakapan, memeriksa tautan mencurigakan, dan mengenali indikasi penipuan secara instan, aman, dan transparan.
                </p>

                {/* Trust Badges */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-slate-200">
                  <div className="flex items-center space-x-2 text-xs font-semibold text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-indigo-600" />
                    <span>Cepat & Akurat</span>
                  </div>
                  <div className="flex items-center space-x-2 text-xs font-semibold text-slate-700">
                    <Lock className="w-4 h-4 text-indigo-600" />
                    <span>Aman & Privasi Terjaga</span>
                  </div>
                  <div className="flex items-center space-x-2 text-xs font-semibold text-slate-700">
                    <ShieldAlert className="w-4 h-4 text-indigo-600" />
                    <span>Mudah Digunakan</span>
                  </div>
                  <div className="flex items-center space-x-2 text-xs font-semibold text-slate-700">
                    <FileText className="w-4 h-4 text-indigo-600" />
                    <span>Dirancang untuk Semua</span>
                  </div>
                </div>
              </div>

              {/* Hero Graphic Card */}
              <div className="lg:col-span-5">
                <div className="relative p-6 rounded-3xl bg-gradient-to-br from-indigo-500/10 via-purple-500/5 to-blue-500/10 border border-indigo-100 shadow-2xl backdrop-blur-sm">
                  <div className="bg-slate-900 rounded-2xl p-4 shadow-xl border border-slate-800 space-y-3">
                    <div className="flex items-center justify-between pb-2 border-b border-slate-800">
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                      </div>
                      <span className="text-[10px] text-slate-400 font-mono">ChatTrap Security Shield</span>
                    </div>
                    <div className="p-3 bg-slate-800/60 rounded-xl border border-slate-700 text-xs text-slate-200 space-y-1">
                      <p className="font-semibold text-indigo-400 flex items-center gap-1">
                        <AlertTriangle className="w-3.5 h-3.5 text-yellow-400" /> Scam Alert Detected
                      </p>
                      <p className="text-slate-400">"Selamat! Anda memenangkan hadiah 🎁 Klik link ini sekarang!"</p>
                    </div>
                    <div className="p-3 bg-indigo-950/40 rounded-xl border border-indigo-900/50 text-xs text-indigo-300 flex items-center justify-between">
                      <span>https://hadiah-gratis-co/...</span>
                      <span className="px-2 py-0.5 rounded bg-red-500/20 text-red-400 text-[10px] font-bold">Phishing</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>

            {/* Quick Action Boxes */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
              <div 
                onClick={() => setActiveTab('trapscan')}
                className="p-6 rounded-3xl bg-white border border-slate-200 hover:border-indigo-400 shadow-sm hover:shadow-md transition cursor-pointer flex items-center justify-between group">
                <div className="space-y-2">
                  <div className="w-12 h-12 rounded-2xl bg-indigo-50 flex items-center justify-center text-indigo-600">
                    <Upload className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">Mulai TrapScan (Screenshot)</h3>
                  <p className="text-sm text-slate-500">Unggah screenshot chat, postingan, atau tawaran mencurigakan.</p>
                </div>
                <div className="w-12 h-12 rounded-full bg-indigo-600 text-white flex items-center justify-center group-hover:scale-110 transition shadow-md shadow-indigo-500/30">
                  <ArrowRight className="w-5 h-5" />
                </div>
              </div>

              <div 
                onClick={() => setActiveTab('traplink')}
                className="p-6 rounded-3xl bg-white border border-slate-200 hover:border-indigo-400 shadow-sm hover:shadow-md transition cursor-pointer flex items-center justify-between group">
                <div className="space-y-2">
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600">
                    <LinkIcon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">Mulai TrapLink (URL Check)</h3>
                  <p className="text-sm text-slate-500">Masukkan tautan untuk memeriksa reputasi dan melihat isi halaman secara aman.</p>
                </div>
                <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center group-hover:scale-110 transition shadow-md shadow-blue-500/30">
                  <ArrowRight className="w-5 h-5" />
                </div>
              </div>
            </div>

            {/* Core Features Section */}
            <div className="space-y-8 pt-12">
              <div className="text-center space-y-2">
                <span className="text-xs font-bold uppercase tracking-widest text-indigo-600">— FITUR UTAMA CHATTRAP —</span>
                <h2 className="text-3xl font-extrabold text-slate-900">Solusi Lengkap untuk Keamanan Digitalmu</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                
                {/* Feature 1 */}
                <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-4">
                  <div className="w-14 h-14 rounded-2xl bg-indigo-50 flex items-center justify-center text-indigo-600">
                    <FileText className="w-7 h-7" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">TrapScan OCR</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">Ekstraksi teks otomatis dari gambar bukti chat untuk mendeteksi pola social engineering dan scam.</p>
                  <ul className="space-y-2 pt-2 border-t border-slate-100 text-xs font-medium text-slate-700">
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> Baca teks dari screenshot</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> Deteksi kalimat mencurigakan</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> Penjelasan tanda bahaya</li>
                  </ul>
                </div>

                {/* Feature 2 */}
                <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-4">
                  <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600">
                    <Search className="w-7 h-7" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">TrapLink & SafeView</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">Validasi URL terhadap indikasi phishing serta tinjau halaman secara aman tanpa risiko eksekusi langsung.</p>
                  <ul className="space-y-2 pt-2 border-t border-slate-100 text-xs font-medium text-slate-700">
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> Cek reputasi tautan</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> Lihat pratinjau halaman (SafeView)</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> Identifikasi pengalihan URL</li>
                  </ul>
                </div>

                {/* Feature 3 */}
                <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-4">
                  <div className="w-14 h-14 rounded-2xl bg-emerald-50 flex items-center justify-center text-emerald-600">
                    <ShieldAlert className="w-7 h-7" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">Guardian Action</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">Dapatkan rekomendasi langkah pengamanan akun, checklist verifikasi, serta panduan pelaporan resmi.</p>
                  <ul className="space-y-2 pt-2 border-t border-slate-100 text-xs font-medium text-slate-700">
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> Langkah penanganan sesuai kasus</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> Tips menjaga keamanan akun</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> Panduan pelaporan resmi</li>
                  </ul>
                </div>

              </div>
            </div>

          </div>
        )}

        {/* VIEW: TRAPSCAN */}
        {activeTab === 'trapscan' && (
          <div className="max-w-xl mx-auto w-full py-8 space-y-6 bg-white p-8 rounded-3xl border border-slate-200 shadow-sm animate-fadeIn">
            <div>
              <h2 className="text-2xl font-bold text-slate-900">TrapScan — Analisis Screenshot</h2>
              <p className="text-slate-500 text-sm">Unggah gambar bukti percakapan untuk mendeteksi potensi penipuan.</p>
            </div>
            
            <div className="border-2 border-dashed border-slate-300 hover:border-indigo-500 transition rounded-2xl p-8 text-center bg-slate-50 cursor-pointer flex flex-col items-center justify-center">
              <Upload className="w-12 h-12 text-indigo-600 mb-3" />
              <p className="font-medium text-slate-700">Seret file screenshot ke sini atau <span className="text-indigo-600">telusuri</span></p>
              <p className="text-xs text-slate-400 mt-1">Mendukung format PNG, JPG, JPEG (Maks. 5MB)</p>
            </div>

            <button 
              disabled={loading}
              onClick={() => handleSimulateScan('image')}
              className="w-full py-4 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold transition flex items-center justify-center space-x-2 shadow-lg shadow-indigo-500/25">
              {loading ? <RefreshCw className="w-5 h-5 animate-spin" /> : <><span>Analisis Screenshot Sekarang</span><ArrowRight className="w-5 h-5" /></>}
            </button>
            <button onClick={() => setActiveTab('home')} className="w-full text-center text-sm text-slate-500 hover:text-indigo-600">← Kembali ke Beranda</button>
          </div>
        )}

        {/* VIEW: TRAPLINK */}
        {activeTab === 'traplink' && (
          <div className="max-w-xl mx-auto w-full py-8 space-y-6 bg-white p-8 rounded-3xl border border-slate-200 shadow-sm animate-fadeIn">
            <div>
              <h2 className="text-2xl font-bold text-slate-900">TrapLink — Pemeriksaan Tautan</h2>
              <p className="text-slate-500 text-sm">Masukkan URL situs web untuk mendeteksi indikasi phishing atau penipuan.</p>
            </div>
            
            <div className="space-y-3">
              <label className="text-sm font-medium text-slate-700">Alamat URL Web</label>
              <input 
                type="text" 
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                placeholder="https://contoh-situs-mencurigakan.com" 
                className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-slate-800 focus:outline-none focus:border-indigo-600 shadow-inner"
              />
            </div>

            <button 
              disabled={loading}
              onClick={() => handleSimulateScan('url')}
              className="w-full py-4 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold transition flex items-center justify-center space-x-2 shadow-lg shadow-indigo-500/25">
              {loading ? <RefreshCw className="w-5 h-5 animate-spin" /> : <><span>Periksa Keamanan URL</span><ArrowRight className="w-5 h-5" /></>}
            </button>
            <button onClick={() => setActiveTab('home')} className="w-full text-center text-sm text-slate-500 hover:text-indigo-600">← Kembali ke Beranda</button>
          </div>
        )}

        {/* VIEW: RESULT & GUARDIAN ACTION */}
        {activeTab === 'result' && resultData && (
          <div className="max-w-2xl mx-auto w-full py-6 space-y-6 bg-white p-8 rounded-3xl border border-slate-200 shadow-sm animate-fadeIn">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100">
              <div>
                <span className="text-xs text-slate-400 uppercase tracking-wider font-bold">Hasil Pemeriksaan ({scanType.toUpperCase()})</span>
                <h2 className="text-2xl font-black text-red-600 flex items-center gap-2 mt-1">
                  <AlertTriangle className="w-6 h-6" /> {resultData.riskLevel}
                </h2>
              </div>
              <button 
                onClick={() => setActiveTab('home')}
                className="text-xs px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold transition">
                Pemeriksaan Baru
              </button>
            </div>

            {/* Red Flags Section */}
            <div className="p-5 rounded-2xl bg-red-50 border border-red-200 space-y-3">
              <h3 className="font-bold text-red-700 flex items-center gap-2 text-sm">
                <ShieldAlert className="w-5 h-5" /> Red Flag Highlight
              </h3>
              <ul className="space-y-2">
                {resultData.redFlags.map((flag: string, idx: number) => (
                  <li key={idx} className="text-sm text-slate-700 flex items-start gap-2">
                    <span className="text-red-600 font-bold">•</span> {flag}
                  </li>
                ))}
              </ul>
            </div>

            {/* Guardian Action Section */}
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
              <h3 className="font-bold text-indigo-700 flex items-center gap-2 text-sm">
                <CheckCircle2 className="w-5 h-5" /> Guardian Action (Panduan Tindakan)
              </h3>
              <ol className="space-y-2 list-decimal list-inside text-sm text-slate-700">
                {resultData.actions.map((act: string, idx: number) => (
                  <li key={idx} className="py-1">{act}</li>
                ))}
              </ol>
            </div>
          </div>
        )}

      </main>

      {/* FOOTER */}
      <footer className="border-t border-slate-200 py-8 text-center text-xs text-slate-500 bg-white">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p><strong>ChatTrap — Scan Before You Trust.</strong> MIT-Week 2026 Guardians of the Digital Space.</p>
          <div className="flex items-center space-x-6">
            <span className="hover:text-indigo-600 cursor-pointer">Kebijakan Privasi</span>
            <span>|</span>
            <span className="hover:text-indigo-600 cursor-pointer">Syarat Penggunaan</span>
            <span>|</span>
            <span className="hover:text-indigo-600 cursor-pointer">Kontak</span>
          </div>
        </div>
      </footer>
    </div>
  );
}