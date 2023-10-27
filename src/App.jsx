import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Contact, GetInTouch, Landing, Project, TeamMember } from "./pages";
import boogie from "./assets/Sherifdeen.JPG";
import garland from "./assets/garland-main.png";
import pos from "./assets/pos-main.png";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/get-in-touch" element={<GetInTouch />} />
        <Route
          exact
          path="/team-member/kassim"
          element={
            <TeamMember
              img="https://lyndon.qodeinteractive.com/wp-content/uploads/2021/11/team-img-1.jpg"
              heading="Hi, My name is Alhaji Qaasim, I take delight in taking your ideas from  your mind to the market place."
              portfolioLink="http://kass-portfolio.s3-website.us-east-2.amazonaws.com"
              instagram="https://instagram.com/qaasim_ahmad?igshid=MzNlNGNkZWQ4Mg=="
            />
          }
        />
        <Route
          exact
          path="/team-member/sherifdeen"
          element={
            <TeamMember
              img={boogie}
              heading="HI I'M Sherifdeen, Developer IN Lagos. I like to craft solid and
            scalable frontend products with great user experiences. CONTACT ME!"
              link="isholasherifdeen@gmail.com"
              facebook="https://www.facebook.com/boogiedml"
              instagram="https://www.instagram.com/boogiedml"
              portfolioLink="https://boogiedml.onrender.com/"
              twitter="https://www.twitter.com/boogiedml"
            />
          }
        />
        <Route
          exact
          path="/project/thegarlandrealty"
          element={
            <Project
              images={[garland]}
              header="The Garland Realty"
              texts={[
                "At The Garland, we're dedicated to revolutionizing the way you buy, sell, or rent real estate properties. Our mission is to empower you with the tools, information, and resources you need to make informed decisions and simplify your real estate journey.",
                "We envision a world where every individual can find their perfect home or investment property with ease, confidence, and transparency. We're committed to leveraging technology to make this vision a reality.",
                "User-Friendly Interface: Our app is designed with you in mind. It's intuitive, easy to navigate, and loaded with features that will simplify your real estate experience. Comprehensive Listings: Access thousands of property listings, from cozy apartments to luxurious estates. We provide detailed information, high-quality images, and virtual tours to help you make informed choices.",
                "Powerful Search Tools: Find properties that match your criteria with precision. Filter by location, price, size, and more to discover your dream property. Connect with Agents: Connect with experienced real estate agents who are ready to guide you through the buying or selling process.",
                "Trustworthy Information: We believe in transparency. Our data is up-to-date and accurate, providing you with the knowledge you need to make smart decisions. Security and Privacy: Your data's security and your privacy are paramount. We employ the highest standards to keep your information safe.",
              ]}
            />
          }
        />
        <Route
          exact
          path="/project/posxena"
          element={
            <Project
              images={[pos]}
              header="Posxena"
              texts={[
                "Welcome to PoSXENA], where we're passionate about simplifying your business operations and enhancing your customer experiences. We understand the unique challenges faced by businesses of all sizes, which is why we've developed a cutting-edge POS solution tailored to meet your needs.",
                "At POSXENA, we believe that technology should be a tool that empowers your business rather than complicating it. Our team is dedicated to delivering a seamless and user-friendly POS system that helps you streamline your daily operations, boost sales, and stay ahead of the competition.",
              ]}
            />
          }
        />
      </Routes>
    </>
  );
}

export default App;
