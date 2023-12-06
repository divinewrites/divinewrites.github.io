import {
  faDiscord,
  faGithub,
  IconDefinition,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./index.css";

import cartoon from "./wallpaper/cartoon.jpg";

function ProjectCard({
  children,
  href,
}: React.PropsWithChildren<{ href?: string }>) {
  return (
    <a href={href}>
      <div className="border-zinc-700 bg-zinc-900 rounded border ease-in-out duration-100 hover:shadow-2xl cursor-pointer">
        {children}
      </div>
    </a>
  );
}

function ProjectTags({
  children,
  date,
}: React.PropsWithChildren<{ date: string }>) {
  return (
    <div className="flex justify-between text-zinc-600 pt-4">
      <div className="text-zinc-600 flex gap-1">{children}</div>
      <div className="flex text-sm align-middle">{date}</div>
    </div>
  );
}

function MiscProjectCard({
  children,
  href,
}: React.PropsWithChildren<{ href?: string }>) {
  return (
    <div className="border-zinc-700 bg-zinc-900 p-4 rounded border ease-in-out duration-100 hover:shadow-2xl cursor-pointer">
      {href ? <a href={href}>{children}</a> : children}
    </div>
  );
}

function ExperienceCard({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="border-zinc-700 bg-zinc-900 rounded border p-4">
      {children}
    </div>
  );
}

// function ExperienceCardWithImage({ children }: React.PropsWithChildren<{}>) {
//   return (
//     <div className="border-zinc-700 bg-zinc-900 rounded border">{children}</div>
//   );
// }

function SocialIcon({
  icon,
  text,
  link,
}: {
  icon: IconDefinition;
  text: string;
  link?: string;
}) {
  return (
    <div className="flex">
      <div className="aspect-square w-7 text-base">
        <FontAwesomeIcon className={"w-6 aspect-square "} icon={icon} />
      </div>
      <a href={link}>{text}</a>
    </div>
  );
}

function Header({
  header,
  footer,
  href,
}: {
  header: string;
  footer: string;
  href?: string;
}) {
  return (
    <>
      <a
        href={href}
        className="text-2xl font-bold font-ibm-mono ease-in-out duration-100"
      >
        {header}
      </a>
      <h2 className="text-1xl font-ibm-mono font-bold text-white-400 pb-4">
        {footer}
      </h2>
    </>
  );
}

function Site() {
  let banners = [cartoon];
  let banner = Math.floor(Math.random() * banners.length);

  return (
    <div
      style={{ backgroundImage: `url("${banners[banner]}")` }}
      className="font-sans leading-6 font-poppins text-left text-lg bg-image underline-offset-4"
    >
      <div className="from-zinc-900 bg-gradient-to-t flex justify-between flex-row">
        <div className="card-width flex justify-between flex-col h-screen p-8 md:p-20 text-zinc-200">
          <div />

          <div className="half-transparent rounded-t pd-4 h-auto p-4 md:-4">
            <div className="flex flex-row gap-4">
              <img
                src="profile.webp"
                alt=""
                className="rounded-full shadow-xl hidden sm:block"
                height={90}
                width={90}
              />
              <div className="flex flex-col justify-center">
                <h1 className="text-4xl md:text-6xl font-bold font-ibm-mono">
                  divinewrites
                </h1>
                <h2 className="text-1xl font-ibm-mono font-bold text-white-400">
                  that one epic guy
                </h2>
              </div>
            </div>

            <br />

            <div className="text-sm sm:text-base">
              <p>
                Yo! I'm Divine, a Full-Stack Developer and Gameplay Programmer.
              </p>
              <br />
              <p>
                I dove headfirst into the world of game development (ROBLOX) at
                the age of 10. Fast forward to 2019, and my casual tinkering
                with code turned into a full-blown passion for programming.
              </p>
              <br />
              <p>
                Since then, I've been cooking up incomplete games (LOL) and
                handy tools and collaborating with other developers, all while
                embracing the fine art of procrastination every now and then.
              </p>
            </div>
          </div>

          <div className="text-left text-white text-1xl gap-1 flex flex-col w-full">
            <SocialIcon icon={faDiscord} text="divinewrites" />
            <SocialIcon
              link="https://github.com/divinewrites"
              icon={faGithub}
              text="divinewrites"
            />
          </div>
        </div>
      </div>

      {/* 2nd page */}
      <div className="bg-zinc-800 flex flex-col bg-noise justify-center items-center text-white">
        <div className="experience-width gap-8 p-2 md:p-8">
          <h1 className="text-2xl p-4 font-bold font-ibm-mono text-zinc-200">
            My Projects | Collaborations
          </h1>
          <div className="h-full grid md:flex justify-center">
            <div className="p-4 flex flex-col gap-4 w-full md:w-3/6">
              <ProjectCard href="https://www.roblox.com/games/5012114941/WINTER-RESET-Hoop-Paradise">
                <div className="p-4">
                  <Header
                    header="Hoop Paradise"
                    footer="Roblox Basketball Game"
                  />

                  <p className="text-zinc-400 text-base">
                    "Get cancer, WHY YOU EDIT LINE 129 YOU SPED, STOP EDITING" -
                    DOGOVPAlN
                  </p>

                  <ul className="text-zinc-500 text-base list-disc list-inside pt-4">
                    <li>
                      Hey DOGO! Big shoutout to you, mate. This project was a
                      game-changer for me, introducing a coding style that's
                      stuck with me for a while now.
                    </li>

                    <br />
                    <li>
                      Engineered a proprietary framework tailored to our needs,
                      enhancing feature development with seamless integration
                      and problem-free implementation.
                    </li>
                    <br />
                    <li>
                      Developed an in-house datastore interface, ensuring
                      effortless data retrieval and robust support for offline
                      and online data changes, including various
                      functionalities.
                    </li>
                  </ul>

                  <ProjectTags date="2020 - 2023">
                    <i className="devicon-lua-plain"></i>
                  </ProjectTags>
                </div>
              </ProjectCard>

              <MiscProjectCard href="">
                <h1 className="text-2xl font-bold font-ibm-mono">Rust-RPS</h1>
                <h2 className="text-1xl font-ibm-mono font-bold text-white-400">
                  Open-source Game
                </h2>

                <p className="text-zinc-600 pt-2 text-base">
                  A Rust-based Rock, Paper, Scissors game with rounds.
                </p>

                <ProjectTags date="2023">
                  <i className="devicon-rust-plain"></i>
                </ProjectTags>
              </MiscProjectCard>

              <MiscProjectCard href="">
                <h1 className="text-2xl font-bold font-ibm-mono">LoFi-Lib</h1>
                <h2 className="text-1xl font-ibm-mono font-bold text-white-400">
                  Open-source Web Scraper
                </h2>

                <p className="text-zinc-600 pt-2 text-base">
                  Open-source web scraper for lofi music written Rust.
                </p>

                <ProjectTags date="2023">
                  <i className="devicon-rust-plain"></i>
                </ProjectTags>
              </MiscProjectCard>
            </div>

            <div className="p-4 flex flex-col w-full md:w-3/6 gap-4">
              <ProjectCard>
                <div className="p-4">
                  <Header header="Streetball" footer="Roblox Basketball Game" />

                  <p className="text-zinc-400 text-base">
                    Created using Roblox-TS, sadly development is on pause.
                  </p>

                  <ul className="text-zinc-500 text-base list-disc list-inside pt-4">
                    <li>
                      Pioneered the original design using Luau, which faced
                      challenges and necessitated a strategic shift to
                      Roblox-TS.
                    </li>
                    <br />
                    <li>
                      Implemented a revamped design by adopting Roblox-TS + Rojo
                      + Github, elevating our workflow by ensuring code safety
                      and enabling continuous work, even during Roblox Studio
                      downtimes.
                    </li>
                    <br />
                    <li>
                      Leveraged the Flamework framework, benefiting from
                      automatically generated type guards for networking code
                      and components, non-obtrusive lifecycle events, easy
                      dependency injection, and minimized boilerplate to
                      preserve simplicity.
                    </li>
                  </ul>

                  <ProjectTags date="2023">
                    <i className="devicon-lua-plain"></i>
                    <i className="devicon-typescript-plain"></i>
                  </ProjectTags>
                </div>
              </ProjectCard>

              <MiscProjectCard href="">
                <h1 className="text-2xl font-bold font-ibm-mono">
                  Weather-App
                </h1>
                <h2 className="text-1xl font-ibm-mono font-bold text-white-400">
                  Open-source Weather Application
                </h2>

                <p className="text-zinc-600 pt-2 text-base">
                  A cli-based weather application written in Rust.
                </p>

                <ProjectTags date="2023">
                  <i className="devicon-rust-plain"></i>
                </ProjectTags>
              </MiscProjectCard>

              <MiscProjectCard href="">
                <h1 className="text-2xl font-bold font-ibm-mono">
                  Pwd-Crabager
                </h1>
                <h2 className="text-1xl font-ibm-mono font-bold text-white-400">
                  Open-source Password Manager
                </h2>

                <p className="text-zinc-600 pt-2 text-base">
                  A simple & "secure" cli password manager written in Rust.
                </p>

                <ProjectTags date="2023">
                  <i className="devicon-rust-plain"></i>
                </ProjectTags>
              </MiscProjectCard>
            </div>
          </div>
          <h1 className="text-2xl p-4 font-bold font-ibm-mono text-zinc-200">
            General Experience
          </h1>

          <div className="h-full grid md:flex justify-center">
            <div className="p-4 flex flex-col gap-4 w-full md:w-3/5">
              <ExperienceCard>
                <h1 className="text-2xl font-bold font-ibm-mono">
                  Web Development
                </h1>
                <h2 className="pt-1 pb-1 font-ibm-mono font-bold text-zinc-600">
                  HTML + CSS & various web frameworks
                </h2>
                <div className="pt-2 text-zinc-400 text-base leading-7">
                  <p>Server hosting with AWS</p>
                  <a
                    href="https://www.youtube.com/watch?v=9XbAJ3z44ac"
                    className="text-zinc-400 text-base underline "
                  >
                    Typescript web scraper made with Express.js [Coming Soon]
                  </a>

                  <ProjectTags date="">
                    <i className="devicon-typescript-plain"></i>
                  </ProjectTags>
                </div>
              </ExperienceCard>

              <ExperienceCard>
                <h1 className="text-2xl font-bold font-ibm-mono">Roblox</h1>
                <h2 className="pt-1 pb-1 font-ibm-mono font-bold text-zinc-600">
                  Luau since 2018
                </h2>
                <div className="pt-2 text-zinc-400 text-base leading-7">
                  <p>Experience with Roact + Rodux / Reflex</p>
                  <p>Experience 5 ~ 6 months with Rojo & Roblox-TS</p>

                  <ProjectTags date="">
                    <i className="devicon-lua-plain"></i>
                  </ProjectTags>
                </div>
              </ExperienceCard>
            </div>

            <div className="p-4 flex flex-col gap-4 w-full md:w-2/5">
              <ExperienceCard>
                <h1 className="text-2xl font-bold font-ibm-mono">
                  Languages | Tooling
                </h1>

                <p className="pt-2 text-zinc-600 text-base">
                  Languages I have experience with & tooling I use regularly
                </p>

                <ul className="pt-2  text-zinc-600 text-base">
                  <ProjectTags date="">
                    <li className="devicon-lua-plain"></li>
                    <li className="devicon-python-plain"></li>
                    <li className="devicon-rust-plain"></li>
                    <li className="devicon-typescript-plain"></li>
                    <li className="devicon-javascript-plain"></li>
                    <li className="devicon-git-plain"></li>
                    <li className="devicon-nodejs-plain"></li>
                    <li className="devicon-html5-plain"></li>
                    <li className="devicon-css3-plain"></li>
                  </ProjectTags>
                </ul>
              </ExperienceCard>

              <ExperienceCard>
                <h1 className="text-2xl font-bold font-ibm-mono">Other</h1>
                <ul className="pt-2 text-zinc-600 text-base">
                  <p>General experience with Git & Github CI pipelines</p>
                  <p>
                    General experience with Linux for server hosting and
                    personal use
                  </p>
                </ul>
              </ExperienceCard>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Site;
