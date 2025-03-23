import Carousel from "/src/Presentation/organism/carousel";
import Card from "../Presentation/components/card";
export default function Home() {
  return `
    <div>
      ${Carousel()}
      <h1> Home Page </h1>
      ${Card()}
    </div>
`;
}
