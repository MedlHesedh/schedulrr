import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { ArrowRight, Calendar, Clock, LinkIcon, Users } from "lucide-react";
import TestimonialsCarousel from "@/components/testimonials";
import Link from "next/link";

const features = [
  {
    icon: Calendar,
    title: "Task Scheduling",
    description: "Assign project tasks with estimated work durations.",
  },
  {
    icon: Clock,
    title: "Set Timelines",
    description: "Define start and end dates for each project phase.",
  },
  {
    icon: LinkIcon,
    title: "Share Project Plans",
    description: "Provide stakeholders with scheduling links for coordination.",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Allow multiple users to book and manage project tasks.",
  },
];

const howItWorks = [
  {
    step: "Create a Project Plan",
    description: "Set up a project with tasks, phases, and milestones.",
  },
  {
    step: "Define Work Durations",
    description: "Estimate the time required for each task and assign schedules.",
  },
  {
    step: "Invite Team Members",
    description: "Share project scheduling links with your team and clients.",
  },
  {
    step: "Track Progress",
    description: "Monitor booked tasks and completed milestones automatically.",
  },
];

const Home = () => {
  return (
    <main className="container mx-auto px-4 py-16">
      {/* Hero Section */}
      <div className="flex flex-col lg:flex-row items-center justify-between gap-12 mb-24">
        <div className="lg:w-1/2">
          <h1 className="text-7xl font-extrabold gradient-title pb-6">
            Streamline Your Project Planning
          </h1>
          <p className="text-xl text-gray-600 mb-10">
            Our scheduling system helps you efficiently manage project timelines.
            Assign tasks, define work durations, and coordinate with your team effortlessly.
          </p>
          <Link href={"/dashboard"}>
            <Button size="lg" className="text-lg">
              Get Started <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
        <div className="lg:w-1/2 flex justify-center">
          <div className="relative w-full max-w-md aspect-square">
            <Image
              src="/poster.svg"
              alt="Scheduling illustration"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </div>
      </div>

      {/* Key Features Section */}
      <div className="mb-24">
        <h2 className="text-3xl font-bold text-center mb-12 text-black">
          Key Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index}>
              <CardHeader>
                <feature.icon className="w-12 h-12 text-black mb-4 mx-auto" />
                <CardTitle className="text-center text-black">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center text-gray-600">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Testimonials Section */}
      {/* <div className="mb-24">
        <h2 className="text-3xl font-bold text-center mb-12 text-black">
          What Our Users Say
        </h2>
        <TestimonialsCarousel />
      </div> */}

      {/* How It Works Section */}
      <div className="mb-24">
        <h2 className="text-3xl font-bold text-center mb-12 text-black">
          How It Works
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {howItWorks.map((step, index) => (
            <div key={index} className="text-center">
              <div className="bg-black rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">
                  {index + 1}
                </span>
              </div>
              <h3 className="font-semibold text-lg mb-2">{step.step}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-black text-white rounded-lg p-8 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Optimize Your Project Planning 
        </h2>
        <p className="text-xl mb-6">
           Our company rely on our system for seamless task scheduling and efficient project management.
        </p>
        <Link href={"/dashboard"}>
          <Button size="lg" variant="secondary" className="text-black">
            Start For Free <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </Link>
      </div>
    </main>
  );
};

export default Home;
