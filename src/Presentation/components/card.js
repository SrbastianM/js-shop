import Image from "../atoms/image";
import Span from "../atoms/span";
import Title from "../atoms/title";

export default function Card() {
  const card = `
    <div class="bg-white">
        <div class="mx-auto max-w-2x1 px-4 py-16 sm:py-24 lg:max-w-7xl lg:px-8">
            ${Title("Customers Also Purchase")}
            <div class="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                <div class="group relative"> 
                    ${Image()}
                    <div class="mt-4 flex justify-between"> 
                        ${Span("Hello", "Black")}
                    </div>
                </div>
            </div>
        </div>
    </div>
    `;
  return card;
}
