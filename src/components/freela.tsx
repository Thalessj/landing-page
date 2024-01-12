import Image from "next/image";

export default function Freela() {
  return (
    <>
      <section className="bg-white flex item-center sm:h-fit 3sm:h-fill lg:h-fill justify-center py-20">
        <div className="flex max-w-2xl grid-cols-1 lg:max-w-none xl:grid-cols lg:gap-8 xl:gap-0 2sm:h-fit 3sm:h-fit lg:grid-cols-12">
          <div className="lg:mt-0 lg:flex lg:ml-0 lg:h-fill sm:h-fit 3sm:ml-4 xsm:ml-4 2sm:ml-4 md:ml-0 col-span-6 xl:place-items-center lg:col-span-12">
            <Image
              className="lg:object-contain xsm:hidden lg:block"
              src="/image/contract.png"
              alt="Mulher"
              width={600}
              height={300}
            />
            <div className="2sm:ml-4 xsm:ml-4 max-w-2xl col-span-7 lg:ml-20 xl:ml-40 mr-auto place-self-center lg:col-span-12 3sm:ml-4 md:ml-0">
              <h3 className="2sm:text-2xl xsm:text-xl text-black font-semibold mb-4 xl:text-5xl 3sm:text-3xl font-Orbitron tracking-tight leading-none md:text-5xl">
                Está com um projeto e necessita de um freelancer?
              </h3>
              <p className="max-w-2xl font-sans 3sm:text-xl xl:text-xl text-gray-400 lg:mb-8 md:text-lg lg:text-xl mt-8 mb-8">
                Contrate em poucos minutos um freelancer para um projeto em
                específico para você ou sua empresa.
              </p>
              <ul className="max-w-lg space-y-1 text-gray-500 list-inside dark:text-gray-400">
                <li className="flex items-center xl:text-xl font-sans py-2 md:text-2xl 3sm:text-lg">
                  <svg
                    className="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 flex-shrink-0"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                  </svg>
                  Receba propostas
                </li>
                <li className="flex items-center xl:text-xl font-sans py-2 md:text-2xl 3sm:text-lg">
                  <svg
                    className="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 flex-shrink-0"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                  </svg>
                  Escolha um freelancer
                </li>
                <li className="flex items-center xl:text-xl font-sans py-2 md:text-2xl 3sm:text-lg">
                  <svg
                    className="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 flex-shrink-0"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                  </svg>
                  Negocie com os profissionais
                </li>
                <li className="flex items-center xl:text-xl font-sans py-2 md:text-2xl 3sm:text-lg">
                  <svg
                    className="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 flex-shrink-0"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                  </svg>
                  Avalie os candidatos e projetos realizados
                </li>
              </ul>
              {/* <div className="mt-8">
                <a
                  href="#"
                  className="inline-flex items-center justify-center px-5 py-3 mr-3 font-medium text-center rounded-lg bg-gradient-to-l from-secundary to-terciary text-white disabled:opacity-50 transition-all"
                >
                  Publicar um projeto ➔
                </a>
              </div> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
