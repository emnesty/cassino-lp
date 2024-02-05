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
            </div>
          </div>
          <div
            className="items-center mx-auto mt-10 grid grid-cols-5 justify-center  gap-x-8 gap-y-10 sm:grid-cols-1 sm:gap-x-10 lg:mx-0 lg:grid-cols-5"
            data-aos="fade-up"
            data-aos-duration="900"
          >
            <img
              className="col-span-2 max-h-20 w-full object-contain object-center lg:col-span-1"
              src="images/sqala-logo.svg"
              alt="Sqala"
              width={458}
              height={100}
            />
            <img
              className="col-span-2 max-h-20  w-full object-contain object-center lg:col-span-1"
              src="images/bpay-logo.svg"
              alt="Bpay"
              width={800}
              height={100}
            />
            <img
              className="col-span-2 max-h-20  w-full object-contain object-center lg:col-span-1"
              src="images/SuitPay-Branco.png"
              alt="Suitpay"
              width={158}
              height={48}
            />
            <img
              className="col-span-2 max-h-20  w-full object-contain object-center lg:col-span-1"
              src="images/stripe-seeklogo 1.svg"
              alt="Stripe"
              width={158}
              height={48}
            />
            <img
              className="col-span-2 max-h-20  w-full object-contain object-center lg:col-span-1"
              src="images/logo-light.a12d0d81.png"
              alt="Ezzebank"
              width={158}
              height={48}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
