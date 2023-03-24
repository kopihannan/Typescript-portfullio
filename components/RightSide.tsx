import Link from "next/link";

const RightSide = () => {
  return (
    <div className="p-4">
      <div className="flex items-center justify-between">
        <Link className="text-lg font-medium text-[#001E00]" href="">
          About
        </Link>
        <div className="flex gap-4">
          <Link className="text-lg font-medium text-[#001E00]" href="">
            Resume
          </Link>
          <Link className="text-lg font-medium text-[#001E00]" href="">
            Projects
          </Link>
        </div>
      </div>
      <div className="pt-10">
        <p className="font-medium text-justify text-[#686868]">
          I love coding, I always want to do something new, and from there comes
          the world of programming. I am a Full-Stack Developer who has worked
          with clients in all stages of development. My specialization is
          building websites and web apps that are responsive to users needs and
          work great on all devices. My Expertise: JavaScript, Typescript, React
          js, Next js, React-router, Node js, Redux, RTK Query, MongoDB,
          Mongoose, Express js
        </p>
        <div>
            
        </div>
      </div>
    </div>
  );
};

export default RightSide;
