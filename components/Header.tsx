export default function Header() {
  return (
    <header
      className="
        fixed
        top-0
        left-0
        right-0
        z-50
        bg-[#f7f3f2]/95
        backdrop-blur-md
        border-b
        border-gray-200
        shadow-sm
      "
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-4">
        <div className="flex items-center gap-3">
          <div className="bg-rose-500 w-10 h-10 rounded-full flex items-center justify-center text-white">
            ✂
          </div>

          <h1 className="text-2xl font-semibold text-stone-800">
            Cortezia
          </h1>
        </div>

        <div className="flex items-center gap-6">
          <button className="text-stone-600 hover:text-stone-900 transition">
            Entrar
          </button>

          <button className="bg-rose-500 text-white px-6 py-3 rounded-full hover:bg-rose-600 transition">
            Começar
          </button>
        </div>
      </div>
    </header>
  );
}