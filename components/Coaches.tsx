"use client";

import { GlareCard } from "@/components/ui/glare-card";

const coaches = [
  {
    name: "Preslav Djippov",
    photo: "/djippov.webp",
    info: "Preslav Djippov is Whittier College head coach for men's and women's water polo. Prior to his tenure at Whittier, Djippov served as the head coach for Westcliff University since 2020, where he established the program from its inception. In 2022, his men's team secured victory in the NAIA Championship, amassing a 20-15 record in only their second year of competition.",
  },
  {
    name: "John Pringle",
    photo: "/trainer2.jpg",
    info: "With over 20 years of experience, Coach John Pringle is a highly successful coach and educator. He has a B.A. in American Literature and Culture from UCLA and M.Ed. in Education - School Leadership from USC. Pringle has been the head boys and girls water polo coach at La Serna High School since 2015, leading his teams to multiple league championships and 3 CIF titles.",
  },
];

const Coaches = () => (
  <section className="w-full bg-white py-16 flex flex-col items-center justify-center">
    <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
      Our Coaches
    </h2>
    <div className="flex flex-col md:flex-row gap-8 justify-center items-center mb-8 w-full max-w-3xl">
      {coaches.map((coach) => (
        <div
          key={coach.name}
          className="flex flex-col items-center w-full md:w-auto"
        >
          <GlareCard className="flex flex-col items-center p-0 w-[320px] h-[400px] overflow-hidden">
            <img
              src={coach.photo}
              alt={coach.name}
              className="w-full h-full object-cover"
            />
          </GlareCard>
          <div className="block md:hidden mt-4 text-center px-4">
            <div className="text-xl font-semibold mb-2">{coach.name}</div>
            <div className="text-gray-700 text-base">{coach.info}</div>
          </div>
        </div>
      ))}
    </div>
    <div className="hidden md:flex flex-row gap-8 justify-center items-start max-w-3xl w-full mx-auto">
      {coaches.map((coach) => (
        <div key={coach.name} className="flex-1 text-center">
          <div className="text-xl font-semibold mb-2">{coach.name}</div>
          <div className="text-gray-700 text-base">{coach.info}</div>
        </div>
      ))}
    </div>
  </section>
);

export default Coaches;
