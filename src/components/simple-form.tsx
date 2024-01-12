import Image from "next/image";

export default function SimpleForm() {
  return (
    <>
      <section className="bg-gradient-to-tr from-primary to-secundary relative isolate overflow-hidden h-fit">
       
        <div className="flex lg:gap-8 xl:gap-0 lg:grid-cols-12">
          <div className=" md:mb-10 lg:mb-0 lg:mt-0 lg:col-span-5 lg:flex">
            <Image
              className="rotate-4 xsm:hidden lg:block"
              src="/image/women.png"
              alt="Mulher"
              width={876.41}
              height={996.28}
            />
          </div>
          <div className="lg:mb-0 place-self-center py-18 w-fit max-w-xl lg:ml-20">
            <h3 className="text-white xsm:text-center mb-4 xsm:pt-10 lg:pt-0 2sm:text-center 3sm:text-xl 3sm:text-center md:text-start tracking-tight leading-none xl:text-6xl md:text-3xl">
              Contrate de forma simples e prática
            </h3>
            <p className="xsm:text-center 2sm:text-center xl:text-2xl text-gray-400 lg:mb-8 md:text-2xl 3sm:text-center md:text-start lg:text-xl my-8">
              Inicie hoje mesmo, de forma gratuita, anunciando uma vaga em nossa
              plataforma
            </p>
            <div className="max-w-lg sm:gap-4 flex xsm:pb-10 lg:pb-0">
              <a
                href="#"
                className="inline-flex items-center xsm:px-0 2sm:px-1 justify-center px-10 3sm:px-3 py-5 text-sm font-medium text-center rounded-lg hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 bg-white text-secundary hover:text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 transition-all"
              >
                Publicar uma vaga ➔
              </a>
              <a
                href="#"
                className="inline-flex items-center xsm:px-0 2sm:px-1 justify-center px-10 3sm:px-3 py-5 text-sm font-medium text-center rounded-lg bg-gray-700 text-white hover:bg-secundary disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 transition-all"
              >
                Fale com a gente
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
