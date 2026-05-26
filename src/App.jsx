import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  BriefcaseBusiness,
  Building2,
  Calculator,
  Car,
  CheckCircle2,
  ChevronDown,
  Clock3,
  FileText,
  Headphones,
  Home,
  LockKeyhole,
  Menu,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  Users,
  WalletCards,
  X,
  Zap,
} from "lucide-react";

const products = [
  {
    id: "nomina",
    title: "Préstamo de Nómina",
    icon: Users,
    description:
      "Financiamiento desde RD$20,000 para empleados públicos y privados, con tasa de 36% anual y proceso ágil.",
    requirements: ["Desde RD$20,000", "Tasa 36% anual", "Cédula", "Carta laboral", "Últimos estados de cuenta", "Autorización de descuento"],
  },
  {
    id: "vehiculo",
    title: "Con Garantía de Vehículo",
    icon: Car,
    description:
      "Usa tu vehículo como respaldo y accede a financiamiento con tasa de 36% anual.",
    requirements: ["Tasa 36% anual", "Cédula", "Matrícula", "Fotos del vehículo", "Seguro vigente"],
  },
  {
    id: "inmobiliario",
    title: "Con Garantía Inmobiliaria",
    icon: Home,
    description:
      "Financiamiento respaldado por propiedades, con tasa de 16.8% anual, ideal para mayores montos y mejores plazos.",
    requirements: ["Tasa 16.8% anual", "Cédula", "Título", "Certificación de estado jurídico", "Tasación"],
  },
  {
    id: "mipyme",
    title: "Para MIPYMES",
    icon: BriefcaseBusiness,
    description:
      "Capital flexible para impulsar operación, inventario, expansión o flujo de caja, con tasa de 4.5% mensual.",
    requirements: ["Tasa 4.5% mensual", "RNC", "Registro mercantil", "Estados bancarios", "Información financiera"],
  },
];

const benefits = [
  { title: "Seguro", description: "Protegemos tus datos y tu información financiera.", icon: ShieldCheck },
  { title: "Transparente", description: "Condiciones claras, sin letras pequeñas.", icon: BadgeCheck },
  { title: "Rápido", description: "Proceso digital y respuesta en corto tiempo.", icon: Zap },
  { title: "Acompañamiento", description: "Te guiamos en cada paso de la solicitud.", icon: Headphones },
];

const faqs = [
  {
    q: "¿Antaa es un banco?",
    a: "No. Antaa es una plataforma privada de soluciones crediticias que ofrece financiamiento con fondos propios, sujeto a evaluación y aprobación.",
  },
  {
    q: "¿Consultan historial crediticio?",
    a: "Sí. La evaluación puede incluir consulta crediticia, validación de identidad, capacidad de pago y revisión documental.",
  },
  {
    q: "¿Cuánto tiempo tarda la respuesta?",
    a: "Depende del tipo de préstamo y de la documentación suministrada. Nuestro objetivo es ofrecer una respuesta ágil y clara.",
  },
  {
    q: "¿Puedo pagar antes de tiempo?",
    a: "Sí, sujeto a las condiciones pactadas en el contrato de préstamo correspondiente.",
  },
];

function formatCurrency(value) {
  return new Intl.NumberFormat("es-DO", {
    style: "currency",
    currency: "DOP",
    maximumFractionDigits: 0,
  }).format(value || 0);
}

function Logo({ dark = false }) {
  return (
    <div className="flex items-center gap-3">
      <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500 to-violet-400 shadow-lg shadow-violet-200">
        <span className="text-3xl font-light leading-none text-white">⌃</span>
      </div>
      <div className={`text-2xl font-extrabold tracking-tight ${dark ? "text-white" : "text-slate-950"}`}>
        ant<span className="text-violet-500">aa</span>
      </div>
    </div>
  );
}

