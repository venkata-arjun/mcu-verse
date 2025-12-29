import React from "react";
import ThanosImg from "../assets/Thanos.jpg";
import InfinityStonesImg from "../assets/InfinityStones.jpg";
import AvengersAssembleImg from "../assets/AvengersAssemble.jpg";
import InfinityGauntletImg from "../assets/InfinityGauntlet.jpg";
import FightWithThanosImg from "../assets/FightWithThanos.jpg";
import AvengersTrioImg from "../assets/avengers-trio.jpg";
import CivilWarTeam1Img from "../assets/civilwar-team-1.jpg";
import CivilWarTeam2Img from "../assets/civilwar-team-2.jpg";
import IronManSacrificeImg from "../assets/Ironman-death.jpg";
import DrDoomImg from "../assets/DrDoom.jpg";

export default function AboutMCU() {
  return (
    <div className="min-h-screen bg-black text-white px-4 py-16 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto space-y-24">
        {/* The Mad Titan Arrives */}
        <section className="space-y-8 text-center md:text-left">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white">
            THE MAD TITAN ARRIVES
          </h1>
          <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 items-center">
            <div className="order-2 md:order-1 space-y-4 sm:space-y-6">
              <p className="text-lg text-gray-300 leading-8 md:leading-10">
                Thanos is not a typical villain. He is a force of nature, a
                being whose will is as unbreakable as his strength. His presence
                alone inspires fear and awe across the universe.
              </p>
              <p className="text-base text-gray-400 leading-7 md:leading-9">
                He believes the universe is broken by imbalance, and that
                unchecked growth leads to ruin. His solution is brutal but, in
                his mind, merciful: to erase half of all life, so the rest may
                thrive. Born on Titan, driven by loss and conviction, Thanos
                seeks order at any cost. He doesn’t crave chaos. He craves
                silence after correction. His journey is not one of conquest,
                but of grim necessity (at least, as he sees it). To him, the end
                always justifies the means, and he will stop at nothing to
                achieve what he calls balance.
              </p>
            </div>
            <div className="order-1 md:order-2">
              <img
                src={ThanosImg}
                alt="THANOS THE MAD TITAN"
                className="w-full rounded-2xl shadow-2xl shadow-marvelRed/40 object-cover"
              />
            </div>
          </div>
        </section>

        {/* The Infinity Stones */}
        <section className="space-y-8 text-center md:text-left">
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
            THE INFINITY STONES
          </h2>
          <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 items-center">
            <div>
              <img
                src={InfinityStonesImg}
                alt="THE SIX INFINITY STONES"
                className="w-full rounded-2xl shadow-2xl shadow-marvelRed/40 object-cover"
              />
            </div>
            <div className="space-y-6">
              <div className="flex flex-wrap justify-center gap-2 mb-2">
                <span className="px-3 py-1 rounded-full bg-marvelRed text-white font-bold shadow">
                  Space
                </span>
                <span className="px-3 py-1 rounded-full bg-blue-600 text-white font-bold shadow">
                  Time
                </span>
                <span className="px-3 py-1 rounded-full bg-yellow-400 text-black font-bold shadow">
                  Power
                </span>
                <span className="px-3 py-1 rounded-full bg-green-600 text-white font-bold shadow">
                  Mind
                </span>
                <span className="px-3 py-1 rounded-full bg-purple-700 text-white font-bold shadow">
                  Reality
                </span>
                <span className="px-3 py-1 rounded-full bg-orange-500 text-white font-bold shadow">
                  Soul
                </span>
              </div>
              <p className="text-base text-gray-400 leading-loose">
                Six stones. Six fundamental forces of reality, each one a
                fragment of creation itself. Each stone is a key to a different
                aspect of existence. Individually, they are weapons of
                unimaginable power, capable of bending the laws of nature.
                Together, they make a god. Whoever controls them doesn’t just
                rule armies, they rewrite existence. The Infinity Stones are the
                ultimate prize, sought by heroes and villains alike, for with
                them, one can shape the universe to their will, for better or
                for worse.
              </p>
            </div>
          </div>
        </section>

        {/* Earth’s Mightiest Heroes */}
        <section className="space-y-8 text-center md:text-left">
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
            EARTH’S MIGHTIEST HEROES
          </h2>
          <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 items-center">
            <div className="order-2 md:order-1 space-y-4 sm:space-y-6">
              <p className="text-base text-gray-400 leading-loose">
                The Avengers are not perfect heroes. They are a collection of
                broken people who still show up, no matter the odds. Each
                Avenger brings their own strengths, flaws, and beliefs to the
                team. Some are gods, some are soldiers, some are spies, and some
                are just people trying to do the right thing. Their differences
                are their greatest strength, and their unity is their greatest
                weapon. One purpose binds them: to protect a world that can’t
                protect itself. They don’t fight for glory or recognition. They
                fight so others don’t have to, and in doing so, they inspire
                hope in a universe that desperately needs it.
              </p>
            </div>
            <div className="order-1 md:order-2">
              <img
                src={AvengersAssembleImg}
                alt="AVENGERS ASSEMBLE"
                className="w-full rounded-2xl shadow-2xl shadow-marvelRed/40 object-cover"
              />
            </div>
          </div>
        </section>

        {/* The Gauntlet vs Hope */}
        <section className="space-y-8 text-center md:text-left">
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
            THE GAUNTLET VS HOPE
          </h2>
          <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 items-center">
            <div>
              <img
                src={InfinityGauntletImg}
                alt="AVENGERS HOLDING BACK THANOS GAUNTLET"
                className="w-full rounded-2xl shadow-2xl shadow-marvelRed/40 object-cover"
              />
            </div>
            <div className="space-y-6">
              <p className="text-base text-gray-400 leading-loose">
                This is not just a clash of strength. It is inevitability versus
                resistance, destiny versus hope. Thanos reaches for destiny,
                believing his actions are for the greater good. The Avengers
                reach for each other, knowing that together, they can defy fate.
                Every hand matters in the struggle, every second delays the end.
                The Gauntlet is more than a weapon, it is a symbol of ultimate
                power, and the fight to control it is a fight for the soul of
                the universe. In this battle, even the smallest act of courage
                can tip the scales.
              </p>
            </div>
          </div>
        </section>

        {/* When Ideals Collide */}
        <section className="space-y-8 text-center md:text-left">
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
            WHEN IDEALS COLLIDE
          </h2>
          <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 items-center">
            <div className="order-2 md:order-1 space-y-4 sm:space-y-6">
              <p className="text-base text-gray-400 leading-loose">
                The war happens because compromise fails, and because silence
                enables destruction. Thanos fights for balance, convinced that
                his way is the only way to save the universe. The Avengers fight
                for choice, believing that every life matters and that hope is
                worth defending. This is not a simple battle of good versus
                evil, it’s sacrifice versus surrender, conviction versus
                compassion. When ideals collide, the universe trembles, and the
                outcome is never certain. The true cost of war is measured not
                just in lives lost, but in the ideals that survive.
              </p>
            </div>
            <div className="order-1 md:order-2">
              <img
                src={FightWithThanosImg}
                alt="AVENGERS VS THANOS FINAL BATTLE"
                className="w-full rounded-2xl shadow-2xl shadow-marvelRed/40 object-cover"
              />
            </div>
          </div>
        </section>

        {/* The MCU Trinity */}
        <section className="space-y-8 text-center md:text-left">
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
            THE MCU TRINITY
          </h2>
          <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 items-center">
            <div>
              <img
                src={AvengersTrioImg}
                alt="IRON MAN CAPTAIN AMERICA THOR"
                className="w-full rounded-2xl shadow-2xl shadow-marvelRed/40 object-cover"
              />
            </div>
            <div className="space-y-6">
              <p className="text-base text-gray-400 leading-loose">
                Iron Man. Captain America. Thor. The mind, the heart, the god.
                Together, they define the Avengers, each representing a
                different facet of heroism. Iron Man is the genius, the
                innovator, the man who always finds a way. Captain America is
                the moral compass, the leader who inspires others to be their
                best. Thor is the power, the god who learns humility and the
                value of friendship. Apart, the world fractures. Every victory
                traces back to them standing together, united by purpose and
                forged by adversity. Their legacy is not just in their battles,
                but in the hope they leave behind.
              </p>
            </div>
          </div>
        </section>

        {/* Civil War: Heroes Divided */}
        <section className="space-y-10 text-center">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
            CIVIL WAR: HEROES DIVIDED
          </h2>

          {/* Civil War Teams - Perfectly aligned side-by-side on ALL devices, including mobile */}
          <div className="max-w-6xl mx-auto px-4">
            {/* 2 columns from mobile onward, force same height */}
            <div className="flex flex-row gap-3 sm:gap-5 lg:gap-8 items-stretch">
              {/* Team Captain America */}
              <div className="flex flex-col items-center space-y-4 flex-none basis-1/2 w-1/2">
                <div className="text-center">
                  <span className="text-xs sm:text-sm md:text-base uppercase tracking-widest text-gray-500 font-semibold">
                    TEAM
                  </span>
                  <br />
                  <span className="text-base sm:text-lg md:text-xl font-bold text-white whitespace-nowrap">
                    CAPTAIN AMERICA
                  </span>
                </div>
                <div className="w-full overflow-hidden rounded-3xl shadow-2xl shadow-blue-900/70">
                  <img
                    src={CivilWarTeam1Img}
                    alt="TEAM CAP CIVIL WAR"
                    className="w-full h-72 sm:h-96 lg:h-[28rem] object-cover object-center"
                  />
                </div>
              </div>

              {/* Team Iron Man */}
              <div className="flex flex-col items-center space-y-4 flex-none basis-1/2 w-1/2">
                <div className="text-center">
                  <span className="text-xs sm:text-sm md:text-base uppercase tracking-widest text-gray-500 font-semibold">
                    TEAM
                  </span>
                  <br />
                  <span className="text-base sm:text-lg md:text-xl font-bold text-white">
                    IRON MAN
                  </span>
                </div>
                <div className="w-full overflow-hidden rounded-3xl shadow-2xl shadow-red-900/70">
                  <img
                    src={CivilWarTeam2Img}
                    alt="TEAM IRON MAN CIVIL WAR"
                    className="w-full h-72 sm:h-96 lg:h-[28rem] object-cover object-center"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Description */}
          <p className="mt-12 max-w-4xl mx-auto px-6 text-base sm:text-lg text-gray-400 leading-relaxed">
            Civil War wasn’t about control. It was about accountability, about
            the struggle between freedom and security. One side trusted systems,
            believing that oversight was necessary to prevent disaster. The
            other trusted conscience, believing that heroes must answer to
            themselves and their own sense of right and wrong. There were no
            true villains here—only consequences, misunderstandings, and pain.
            The damage never fully healed, but from the ashes, new alliances and
            new heroes emerged. The Civil War reminds us that even the greatest
            among us can be divided, but also that reconciliation is always
            possible.
          </p>
        </section>
        {/* The Ultimate Sacrifice */}
        <section className="space-y-8 text-center md:text-left">
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
            THE ULTIMATE SACRIFICE
          </h2>
          <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 items-center">
            <div>
              <img
                src={IronManSacrificeImg}
                alt="TONY STARKS FINAL SNAP"
                className="w-full rounded-2xl shadow-2xl shadow-marvelRed/40 object-cover"
              />
            </div>
            <div className="space-y-6">
              <p className="text-base text-gray-400 leading-7 md:leading-9">
                Tony Stark began as a man who built weapons, a billionaire
                playboy with a genius mind and a troubled heart. Over time, he
                became something more, a hero, a mentor, a friend. He ended as a
                weapon, not out of duty, but out of love. His final act was the
                ultimate sacrifice: choosing everyone over himself, snapping his
                fingers to save the universe at the cost of his own life. Tony’s
                journey is a testament to the power of redemption, the
                importance of legacy, and the enduring strength of the human
                spirit. The universe survived because of him, and his memory
                will inspire generations to come.
              </p>
            </div>
          </div>
        </section>

        {/* What Comes Next? */}
        <section className="space-y-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-marvelRed">
            WHAT COMES NEXT?
          </h2>
          <div className="max-w-3xl mx-auto">
            <img
              src={DrDoomImg}
              alt="DOCTOR DOOM RISES"
              className="w-full rounded-2xl shadow-2xl shadow-marvelRed/60 object-cover"
            />
            <p className="mt-8 text-lg text-gray-300 italic leading-8 md:leading-10">
              A new shadow rises. Victor von Doom has arrived, a genius and a
              tyrant whose ambitions know no bounds. Is he a savior, bringing
              order to chaos, or the greatest threat the universe has ever
              faced? Only time will tell, but one thing is certain: the story of
              the MCU is far from over. New heroes will rise, new villains will
              challenge them, and the battle for the soul of the universe will
              continue. The next chapter awaits.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
