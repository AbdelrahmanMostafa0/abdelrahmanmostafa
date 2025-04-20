import Image from "next/image";

const navItems = [
  { label: "about", icon: "/icons/icon_about.webp" },
  { label: "work", icon: "/icons/icon_work.webp" },
  { label: "links", icon: "/icons/icon_links.webp" },
  { label: "contact", icon: "/icons/icon_contact.webp" },
];

const NavButton = ({ label, icon }) => (
  <button className="flex flex-col items-center space-y-2 text-center group">
    <Image
      src={icon}
      alt={`${label} icon`}
      width={500}
      height={500}
      className="w-16 md:w-20 drop-shadow-xl transition-transform group-hover:scale-110"
    />
    <p className="text-xl font-semibold capitalize">{label}</p>
  </button>
);

const MainWindow = () => {
  return (
    <div className="w-full z-10 space-y-[1px] md:max-w-[700px]">
      {/* Top bar */}
      <div className="hidden md:flex h-14 items-center px-4 min-w-[700px] bg-[#424242] rounded-t-lg drop-shadow-md border">
        <p className="text-2xl font-bold text-white">home</p>
      </div>

      {/* Main content */}
      <div
        className="
        min-h-[500px] p-5 gap-10 flex flex-col justify-center items-center
        md:min-w-[700px] md:border-2 md:border-[#424242] md:border-opacity-35 md:bg-white
        rounded-b-lg drop-shadow-xl
      "
      >
        <div className="pt-10 text-center space-y-4">
          <h1 className="text-5xl font-extrabold">
            hi! <span className="text-orange-500">i'm abdelrahman</span>
          </h1>
          <p className="text-2xl">I Code. I Design. I Build Cool Stuff.</p>
        </div>

        <div className="flex flex-wrap justify-center gap-x-12 gap-y-8 md:gap-x-10 md:gap-y-10">
          {navItems.map((item) => (
            <NavButton key={item.label} label={item.label} icon={item.icon} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MainWindow;
