import TestimonyCard from "../(components)/TestimonyCard";

export default function TestimonyPage() {
  return (
    <div className="mx-auto px-6 md:px-8 lg:px-12 py-12">
      <div className="flex gap-6 overflow-x-auto whitespace-nowrap pb-4 -mx-6 px-6 md:-mx-8 md:px-8 lg:mx-0 lg:px-0 lg:overflow-x-hidden lg:justify-center lg:whitespace-normal">
        <div className="flex shrink-0 justify-center items-center mt-8 whitespace-normal">
          <TestimonyCard
            imageUrl="/images/nltag_testimony.jpg"
            videoUrl="https://www.youtube.com/watch?v=tweDI2t-R4Q&t=143s"
            title="Testimony Sis. Chellachy Part 01"
            description="In the year of 2017 I was compelled by the spirit of God to share my testimony to the world to show His grace."
          />
        </div>
        <div className="flex shrink-0 justify-center items-center mt-8 whitespace-normal">
          <TestimonyCard
            imageUrl="/images/nltag_testimony.jpg"
            videoUrl="https://www.youtube.com/watch?v=qcEqHrgtFJU"
            title="Testimony Sis. Chellachy Part 02"
            description="In the year of 2017 I was compelled by the spirit of God to share my testimony to the world to show His grace."
          />
        </div>
        <div className="flex shrink-0 justify-center items-center mt-8 whitespace-normal">
          <TestimonyCard
            imageUrl="/images/nltag_testimony.jpg"
            videoUrl="https://www.youtube.com/watch?v=ZEo8tdz-Eos&t=54s"
            title="Testimony Sis. Chellachy Part 03"
            description="In the year of 2017 I was compelled by the spirit of God to share my testimony to the world to show His grace."
          />
        </div>
      </div>
    </div>
  );
}
