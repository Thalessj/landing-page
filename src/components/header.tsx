import Image from "next/image";

export default function Header() {
  return (
    <>
      <nav className="bg-white border-gray-200 h-1/2">
        <div className="h-1/5 max-w-7xl flex xsm:gap-8 2xl:justify-between xl:justify-between lg:justify-around md:justify-around sm:justify-around justify-center 2sm:gap-20 md:gap-0 items-center mx-auto">
          <a href="/" className="flex items-center">
            <Image
              src="/image/LogoPreta.png"
              width={182}
              height={52}
              alt="Picture of the author"
              className="lg:justify-between rounded-xl"
            />
          </a>
          <div className="h-20 md:block md:w-auto justify-center content-center mt-5" id="navbar-default">
            <a href="" className="">
              <button
                type="button"
                className="self-center whitespace-nowrap py-3 px-4 justify-center inline-flex items-center text-md 3sm:text-md font-semibold rounded-lg bg-black text-white"
              >
                Solicitar free-lancer
              </button>
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}
