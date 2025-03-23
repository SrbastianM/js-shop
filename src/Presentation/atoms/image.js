export default function Image(alt) {
  const cardImage = `
    <img src="https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-01.jpg"
    alt="${alt}" class="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"
    >  
  `;
  return cardImage;
}
