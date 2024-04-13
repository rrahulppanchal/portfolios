import { Header } from "@/components/header";

export default function Home() {
  return (
    <main className="">
      <Header />
      <div className="p-5 mx-auto mt-5 grid max-w-[59rem] flex-1 auto-rows-max gap-4">
        <div>
          <p className="text-3xl mt-1 text-slate-300	">Who Am I?</p>
          <p className="mt-1 text-slate-400	">
            I am a seasoned software developer with over 1.5+ years of
            experience in the industry. My expertise liesin JavaScript and
            TypeScript, and Ispecialize in working within the MERN (MongoDB,
            Express, React, Node.js)stack. My problem-solving skills have played
            a crucial role in improving project efficiency by nearly 50%. I take
            pride in consistently delivering projectsto clients ahead ofschedule
            while maintaining a 100% accuracy rate. I am now seeking
            opportunitiesto collaborate in different domains, where I can
            leverage my skills and expertise to contribute to new and exciting
            projects.
          </p>
        </div>
      </div>
    </main>
  );
}
