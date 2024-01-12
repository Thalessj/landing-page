import Image from "next/image";

export default function Contract() {
  return (
    <>
      <section className="bg-white h-fit xsm:mb-12">
        <div className="flex items-center justify-center ]">
          <div className="3sm:ml-4 xsm:ml-4 2sm:ml-4 md:ml-0 col-span-6 xl:place-items-center lg:col-span-12 py-12">
            <h3 className="text-black max-w-2xl xsm:text-xl 3sm:text-2xl 2sm:text-2xl font-semibold 3sm:text-center md:text-start mb-4 xl:text-5xl font-Orbitron tracking-tight leading-none md:text-5xl">
              Encontre os melhores desenvolvedores para seu projeto
            </h3>
            <p className="max-w-2xl 3sm:text-xl font-sans xl:text-xl text-gray-400 lg:mb-8 md:text-lg lg:text-xl mt-8 mb-8">
              Conecte-se com milhares de profissionais de tecnologia e conte com o suporte dos nossos
              profissionais especializados para contratar as pessoas adequadas para a sua equipe.
            </p>
            <ul className="max-w-md space-y-1 text-gray-500 list-inside dark:text-gray-400">
              <li className="flex items-center font-sans text-xl py-2">
                <svg
                  className="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 flex-shrink-0"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                </svg>
                Recrutamento Assertivo
              </li>
              <li className="flex items-center font-sans text-xl py-2">
                <svg
                  className="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 flex-shrink-0"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                </svg>
                Processo ágil
              </li>
              <li className="flex items-center font-sans py-2 text-xl">
                <svg
                  className="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 flex-shrink-0"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                </svg>
                Inteligência Artificial aplicada no R&S
              </li>
              <li className="flex items-center font-sans py-2 text-xl">
                <svg
                  className="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 flex-shrink-0"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                </svg>
                Redução de custo com contratação
              </li>
            </ul>
            {/* <div className="mt-8 xsm:justify-center flex 3sm:justify-center md:justify-start">
              <a
                href="#"
                className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center rounded-lg bg-gradient-to-r from-secundary to-primary focus:ring-4 focus:ring-primary-300 text-white hover:text-white disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 transition-all"
              >
                Solicitar Free-lancer ➔
              </a>
            </div> */}
          </div>
          <div className="w-fit col-span-5 ml-20 flex lg:col-span-5 ">
            <Image
              className="lg:object-contain xsm:hidden lg:block"
              src="/image/contract.png"
              alt="Mulher"
              width={600}
              height={300}
            />
          </div>
        </div>
      </section>
    </>
  );
}
