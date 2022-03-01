import Image from "next/image";
import Layout from "../components/Layout";
import useEmblaCarousel from "embla-carousel-react";
import Logo from "../public/header/logo-header.svg";
import Logolanding from "../public/logo-landing.svg";
import Logolandingxs from "../public/logo-landing-xs.svg";
import Carousel1 from "../public/carousel/carousel-1.svg";
import Carousel2 from "../public/carousel/carousel-2.svg";
import Carousel3 from "../public/carousel/carousel-3.svg";
import Carousel4 from "../public/carousel/carousel-4.svg";
import Redman from "../public/nft/red-man.svg";
import Redmanxs from "../public/nft/red-man-xs.svg";
import Cardblack from "../public/nft/card-black.svg";
import Iconnftlanding from "../public/icon-nftlanding.svg";
import Graphicnft from "../public/graphic-nft.svg";
import Bomerang from "../public/logo/boomerang.svg";
import Blimp from "../public/logo/blimp.svg";
import Droplet from "../public/logo/droplet.svg";
import Qrco from "../public/logo/qrco.svg";
import Icon1 from "../public/nft/icon-1.svg";
import Icon2 from "../public/nft/icon-2.svg";

export default function Home() {
  const [emblaRef] = useEmblaCarousel({ loop: false });
  return (
    <div>
      <Layout title={process.env.appName}>
        <div className="section-hero bg-white px-6 md:px-12">
          <div className="hero-landing grid grid-flow-col">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-pink-500 md:text-base">
                Launching Soon
              </span>
              <p className="mt-4 text-3xl font-black leading-tight sm:text-6xl md:w-8/12 md:text-4xl md:leading-tight xl:text-7xl xl:leading-tight">
                An NFT like no other
              </p>
              <div className="absolute mt-6 w-8/12 md:w-5/12">
                <span className="text-base leading-7 md:text-xl">
                  Don’t miss out on the release of our new NFT. Sign up below to
                  receive updates when we go live.
                </span>
              </div>

              <div className="mt-40 sm:mt-28 md:mt-36 xl:mt-32">
                <a href="#">
                  <btn className="btn-primary text-base font-semibold">
                    Sign Up
                  </btn>
                </a>
              </div>
            </div>
            <div className="xs:hidden -mr-48 -mt-10 sm:-mr-32 sm:block md:-mt-20 md:-mr-0 md:block lg:w-10/12">
              <Image
                className="w-12/12 animate-skew"
                src={Logolanding}
                alt="image-landing"
              />
            </div>
            <div className="right-0 -mr-6 -mt-10 sm:hidden">
              <Image
                className="w-full"
                src={Logolandingxs}
                alt="image-alt-text"
              />
            </div>
          </div>
        </div>

        <div className="section-nft mt-24 mb-8 md:mt-28 md:rounded-lg md:px-12">
          <div className="bg-nft px-6 md:rounded-lg md:px-12">
            <div className="grid grid-flow-col pt-0 md:pt-6">
              <div className="mt-4 w-11">
                <Image src={Iconnftlanding} alt="icon-nft" />
              </div>
              <div className="absolute right-0 mx-12 md:mx-0">
                <div className="-mt-7 w-28 md:-mt-20 md:w-8/12">
                  <Image src={Graphicnft} alt="graphic-nft" />
                </div>
              </div>
            </div>
            <div className="mt-5">
              <p className="text-3xl font-normal">Free NFT for early birds</p>
            </div>
            <div className="mt-4 w-10/12 pb-5 md:pb-10">
              <span className="text-base font-normal text-gray-900">
                Sign up today and you’ll get a free NFT when we launch.
              </span>
            </div>
          </div>
        </div>

        <div className="section-logo mt-12 pb-12 md:mt-20">
          <div className="mx-auto bg-white px-6 lg:px-12">
            <ul className="grid grid-cols-2 gap-4 md:flex md:gap-2">
              <li className="ml-2 w-11/12 md:w-4/12">
                <Image className="mx-auto" src={Bomerang} alt="" />
              </li>
              <li className="ml-2 w-8/12 md:w-4/12">
                <Image className="mx-auto" src={Blimp} alt="" />
              </li>
              <li className="ml-2 w-7/12 md:w-4/12">
                <Image className="mx-auto" src={Qrco} alt="" />
              </li>
              <li className="ml-2 w-9/12 md:w-4/12">
                <Image className="mx-auto" src={Droplet} alt="" />
              </li>
            </ul>
          </div>
        </div>

        <div className="section-imgnft mt-2 mb-8">
          <div className="mx-6 md:px-6">
            <div className="text-3xl font-medium">
              <p>LE Super Rare Auction</p>
            </div>
            <div className="mt-4">
              <span className="text-base font-normal text-gray-700">
                We have released four limited edition NFTs early which can be
                bid on via{" "}
                <span className="border-b-2 text-gray-900">OpenSea.</span>
              </span>
            </div>
          </div>
        </div>

        <div className="section-carousel mt-2 mb-8">
          <div className="bg-white px-6 md:px-12">
            <div className="embla" ref={emblaRef}>
              <div className="embla__container">
                <div className="embla__slide">
                  <div className="w-full md:w-5/12">
                    <Image src={Carousel1} alt="slide-1" />
                    <div className="-mt-2 grid grid-cols-2 rounded-b-xl bg-gray-400/20 pb-3">
                      <p className="mt-3 ml-2 text-[9px] font-medium uppercase text-orange-500 lg:text-xs">
                        Gloop Series
                      </p>
                      <p className="mt-3 ml-6 text-[9px] uppercase lg:text-xs">
                        Top bid
                      </p>
                      <p className="mt-1 ml-2 text-[10px] font-medium uppercase text-gray-900 lg:text-base">
                        Purple Man
                      </p>
                      <p className="mt-1 ml-6 text-[10px] uppercase lg:text-base">
                        2.99 ETH
                      </p>
                      <p className="mt-1 ml-2 text-[9px] text-gray-500 lg:text-sm">
                        #12983
                      </p>
                      <p className="mt-1 ml-6 text-[9px] text-gray-500 lg:text-sm">
                        1 day left
                      </p>
                    </div>
                  </div>
                </div>
                <div className="embla__slide">
                  <div className="w-12/12 md:w-5/12">
                    <Image src={Carousel2} alt="slide-2" />
                    <div className="-mt-2 grid grid-cols-2 rounded-b-xl bg-gray-400/20 pb-3">
                      <p className="mt-3 ml-2 text-[9px] font-medium uppercase text-orange-500 lg:text-xs">
                        Gloop Series
                      </p>
                      <p className="mt-3 ml-6 text-[9px] uppercase lg:text-xs">
                        Top bid
                      </p>
                      <p className="mt-1 ml-2 text-[10px] font-medium uppercase text-gray-900 lg:text-base">
                        Beige
                      </p>
                      <p className="mt-1 ml-6 text-[10px] uppercase lg:text-base">
                        2.99 ETH
                      </p>
                      <p className="mt-1 ml-2 text-[9px] text-gray-500 lg:text-sm">
                        #12983
                      </p>
                      <p className="mt-1 ml-6 text-[9px] text-gray-500 lg:text-sm">
                        1 day left
                      </p>
                    </div>
                  </div>
                </div>
                <div className="embla__slide">
                  <div className="w-12/12 md:w-5/12">
                    <Image src={Carousel3} alt="slide-3" />
                    <div className="-mt-2 grid grid-cols-2 rounded-b-xl bg-gray-400/20 pb-3">
                      <p className="mt-3 ml-2 text-[9px] font-medium uppercase text-orange-500 lg:text-xs">
                        Gloop Series
                      </p>
                      <p className="mt-3 ml-6 text-[9px] uppercase lg:text-xs">
                        Top bid
                      </p>
                      <p className="mt-1 ml-2 text-[10px] font-medium uppercase text-gray-900 lg:text-base">
                        Red Man
                      </p>
                      <p className="mt-1 ml-6 text-[10px] uppercase lg:text-base">
                        2.99 ETH
                      </p>
                      <p className="mt-1 ml-2 text-[9px] text-gray-500 lg:text-sm">
                        #12983
                      </p>
                      <p className="mt-1 ml-6 text-[9px] text-gray-500 lg:text-sm">
                        1 day left
                      </p>
                    </div>
                  </div>
                </div>
                <div className="embla__slide">
                  <div className="w-12/12 md:w-5/12">
                    <Image src={Carousel4} alt="slide-4" />
                    <div className="-mt-2 grid grid-cols-2 rounded-b-xl bg-gray-400/20 pb-3">
                      <p className="mt-3 ml-2 text-[9px] font-medium uppercase text-orange-500 lg:text-xs">
                        Gloop Series
                      </p>
                      <p className="mt-3 ml-6 text-[9px] uppercase lg:text-xs">
                        Top bid
                      </p>
                      <p className="mt-1 ml-2 text-[10px] font-medium uppercase text-gray-900 lg:text-base">
                        Green
                      </p>
                      <p className="mt-1 ml-6 text-[10px] uppercase lg:text-base">
                        2.99 ETH
                      </p>
                      <p className="mt-1 ml-2 text-[9px] text-gray-500 lg:text-sm">
                        #12983
                      </p>
                      <p className="mt-1 ml-6 text-[9px] text-gray-500 lg:text-sm">
                        1 day left
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="section-initial mt-20 px-0 md:px-12">
          <div className="bg-[#FFF0E8] md:px-0 lg:rounded-lg">
            <div className="flex flex-col lg:flex-row-reverse lg:px-6 xl:px-0">
              <div className="mx-auto mt-16 hidden lg:block">
                <Image className="h-5/12" src={Redman} alt="Red-man" />
              </div>
              <div className="mx-auto mt-16 block w-8/12 px-6 lg:hidden">
                <Image src={Redmanxs} alt="Red-man" />
              </div>
              <div className="mx-auto mt-8 px-6 lg:mt-36 lg:px-0">
                <p className="text-3xl font-medium tracking-wide">
                  Initial Release 4/11
                </p>
                <div className="mt-4 lg:w-7/12">
                  <p className="text-md font-normal">
                    We have released four limited edition NFTs early which can
                    be bid on via{" "}
                    <span className="border-b-2 border-gray-300">OpenSea.</span>
                  </p>
                </div>
                <div className="mt-4 w-11/12">
                  <p className="text-md font-normal">
                    These will be the only four of these NFTs we ever make, so
                    be sure not to miss out!
                  </p>
                </div>
                <div className="mt-4">
                  <span className="">50% of proceeds go to charity.</span>
                </div>
                <div className="mt-4 pb-12 text-pink-500">
                  <a href="#">
                    Check them out
                    <i className="uil uil-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="section-initial mt-0 px-0 md:px-12 lg:mt-20">
          <div className="lg:rounded-lg bg-[#39FFA0]/10 md:px-0">
            <div className="flex flex-col-reverse lg:flex-row-reverse lg:px-6 xl:px-0">
              <div className="mx-auto mt-8 px-6 lg:mt-32 lg:px-0">
                <p className="text-3xl font-medium tracking-wide">
                  Initial Release 4/11
                </p>
                <div className="mt-4 lg:w-7/12">
                  <p className="text-md font-normal">
                    We have released four limited edition NFTs early which can
                    be bid on via{" "}
                    <span className="border-b-2 border-gray-300">OpenSea.</span>
                  </p>
                </div>
                <div className="mt-4 w-11/12">
                  <p className="text-md font-normal">
                    These will be the only four of these NFTs we ever make, so
                    be sure not to miss out!
                  </p>
                </div>
                <div className="mt-4">
                  <span className="">50% of proceeds go to charity.</span>
                </div>
                <div className="mt-4 pb-12 text-pink-500">
                  <a href="#">
                    Check them out
                    <i className="uil uil-arrow-right"></i>
                  </a>
                </div>
              </div>
              <div className="mx-auto mt-16 w-8/12 lg:w-3/12 lg:pb-12">
                <Image className="h-5/12" src={Cardblack} alt="Card-black" />
              </div>
            </div>
          </div>
        </div>

        <div className="section-othernft px-0 md:px-12 lg:mt-20">
          <div className="bg-white">
            <div className="grid lg:grid-flow-col lg:gap-12">
              <div className="bg-gray-100 lg:rounded-lg px-6 lg:px-20">
                <div className="mt-14">
                  <Image src={Icon1} alt="Icon-1" />
                </div>
                <div className="mt-8 font-medium text-4xl tracking-wide leading-snug">
                  <p>An NFT like no other</p>
                </div>
                <div className="mt-4 text-md font-normal w-11/12 text-gray-800 lg:w-10/12">
                  <p>
                    Don’t miss out on the release of our new NFT. Sign up below
                    to receive updates when we go live on 18/9.
                  </p>
                </div>
                <div className="mt-4 text-md font-normal w-11/12 pb-12 text-gray-800 lg:w-10/12">
                  <p>
                    Don’t miss out on the release of our new NFT. Sign up below
                    to receive updates when we go live on 18/9.Don’t miss out on
                    the release of our new NFT.{" "}
                  </p>
                </div>
              </div>
              <div className="lg:bg-gray-100 bg-white lg:rounded-lg px-6 lg:px-20">
                <div className="mt-14">
                  <Image src={Icon2} alt="Icon-2" />
                </div>
                <div className="mt-8 font-medium text-4xl tracking-wide leading-snug">
                  <p>An NFT like no other</p>
                </div>
                <div className="mt-4 text-md font-normal w-11/12 text-gray-800 lg:w-10/12">
                  <p>
                    Don’t miss out on the release of our new NFT. Sign up below
                    to receive updates when we go live on 18/9.
                  </p>
                </div>
                <div className="mt-4 text-md font-normal w-11/12 text-gray-800 pb-12 lg:w-10/12">
                  <p>
                    Don’t miss out on the release of our new NFT. Sign up below
                    to receive updates when we go live on 18/9.Don’t miss out on
                    the release of our new NFT.{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <footer className="section-footer mt-0 lg:mt-20 border">
          <div className="bg-white px-6 lg:px-12 pb-12">
            <div className="grid lg:grid-flow-col">
              <div>
                <div className="mt-12 flex">
                  <Image src={Logo} alt="logo" />
                  <div className="font-black text-lg ml-2 mt-1">
                    <p>nftlanding</p>
                  </div>
                </div>
                <div className="text-gray-700 font-normal mt-4">
                  <p>Exclusive NFT Collection</p>
                </div>
                <div className="flex gap-4 font-medium text-xl mt-4 text-gray-500">
                  <i className="uil uil-facebook-f"></i>
                  <i className="uil uil-twitter-alt"></i>
                  <i className="uil uil-instagram"></i>
                </div>
              </div>
              <div className="grid grid-cols-2 lg:grid-cols-4">
                <div className="mt-12 ">
                  <div className="text-sm font-medium">
                    <p>ABOUT</p>
                  </div>
                  <div className="mt-4">
                    <ul>
                      <li className="mt-2">
                        <a href="#">About</a>
                      </li>
                      <li className="mt-2">
                        <a href="#">Terms</a>
                      </li>
                      <li className="mt-2">
                        <a href="#">Legal</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="mt-12 ">
                  <div className="text-sm font-medium">
                    <p>NFT</p>
                  </div>
                  <div className="mt-4">
                    <ul>
                      <li className="mt-2">
                        <a href="#">OpenSea</a>
                      </li>
                      <li className="mt-2">
                        <a href="#">Maker</a>
                      </li>
                      <li className="mt-2">
                        <a href="#">Learn</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="mt-12 ">
                  <div className="text-sm font-semibold">
                    <p>CONTACT</p>
                  </div>
                  <div className="mt-4">
                    <ul>
                      <li className="mt-2">
                        <a href="#">Press</a>
                      </li>
                      <li className="mt-2">
                        <a href="#">Support</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="mt-12 ">
                  <div className="text-sm font-semibold">
                    <p>SOCIAL</p>
                  </div>
                  <div className="mt-4">
                    <ul>
                      <li className="mt-2">
                        <a href="#">Twitter</a>
                      </li>
                      <li className="mt-2">
                        <a href="#">Instagram</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-16 font-normal text-md text-gray-500">
              <p>© Copyright 2022 NFTlanding</p>
            </div>
          </div>
        </footer>
      </Layout>
    </div>
  );
}
