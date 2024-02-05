export default function LogoCloudsSection() {
  return (
    <div className="bg-gray-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <div className="mx-auto max-w-2xl lg:max-w-none">
            <div className="text-center">
              <h2
                className="text-3xl font-bold tracking-tight text-white sm:text-4xl"
                data-aos="fade-up"
                data-aos-duration="900"
              >
                Gateways de pagamentos suportados
              </h2>
              <p
                className="mt-4 text-lg leading-8 text-gray-300 mb-10"
                data-aos="fade-up"
                data-aos-duration="900"
              >
                Lorem ipsum dolor sit amet consect adipisicing possimus.
              </p>
              <a
                href="#"
                className="rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
                data-aos="fade-left"
                data-aos-duration="80"
              >
                Conheça agora
              </a>
            </div>
          </div>
          <div
            className="items-center mx-auto mt-10 grid grid-cols-3 justify-center  gap-x-8 gap-y-10 sm:grid-cols-1 sm:gap-x-10 lg:mx-0 lg:grid-cols-3"
            data-aos="fade-up"
            data-aos-duration="900"
          >
            <img
              className="col-span-2 max-h-20 w-full object-contain object-center lg:col-span-1"
              src="images/sqala-logo.svg"
              alt="Tuple"
              width={458}
              height={100}
            />
            <img
              className="col-span-2 max-h-20  w-full object-contain object-center lg:col-span-1"
              src="images/bpay-logo.svg"
              alt="SavvyCal"
              width={800}
              height={100}
            />
            <img
              className="col-span-2 max-h-20  w-full object-contain object-center lg:col-span-1"
              src="images/SuitPay-Branco.png"
              alt="Statamic"
              width={158}
              height={48}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
