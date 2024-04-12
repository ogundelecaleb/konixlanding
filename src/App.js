import "./App.css";
import Header from "./component/Header";
import AccordionWrapper from "./component/AccordionWrapper";
import AccordionItem from "./component/Accordion";
import { GooglePlay, Apple } from "iconsax-react";
import { FaInstagram, FaXTwitter } from "react-icons/fa6";
import { FiLinkedin } from "react-icons/fi";
import "animate.css/animate.min.css";
import ScrollAnimation from "react-animate-on-scroll";

import { gsap } from "gsap";
import { useEffect } from "react";

function App() {
  // useEffect(() => {
  //   let textAnimation = gsap.timeline();
  //   textAnimation.from('.text', {
  //    y: 100,
  //    stagger: {
  //     each: 0.07
  //    }
  //   });
  //  }, []);
  // const Letter = ({ space, letter }) => {
  //   return space == true ? (
  //     <div className="text">&nbsp;</div>
  //   ) : (
  //     <div className="font-bold flex overflow-hidden text-[72px] tracking-[0.002] leading-[95px] text-center">{letter}</div>
  //   );
  // };
  const data = [
    {
      title:
        "Can I shop from any international luxury brand with your product?",
      description:
        "Yes, our platform provides access to a wide range of renowned international luxury brands, ensuring you can shop for your favorite items hassle-free.",
    },
    {
      title: "How does Konix handle currency conversions?",
      description:
        "Konix automatically converts prices to Naira, allowing you to browse and shop without worrying about exchange rates. You'll see transparent and accurate pricing.",
    },
    {
      title: "What shipping options are available for international purchases?",
      description:
        "We offer a reliable shipping option, including expedited shipping for faster delivery and reliable tracking services to monitor your package every step of the way.",
    },
    {
      title: "Is it safe to make transactions through Konix?",
      description:
        "Absolutely. We prioritize the security of our users' transactions by partnering with trusted payment gateways. Your payment information is always kept secure and confidential.",
    },
    {
      title: "What happens if I need to return an item purchased?",
      description:
        "Absolutely. We prioritize the security of our users' transactions by partnering with trusted payment gateways. Your payment information is always kept secure and confidential.",
    },
  ];
  return (
    <div>
      <Header className="z-40 absolute" />

      <div className="px-[16px] sm:px-[36px] md:px-[48px] lg:px-[64px] relative pt-[24px] h-[560px] md:h-[700px] lg:h-[810px]">
        <div className="mt-[80px] md:mt-[120px]">
          <div className="max-w-[279px] text-[14px] md:text-[16px] mx-auto rounded-[24px] px-[24px] py-[10px] bg-[#f3efff] hover:bg-[#e6dffa]">
            Unlock Global Luxury Shopping
          </div>
          {/* <div className="">
            {"Shop International Brands"
              .split("")
              .map((i) =>
                i == " " ? (
                  <Letter space={true} letter={i} />
                ) : (
                  <Letter space={false} letter={i} />
                )
              )}
          </div> */}

          {/* <ScrollAnimation animateIn="animate__fadeInDown"> */}
          <h2 className="animate__animated animate__fadeInDown animate__delay-0.5s  font-bold text-center text-[36px] sm:text-[48px] md:text-[64px] lg:text-[72px] tracking-[0.002] leading-[36px] sm:leading-[42px] md:leading-[72px] lg:leading-[95px]  mt-[8px] ">
            Shop International Brands <br /> Effortlessly with Konix
          </h2>
          {/* </ScrollAnimation> */}

          <h3 className="text-base md:text-lg font-medium text-[#555555] text-center mt-[16px] ">
            Elevate your shopping experience with Konix today! Access to
            exclusive collections, effortlessly <br /> navigate currency
            conversions, and enjoy seamless shipping.
          </h3>
        </div>

        <img
          src="./images/Ellipse.svg"
          alt=""
          className="absolute top-0 left-0 h-full  w-full -z-10 "
        />
        <img
          src="./images/mapp.png"
          alt=""
          className="absolute bottom-0 left-0   -z-20 "
        />
      </div>
      <section className="mt-[60px] md:mt-[80px] px-[16px] sm:px-[36px] md:px-[48px] lg:px-[64px]">
        <div className="mt-[80px] mb-[60px]">
          <h3 className="text-[24px] md:text-[26px] lg:text-[32px] mb-[38px] md:mb-[56px] tracking-[0.002] leading-[40px] text-center font-medium">
            100+ Brands are live on Konix
          </h3>
          <ul className="flex gap-[36px] sm:gap-[46px] md:gap-[54px] lg:gap-[72px] justify-center items-center">
            {" "}
            <li>
              <img src="./images/addidas.png" alt="logo" />
            </li>
            <li>
              <img src="./images/newbalancee.png" alt="logo" />
            </li>
            <li>
              <img src="./images/chanel.png" alt="logo" />
            </li>
            <li>
              <img src="./images/asos.png" alt="logo" />
            </li>
            <li>
              <img src="./images/fendi.png" alt="logo" />
            </li>{" "}
            <li>
              <img src="./images/prada.png" alt="logo" />
            </li>
          </ul>
        </div>
      </section>
      <section
        id="benefit"
        className="mt-[60px] md:mt-[80px] px-[16px] sm:px-[36px] md:px-[48px] lg:px-[64px]"
      >
        <div className="max-w-[646px] mb-[48px] mx-auto">
          <ScrollAnimation animateIn="animate__fadeInDown">
            <h3 className="text-[24px] md:text-[26px] lg:text-[32px] mb-[24px] tracking-[0.002] leading-[40px] text-center font-bold">
              Check Out Our Feature
            </h3>
          </ScrollAnimation>

          <p className="text-sm md:text-[16px] font-normal text-[#7a7a7a] text-center leading-[24px] tracking-[0.002] ">
            Get to know all the features we have to serve you the right way and
            get used to the features, cause they’re for you!
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-7">
          <div className="w-full md:w-[50%] ">
            <div className="rounded-[16px] mb-[20px] border-opacity-10 border-[#000000] border-[0.4px] s-md pt-[24px] md:pt-[32px] px-[24px] md:px-[32px] bg-[#FBFBFB]">
              <div className="mb-[36px] md:mb-[61px] max-w-[476px]">
                <p className="mb-[16px] font-normal text-base leading-6 tracking-tighter text-[#463B66]">
                  SEARCH FILTER
                </p>
                <p className="mb-[8px] font-bold text-lg leading-7 tracking-tighter text-[#463B66]">
                  Easily search for product by store
                </p>
                <p className="text-[16px] font-normal text-[#7a7a7a] leading-[24px] tracking-[0.002] ">
                  Focus your search on a particular product and from a
                  particular store, sounds cool! Yeah?
                </p>
              </div>

              <img src="./images/search.png" alt="" className="mx-auto" />
            </div>
            <div className="rounded-[16px] border-opacity-10 border-[#000000] border-[0.4px] s-md pt-[24px] md:pt-[32px] px-[24px] md:px-[32px] bg-[#FBFBFB]">
              <div className="mb-[18px] md:mb-[20px] max-w-[476px]">
                <p className="mb-[16px] font-normal text-base leading-6 tracking-tighter text-[#463B66]">
                  WALLET TOKENIZATION
                </p>
                <p className="mb-[8px] font-bold text-lg leading-7 tracking-tighter text-[#463B66]">
                  Add you card to your konix wallet{" "}
                </p>
                <p className="text-[16px] font-normal text-[#7a7a7a] leading-[24px] tracking-[0.002] ">
                  Users can link their debit card to their Konix wallet for ease
                  of funding and send funds to multiple users
                </p>
              </div>

              <img src="./images/card.png" alt="" className="mx-auto" />
            </div>
          </div>
          <div className="w-full md:w-[50%] ">
            {" "}
            <div className="rounded-[16px] h-[303px] md:h-[419px] relative mb-[20px] border-opacity-10 border-[#000000] border-[0.4px] s-md pt-[24px] md:pt-[32px] px-[24px] md:px-[32px] bg-[#FBFBFB]">
              <div className="mb-[18px] md:mb-[24.77px] max-w-[476px]">
                <p className="mb-[16px] font-normal text-base leading-6 tracking-tighter text-[#463B66]">
                  STORES OPTION{" "}
                </p>
                <p className="mb-[8px] font-bold text-lg leading-7 tracking-tighter text-[#463B66]">
                  Multiple brands to pick from{" "}
                </p>
                <p className="text-[16px] font-normal text-[#7a7a7a] leading-[24px] tracking-[0.002] ">
                  With access to over 100 brands, you can shop seemlessly across
                  each store
                </p>
              </div>
              <img
                src="./images/rowlogo.png"
                alt=""
                className="mx-auto h-[40px] md:h-[54px]"
              />
              <img
                src="./images/rowlogocut.png"
                alt=""
                className="absolute left-0 bottom-[40px] md:bottom-[60px] h-[40px] md:h-[54px]"
              />
            </div>
            <div className="rounded-[16px] border-opacity-10 border-[#000000] border-[0.4px] s-md pt-[24px] md:pt-[32px] px-[24px] md:px-[32px] bg-[#FBFBFB]">
              <div className="mb-[36px] md:mb-[80px] max-w-[476px]">
                <p className="mb-[16px] font-normal text-base leading-6 tracking-tighter text-[#463B66]">
                  CART SHARING
                </p>
                <p className="mb-[8px] font-bold text-lg leading-7 tracking-tighter text-[#463B66]">
                  Share your cart to your mutuals
                </p>
                <p className="text-[16px] font-normal text-[#7a7a7a] leading-[24px] tracking-[0.002] ">
                  You have access to share your cart to your mutuals and also
                  preview your cart before sharing
                </p>
              </div>

              <img src="./images/share.png" alt="" className="mx-auto" />
            </div>
          </div>
        </div>
      </section>
      <section
        id="howitworks"
        className="mt-[60px] md:mt-[80px] px-[16px] sm:px-[36px] md:px-[48px] lg:px-[64px]"
      >
        <div className="max-w-[646px] mb-[48px] mx-auto">
          <ScrollAnimation animateIn="animate__fadeInDown">
            <h3 className="text-[24px] md:text-[26px] lg:text-[32px] mb-[24px] tracking-[0.002] leading-[40px] text-center font-bold">
              How Konix Works?
            </h3>
          </ScrollAnimation>

          <p className="text-[16px] font-normal text-[#7a7a7a] text-center leading-[24px] tracking-[0.002] ">
            See how the app works from onboarding to product ordering
          </p>
        </div>

        <div className="flex justify-center gap-[24px] md:gap-[10px] flex-wrap  items-center flex-row w-full ">
          <div>
            <div className="mb-[16px] rounded-[16px] border-opacity-10 border-[#000000] border-[0.4px] s-md  bg-[#fbfbfb] flex justify-center items-end w-[360px] md:w-[400px] h-[380px] md:h-[461px]">
              <img
                alt=""
                src="./images/storeMenu.png"
                className="w-[240px] md:w-[280px] h-[320px] md:h-[380px]"
              />
            </div>
            <div className=" w-full rounded-[16px] border-opacity-10 border-[#000000] border-[0.4px] s-md  bg-[#fbfbfb] flex justify-center items-center max-w-[424px] h-[54px] md:h-[74px]">
              <p className="text-[18px] md:text-[20px] lg:text-[24px] font-medium leading-[30px] tracking-[0.002] ">
                Go to the store menu
              </p>
            </div>
          </div>

          <div>
            <div className="mb-[16px] rounded-[16px] border-opacity-10 border-[#000000] border-[0.4px] s-md  bg-[#fbfbfb] flex justify-center items-end w-[360px] md:w-[400px] h-[380px] md:h-[461px]">
              <img
                alt=""
                src="./images/store.png"
                className="w-[240px] md:w-[280px] h-[320px] md:h-[380px]"
              />
            </div>
            <div className=" w-full rounded-[16px] border-opacity-10 border-[#000000] border-[0.4px] s-md  bg-[#fbfbfb] flex justify-center items-center max-w-[424px] h-[54px] md:h-[74px]">
              <p className="text-[18px] md:text-[20px] lg:text-[24px] font-medium leading-[30px] tracking-[0.002] ">
                Add product to cart
              </p>
            </div>
          </div>

          <div>
            <div className="mb-[16px] rounded-[16px] border-opacity-10 border-[#000000] border-[0.4px] s-md  bg-[#fbfbfb] flex justify-center items-end w-[360px] md:w-[400px] h-[380px] md:h-[461px]">
              <img
                alt=""
                src="./images/congrats.png"
                className="w-[240px] md:w-[280px] h-[320px] md:h-[380px]"
              />
            </div>
            <div className=" w-full rounded-[16px] border-opacity-10 border-[#000000] border-[0.4px] s-md  bg-[#fbfbfb] flex justify-center items-center max-w-[424px] h-[54px] md:h-[74px]">
              <p className="text-[18px] md:text-[20px] lg:text-[24px] font-medium leading-[30px] tracking-[0.002] ">
                Place order
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-[60px] md:mt-[80px] px-[16px] sm:px-[36px] md:px-[48px] lg:px-[64px]">
        <div className="max-w-[646px] mb-[48px] mx-auto">
          <ScrollAnimation animateIn="animate__fadeInDown">
            <h3 className="text-[24px] md:text-[26px] lg:text-[32px] mb-[24px] tracking-[0.002] leading-[40px] text-center font-bold">
              Easy & Seemless <br /> Onboarding Process
            </h3>
          </ScrollAnimation>
        </div>

        <div className="flex justify-center gap-[24px]  md:gap-[10px] flex-wrap  items-center flex-row w-full ">
          {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"> */}
          <div className="">
            <div className="mb-[16px] rounded-[16px] border-opacity-10 border-[#000000] border-[0.4px] s-md  bg-[#fbfbfb] flex justify-center items-start w-[360px] md:w-[400px] h-[380px] md:h-[461px]">
              <img
                alt=""
                src="./images/successful.png"
                className="w-[240px] md:w-[280px] h-[320px] md:h-[380px]"
              />
            </div>
            <div className=" w-full rounded-[16px] border-opacity-10 border-[#000000] border-[0.4px] s-md  bg-[#fbfbfb] flex justify-center items-center max-w-[424px] h-[54px] md:h-[74px]">
              <p className="text-[18px] md:text-[20px] lg:text-[24px] font-medium leading-[30px] tracking-[0.002] ">
                Easy to create account{" "}
              </p>
            </div>
          </div>

          <div>
            <div className="mb-[16px] rounded-[16px] border-opacity-10 border-[#000000] border-[0.4px] s-md  bg-[#fbfbfb] flex justify-center items-end w-[360px] md:w-[400px] h-[380px] md:h-[461px]">
              <img
                alt=""
                src="./images/skip1.png"
                className="w-[240px] md:w-[280px] h-[320px] md:h-[380px]"
              />
            </div>
            <div className=" w-full rounded-[16px] border-opacity-10 border-[#000000] border-[0.4px] s-md  bg-[#fbfbfb] flex justify-center items-center max-w-[424px] h-[54px] md:h-[74px]">
              <p className="text-[18px] md:text-[20px] lg:text-[24px] font-medium leading-[30px] tracking-[0.002] ">
                Select your interest{" "}
              </p>
            </div>
          </div>

          <div>
            <div className="mb-[16px] rounded-[16px] border-opacity-10 border-[#000000] border-[0.4px] s-md  bg-[#fbfbfb] flex justify-center items-start w-[360px] md:w-[400px] h-[380px] md:h-[461px]">
              <img
                alt=""
                src="./images/skip3.png"
                className="w-[240px] md:w-[280px] h-[320px] md:h-[380px]"
              />
            </div>
            <div className=" w-full rounded-[16px] border-opacity-10 border-[#000000] border-[0.4px] s-md  bg-[#fbfbfb] flex justify-center items-center max-w-[424px] h-[54px] md:h-[74px]">
              <p className="text-[18px] md:text-[20px] lg:text-[24px] font-medium leading-[30px] tracking-[0.002] ">
                Customize your interest{" "}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="faq"
        className="pt-[80px] px-[16px] md:px-[40px] lg:px-[60px] w-full"
      >
        <div className="max-w-[646px] mb-[48px] mx-auto">
          <ScrollAnimation animateIn="animate__fadeInDown">
            <h3 className="text-[24px] md:text-[26px] lg:text-[32px] mb-[24px] tracking-[0.002] leading-[40px] text-center font-bold">
              FAQ
            </h3>
          </ScrollAnimation>

          <p className="text-[16px] font-normal text-[#7a7a7a] text-center leading-[24px] tracking-[0.002] mb-[36px] md:mb-[54px] ">
            Some frequently asked questions
          </p>

          <AccordionWrapper>
            {data.map((item, index) => (
              <AccordionItem
                key={index}
                index={index}
                title={item.title}
                description={item.description}
              />
            ))}
          </AccordionWrapper>
        </div>
      </section>

      <section className="pt-[80px] px-[16px] md:px-[40px] lg:px-[60px] w-full">
        <div className=" relative h-[400px] md:h-[468px] rounded-[16px] border-opacity-10 border-[#000000] border-[0.4px] s-md pt-[24px] md:pt-[32px] px-[16px] md:px-[32px] bg-[#FBFBFB]">
          <div className="max-w-[603px]">
            <h2 className="text-[24px] md:text-[26px] lg:text-[32px] mb-[24px] tracking-[0.002] leading-[40px] font-bold">
              Join Konix today and enjoy <br /> seemless shopping experience
            </h2>
            <p className="text-[16px] font-normal text-[#171717] leading-[24px] tracking-[0.002] ">
              With Konix you enjoy shopping from your favourite int’l luxury
              brand with ease, share your order cart with your mutuals and so
              much more...
            </p>
          </div>

          <div className="max-w-[275px] absolute left-[48px] bottom-[48px] flex gap-[24px] rounded-[40px] px-[24px] py-[16px] bg-[#fff] hover:bg-[#e6dffa] z-30 cursor-pointer">
            <p className="text-[16px] leading-[24px] tracking-[0.002]">
              Download our app
            </p>{" "}
            <div className="flex items-center gap-[16px]">
              <GooglePlay size="24" color="#000" variant="Bold" />{" "}
              <Apple size="24" color="#000" variant="Bold" />
            </div>
          </div>

          <img
            src="./images/WorldMap.png"
            alt="map"
            className="absolute bottom-0 right-0"
          />
        </div>
      </section>

      <section className="pt-[80px] px-[16px] md:px-[40px] lg:px-[60px] w-full">
        <div className="flex flex-col md:flex-row gap-8 md:gap-[60px] xl:gap-[100px] mb-[60px] md:mb-[120px] xl:mb-[180px]">
          <div className="w-[90%] md:max-w-[199px]">
            <img
              src="./images/logo.png"
              alt="logo"
              className="h-[52px] md:h-[61px]"
            />
            <p className="text-[16px] md:text-[18px] font-normal tracking-[0.002px] leading-[27px]">
              Bringing luxury to your doorstep with easy.
            </p>
          </div>
          <div className="flex flex-col md:flex-row gap-4 md:gap-[60px] justify-between flex-1">
            <div className="">
              <p className="text-[18px] md:text-[24px] font-medium tracking-[0.002] leading-[30px] mb-[20px] md:mb-[32px]">
                Products
              </p>
              <ul className="flex flex-col gap-[10px] md:gap-[24px]">
                <a href="#benefit">
                  {" "}
                  <li className="text-[16px] md:text-[18px] tracking-[0.002] leading-[27px] font-normal">
                    Benefits
                  </li>
                </a>
                <a href="#howitworks">
                  {" "}
                  <li className="text-[16px] md:text-[18px] tracking-[0.002] leading-[27px] font-normal">
                    How it works
                  </li>
                </a>
                <a href="#faq">
                  <li className="text-[16px] md:text-[18px] tracking-[0.002] leading-[27px] font-normal">
                    FAQs
                  </li>
                </a>
              </ul>
            </div>
            <div>
              <p className="text-[18px] md:text-[24px] font-medium tracking-[0.002] leading-[30px] mb-[20px] md:mb-[32px]">
                Contact
              </p>
              <ul className="flex flex-col gap-[10px] md:gap-[24px]">
                <li className="text-[16px] md:text-[18px] tracking-[0.002] leading-[27px] font-normal">
                  +1 800 234 3432
                </li>
                <li className="text-[16px] md:text-[18px] tracking-[0.002] leading-[27px] font-normal">
                  info@konix.com
                </li>
                <li className="text-[16px] md:text-[18px] tracking-[0.002] leading-[27px] font-normal">
                  10, Afeez Jakande Alausa, Ikeja, Lagos
                </li>
              </ul>
            </div>
            <div className="">
              <div className="max-w-[275px]  left-[48px] bottom-[48px] flex gap-[24px] rounded-[40px] px-[24px] py-[16px] bg-[#e6dffa] hover:bg-[#fff] z-30 cursor-pointer">
                <p className="text-[16px] leading-[24px] tracking-[0.002]">
                  Download our app
                </p>{" "}
                <div className="flex items-center gap-[16px]">
                  <GooglePlay size="24" color="#000" variant="Bold" />{" "}
                  <Apple size="24" color="#000" variant="Bold" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center mb-[32px] ">
          <div>
            <p className="text-base leading-[24px] tracking-[0.002]">
              ©2024 Konixapp. All rights reserved.
            </p>
          </div>
          <div className="flex gap-2 items-center">
            <FaXTwitter />
            <FiLinkedin />
            <FaInstagram />
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
