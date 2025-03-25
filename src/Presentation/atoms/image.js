export default function Image(alt, source) {
  const cardImage = `
    <img src="${source}"
    alt="${alt}" class="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"
    >  
  `;
  return cardImage;
}
