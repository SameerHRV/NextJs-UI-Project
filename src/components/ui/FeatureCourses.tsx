"use client";

import React from "react";
import CoursesData from "@/data/data.json";
import Link from "next/link";
import { Button } from "./moving-border";
import { BackgroundGradient } from "./background-gradient";
import { TailwindcssButtons } from "../Buttons";

interface FeatureCoursesProps {
  id: number;
  title: string;
  slug: string;
  description: string;
  price: number;
  instructor: string;
  isFeatured: boolean;
}

const FeatureCourses = () => {
  const featuredCourses = CoursesData.courses.filter((course: FeatureCoursesProps) => course.isFeatured);

  return (
    <div className="py-12 bg-gray-900">
      <div className="text-center">
        <h2 className="text-4xl font-bold text-white md:text-3xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
          Features of our courses
        </h2>
        <p className="mt-4 text-lg font-normal text-neutral-300 max-w-lg mx-auto">Learn with the Best</p>
      </div>
      <div className="mt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {featuredCourses.map((course: FeatureCoursesProps) => (
            <div className="flex justify-center" key={course.id}>
              <BackgroundGradient className="flex flex-col rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden h-full max-w-sm">
                <div className="p-4 sm:p-6 flex flex-col justify-center items-center h-full">
                  <p className="text-2xl font-bold text-black dark:text-white">{course.title}</p>
                  <p className="text-lg font-normal text-neutral-300 max-w-lg mx-auto">{course.description}</p>
                  <Link href={`/courses/${course.slug}`}>
                    <button className="bg-white dark:bg-slate-300 text-black dark:text-black border-neutral-200 dark:border-slate-200 px-4 py-2 rounded-md mt-3">
                      all courses
                    </button>
                  </Link>
                </div>
              </BackgroundGradient>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-[2rem] text-center">
        <Link href={"/courses"}>
          <Button className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800">
            View All Courses
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default FeatureCourses;
