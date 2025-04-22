import Image from "next/image";

const Links = () => {
  return (
    <div className="h-full flex flex-col items-center justify-center gap-7 ">
      <div className="flex items-center justify-center gap-10 mt-7">
        <a
          href="https://github.com/AbdelrahmanMostafa0"
          target="_blank"
          className="space-y-2 drop-shadow-xl transition-transform hover:scale-105 active:scale-100"
        >
          <Image
            src={"/icons/social-media/github.png"}
            alt="discord"
            width={50}
            height={50}
            className="w-24 dark:"
          />
          <p className="text-center font-bold text-xl dark:text-white">
            GitHub
          </p>
        </a>
        <a
          href="https://www.linkedin.com/in/abdelrahmanmostafa0/"
          target="_blank"
          className="space-y-2 drop-shadow-xl transition-transform hover:scale-105 active:scale-100"
        >
          <Image
            src={"/icons/social-media/linkedin.png"}
            alt="discord"
            width={50}
            height={50}
            className="w-24 dark:"
          />
          <p className="text-center font-bold text-xl dark:text-white">
            LinkedIn
          </p>
        </a>

        {/* <a
        href="https://discord.com/users/685266943497994240"
        target="_blank"
        className="space-y-2 drop-shadow-xl transition-transform hover:scale-105 active:scale-100"
      >
        <Image
          src={"/icons/social-media/discord (1).png"}
          alt="discord"
          width={50}
          height={50}
          className="w-24 dark:"
        />
        <p className="text-center font-bold text-xl dark:text-white">Discord</p>
      </a> */}
        <a
          href="https://www.instagram.com/abdelrahman_mostafaa0/"
          target="_blank"
          className="space-y-2 drop-shadow-xl transition-transform hover:scale-105 active:scale-100"
        >
          <Image
            src={"/icons/social-media/instagram.png"}
            alt="discord"
            width={50}
            height={50}
            className="w-24 dark:"
          />
          <p className="text-center font-bold text-xl dark:text-white">
            Instagram
          </p>
        </a>
      </div>
      <div className="w-fit border p-5 rounded-lg bg-white  dark:bg-transparent dark:text-white text-sm mb-5">
        Clicking any link will open it in a new tab.
      </div>
    </div>
  );
};
export default Links;
