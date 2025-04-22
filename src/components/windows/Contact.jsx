import Image from "next/image";
import Link from "next/link";

const Contact = () => {
  return (
    <div className="w-full space-y-6">
      <div className="flex items-center gap-5  justify-center pt-4">
        <Image
          src={"/contact-me.png"}
          alt="avatar image "
          width={250}
          height={250}
          //   className="w-16 aspect-square"
        />
      </div>

      <p className="text-center  mx-auto text-lg">
        <span className="font-semibold text-xl">
          let’s make inbox magic happen ✨📩
        </span>
        <br />
        got something cool to say? questions, ideas, memes, secret pizza recipes
        — send 'em my way! i read every email like it’s a message in a bottle 🌊
      </p>

      <div className="flex justify-center">
        {" "}
        <a
          href="mailto:abdelrahmanmostafa.developer@email.com"
          className="px-4 py-2 bg-orange-500 dark:bg-blue-500 text-white rounded-lg mx-auto"
        >
          send me an email!
        </a>
      </div>
    </div>
  );
};

export default Contact;
