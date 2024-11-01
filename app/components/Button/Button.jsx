// best practice is to use 'children' for the button content, and 'props' for the button attributes (i.e., button type: "submit", "button")
export default function Button({ children }) {
  return (
    <button className="px-4 py-2 text-sky-600 bg-transparent border border-sky-600 rounded-full hover:text-neutral-100 hover:bg-sky-600 transition-all ease-linear duration-200">
      {children}
    </button>
  );
}
