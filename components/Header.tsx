import Link from "next/link";

export default function Header() {
  return (
    <header
      className="
        fixed
        top-0
        left-0
        right-0
        z-50
        bg-[#f7f3f2]/90
        backdrop-blur-xl
        border-b
        border-stone-200
      "
    >
      <div
        className="
          max-w-7xl
          mx-auto
          px-4
          sm:px-6
          lg:px-8
          py-4
          flex
          items-center
          justify-between
        "
      >
        {/* Logo */}
       <Link
  href="/"
  className="flex items-center gap-3 group"
>
  <div
    className="
      w-11
      h-11
      rounded-full
      bg-gradient-to-r
      from-rose-500
      to-pink-500
      flex
      items-center
      justify-center
      text-white
      shadow-md
      transition
      group-hover:scale-105
    "
  >
    ✂
  </div>

  <h1
    className="
      text-2xl
      font-bold
      text-stone-800
      transition
      group-hover:text-rose-500
    "
  >
    Cortesia
  </h1>
</Link>

        {/* Ações */}
        <div className="flex items-center gap-3">
          <button
            className="
              hidden
              sm:flex
              items-center
              justify-center
              px-5
              py-3
              rounded-full
              border
              border-stone-300
              text-stone-700
              font-medium
              hover:bg-white
              transition
            "
          >
            Entrar
          </button>

          <button
            className="
              px-6
              py-3
              rounded-full
              bg-gradient-to-r
              from-rose-500
              to-pink-500
              text-white
              font-semibold
              shadow-md
              hover:scale-105
              transition
            "
          >
            Começar grátis
          </button>
        </div>
      </div>
    </header>
  );
}