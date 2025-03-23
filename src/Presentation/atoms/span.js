export default function Span(text, color) {
  const customText = `
    <div>
    <h3 class="text-sm text-gray-700">
      <a href="#">
        <span aria-hidden="true" class="absolute inset-0">${text}</span>
      </a>
    </h3>
      <p class="mt-1 text-sm text-gray-500">${color}</p>
    </div>
      `;
  return customText;
}
