import React from "react";
import { TeamMemberCard } from "../components";
import Sherifdeen from "../assets/Sherifdeen.JPG";

const Team = () => {
  return (
    <div className="w-full container mx-auto px-5 md:px-0 lg:px-8 py-4 pb-32">
      <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-[500] font-grotesk mb-8">
        OUR TEAM
      </h3>
      <div className="team_members grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <TeamMemberCard
          img="https://lyndon.qodeinteractive.com/wp-content/uploads/2021/11/team-img-1.jpg"
          name="Kassim(Jnr) Eshemogie"
          role="Backend Developer"
          link="/team-member/kassim"
          portfolioLink="http://kass-portfolio.s3-website.us-east-2.amazonaws.com"
          instagram="https://instagram.com/qaasim_ahmad?igshid=MzNlNGNkZWQ4Mg=="
        />
        <TeamMemberCard
          img={Sherifdeen}
          name="Sherifdeen Ishola"
          role="Frontend Developer"
          link="/team-member/sherifdeen"
          facebook="https://www.facebook.com/boogiedml"
          instagram="https://www.instagram.com/boogiedml"
          portfolioLink="https://boogiedml.onrender.com/"
          twitter="https://www.twitter.com/boogiedml"
        />
      </div>
    </div>
  );
};

export default Team;
