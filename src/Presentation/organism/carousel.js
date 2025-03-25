import { apiRequest } from "../../Data/api";

export async function carousel() {
  try {
    const data = await apiRequest();

    if (!Array.isArray(data)) {
      throw new Error("Expected an Array");
    }
    const carouselHTML = `
    <div id="controls-carousel" class="relative w-full" data-carousel="static">
        <!-- Carousel wrapper -->
        <div class="relative h-56 overflow-hidden md:h-96">
          ${data
            .map(
              (item, index) => `
            <!-- Item ${index + 1} -->
            <div class="hidden duration-700 ease-in-out" data-carousel-item="${
              index === 0 ? "active" : ""
            }">
              <img src="${
                item.image
              }" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="Carousel image ${
                index + 1
              }">
            </div>
          `
            )
            .join("")}
        </div>
        <!-- Slider controls -->
        <button type="button" class="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
          <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/>
            </svg>
            <span class="sr-only">Previous</span>
          </span>
        </button>
        <button type="button" class="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
          <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
            </svg>
            <span class="sr-only">Next</span>
          </span>
        </button>
      </div>
    `;
    return carouselHTML;
  } catch (error) {
    console.log(`Carousel Error: ${error}`);
  }
}

export function initCarousel(container) {
  // Use the container as the base for queries
  const items = container.querySelectorAll("[data-carousel-item]");
  const prevButton = container.querySelector("[data-carousel-prev]");
  const nextButton = container.querySelector("[data-carousel-next]");

  // Check if elements exist
  if (!items.length || !prevButton || !nextButton) {
    console.error("Carousel elements not found");
    return;
  }

  let currentIndex = 0;

  function showItem(index) {
    items.forEach((item, i) => {
      item.classList.toggle("hidden", i !== index);
      item.setAttribute("data-carousel-item", i === index ? "active" : "");
    });
  }

  prevButton.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + items.length) % items.length;
    showItem(currentIndex);
  });

  nextButton.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % items.length;
    showItem(currentIndex);
  });

  // Show first item initially
  showItem(0);
}

export async function renderCarousel() {
  try {
    // Generate carousel HTML
    const carouselHTML = await carousel();

    // Create a temporary container to hold the HTML
    const tempContainer = document.createElement("div");
    tempContainer.innerHTML = carouselHTML;

    // Find the carousel container
    const carouselContainer = tempContainer.querySelector("#controls-carousel");

    // Initialize the carousel
    if (carouselContainer) {
      initCarousel(carouselContainer);
    }

    return carouselContainer;
  } catch (error) {
    console.error("Carousel render error:", error);
    return null;
  }
}
