"use client";
import Image from "next/image";

const Testimonial = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center w-full p-6 my-10">
      {/* Image Section */}
      <div className="lg:w-1/2 flex justify-center lg:justify-end mt-10 lg:mt-0">
        <div className="relative w-[85%] lg:w-[80%] h-0 pb-[85%]">
          <Image
            src="/ElenG.png"
            alt="Testimonial Image"
            layout="fill"
            objectFit="cover"
            className="absolute inset-0 rounded-lg"
          />
        </div>
      </div>

      {/* Text Section */}
      <div className="lg:w-1/2 mt-6 lg:mt-0 text-center flex flex-col items-center">
        <p className="text-lg text-gray-700 italic max-w-xl">
          True education means more than the pursual of a certain course of
          study. It means more than a preparation for the life that now is. It
          has to do with the whole being, and with the whole period of existence
          possible to man. It is the harmonious development of the physical, the
          mental, and the spiritual powers. It prepares the student for the joy
          of service in this world and for the higher joy of wider service in
          the world to come.
        </p>
        <p className="mt-4 text-lg text-gray-500">
          - Education by Ellen G. White <br /> (Education, p. 13)
        </p>
      </div>
    </div>
  );
};

export default Testimonial;
