import React from "react";

const FooterLinks = () => {
  const footerList = [
    {
      section: "About Us",
      links: ["Investors", "Features", "Book A Demo", "Security"],
    },
    {
      section: "Products",
      links: ["Credit Cards", "Gift Cards", "Savings Accounts", "NFT"],
    },
    {
      section: "Useful Links",
      links: ["Free rewards", "Documentation", "Affiliate Program"],
    },
    {
      section: "Social",
      links: ["Charging", "License", "Site Maps", "News"],
    },
  ];

  return (
    <>
      <div className="grid grid-cols-2 grid-rows-2 gap-[2vw] md:gap-[5vw] md:flex">
        {footerList.map((item, index) => (
          <div className="">
            <header className="font-bold text-sm text-white">
              {item.section}
            </header>
            <div className="text-gray-400 text-xs">
              <ul className="">
                {item.links.map((listItem) => (
                  <li className="my-2">{listItem}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default FooterLinks;
