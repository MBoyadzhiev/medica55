import { FocusCards } from "@/components/ui/focus-cards";

const cards = [
  {
    title: "Excellence & Growth",
    src: "/waterpolo1.jpeg",
    description:
      "Whittier Club Water Polo Foundation is dedicated to developing athletes of all skill levels in the heart of Whittier, California. Rooted in a tradition of excellence, our club provides a competitive yet supportive environment where players can grow both in and out of the water.",
  },
  {
    title: "Teamwork & Sportsmanship",
    src: "/waterpolo2.jpg",
    description:
      "We foster a strong water polo community that emphasizes discipline, strategy, and camaraderie. Teamwork and sportsmanship are at the core of everything we do.",
  },
  {
    title: "Elite Coaching & Training",
    src: "/waterpolo3.jpg",
    description:
      "Whether you`&apos;`re new to the sport or an experienced player looking to elevate your game, Whittier Polo Club offers elite coaching, high-level training, and a pathway to success at every stage of your water polo journey.",
  },
  {
    title: "Pathway to Success",
    src: "/waterpolo4.jpg",
    description:
      "We provide a pathway to success for every athlete, supporting their journey from beginner to elite, both in and out of the water.",
  },
];

const CoreValues = () => (
  <section className="w-full bg-white py-16 2xl:py-8 flex items-center justify-center">
    <div className="max-w-6xl mx-auto px-4 text-center">
      <h2 className="text-2xl md:text-3xl font-bold mb-8">Our Core Values</h2>
      <FocusCards
        cards={cards.map((card) => ({
          title: card.title,
          src: card.src,
          description: (
            <span className="block text-base md:text-lg font-medium mt-2">
              {card.description}
            </span>
          ),
          className: "w-full md:w-[250px] 2xl:w-[250px]",
        }))}
      />
      <div className="mt-10 text-base md:text-lg font-medium text-gray-700 text-left max-w-2xl mx-auto">
        <p>
          Whittier Club Water Polo Foundation is a premier water polo
          organization dedicated to developing athletes of all skill levels in
          the heart of Whittier, California. Rooted in a tradition of
          excellence, teamwork, and sportsmanship, our club provides a
          competitive yet supportive environment where players can grow both in
          and out of the water.
        </p>
        <p className="mt-4">
          We take pride in fostering a strong water polo community that
          emphasizes discipline, strategy, and camaraderie. Whether
          you`&apos;`re new to the sport or an experienced player looking to
          elevate your game, Whittier Polo Club offers elite coaching,
          high-level training, and a pathway to success at every stage of your
          water polo journey.
        </p>
      </div>
    </div>
  </section>
);

export default CoreValues;
