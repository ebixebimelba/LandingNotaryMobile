export default function Vector3(props: Vector3Props) {
  return (
    <div
      className="absolute flex w-[5px] left-[43.11%] right-[55.44%] top-[58.85%] bottom-[39.65%]"
    >
      <svg
        width="100%"
        height="100%"
        preserveAspectRatio="none"
        viewBox="0 0 5 5"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M 4.67 2.035 C 4.458 1.56 4.168 1.124 3.812 0.745 C 2.687 1.969 1.608 3.229 0.558 4.514 C 1.93 3.092 2.602 3.144 4.67 2.035 Z"
          fill="#123962"
         />
      </svg>
    </div>
  );
}

Vector3.defaultProps = {};

interface Vector3Props {}

/**
 * This component was generated from Figma with FireJet.
 * Learn more at https://www.firejet.io
 *
 * README:
 * The output code may look slightly different when copied to your codebase. To fix this:
 * 1. Include the necessary fonts. The required fonts are imported from public/index.html
 * 2. Include the global styles. They can be found in App.css
 *
 * Note: Step 2 is not required for tailwind.css output
 */
