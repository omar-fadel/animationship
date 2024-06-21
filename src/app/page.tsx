import Image from "next/image";

export default function Home() {
  return (
    <main className="w-screen h-screen bg-navy-blue flex justify-center items-center">
      <div className="px-6 max-w-screen-lg flex bg bg-background-1 bg-cover bg-center flex-col items-center text-center justify-center text-white gap-16">
        <section className="flex flex-col items-center justify-center">
          <Image
            className="mb-2"
            alt="logo"
            src={"/svg/Logo.svg"}
            height={56}
            width={241}
          />
          <Image alt="logo2" src={"/svg/Logo2.svg"} height={18} width={164} />
        </section>
        <section>
          <h1 className="text-h1 ">Warming Up</h1>
          <p className="text-body ">Full version will be available shortly</p>
        </section>
        <section>
          <h2 className="text-h2 mb-6">
            Meanwhile, take a look at our interactive fun company profile
          </h2>
          <button className="p-4 py-3 rounded-lg bg-simon hover:bg-red-800 hover:scale-110 transition-all text-button">
            <div className="flex items-center gap-4">
              <Image
                src={"/svg/Company Profile.svg"}
                height={16}
                width={16}
                alt="Company Profile"
              />
              <p className="text-button">Company Profile</p>
            </div>
          </button>
        </section>
        <section className="flex flex-col items-center gap-2">
          <h3 className="text-h3">Reach out to us</h3>
          <div className="flex items-center gap-4">
            <Image src={"/svg/Mail.svg"} height={24} width={24} alt="Mail" />
            <a
              href="mailto:hello@thegymbrand.agency"
              className="text-bodySmall"
            >
              hello@thegymbrand.agency
            </a>
          </div>
          <div className="flex items-center gap-4">
            <Image src={"/svg/phone.svg"} height={16} width={16} alt="Mail" />
            <a href="tel:+201097982012" className="text-bodySmall">
              +20 10 9798 2012
            </a>
          </div>
          <div className="flex items-center gap-4">
            <Image
              src={"/svg/whatsapp.svg"}
              height={24}
              width={24}
              alt="Mail"
            />
            <a
              href={`https://wa.me/message/E54ABTXS2QOXJ1?text="Hello"`}
              target="_blank"
              className="text-bodySmall"
            >
              +971 52 136 1240
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