export default function AntaaLandingPage() {
  const [loanType, setLoanType] = useState("Préstamo de Nómina");
  const [amount, setAmount] = useState(200000);
  const [months, setMonths] = useState(24);
  const [openFaq, setOpenFaq] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);

  const monthlyRate = useMemo(() => {
    const rates = {
      "Préstamo de Nómina": 0.36 / 12,
      "Garantía de Vehículo": 0.36 / 12,
      "Garantía Inmobiliaria": 0.168 / 12,
      "Financiamiento MIPYME": 0.045,
    };
    return rates[loanType] || 0.36 / 12;
  }, [loanType]);

  const rateLabel = useMemo(() => {
    const labels = {
      "Préstamo de Nómina": "36% anual",
      "Garantía de Vehículo": "36% anual",
      "Garantía Inmobiliaria": "16.8% anual",
      "Financiamiento MIPYME": "4.5% mensual",
    };
    return labels[loanType] || "36% anual";
  }, [loanType]);

  const minAmount = loanType === "Préstamo de Nómina" ? 20000 : 50000;

  const estimatedPayment = useMemo(() => {
    const r = monthlyRate;
    const n = months;
    const principal = amount < minAmount ? minAmount : amount;
    if (!r || !n) return principal / months;
    return (principal * r) / (1 - Math.pow(1 + r, -n));
  }, [amount, months, monthlyRate, minAmount]);

  const navItems = ["Productos", "Beneficios", "Simulador", "Solicitud", "FAQ", "Contacto"];

  return (
    <div className="min-h-screen bg-[#fbf9ff] text-slate-950">
      <div className="fixed inset-x-0 top-0 z-40 border-b border-violet-100/80 bg-white/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
          <Logo />
          <nav className="hidden items-center gap-8 text-sm font-medium text-slate-700 lg:flex">
            {navItems.map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="transition hover:text-violet-600">
                {item}
              </a>
            ))}
          </nav>
          <a
            href="#solicitud"
            className="hidden rounded-2xl bg-violet-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-200 transition hover:bg-violet-600 lg:inline-flex"
          >
            Solicitar préstamo
          </a>
          <button className="lg:hidden" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X /> : <Menu />}
          </button>
        </div>
        {mobileOpen && (
          <div className="border-t border-violet-100 bg-white px-5 py-4 lg:hidden">
            <div className="flex flex-col gap-3">
              {navItems.map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} className="py-2 text-sm font-medium">
                  {item}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>

      <main className="pt-24">
        <section className="relative overflow-hidden px-5 py-16 lg:px-8 lg:py-24">
          <div className="absolute left-1/2 top-20 h-96 w-96 -translate-x-1/2 rounded-full bg-violet-200/40 blur-3xl" />
          <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-violet-200 bg-white px-4 py-2 text-sm font-semibold text-violet-600 shadow-sm">
                <Sparkles className="h-4 w-4" /> Financiamiento privado, simple y digital
              </div>
              <h1 className="max-w-2xl text-5xl font-black tracking-tight text-slate-950 sm:text-6xl lg:text-7xl">
                Soluciones <span className="text-violet-500">diseñadas</span> para ti
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
                Préstamos rápidos, transparentes y 100% digitales para personas y negocios. Obtén la financiación que necesitas con respuesta ágil y confidencial.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href="#solicitud" className="inline-flex items-center justify-center gap-2 rounded-2xl bg-violet-500 px-6 py-4 font-bold text-white shadow-xl shadow-violet-200 transition hover:bg-violet-600">
                  Solicita ahora <ArrowRight className="h-5 w-5" />
                </a>
                <a href="#simulador" className="inline-flex items-center justify-center gap-2 rounded-2xl border border-violet-200 bg-white px-6 py-4 font-bold text-violet-600 transition hover:bg-violet-50">
                  Simular préstamo
                </a>
              </div>
              <div className="mt-8 flex flex-wrap gap-5 text-sm font-medium text-slate-600">
                <span className="flex items-center gap-2"><CheckCircle2 className="h-5 w-5 text-violet-500" /> Seguro</span>
                <span className="flex items-center gap-2"><CheckCircle2 className="h-5 w-5 text-violet-500" /> Confiable</span>
                <span className="flex items-center gap-2"><CheckCircle2 className="h-5 w-5 text-violet-500" /> Transparente</span>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7 }} className="relative">
              <div className="rounded-[2rem] border border-violet-100 bg-white p-5 shadow-2xl shadow-violet-100">
                <div className="rounded-[1.5rem] bg-gradient-to-br from-violet-50 to-white p-6">
                  <div className="mx-auto max-w-sm rounded-[2rem] border border-slate-200 bg-white p-5 shadow-xl">
                    <div className="mb-5 flex items-center justify-between">
                      <Logo />
                      <LockKeyhole className="h-5 w-5 text-violet-500" />
                    </div>
                    <p className="text-sm text-slate-500">Hola, María</p>
                    <h3 className="mt-2 text-2xl font-black">Tu próximo logro está más cerca</h3>
                    <div className="mt-5 rounded-3xl bg-violet-50 p-5">
                      <p className="text-sm font-semibold text-slate-600">Préstamo preevaluado</p>
                      <p className="mt-2 text-3xl font-black">RD$ 250,000</p>
                      <p className="text-sm text-slate-500">desde RD$ 12,875 mensual</p>
                      <button className="mt-4 w-full rounded-2xl bg-violet-500 py-3 font-bold text-white">Solicitar ahora</button>
                    </div>
                    <div className="mt-5 grid grid-cols-3 gap-3 text-center text-xs font-semibold text-slate-600">
                      <div className="rounded-2xl bg-white p-3 shadow-sm"><Users className="mx-auto mb-1 h-5 w-5 text-violet-500" />Nómina</div>
                      <div className="rounded-2xl bg-white p-3 shadow-sm"><Car className="mx-auto mb-1 h-5 w-5 text-violet-500" />Vehículo</div>
                      <div className="rounded-2xl bg-white p-3 shadow-sm"><Home className="mx-auto mb-1 h-5 w-5 text-violet-500" />Inmueble</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section id="productos" className="px-5 py-14 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="mb-10 max-w-2xl">
              <p className="font-bold text-violet-500">Nuestros productos</p>
              <h2 className="mt-2 text-4xl font-black tracking-tight">Elige la solución que necesitas</h2>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {products.map((product) => {
                const Icon = product.icon;
                return (
                  <div key={product.id} className="rounded-[2rem] border border-violet-100 bg-white p-6 shadow-xl shadow-violet-50 transition hover:-translate-y-1 hover:shadow-2xl">
                    <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-100 text-violet-600">
                      <Icon className="h-7 w-7" />
                    </div>
                    <h3 className="text-xl font-black">{product.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-slate-600">{product.description}</p>
                    <a href="#solicitud" className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-violet-600">
                      Solicitar <ArrowRight className="h-4 w-4" />
                    </a>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section id="beneficios" className="px-5 py-14 lg:px-8">
          <div className="mx-auto max-w-7xl rounded-[2rem] bg-gradient-to-br from-violet-600 to-violet-500 p-8 text-white shadow-2xl shadow-violet-200 lg:p-12">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {benefits.map((benefit) => {
                const Icon = benefit.icon;
                return (
                  <div key={benefit.title} className="border-white/20 lg:border-r lg:pr-8 last:border-r-0">
                    <Icon className="mb-4 h-9 w-9" />
                    <h3 className="text-xl font-black">{benefit.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-violet-50">{benefit.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section id="simulador" className="px-5 py-14 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className="font-bold text-violet-500">Simulador</p>
              <h2 className="mt-2 text-4xl font-black tracking-tight">Simula tu préstamo</h2>
              <p className="mt-4 max-w-xl text-slate-600">Calcula una cuota estimada según el tipo de préstamo, monto y plazo. La aprobación y condiciones finales están sujetas a evaluación.</p>
              <div className="mt-8 rounded-[2rem] border border-violet-100 bg-white p-6 shadow-xl shadow-violet-50">
                <label className="text-sm font-bold text-slate-700">Tipo de préstamo</label>
                <select value={loanType} onChange={(e) => setLoanType(e.target.value)} className="mt-2 w-full rounded-2xl border border-violet-100 bg-violet-50 px-4 py-3 outline-none focus:ring-2 focus:ring-violet-300">
                  <option>Préstamo de Nómina</option>
                  <option>Garantía de Vehículo</option>
                  <option>Garantía Inmobiliaria</option>
                  <option>Financiamiento MIPYME</option>
                </select>
                <label className="mt-6 block text-sm font-bold text-slate-700">Monto deseado: {formatCurrency(amount)}</label>
                <input type="range" min={minAmount} max="3000000" step="10000" value={amount < minAmount ? minAmount : amount} onChange={(e) => setAmount(Number(e.target.value))} className="mt-3 w-full accent-violet-500" />
                <label className="mt-6 block text-sm font-bold text-slate-700">Plazo: {months} meses</label>
                <input type="range" min="6" max="60" step="6" value={months} onChange={(e) => setMonths(Number(e.target.value))} className="mt-3 w-full accent-violet-500" />
              </div>
            </div>
            <div className="rounded-[2rem] border border-violet-100 bg-white p-8 shadow-2xl shadow-violet-100">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-100 text-violet-600">
                <Calculator className="h-7 w-7" />
              </div>
              <p className="font-bold text-slate-500">Tu cuota estimada</p>
              <h3 className="mt-2 text-5xl font-black">{formatCurrency(estimatedPayment)}</h3>
              <p className="mt-1 font-semibold text-slate-500">mensuales</p>
              <div className="mt-8 space-y-4 text-sm">
                <div className="flex justify-between border-b border-slate-100 pb-3"><span>Monto solicitado</span><strong>{formatCurrency(amount < minAmount ? minAmount : amount)}</strong></div>
                <div className="flex justify-between border-b border-slate-100 pb-3"><span>Plazo</span><strong>{months} meses</strong></div>
                <div className="flex justify-between border-b border-slate-100 pb-3"><span>Tasa estimada</span><strong>{rateLabel}</strong></div>
              </div>
              <a href="#solicitud" className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-violet-500 px-6 py-4 font-bold text-white shadow-lg shadow-violet-200 transition hover:bg-violet-600">
                Solicitar ahora <ArrowRight className="h-5 w-5" />
              </a>
            </div>
          </div>
        </section>

        <section id="solicitud" className="px-5 py-14 lg:px-8">
          <div className="mx-auto max-w-7xl rounded-[2rem] border border-violet-100 bg-white p-6 shadow-2xl shadow-violet-50 lg:p-10">
            <div className="mb-8 max-w-2xl">
              <p className="font-bold text-violet-500">Solicitud digital</p>
              <h2 className="mt-2 text-4xl font-black tracking-tight">Solicita tu préstamo</h2>
              <p className="mt-3 text-slate-600">Completa tus datos y un asesor de Antaa te contactará para continuar el proceso.</p>
            </div>
            <form action="https://formspree.io/f/xeedplgr" method="POST" className="grid gap-5 md:grid-cols-2">
              <input name="nombre" className="rounded-2xl border border-violet-100 bg-violet-50 px-4 py-4 outline-none focus:ring-2 focus:ring-violet-300" placeholder="Nombre completo" required />
              <input name="documento" className="rounded-2xl border border-violet-100 bg-violet-50 px-4 py-4 outline-none focus:ring-2 focus:ring-violet-300" placeholder="Cédula o pasaporte" required />
              <input name="telefono" className="rounded-2xl border border-violet-100 bg-violet-50 px-4 py-4 outline-none focus:ring-2 focus:ring-violet-300" placeholder="Teléfono / WhatsApp" required />
              <input type="email" name="email" className="rounded-2xl border border-violet-100 bg-violet-50 px-4 py-4 outline-none focus:ring-2 focus:ring-violet-300" placeholder="Correo electrónico" required />

              <select className="rounded-2xl border border-violet-100 bg-violet-50 px-4 py-4 outline-none focus:ring-2 focus:ring-violet-300" required>
                <option>Tipo de préstamo</option>
                <option>Préstamo de Nómina</option>
                <option>Garantía de Vehículo</option>
                <option>Garantía Inmobiliaria</option>
                <option>Financiamiento MIPYME</option>
              </select>

              <input className="rounded-2xl border border-violet-100 bg-violet-50 px-4 py-4 outline-none focus:ring-2 focus:ring-violet-300" placeholder="Monto solicitado" required />

              <input className="rounded-2xl border border-violet-100 bg-violet-50 px-4 py-4 outline-none focus:ring-2 focus:ring-violet-300" placeholder="Ingresos mensuales aproximados" />

              <input className="rounded-2xl border border-violet-100 bg-violet-50 px-4 py-4 outline-none focus:ring-2 focus:ring-violet-300" placeholder="Empresa / negocio" />

              <input className="rounded-2xl border border-violet-100 bg-violet-50 px-4 py-4 outline-none focus:ring-2 focus:ring-violet-300" placeholder="Tiempo laborando / antigüedad" />

              <div className="rounded-[2rem] border border-violet-100 bg-violet-50 p-5 md:col-span-2">
                <div className="mb-4 flex items-center gap-3">
                  <WalletCards className="h-5 w-5 text-violet-500" />
                  <h3 className="font-black text-slate-900">Información adicional según el préstamo</h3>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <input className="rounded-2xl border border-violet-100 bg-white px-4 py-4 outline-none focus:ring-2 focus:ring-violet-300" placeholder="Marca / modelo del vehículo" />

                  <input className="rounded-2xl border border-violet-100 bg-white px-4 py-4 outline-none focus:ring-2 focus:ring-violet-300" placeholder="Valor estimado del vehículo o inmueble" />

                  <input className="rounded-2xl border border-violet-100 bg-white px-4 py-4 outline-none focus:ring-2 focus:ring-violet-300" placeholder="RNC / nombre comercial" />

                  <input className="rounded-2xl border border-violet-100 bg-white px-4 py-4 outline-none focus:ring-2 focus:ring-violet-300" placeholder="Actividad económica" />
                </div>
              </div>

              <div className="rounded-[2rem] border border-dashed border-violet-200 bg-violet-50/70 p-6 md:col-span-2">
                <div className="flex items-center gap-3">
                  <FileText className="h-6 w-6 text-violet-500" />
                  <div>
                    <h3 className="font-black text-slate-900">Adjuntar documentos</h3>
                    <p className="text-sm text-slate-500">Cédula, estados de cuenta, matrícula, títulos o documentos financieros.</p>
                  </div>
                </div>

                <input type="file" multiple className="mt-5 w-full rounded-2xl border border-violet-100 bg-white px-4 py-4 text-sm" />
              </div>

              <textarea className="min-h-32 rounded-2xl border border-violet-100 bg-violet-50 px-4 py-4 outline-none focus:ring-2 focus:ring-violet-300 md:col-span-2" placeholder="Cuéntanos brevemente para qué necesitas el financiamiento" />

              <div className="rounded-[2rem] border border-violet-100 bg-violet-50 p-5 text-sm text-slate-600 md:col-span-2">
                <div className="mb-4 flex items-center gap-3">
                  <ShieldCheck className="h-5 w-5 text-violet-500" />
                  <h3 className="font-black text-slate-900">Consentimientos y autorizaciones</h3>
                </div>

                <div className="space-y-4">
                  <label className="flex gap-3">
                    <input type="checkbox" className="mt-1 accent-violet-500" required />
                    Autorizo el tratamiento de mis datos personales para fines de evaluación crediticia y contacto comercial.
                  </label>

                  <label className="flex gap-3">
                    <input type="checkbox" className="mt-1 accent-violet-500" required />
                    Autorizo consulta y validación de información crediticia, laboral y financiera.
                  </label>

                  <label className="flex gap-3">
                    <input type="checkbox" className="mt-1 accent-violet-500" required />
                    Declaro que la información suministrada es correcta, verificable y suministrada de manera voluntaria.
                  </label>
                </div>
              </div>

              <button type="submit" className="rounded-2xl bg-violet-500 px-6 py-4 font-bold text-white shadow-lg shadow-violet-200 transition hover:bg-violet-600 md:col-span-2">
                Enviar solicitud
              </button>
            </form>
          </div>
        </section>

        <section id="faq" className="px-5 py-14 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <div className="mb-8 text-center">
              <p className="font-bold text-violet-500">FAQ</p>
              <h2 className="mt-2 text-4xl font-black tracking-tight">Preguntas frecuentes</h2>
            </div>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={faq.q} className="rounded-3xl border border-violet-100 bg-white p-5 shadow-lg shadow-violet-50">
                  <button className="flex w-full items-center justify-between gap-5 text-left font-bold" onClick={() => setOpenFaq(openFaq === index ? -1 : index)}>
                    {faq.q}
                    <ChevronDown className={`h-5 w-5 transition ${openFaq === index ? "rotate-180" : ""}`} />
                  </button>
                  {openFaq === index && <p className="mt-3 leading-7 text-slate-600">{faq.a}</p>}
                </div>
              ))}
            </div>
          </div>
        </section>

        <footer id="contacto" className="px-5 pb-10 pt-14 lg:px-8">
          <div className="mx-auto max-w-7xl rounded-[2rem] bg-slate-950 p-8 text-white lg:p-10">
            <div className="grid gap-8 lg:grid-cols-3">
              <div>
                <Logo dark={true} />
                <p className="mt-5 max-w-sm text-sm leading-6 text-slate-300">Soluciones diseñadas para ti. Financiamiento privado, simple y digital.</p>
              </div>
              <div>
                <h3 className="font-black">Contacto</h3>
                <p className="mt-4 text-sm text-slate-300">solicitudes@antaa.do</p>
                <p className="mt-2 text-sm text-slate-300">Santo Domingo, República Dominicana</p>
              </div>
              <div>
                <h3 className="font-black">Aviso</h3>
                <p className="mt-4 text-sm leading-6 text-slate-300">La aprobación, tasa, plazo y condiciones están sujetas a evaluación crediticia, validación documental y políticas internas de Antaa.</p>
              </div>
            </div>
            <div className="mt-8 border-t border-white/10 pt-6 text-xs text-slate-400">
              © 2026 Antaa. Todos los derechos reservados. Política de privacidad · Términos y condiciones
            </div>
          </div>
        </footer>
      </main>

      <a
        href="https://wa.me/18095432318"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-2xl transition hover:scale-105"
        aria-label="Contactar por WhatsApp"
      >
        <MessageCircle className="h-7 w-7" />
      </a>
    </div>
  );
}
