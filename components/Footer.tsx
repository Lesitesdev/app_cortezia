import Link from "next/link";

export default function Footer() {
  const columns = [
    {
      title: "Plataforma",
      links: [
        { href: "/#como-funciona", label: "Como funciona" },
        { href: "/saloes", label: "Salões" },
        { href: "/profissionais", label: "Profissionais" },
      ],
    },
    {
      title: "Empresa",
      links: [
        { href: "/sobre", label: "Sobre nós" },
        { href: "/contato", label: "Contato" },
        { href: "/blog", label: "Blog" },
      ],
    },
    {
      title: "Suporte",
      links: [
        { href: "/ajuda", label: "Central de ajuda" },
        { href: "/termos", label: "Termos de uso" },
        { href: "/privacidade", label: "Privacidade" },
      ],
    },
  ];

  return (
    <footer className="bg-[#2f1e1e] text-white">
      <div className="max-w-7xl mx-auto px-8 py-20">
        <div className="grid md:grid-cols-4 gap-12">
          <div>
            <h3 className="text-3xl font-bold mb-4">Cortesia</h3>
            <p className="text-stone-300 leading-8">
              A forma mais simples de encontrar e agendar horários em salões de beleza.
            </p>
          </div>

          {columns.map((column) => (
            <div key={column.title}>
              <h4 className="font-semibold mb-4">{column.title}</h4>
              <ul className="space-y-3 text-stone-300">
                {column.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="hover:text-white transition">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-stone-700 mt-16 pt-8 text-center text-stone-400">
          © 2026 Cortesia. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}
