"use client";

import { Tooltip } from "@/components/hover-functionality/Tooltip";
import { LargeBtn } from "../../components/LargeBtn";
import { IconBrandGithub } from "@tabler/icons-react";
import { IconBrandLinkedin } from "@tabler/icons-react";
import Link from "next/link";

function GithubBtn() {
  return (
    <Link
      href="https://github.com/AO-5002/dotblank_client"
      target="_blank"
      rel="noopener noreferrer"
    >
      <LargeBtn>
        <IconBrandGithub size={36} />
      </LargeBtn>
    </Link>
  );
}

function LinkedinBtn() {
  return (
    <Link
      href="https://www.linkedin.com/in/andres-ortiz-758117247/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <LargeBtn>
        <IconBrandLinkedin size={36} />
      </LargeBtn>
    </Link>
  );
}

function InitBtn() {
  return (
    <Link
      className="flex justify-center items-center px-6 py-3 bg-primary dark:bg-secondary"
      href="/login"
    >
      <p className="text-title-lg leading-title-lg font-bold text-secondary dark:text-primary">
        Get Started
      </p>
    </Link>
  );
}

export function BtnSection() {
  return (
    <div className="flex flex-row gap-3">
      <InitBtn />
      <Tooltip message="GitHub Repository">
        <GithubBtn />
      </Tooltip>
      <Tooltip message="LinkedIn Profile">
        <LinkedinBtn />
      </Tooltip>
    </div>
  );
}
