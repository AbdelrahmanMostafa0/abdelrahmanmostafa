import Image from "next/image";
import Link from "next/link";

const About = () => {
  return (
    <div className="w-full space-y-8">
      <div className="flex items-center gap-5  border-b-2">
        <Image
          src={"/avatar-img.png"}
          alt="avatar image "
          width={180}
          height={180}
          //   className="w-16 aspect-square"
        />
        <div className="gap-2">
          <h2 className="text-orange-500 text-4xl font-bold">
            Abdelrahman Mostafa
          </h2>
          <p className="text-lg">
            BSc in Computer Science & Artificial Intelligence
          </p>
          <div className="flex items-center gap-1">
            <p>Frontend developer at</p>
            <Link
              target="_blank"
              href={"https://lesoll.com"}
              className="text-orange-500 underline font-semibold"
            >
              Lesoll.com
            </Link>
          </div>
        </div>
      </div>
      <div className="text-gray-700 space-y-4">
        <p>
          hi! i'm abdelrahman, a frontend developer who loves building fast,
          responsive, and interactive web experiences. i...
        </p>
        <ul className="list-disc list-inside space-y-2 text-lg font-medium text-gray-700">
          <li>craft smooth interfaces with React & NextJs</li>
          <li>build responsive layouts with Tailwind CSS</li>
          <li>focus on performance, accessibility and SEO</li>
          <li>turn designs into clean, reusable components</li>
        </ul>
      </div>
      <div className="space-y-4">
        <h3 className="text-2xl font-bold">EDUCATION</h3>
        <div className="flex  gap-4">
          <div className="w-1 rounded-3xl h-16 bg-gray-200"></div>
          <div className="pt-2 space-y-1">
            {" "}
            <p className=" text-xl">Bachelor of Science in Computer Science</p>
            <p className="text-gray-400  text-sm">(Graduated at 2023)</p>
          </div>
        </div>
      </div>
      <div className="space-y-4">
        <h3 className="text-2xl font-bold">OTHER INTERESTS</h3>

        <ul className="list-disc list-inside space-y-2 text-lg font-medium text-gray-700">
          <li>button-mashing retired — now I game for fun, not fame 🎮</li>
          <li>dabbling in 3D and pretending I know Blender</li>
          <li>making things look ✨aesthetic✨ (it’s a lifestyle)</li>
          <li>cutting videos like I'm directing a blockbuster</li>
          <li>swimming — still got it from the pro days 🏊‍♂️</li>
          <li>reading stuff that makes my brain do backflips 📚</li>
          <li>occasionally sketching, always vibing with art 🎨</li>
        </ul>
      </div>
      <div className="space-y-4">
        <h3 className="text-2xl font-bold">LANGUAGE CONFIGURATION 🧠</h3>
        <pre className="bg-gray-100 text-sm p-4 rounded-lg overflow-x-auto text-gray-800">
          {`const languages = {
  arabic: {
    level: "native",
    confidence: "100%",
    sass: true,
  },
  english: {
    level: "professional",
    confidence: "85%",
    poweredBy: "YouTube + docs + memes",
  }
};`}
        </pre>
      </div>
    </div>
  );
};

export default About;
