import React from "react";
import { Card, CardContent } from "./ui/card";
import { GraduationCap, Code, Cloud, Award, MapPin } from "lucide-react";
import { profileData } from "../data/mock";

const About = () => {
  const highlights = [
    {
      icon: GraduationCap,
      title: "Education",
      description: "BCA Graduate from LN Mishra Institute",
      color: "from-blue-500 to-indigo-600",
    },
    {
      icon: Code,
      title: "Tech Stack",
      description: "MERN | React | Node.js | MongoDB | REST APIs",
      color: "from-indigo-500 to-purple-600",
    },
    {
      icon: Cloud,
      title: "Google Cloud",
      description: "18+ Skills Boost Badges in AI/ML, MLOps & GCP Services",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Award,
      title: "AWS Cloud",
      description:
        "Hands-on with IAM, EC2, S3, VPC, Route 53, CloudFront, CloudWatch & AWS CLI",
      color: "from-orange-500 to-yellow-500",
    },
  ];

  return (
    <section
      id="about"
      className="py-24 bg-gradient-to-b from-indigo-50 to-white relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-20 w-40 h-40 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 left-20 w-32 h-32 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full blur-xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent mb-6 tracking-tight">
            About Me
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-medium leading-relaxed">
            Full Stack Developer with hands-on experience in AWS, Google Cloud,
            and modern web technologies. Passionate about building scalable,
            secure, and user-centric applications.
          </p>
        </div>

        {/* Main Content Card */}
        <Card className="bg-white shadow-2xl rounded-3xl border-0 overflow-hidden mb-12 hover:shadow-3xl transition-all duration-500">
          <CardContent className="p-0">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-0">
              {/* Avatar Section */}
              <div className="lg:col-span-2 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center p-12">
                <div className="text-center">
                  <img
                    src="/profile.jpg"
                    alt="Arpita Raj"
                    className="w-48 h-48 rounded-full object-cover border-4 border-white shadow-2xl"
                  />
                  {/* <div className="w-48 h-48 bg-white rounded-full flex items-center justify-center mb-6 shadow-2xl">
                    <span className="text-6xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                      {profileData.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </span>
                  </div> */}
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {profileData.name}
                  </h3>
                  <p className="text-indigo-200 font-medium text-lg">
                    {profileData.title}
                  </p>
                  <div className="flex items-center justify-center gap-2 mt-4 text-indigo-200">
                    <MapPin className="w-4 h-4" />
                    <span>New Delhi, India</span>
                  </div>
                </div>
              </div>

              {/* Content Section */}
              <div className="lg:col-span-3 p-12">
                <div className="space-y-6">
                  <h4 className="text-2xl font-bold text-gray-800 mb-4">
                    AWS • Google Cloud • Full Stack Developer
                  </h4>

                  <p className="text-lg text-gray-700 leading-relaxed">
                    I'm passionate about building scalable web applications and
                    cloud-based solutions. My expertise spans the MERN stack
                    along with hands-on experience in AWS and Google Cloud,
                    enabling me to develop modern, reliable, and user-focused
                    applications.
                  </p>

                  <p className="text-lg text-gray-700 leading-relaxed">
                    I have earned 18+ Google Cloud Skills Boost badges across
                    AI/ML, MLOps, Data Analytics, and Google Cloud services. I
                    also have practical experience with AWS services including
                    IAM, EC2, S3, VPC, Route 53, CloudFront, and CloudWatch
                    through hands-on projects and cloud deployments.
                  </p>

                  <p className="text-lg text-gray-700 leading-relaxed">
                    I enjoy solving real-world problems by combining cloud
                    technologies with full-stack development. From deploying
                    applications on AWS and working with cloud services to
                    building REST APIs and responsive user interfaces, I focus
                    on writing clean, maintainable, and scalable code while
                    continuously expanding my technical skills.
                  </p>

                  {/* Skills Highlight */}
                  <div className="mt-8">
                    <h5 className="text-lg font-semibold text-gray-800 mb-4">
                      What I'm passionate about:
                    </h5>
                    <div className="flex flex-wrap gap-3">
                      {[
                        "AWS",
                        "Google Cloud",
                        "Cloud Architecture",
                        "React",
                        "Node.js",
                        "MongoDB",
                        "REST APIs",
                        "DevOps",
                        "Linux",
                        "AI/ML",
                        "Problem Solving",
                        "Git & GitHub",
                        "AWS Solutions Architecture",
                      ].map((skill) => (
                        <span
                          key={skill}
                          className="px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 text-indigo-700 rounded-full font-medium hover:scale-105 transition-transform duration-200"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Quick Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {highlights.map((highlight, index) => {
            const IconComponent = highlight.icon;
            return (
              <Card
                key={highlight.title}
                className="bg-white shadow-lg hover:shadow-2xl border-0 rounded-2xl transition-all duration-300 hover:-translate-y-3 group"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <CardContent className="p-8 text-center">
                  <div className="mb-6">
                    <div
                      className={`inline-flex p-4 bg-gradient-to-r ${highlight.color} rounded-2xl group-hover:scale-110 transition-transform duration-300`}
                    >
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                  </div>

                  <h4 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-indigo-600 transition-colors duration-300">
                    {highlight.title}
                  </h4>

                  <p className="text-gray-600 font-medium leading-relaxed">
                    {highlight.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
