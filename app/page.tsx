import Image from "next/image";
import Link from "next/link";
import { Info, KeyRound } from 'lucide-react';

export default function Contact() {
  const fingerprint = "20482FDC3A11B6ABB6094A3D1AFCB7A04DEDDCDC";
  const pgpUrl = `https://keys.openpgp.org/vks/v1/by-fingerprint/${fingerprint}`;

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-zinc-900 to-zinc-800 font-sans text-zinc-100">
      <main className="w-full max-w-6xl p-8">
        {/* Desktop: Side-by-Side */}
        <div className="hidden md:grid md:grid-cols-2 gap-12 items-center">
          {/* Links: E-Mail + PGP */}
          <div className="space-y-8">
            <div>
              <h1 className="text-5xl font-bold text-zinc-100 mb-6">E-Mail</h1>
              <Link
                href="mailto:info@onurzengin.de"
                className="block text-4xl font-black text-blue-400 hover:text-blue-300 underline underline-offset-8 transition-colors cursor-pointer"
              >
                info@onurzengin.de
              </Link>
            </div>

              <Link
                href="/public.asc"
                download="onur-zengin-public-key.asc"
                className="inline-flex items-center justify-center gap-3
                 bg-blue-800 hover:bg-blue-700 text-zinc-100 px-10 py-6  font-bold text-xl w-full transition-colors cursor-pointer border border-blue-700"
              >
                <KeyRound size={24} />
                OpenPGP Key herunterladen
              </Link>

            <div className="bg-zinc-800 p-8 ">
              <strong className="block text-2xl mb-6 font-mono text-white">Fingerprint:</strong>
              <div className="grid grid-cols-3 gap-4 text-lg font-mono text-white">
                <span>2048 2FDC</span>
                <span>3A11 B6AB</span>
                <span>B609 4A3D</span>
                <span>1AFC B7A0</span>
                <span>4DED DCDC</span>
                <span></span>
              </div>
            </div>

            <Link
              href={pgpUrl}
              className="block text-lg text-zinc-500 hover:text-zinc-400 underline transition-colors"
            >
              keys.openpgp.org
            </Link>
          </div>

          {/* Rechts: Signal */}
          <div className="space-y-8 text-center">
            <h1 className="text-5xl font-bold text-white">Signal Messenger</h1>
            <Link 
              href="https://signal.me/#eu/p-W22zE17H4L3t_fa9X_okxyWCdZwHsLuGP8dJtq8Tvnm0yI78VGKJTlS-gPgyYZ"
              className="block mx-auto cursor-pointer hover:opacity-90 transition-opacity"
              aria-label="Über Signal chatten"
            >
              <Image 
                src={"/SignalQR.png"}
                alt="Signal QR-Code für Onur Zengin"
                priority 
                quality={100} 
                width={400}
                height={400}
                className="w-full"
              />
            </Link>
            <p className="flex gap-3 justify-center items-center text-xl text-zinc-400">
              <Info size={24} />
              Zum Chatten klicken oder scannen
            </p>
          </div>
        </div>

        {/* Mobile: Vertical Stack */}
        <div className="md:hidden mt-8 flex flex-col space-y-16">
          {/* Signal oben */}
          <section className="space-y-8 text-center">
            <h1 className="text-4xl font-bold text-zinc-100">Signal Messenger</h1>
            <Link 
              href="https://signal.me/#eu/p-W22zE17H4L3t_fa9X_okxyWCdZwHsLuGP8dJtq8Tvnm0yI78VGKJTlS-gPgyYZ"
              className="flex flex-col justify-center cursor-pointer  items-center hover:opacity-90 transition-opacity"
              aria-label="Über Signal chatten"
            >
              <Image 
                src="/SignalQR.png" 
                alt="Signal QR-Code für Onur Zengin"
                priority 
                quality={100} 
                width={350}
                height={350}
              />
            </Link>
            <p className="flex gap-3 justify-center items-center text-lg text-zinc-400">
              <Info size={20} />
              Zum Chatten klicken oder scannen
            </p>
          </section>

          {/* Divider */}
          <div className="w-full h-px bg-zinc-700"></div>

          {/* E-Mail + PGP unten */}
          <section className="space-y-8">
            <h1 className="text-4xl font-bold text-white text-center">E-Mail</h1>
            <Link
              href="mailto:info@onurzengin.de"
              className="block w-full text-center text-3xl font-black
               text-blue-400 hover:text-blue-300 underline 
               underline-offset-8 mx-auto transition-colors cursor-pointer"
            >
              info@onurzengin.de
            </Link>

            <div className="bg-blue-950/30 p-8  border-2 border-blue-800 mx-auto max-w-md w-full">
              <Link
                href="/public.asc"
                download="onur-zengin-public-key.asc"
                className="inline-flex items-center justify-center gap-3 bg-blue-800 border-2 border-blue-700 hover:bg-blue-700 text-white px-8 py-5
                  font-bold text-lg w-full transition-colors cursor-pointer"
              >
                <KeyRound size={24} />
                OpenPGP Key herunterladen
              </Link>
            </div>

            <div className="bg-zinc-800 p-6 mx-auto max-w-md w-full">
              <strong className="block text-xl mb-4 font-mono text-zinc-200 text-center">Fingerprint:</strong>
              <div className="grid grid-cols-3 gap-2 text-sm font-mono text-zinc-400 justify-items-center">
                <span>2048 2FDC</span>
                <span>3A11 B6AB</span>
                <span>B609 4A3D</span>
                <span>1AFC B7A0</span>
                <span>4DED DCDC</span>
                <span></span>
              </div>
            </div>

            <Link
              href={pgpUrl}
              className="block text-lg text-zinc-500 hover:text-zinc-400 underline transition-colors text-center"
            >
              keys.openpgp.org
            </Link>
          </section>
        </div>
      </main>
    </div>
  );
}
