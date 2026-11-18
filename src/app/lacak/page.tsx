'use client';
import React, { useState, Suspense } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { Wrench, Clock, AlertTriangle, ChevronLeft, CheckCircle2, XCircle, Phone, ShieldCheck, Download, MapPin, Star, QrCode, Image as ImageIcon } from 'lucide-react';

function DetailPelacakanContent() {
  const searchParams = useSearchParams();
  const plat = searchParams.get('plat') || 'W 1234 AB';

  // 1. STATE UTAMA: Default diset 'proses' (tengah dikerjakan teknisi & ada temuan kerusakan)
  const [statusUnit, setStatusUnit] = useState<'proses' | 'selesai'>('proses');
  const [statusPersetujuan, setStatusPersetujuan] = useState<'pending' | 'disetujui' | 'ditolak'>('pending');

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col justify-between">
      {/* Header Atas */}
      <header className="bg-white border-b border-slate-200 px-4 sm:px-6 py-3.5 flex items-center justify-between shadow-sm sticky top-0 z-50">
        <div className="flex items-center gap-2 sm:gap-3">
          <Link href="/" className="bg-slate-100 hover:bg-slate-200 p-2 rounded-lg text-slate-700 transition text-xs font-medium">
            ← Kembali ke Cari Unit
          </Link>
          <div>
            <h1 className="font-bold text-slate-800 text-xs sm:text-base leading-tight">AUTO-D TRACK</h1>
            <p className="text-[9px] sm:text-xs text-slate-500">PORTAL PELACAKAN PROGRES SERVIS • WARU, SIDOARJO</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          {/* Tombol Simulasi untuk Demo Perubahan Status dari Teknisi Lapangan */}
          <div className="hidden md:flex items-center gap-2 bg-slate-100 px-3 py-1.5 rounded-xl border border-slate-200">
            <span className="text-[10px] text-slate-500 font-semibold">Simulasi Status Teknisi:</span>
            <button 
              onClick={() => setStatusUnit('proses')}
              className={`text-[10px] px-2 py-1 rounded-lg font-bold transition ${statusUnit === 'proses' ? 'bg-amber-500 text-white shadow' : 'text-slate-600 hover:bg-slate-200'}`}
            >
              Dalam Pengerjaan
            </button>
            <button 
              onClick={() => setStatusUnit('selesai')}
              className={`text-[10px] px-2 py-1 rounded-lg font-bold transition ${statusUnit === 'selesai' ? 'bg-emerald-600 text-white shadow' : 'text-slate-600 hover:bg-slate-200'}`}
            >
              Siap Ambil (Tahap 6)
            </button>
          </div>

          <a 
            href="https://wa.me/6281234567890" 
            target="_blank" 
            rel="noreferrer"
            className="hidden sm:flex items-center gap-1.5 bg-emerald-600 hover:bg-emerald-700 text-white px-3.5 py-1.5 rounded-lg text-xs font-semibold shadow transition"
          >
            <Phone className="w-3.5 h-3.5" /> WhatsApp Advisor
          </a>
        </div>
      </header>

      {/* Konten Utama */}
      <main className="flex-1 max-w-6xl w-full mx-auto px-3 sm:px-4 py-4 sm:py-6 space-y-4 sm:space-y-6">
        
        {/* ========================================================= */}
        {/* KONDISI 1: JIKA UNIT MASIH DALAM PROSES (DEFAULT SAAT DICARI) */}
        {/* ========================================================= */}
        {statusUnit === 'proses' && (
          <>
            {/* Card Informasi Kendaraan */}
            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-4 sm:p-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 border-b border-slate-100 pb-4 sm:pb-5">
                <div>
                  <div className="flex items-center gap-2.5 mb-1">
                    <span className="bg-slate-900 text-white font-mono text-xs sm:text-sm px-3 py-1 rounded-lg font-bold">
                      {plat}
                    </span>
                    <h2 className="text-base sm:text-xl font-bold text-slate-900">Toyota Avanza Veloz 1.5 AT</h2>
                  </div>
                  <p className="text-[11px] sm:text-xs text-slate-500">Paket: Cat Clean Panel, Pintu, & Bumper Depan</p>
                </div>
                <div className="bg-slate-50 p-3 rounded-xl border border-slate-200 text-xs space-y-1 self-stretch sm:self-auto">
                  <p className="text-slate-500 text-[10px] sm:text-xs">Target Selesai Estimasi:</p>
                  <p className="font-bold text-slate-800 flex items-center gap-1.5 text-xs sm:text-sm">
                    <Clock className="w-4 h-4 text-blue-600 shrink-0" /> 15 Okt 2026 • 16:00 WIB
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pt-3 sm:pt-4 text-xs text-slate-600 gap-2">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 shrink-0"></span>
                  <span>Service Advisor: <strong className="text-slate-800">Budi Santoso</strong></span>
                </div>
                <a href="https://wa.me/6281234567890" target="_blank" rel="noreferrer" className="text-blue-600 font-semibold hover:underline flex items-center gap-1">
                  <Phone className="w-3.5 h-3.5" /> 0812-3456-7890
                </a>
              </div>
            </div>

            {/* Alur Tahapan Pengerjaan Unit (Responsif: Grid 2 kolom di HP, 3 kolom di Tablet, 6 kolom di Desktop) */}
            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-4 sm:p-6">
              <h3 className="font-bold text-slate-900 text-sm sm:text-base mb-4 sm:mb-6">Alur Tahapan Pengerjaan Unit</h3>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
                <div className="bg-blue-50/70 border border-blue-200 p-3 rounded-xl text-center space-y-1">
                  <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto text-[10px] font-bold">✓</div>
                  <h4 className="text-[11px] font-bold text-slate-800 leading-tight">1. Penerimaan & SPK</h4>
                  <p className="text-[9px] text-slate-500">Selesai</p>
                </div>

                <div className="bg-blue-50/70 border border-blue-200 p-3 rounded-xl text-center space-y-1">
                  <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto text-[10px] font-bold">✓</div>
                  <h4 className="text-[11px] font-bold text-slate-800 leading-tight">2. Ketok & Tarik Bodi</h4>
                  <p className="text-[9px] text-slate-500">Selesai</p>
                </div>

                <div className="bg-blue-50/70 border border-blue-200 p-3 rounded-xl text-center space-y-1">
                  <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto text-[10px] font-bold">✓</div>
                  <h4 className="text-[11px] font-bold text-slate-800 leading-tight">3. Dempul & Epoxy</h4>
                  <p className="text-[9px] text-slate-500">Selesai</p>
                </div>

                <div className="bg-amber-50 border-2 border-amber-400 p-3 rounded-xl text-center space-y-1 shadow-sm">
                  <div className="w-6 h-6 bg-amber-500 text-white rounded-full flex items-center justify-center mx-auto text-[10px] font-bold animate-pulse">4</div>
                  <h4 className="text-[11px] font-bold text-slate-900 leading-tight">4. Pengecatan & Clear</h4>
                  <p className="text-[9px] text-amber-700 font-semibold">Dikerjakan</p>
                </div>

                <div className="bg-slate-50 border border-slate-200 p-3 rounded-xl text-center space-y-1 opacity-60">
                  <div className="w-6 h-6 bg-slate-200 text-slate-600 rounded-full flex items-center justify-center mx-auto text-[10px] font-bold">5</div>
                  <h4 className="text-[11px] font-bold text-slate-600 leading-tight">5. Poles & Finishing</h4>
                  <p className="text-[9px] text-slate-400">Menunggu</p>
                </div>

                <div className="bg-slate-50 border border-slate-200 p-3 rounded-xl text-center space-y-1 opacity-60">
                  <div className="w-6 h-6 bg-slate-200 text-slate-600 rounded-full flex items-center justify-center mx-auto text-[10px] font-bold">6</div>
                  <h4 className="text-[11px] font-bold text-slate-600 leading-tight">6. QC & Siap Ambil</h4>
                  <p className="text-[9px] text-slate-400">Menunggu</p>
                </div>
              </div>
            </div>

            {/* Card Temuan Teknisi & Persetujuan Perbaikan Tambahan */}
            <div className={`rounded-2xl shadow-sm border p-4 sm:p-6 space-y-4 sm:space-y-5 transition-all duration-300 ${
              statusPersetujuan === 'disetujui' ? 'bg-blue-50/30 border-blue-200' : statusPersetujuan === 'ditolak' ? 'bg-slate-100 border-slate-300' : 'bg-white border-slate-100'
            }`}>
              
              {statusPersetujuan === 'disetujui' && (
                <div className="flex items-center justify-between gap-2 text-blue-900 bg-blue-100 p-3.5 rounded-xl border border-blue-300 text-xs font-bold">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-blue-700 shrink-0" />
                    <span>PERBAIKAN TAMBAHAN TELAH DISETUJUI PELANGGAN (ACC)</span>
                  </div>
                  <span className="text-[10px] font-normal text-blue-700 hidden sm:inline">Konfirmasi digital berhasil dikirim</span>
                </div>
              )}

              {statusPersetujuan === 'ditolak' && (
                <div className="flex items-center justify-between gap-2 text-slate-800 bg-slate-200 p-3.5 rounded-xl border border-slate-300 text-xs font-bold">
                  <div className="flex items-center gap-2">
                    <XCircle className="w-5 h-5 text-slate-600 shrink-0" />
                    <span>PERBAIKAN TAMBAHAN DITOLAK (DILANJUTKAN SESUAI SPK AWAL)</span>
                  </div>
                  <span className="text-[10px] font-normal text-slate-600 hidden sm:inline">Keputusan dicatat oleh sistem</span>
                </div>
              )}

              {statusPersetujuan === 'pending' && (
                <div className="flex items-center gap-2 text-amber-800 bg-amber-50 p-3 rounded-xl border border-amber-200 text-xs font-semibold">
                  <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0" />
                  <span>Persetujuan Perbaikan Tambahan Dibutuhkan (Action Required)</span>
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 items-center">
                <div className="bg-slate-50 rounded-xl p-3 border border-slate-200 text-center space-y-2">
                  <div className="h-32 sm:h-36 bg-slate-200 rounded-lg flex flex-col items-center justify-center text-xs text-slate-500 font-mono gap-1">
                    <ImageIcon className="w-6 h-6 text-slate-400" />
                    <span>[Foto Kerusakan Temuan]</span>
                  </div>
                  <p className="text-xs font-bold text-slate-800">Bracket Pengunci Kanan Patah & Retak</p>
                </div>

                <div className="md:col-span-2 space-y-2 text-xs sm:text-sm text-slate-700 leading-relaxed">
                  <h4 className="font-bold text-slate-900 text-sm sm:text-base">Teknisi menemukan bracket bumper depan patah saat pembongkaran bodi</h4>
                  <p className="text-slate-600 text-xs sm:text-sm">
                    {statusPersetujuan === 'ditolak' 
                      ? "Pelanggan memilih untuk tidak mengambil perbaikan bracket bumper. Pengerjaan bengkel tetap dilanjutkan fokus pada perbaikan bodi dan pengecatan oven sesuai perjanjian SPK awal tanpa tambahan biaya."
                      : "Bracket pengunci sisi kanan telah retak dan kehilangan elastisitas penahan. Diperlukan penggantian klip orisinil dan pengelasan plastik presisi agar bumper terpasang rapat dan tidak renggang pasca proses pengerjaan oven."
                    }
                  </p>
                </div>
              </div>

              {/* Estimasi Harga & Tombol Aksi */}
              <div className="pt-4 border-t border-slate-200/60 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
                <div className="space-y-0.5">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                    {statusPersetujuan === 'ditolak' ? 'Biaya Tambahan' : 'Estimasi Tambahan Komponen'}
                  </span>
                  <div className="flex items-baseline gap-2 flex-wrap">
                    <span className="text-xl sm:text-2xl font-extrabold text-slate-900">
                      {statusPersetujuan === 'ditolak' ? 'Rp 0' : 'Rp 150.000'}
                    </span>
                    <span className="text-[11px] sm:text-xs font-medium text-slate-600">
                      {statusPersetujuan === 'ditolak' ? '(Sesuai SPK Awal)' : '(Klip Orisinil + Jasa Pasang)'}
                    </span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-stretch gap-2 w-full sm:w-auto">
                  {statusPersetujuan === 'pending' ? (
                    <>
                      <button 
                        onClick={() => setStatusPersetujuan('ditolak')}
                        className="px-4 py-2.5 bg-white border border-slate-300 hover:bg-slate-100 text-slate-700 text-xs font-semibold rounded-xl transition shadow-sm text-center cursor-pointer"
                      >
                        Tolak (Sesuai SPK Awal)
                      </button>
                      <button 
                        onClick={() => setStatusPersetujuan('disetujui')}
                        className="px-4 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold rounded-xl shadow transition text-center cursor-pointer"
                      >
                        Setujui Perbaikan (ADD)
                      </button>
                    </>
                  ) : (
                    <div className="flex flex-col sm:flex-row items-center gap-2 w-full sm:w-auto">
                      <div className={`w-full sm:w-auto text-xs font-bold px-4 py-2.5 rounded-xl flex items-center justify-center gap-2 ${
                        statusPersetujuan === 'disetujui' ? 'bg-blue-600 text-white shadow' : 'bg-slate-800 text-white shadow'
                      }`}>
                        {statusPersetujuan === 'disetujui' ? <CheckCircle2 className="w-4 h-4 shrink-0" /> : <XCircle className="w-4 h-4 shrink-0" />}
                        <span>{statusPersetujuan === 'disetujui' ? 'Perbaikan Disetujui (ACC)' : 'Dilanjutkan Sesuai SPK Awal'}</span>
                      </div>
                      
                      {statusPersetujuan === 'disetujui' && (
                        <button 
                          onClick={() => alert('Mengunduh lembar persetujuan digital PDF...')}
                          className="w-full sm:w-auto px-3.5 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold rounded-xl flex items-center justify-center gap-1.5 transition"
                        >
                          <Download className="w-3.5 h-3.5" /> Unduh PDF
                        </button>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Dokumentasi Pekerjaan Terkini */}
            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-4 sm:p-6 space-y-4">
              <h4 className="font-bold text-slate-900 text-sm sm:text-base">Dokumentasi Pekerjaan Terkini (Oleh Teknisi Lapangan)</h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
                <div className="bg-slate-50 rounded-xl p-3 border border-slate-200 space-y-2">
                  <div className="h-28 sm:h-32 bg-slate-200 rounded-lg flex items-center justify-center text-xs text-slate-500 font-mono">[Foto 1]</div>
                  <p className="text-xs font-bold text-slate-800">Hasil polesan dempul halus</p>
                </div>
                <div className="bg-slate-50 rounded-xl p-3 border border-slate-200 space-y-2">
                  <div className="h-28 sm:h-32 bg-slate-200 rounded-lg flex items-center justify-center text-xs text-slate-500 font-mono">[Foto 2]</div>
                  <p className="text-xs font-bold text-slate-800">Proses masuk oven pengecatan</p>
                </div>
                <div className="bg-slate-50 rounded-xl p-3 border border-slate-200 space-y-2">
                  <div className="h-28 sm:h-32 bg-slate-200 rounded-lg flex items-center justify-center text-xs text-slate-500 font-mono">[Foto 3]</div>
                  <p className="text-xs font-bold text-slate-800">Aplikasi basecoat hitam</p>
                </div>
              </div>
            </div>
          </>
        )}

        {/* ========================================================= */}
        {/* KONDISI 2: JIKA TEKNISI LAPANGAN MENGUBAH STATUS JADI SELESAI */}
        {/* ========================================================= */}
        {statusUnit === 'selesai' && (
          <>
            {/* Card Informasi Kendaraan & Status Unit Siap Ambil */}
            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-4 sm:p-6">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-slate-100 pb-5">
                <div>
                  <div className="flex items-center gap-2.5 mb-1 flex-wrap">
                    <span className="bg-slate-900 text-white font-mono text-xs sm:text-sm px-3.5 py-1 rounded-lg font-bold">
                      {plat} SIDOARJO
                    </span>
                    <span className="bg-blue-100 text-blue-800 text-[10px] font-bold px-2.5 py-1 rounded-md">SPK RESMI</span>
                    <h2 className="text-base sm:text-xl font-bold text-slate-900">Toyota Avanza Veloz 1.5 AT</h2>
                  </div>
                  <p className="text-[11px] sm:text-xs text-slate-500">Warna: Hitam Metalik (Kode 209) • Standar Cat: Spies Hecker Polyurethane</p>
                </div>

                <div className="p-4 rounded-xl border bg-emerald-50/70 border-emerald-200 flex flex-col justify-between gap-1">
                  <div className="flex items-center justify-between gap-4">
                    <span className="text-[10px] uppercase tracking-wider font-bold text-slate-500">STATUS UNIT</span>
                    <span className="text-xs font-bold px-2.5 py-1 rounded-full flex items-center gap-1 bg-emerald-600 text-white">
                      <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span>
                      Siap Ambil
                    </span>
                  </div>
                  <p className="font-bold text-slate-800 text-xs sm:text-sm flex items-center gap-1.5 pt-1">
                    <Clock className="w-4 h-4 text-slate-600 shrink-0" /> 15 Okt 2026 • 15:30 WIB
                  </p>
                  <div className="text-[10px] text-slate-500 flex items-center justify-between gap-4 pt-1 border-t border-slate-200/60">
                    <span>Lokasi Pengambilan: Front Office Bengkel AUTO-D Waru</span>
                    <span className="font-bold text-emerald-700">Lulus QC 100%</span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 text-xs text-slate-600">
                <div>
                  <p className="text-[10px] text-slate-400">SERVICE ADVISOR</p>
                  <p className="font-bold text-slate-800">Budi Santoso (SA-04)</p>
                </div>
                <div>
                  <p className="text-[10px] text-slate-400">NOMOR SPK</p>
                  <p className="font-bold text-slate-800">AD-WRU-2610-104</p>
                </div>
                <div>
                  <p className="text-[10px] text-slate-400">TANGGAL MASUK</p>
                  <p className="font-bold text-slate-800">10 Okt 2026</p>
                </div>
                <div>
                  <p className="text-[10px] text-slate-400">MASA GARANSI</p>
                  <p className="font-bold text-emerald-600">6 Bulan (Aktif)</p>
                </div>
              </div>
            </div>

            {/* Alur Tahapan 6 Selesai */}
            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-4 sm:p-6">
              <div className="flex items-center justify-between mb-4 sm:mb-6">
                <h3 className="font-bold text-slate-900 text-sm sm:text-base">Alur Tahapan Reparasi Bodi & Cat</h3>
                <span className="text-xs font-bold bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full">
                  6 / 6 TAHAP TERPENUHI
                </span>
              </div>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
                <div className="bg-blue-50/70 border border-blue-200 p-3 rounded-xl text-center space-y-1">
                  <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto text-[10px] font-bold">✓</div>
                  <h4 className="text-[11px] font-bold text-slate-800 leading-tight">Penerimaan & SPK</h4>
                  <p className="text-[9px] text-slate-500">Selesai</p>
                </div>
                <div className="bg-blue-50/70 border border-blue-200 p-3 rounded-xl text-center space-y-1">
                  <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto text-[10px] font-bold">✓</div>
                  <h4 className="text-[11px] font-bold text-slate-800 leading-tight">Ketok & Bodi</h4>
                  <p className="text-[9px] text-slate-500">Selesai</p>
                </div>
                <div className="bg-blue-50/70 border border-blue-200 p-3 rounded-xl text-center space-y-1">
                  <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto text-[10px] font-bold">✓</div>
                  <h4 className="text-[11px] font-bold text-slate-800 leading-tight">Dempul & Epoxy</h4>
                  <p className="text-[9px] text-slate-500">Selesai</p>
                </div>
                <div className="bg-blue-50/70 border border-blue-200 p-3 rounded-xl text-center space-y-1">
                  <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto text-[10px] font-bold">✓</div>
                  <h4 className="text-[11px] font-bold text-slate-800 leading-tight">Pengecatan Oven</h4>
                  <p className="text-[9px] text-slate-500">Selesai</p>
                </div>
                <div className="bg-blue-50/70 border border-blue-200 p-3 rounded-xl text-center space-y-1">
                  <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto text-[10px] font-bold">✓</div>
                  <h4 className="text-[11px] font-bold text-slate-800 leading-tight">Poles & Finishing</h4>
                  <p className="text-[9px] text-slate-500">Selesai</p>
                </div>
                <div className="bg-slate-900 text-white border-2 border-emerald-400 p-3 rounded-xl text-center space-y-1 shadow-md">
                  <div className="w-6 h-6 bg-emerald-500 text-white rounded-full flex items-center justify-center mx-auto text-[10px] font-bold">✓</div>
                  <h4 className="text-[11px] font-bold leading-tight">QC & Siap Ambil</h4>
                  <p className="text-[9px] text-emerald-400 font-bold">SIAP AMBIL</p>
                </div>
              </div>
            </div>

            {/* Sertifikat Garansi & Pelunasan */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-5 space-y-4">
                <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                  <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                    <ShieldCheck className="w-5 h-5 text-emerald-600" /> Sertifikat Elektronik Garansi Cat (E-Warranty)
                  </h4>
                  <span className="text-[10px] bg-emerald-100 text-emerald-800 font-bold px-2.5 py-1 rounded-md">GARANSI 6 BULAN AKTIF</span>
                </div>
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 flex items-center justify-between gap-4">
                  <div className="space-y-1">
                    <p className="text-[10px] font-bold text-slate-400">NO. REGISTRASI GARANSI:</p>
                    <p className="font-mono font-bold text-slate-800 text-sm">E-WAR/2610/0104-VELOZ</p>
                    <p className="text-[11px] text-slate-600 leading-relaxed pt-1">Menjamin kilap cat, ketahanan anti-retak, dan bebas belang (color matching 100%).</p>
                  </div>
                  <div className="bg-white p-2 rounded-lg border border-slate-300 shrink-0 text-center">
                    <QrCode className="w-16 h-16 text-slate-800 mx-auto" />
                    <span className="text-[9px] text-slate-400 font-mono">SCAN VALIDASI</span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-5 space-y-4">
                <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                  <h4 className="font-bold text-slate-900 text-sm">Rincian Pelunasan & Pengambilan Unit</h4>
                  <span className="text-[10px] bg-emerald-600 text-white font-bold px-3 py-1 rounded-md">LUNAS</span>
                </div>
                <div className="space-y-2 text-xs text-slate-600">
                  <div className="flex justify-between py-1 border-b border-slate-100">
                    <span>Subtotal SPK Awal (3 Panel Bodi & Oven)</span>
                    <span className="font-semibold text-slate-800">Rp 1.100.000</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-slate-100">
                    <span>Penyesuaian Kerusakan Disetujui (ACC)</span>
                    <span className="font-semibold text-slate-800">Rp 150.000</span>
                  </div>
                </div>
                <div className="bg-slate-900 text-white p-4 rounded-xl flex items-center justify-between">
                  <div>
                    <p className="text-[10px] text-slate-400 uppercase tracking-wider">TOTAL AKHIR TAGIHAN</p>
                    <p className="text-xs text-emerald-400 font-medium">✔ Sudah Terbayar Lunas</p>
                  </div>
                  <p className="text-2xl font-extrabold">Rp 1.250.000</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                  <button onClick={() => alert('Mengunduh e-Kwitansi...')} className="bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold py-2 px-3 rounded-xl flex items-center justify-center gap-2 shadow">
                    <Download className="w-4 h-4" /> Unduh E-Kwitansi
                  </button>
                  <a href="https://maps.google.com" target="_blank" rel="noreferrer" className="bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold py-2 px-3 rounded-xl flex items-center justify-center gap-2 text-center">
                    <MapPin className="w-4 h-4 text-rose-500" /> Rute Bengkel
                  </a>
                </div>
              </div>
            </div>
          </>
        )}

        {/* Bantuan WhatsApp Advisor */}
        <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
          <div className="text-center sm:text-left">
            <h5 className="font-bold text-emerald-900 text-xs sm:text-sm">Butuh penjelasan teknis lebih lanjut?</h5>
            <p className="text-[11px] sm:text-xs text-emerald-700">Service Advisor Budi Santoso siap membantu Anda.</p>
          </div>
          <a href="https://wa.me/6281234567890" target="_blank" rel="noreferrer" className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-4 py-2.5 rounded-xl text-xs flex items-center justify-center gap-2 shadow transition shrink-0">
            <Phone className="w-4 h-4" /> Hubungi via WhatsApp
          </a>
        </div>

      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 py-4 px-4 sm:px-6 text-center text-[11px] sm:text-xs text-slate-500 flex flex-col sm:flex-row items-center justify-between gap-2">
        <p>© 2026 Bengkel Cat Mobil & Body Repair AUTO-D Waru, Sidoarjo.</p>
        <p className="text-[10px] text-slate-400 flex items-center gap-1">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" /> Sistem Pelacakan Operasional v1.0
        </p>
      </footer>
    </div>
  );
}

export default function DetailPelacakanPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center text-slate-500 text-sm">Memuat data pelacakan...</div>}>
      <DetailPelacakanContent />
    </Suspense>
  );
}