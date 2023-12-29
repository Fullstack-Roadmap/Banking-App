import FooterLinks from "./FooterLinks";
import Exclude from "./assets/Exclude.png";

const Footer = () => {
  return (
    <>
      <section className="text-white bg-gradient-to-br from-[#021607] to-my-bright-green/20">
        <div className="flex justify-between my-8 md:my-12 mx-5">
          <div className="flex flex-col items-start justify-start w-32 md:w-64 gap-3">
            <div className="flex items-center gap-1">
              <img
                src={Exclude}
                alt="exclude"
                className="h-[1rem] md:h-[1rem] pr-[0.3rem] md:pr-[0.5rem]"
              />
              <a className="text-[1rem] font-semibold md:text-[1rem]" href="#">
                GreenBank
              </a>
            </div>
            <p className="text-gray-400">
              Discover the power of our secure and rewarding credit cards{" "}
            </p>
          </div>
          <div>
            <FooterLinks />
          </div>
        </div>
        <footer className="text-gray-400 text-xs flex sm:flex-col justify-between gap-2 m-5">
          <p>copyright 2023 DoraDesign All Rights Reserved </p>
          <p>
            This page uses cookies. See cookies details
            <a href="#" className=" text-my-bright-green">
              {" "}
              here
            </a>
          </p>
        </footer>
      </section>
    </>
  );
};

export default Footer;
