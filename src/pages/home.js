import Carousel from "/src/Presentation/organism/carousel";
import Card from "../Presentation/components/card";
export default function Home() {
  const testingTest =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.c";
  return `
    <div>
      ${Carousel()}
      <section class="dark:bg-dark bg-white py-[70px]">
        <div class="mx-auto px-4 sm:container">
          <div class="border-stroke dark:border-dark-3 border-b">
            <h2 class="text-dark mb-2 text-2xl font-semibold">Welcome to JS Shop</h2>
            <p class="text-body-color dark:text-dark-6 mb-6 text-sm font-medium">${testingTest}</p>
          </div>
        </div>
      </section>
      ${Card()}
    </div>
`;
}
