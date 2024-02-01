export default function LogoCloudsSection() {
  return (
    <div className="bg-gray-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <h2
            className="text-lg font-semibold leading-8 text-white"
            data-aos="fade-up"
            data-aos-duration="900"
          >
            Gateways de pagamentos suportados
          </h2>
          <div
            className="mx-auto mt-10 grid grid-cols-4 items-start gap-x-8 gap-y-10 sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:grid-cols-5"
            data-aos="fade-up"
            data-aos-duration="900"
          >
            <img
              className="col-span-2 max-h-20 w-full object-contain object-left lg:col-span-1"
              src="images/sqala-logo.svg"
              alt="Tuple"
              width={458}
              height={100}
            />
            <img
              className="col-span-2 max-h-20  w-full object-contain object-left lg:col-span-1"
              src="images/bpay-logo.svg"
              alt="SavvyCal"
              width={800}
              height={100}
            />
            <img
              className="col-span-2 max-h-20  w-full object-contain object-left lg:col-span-1"
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
