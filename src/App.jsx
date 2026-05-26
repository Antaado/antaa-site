
import React from "react";

export default function App() {
  return (
    <div className="min-h-screen bg-[#fbf9ff] text-slate-900">
      <header className="border-b border-violet-100 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <div className="text-3xl font-black">
            ant<span className="text-violet-500">aa</span>
          </div>
          <a
            href="#solicitud"
            className="rounded-2xl bg-violet-500 px-5 py-3 font-bold text-white"
          >
            Solicitar préstamo
          </a>
        </div>
      </header>

      <section className="mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-2">
        <div>
          <h1 className="text-6xl font-black leading-tight">
            Soluciones <span className="text-violet-500">diseñadas</span> para ti
          </h1>

          <p className="mt-6 text-lg text-slate-600">
            Préstamos rápidos, transparentes y 100% digitales para personas y negocios.
          </p>

          <div className="mt-8 flex gap-4">
            <a
              href="#solicitud"
              className="rounded-2xl bg-violet-500 px-6 py-4 font-bold text-white"
            >
              Solicita ahora
            </a>

            <a
              href="#simulador"
              className="rounded-2xl border border-violet-200 bg-white px-6 py-4 font-bold text-violet-600"
            >
              Simular préstamo
            </a>
          </div>
        </div>

        <div className="rounded-[2rem] bg-white p-10 shadow-2xl">
          <h2 className="text-3xl font-black">Antaa</h2>
          <p className="mt-4 text-slate-600">
            Financiamiento privado, simple y digital.
          </p>
        </div>
      </section>

      <section id="simulador" className="mx-auto max-w-7xl px-6 py-12">
        <div className="rounded-[2rem] bg-white p-10 shadow-xl">
          <h2 className="text-4xl font-black">Simula tu préstamo</h2>
          <p className="mt-3 text-slate-600">
            Tasas:
          </p>

          <ul className="mt-6 space-y-3 text-slate-700">
            <li>• Nómina: 36% anual desde RD$20,000</li>
            <li>• Vehículo: 36% anual</li>
            <li>• Inmobiliario: 16.8% anual</li>
            <li>• MIPYMES: 4.5% mensual</li>
          </ul>
        </div>
      </section>

      <section id="solicitud" className="mx-auto max-w-7xl px-6 py-12">
        <div className="rounded-[2rem] bg-white p-10 shadow-xl">
          <h2 className="text-4xl font-black">Solicita tu préstamo</h2>

          <form
            action="https://formspree.io/f/xeedplgr"
            method="POST"
            className="mt-8 grid gap-5 md:grid-cols-2"
          >
            <input
              name="nombre"
              placeholder="Nombre completo"
              className="rounded-2xl border border-violet-100 bg-violet-50 px-4 py-4"
              required
            />

            <input
              name="telefono"
              placeholder="Teléfono"
              className="rounded-2xl border border-violet-100 bg-violet-50 px-4 py-4"
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Correo electrónico"
              className="rounded-2xl border border-violet-100 bg-violet-50 px-4 py-4"
              required
            />

            <select
              name="tipo"
              className="rounded-2xl border border-violet-100 bg-violet-50 px-4 py-4"
            >
              <option>Préstamo de Nómina</option>
              <option>Garantía de Vehículo</option>
              <option>Garantía Inmobiliaria</option>
              <option>Financiamiento MIPYME</option>
            </select>

            <button
              type="submit"
              className="rounded-2xl bg-violet-500 px-6 py-4 font-bold text-white md:col-span-2"
            >
              Enviar solicitud
            </button>
          </form>
        </div>
      </section>

      <footer className="mt-20 bg-slate-950 px-6 py-10 text-white">
        <div className="mx-auto max-w-7xl">
          <div className="text-3xl font-black">
            <span className="text-white">ant</span>
            <span className="text-violet-500">aa</span>
          </div>

          <p className="mt-4 text-slate-300">
            © 2026 Antaa Inversiones. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}
