import Image from "next/image";
import { IoPlayOutline } from "react-icons/io5";

// Define the type for team members
interface TeamMember {
  name: string;
  role: string;
  image: string;
}

// Team member data
const teamMembers: TeamMember[] = [
  {
    name: "Mark Henry",
    role: "Sweetest",
    image: "/team/mark-henry.png",
  },
  {
    name: "Lucky Helen",
    role: "Simple",
    image: "/team/lucky-helen.png",
  },
  {
    name: "Meow Henry",
    role: "Crest",
    image: "/team/meow-henry.png",
  },
  {
    name: "Tom Henrrow",
    role: "Girl",
    image: "/team/tom-henrrow.png",
  },
  {
    name: "Crest",
    role: "Tonner",
    image: "/team/crest.png",
  },
  {
    name: "Girl",
    role: "Sweetest",
    image: "/team/girl.png",
  },
];



export default function AboutUs() {
  const teamMembers = [
    { name: 'Mark Henry', role: 'Owner', image: '/team.png' },
    { name: 'Lucky Helen', role: 'Chef', image: '/team.png' },
    { name: 'Moon Henry', role: 'Founder', image: '/team.png' },
    { name: 'Tom Morrow', role: 'Specialist', image: '/team.png' },
  ];

  return (
    <div className="bg-white">
      {/* About Us Section */}
      <section className="container mx-auto py-24 px-6 flex flex-col lg:flex-row items-center space-y-12 lg:space-y-0 lg:space-x-12">
        {/* Left Section: Images */}
        <div className="relative flex flex-col items-center lg:items-start space-y-8 lg:w-1/2">
          <div className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/aboutpage/1.png"
              alt="Delicious food"
              className="object-cover w-full h-full"
              width={320}
              height={320}
            />
          </div>
          <div className="flex space-x-4 sm:space-x-8">
            <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/aboutpage/yougart.png"
                alt="Yogurt"
                className="object-cover w-full h-full"
                width={192}
                height={192}
              />
            </div>
            <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/aboutpage/crunch.png"
                alt="Crunchy food"
                className="object-cover w-full h-full"
                width={192}
                height={192}
              />
            </div>
          </div>
        </div>

        {/* Right Section: Text and Buttons */}
        <div className="lg:w-1/2 text-center lg:text-left px-4 sm:px-8">
          <h2 className="text-orange-500 text-lg font-semibold uppercase mb-2">About Us</h2>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-snug">
            Food is an important part of a balanced diet
          </h1>
          <p className="text-gray-700 mb-8 leading-relaxed text-sm sm:text-base md:text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            diam pellentesque bibendum non dui volutpat fringilla bibendum.
            Urna, elit augue urna, vitae feugiat pretium donec id elementum.
          </p>
          <div className="flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
            <button className="bg-orange-500 text-white py-3 px-6 sm:px-8 rounded-lg shadow-md hover:bg-orange-600 transition duration-300">
              Show More
            </button>
            <button className="flex items-center bg-gray-100 text-gray-900 py-3 px-6 sm:px-8 rounded-lg shadow-md hover:bg-gray-200 transition duration-300">
              <IoPlayOutline className="mr-2 text-orange-500" size={20} /> Watch Video
            </button>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto text-center px-4 sm:px-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">Why Choose Us</h2>
          <p className="text-gray-700 mb-8 max-w-2xl mx-auto text-sm sm:text-base md:text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            diam pellentesque bibendum non dui volutpat fringilla bibendum.
          </p>
          <div className="relative w-full max-w-4xl mx-auto rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/aboutpage/banner.png"
              alt="Why Choose Us Banner"
              width={1320}
              height={386}
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-gray-100">
        <div className="container mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {["BEST CHEF", "120 Item Food", "Clean Environment"].map((title, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center bg-white py-8 px-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="w-16 h-16 sm:w-20 sm:h-20 mb-4 rounded-full overflow-hidden">
                  <Image
                    src={`/aboutpage/${title.replace(/ /g, "")}.png`}
                    alt={title}
                    width={80}
                    height={80}
                    className="object-cover"
                  />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">{title}</h3>
                <p className="text-gray-700 text-sm sm:text-base">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Quisque diam pellentesque bibendum non dui volutpat.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="bg-orange-500">
          <div className="container mx-auto py-12 px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-2">Team Member</h2>
            <p className="text-white mb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit facilisi phasellus dictum.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {teamMembers.map((member, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
                >
                  <div className="relative w-full h-48">
                    <Image
                      src={member.image}
                      alt={member.name}
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                  <div className="p-4 text-center">
                    <h3 className="text-lg font-semibold text-gray-800">{member.name}</h3>
                    <p className="text-sm text-gray-500">{member.role}</p>
                    <div className="flex justify-center space-x-2 mt-4">
                      <a
                        href="#"
                        className="text-gray-500 hover:text-orange-500 transition-colors duration-200"
                      >
                        <i className="fab fa-facebook-f"></i>
                      </a>
                      <a
                        href="#"
                        className="text-gray-500 hover:text-orange-500 transition-colors duration-200"
                      >
                        <i className="fab fa-twitter"></i>
                      </a>
                      <a
                        href="#"
                        className="text-gray-500 hover:text-orange-500 transition-colors duration-200"
                      >
                        <i className="fab fa-instagram"></i>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      );

    </div>
  );
}
