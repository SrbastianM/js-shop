import { apiRequest } from "../../Data/api";
import Image from "../atoms/image";
import Span from "../atoms/span";
import Title from "../atoms/title";

export async function card(targetElement) {
  try {
    const data = await apiRequest();
    if (!Array.isArray(data)) {
      throw new Error("Expected an Array");
    }

    const cardsContent = data
      .map(
        (item) =>
          `
      <div class="group relative"> 
        ${Image(item.description, item.image)}
        <div class="mt-4 flex justify-between"> 
          ${Span(item.title, item.category)} 
          <p class="text-sm font-medium text-gray-900">$${
            item.price || "300"
          }</p>
        </div>
      </div>
    `
      )
      .join("");

    const cardContain = `
      <div class="bg-white">
        <div class="mx-auto max-w-2xl px-4 py-16 sm:py-4 lg:max-w-7xl lg:px-8">
          ${Title(data[0]?.name || "Products")}
          <div class="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            ${cardsContent}
          </div>
        </div>
      </div>
    `;
    if (targetElement) {
      targetElement.innerHTML = cardContain;
    }
    return cardContain;
  } catch (error) {
    console.error(`Something went wrong: ${error}`);
  }
}
