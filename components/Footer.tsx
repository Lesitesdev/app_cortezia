export default function Footer() {
  return (
    <footer className="bg-[#2f1e1e] text-white">
      <div className="max-w-7xl mx-auto px-8 py-20">

        <div className="grid md:grid-cols-4 gap-12">

          <div>
            <h3 className="text-3xl font-bold mb-4">
              Cortezia
            </h3>

            <p className="text-stone-300 leading-8">
              A forma mais simples de encontrar
              e agendar horários em salões de beleza.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">
              Plataforma
            </h4>

            <ul className="space-y-3 text-stone-300">
              <li>Como funciona</li>
              <li>Salões</li>
              <li>Profissionais</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">
              Empresa
            </h4>

            <ul className="space-y-3 text-stone-300">
              <li>Sobre nós</li>
              <li>Contato</li>
              <li>Blog</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">
              Suporte
            </h4>

            <ul className="space-y-3 text-stone-300">
              <li>Central de ajuda</li>
              <li>Termos de uso</li>
              <li>Privacidade</li>
            </ul>
          </div>

        </div>

        <div className="border-t border-stone-700 mt-16 pt-8 text-center text-stone-400">
          © 2026 Cortezia. Todos os direitos reservados.
        </div>

      </div>
    </footer>
  );
}