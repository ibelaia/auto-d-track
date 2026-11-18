'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Wrench, Search, Car, PhoneCall, ShieldCheck, Menu } from 'lucide-react';

export default function PelacakanPage() {
  const router = useRouter();
  const [platNomor, setPlatNomor] = useState('W 1234 AB');

  // Fungsi ketika tombol lacak ditekan
  const handleLacak = (e: React.FormEvent) => {
    e.preventDefault();
    if (!platNomor.trim()) return;
    // Mengarahkan ke halaman detail dengan membawa parameter plat nomor
    router.push(`/lacak?plat=${encodeURIComponent(platNomor)}`);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col justify-between">
      {/* Header / Navbar Atas */}
      <header className="bg-white border-b border-slate-200 px-4 sm:px-6 py-3 sm:py-4 flex flex-col sm:flex-row items-center justify-between gap-3 shadow-sm">
        <div className="flex items-center justify-between w-full sm:w-auto gap-3">
          <div className="flex items-center gap-3">
            <div className="bg-blue-600 p-2 rounded-lg text-white">
              <Wrench className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <div>
              <h1 className="font-bold text-slate-800 text-base sm:text-lg leading-tight">AUTO-D Track</h1>
              <p className="text-[10px] sm:text-xs text-slate-500 tracking-wide">PORTAL PELACAKAN PROGRES SERVIS • WARU, SIDOARJO</p>
            </div>
          </div>
          <button className="sm:hidden p-2 text-slate-600 hover:bg-slate-100 rounded-lg">
            <Menu className="w-6 h-6" />
          </button>
        </div>

        <div className="hidden sm:flex items-center gap-4 lg:gap-6 text-sm font-medium text-slate-600">
          <span className="cursor-pointer hover:text-blue-600 transition">Cari Unit Lain</span>
          <span className="cursor-pointer hover:text-blue-600 transition">Status Antrean</span>
          <span className="cursor-pointer hover:text-blue-600 transition">Informasi Bengkel</span>
          <Link 
            href="/login" 
            className="bg-slate-900 text-white px-4 py-2 rounded-lg hover:bg-slate-800 transition shadow"
          >
            Login Staf & Teknisi
          </Link>
        </div>
      </header>

      {/* Konten Utama (Form Pencarian Plat Nomor) */}
      <main className="flex-1 flex items-center justify-center px-4 py-6 sm:py-12">
        <div className="bg-white w-full max-w-xl rounded-2xl shadow-xl border border-slate-100 p-6 sm:p-10 text-center">
          
          <div className="inline-flex bg-blue-50 text-blue-600 p-3 sm:p-4 rounded-full mb-3 sm:mb-4">
            <Car className="w-8 h-8 sm:w-10 sm:h-10" />
          </div>

          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2">Lacak Progres Perbaikan Kendaraan Anda</h2>
          <p className="text-xs sm:text-sm text-slate-500 mb-6 sm:mb-8 px-2">
            Masukkan nomor plat kendaraan untuk memantau tahapan servis secara real-time.
          </p>

          {/* Form Interaktif */}
          <form onSubmit={handleLacak} className="space-y-4 text-left">
            <div>
              <label className="block text-[11px] sm:text-xs font-bold text-slate-600 tracking-wider mb-2 uppercase">
                Nomor Plat Kendaraan
              </label>
              <div className="relative flex items-center">
                <span className="absolute left-4 text-slate-400">
                  <Car className="w-5 h-5" />
                </span>
                <input 
                  type="text" 
                  value={platNomor}
                  onChange={(e) => setPlatNomor(e.target.value)}
                  placeholder="Contoh: W 1234 AB" 
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl py-3 sm:py-3.5 pl-12 pr-10 text-slate-800 font-medium text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition"
                  required
                />
                <button 
                  type="button" 
                  onClick={() => setPlatNomor('')}
                  className="absolute right-3 text-slate-400 hover:text-slate-600 text-sm font-bold bg-slate-200 hover:bg-slate-300 w-6 h-6 rounded-full flex items-center justify-center"
                >
                  ×
                </button>
              </div>
            </div>

            {/* Tombol Aksi Utama */}
            <button 
              type="submit"
              className="w-full bg-slate-900 text-white font-semibold py-3.5 sm:py-4 rounded-xl hover:bg-slate-800 transition shadow-lg flex items-center justify-center gap-2 text-sm sm:text-base cursor-pointer"
            >
              <Search className="w-5 h-5" />
              Lacak Progres Mobil
            </button>
          </form>

          <p className="text-[11px] sm:text-xs text-slate-400 mt-4 flex items-center justify-center gap-1">
            <ShieldCheck className="w-4 h-4 text-emerald-500 shrink-0" />
            Pelanggan tidak perlu login atau registrasi akun.
          </p>

          {/* Contoh Plat Cepat (Quick Chips Interaktif) */}
          <div className="mt-6 sm:mt-8 pt-5 sm:pt-6 border-t border-slate-100">
            <p className="text-[11px] sm:text-xs text-slate-400 mb-3">Contoh nomor plat (klik untuk pilih):</p>
            <div className="flex flex-wrap justify-center gap-2">
              {['W 1234 AB', 'L 5593 BC', 'N 9901 JI'].map((plat) => (
                <button
                  key={plat}
                  type="button"
                  onClick={() => setPlatNomor(plat)}
                  className="bg-slate-100 hover:bg-blue-50 hover:text-blue-600 text-slate-600 text-xs px-3 py-1.5 rounded-lg border border-slate-200 cursor-pointer transition font-mono"
                >
                  {plat}
                </button>
              ))}
            </div>
          </div>

        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 py-5 px-4 sm:px-6 text-center text-[11px] sm:text-xs text-slate-500 flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="flex flex-col sm:flex-row items-center gap-1 sm:gap-2 text-slate-600">
          <span>Butuh bantuan langsung? Hubungi Service Advisor:</span>
          <a href="https://wa.me/6281234567890" target="_blank" rel="noreferrer" className="font-bold text-blue-600 hover:underline flex items-center gap-1">
            <PhoneCall className="w-3.5 h-3.5" /> 0812-3456-7890
          </a>
        </div>
        <p className="text-[10px] sm:text-xs text-slate-400">© 2026 Bengkel Cat Mobil & Body Repair AUTO-D Waru, Sidoarjo.</p>
      </footer>
    </div>
  );
}