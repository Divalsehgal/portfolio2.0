export function Sidebar() {
  return (
    <div className="h-full bg-primary text-primary-light w-56">
      <div className="p-4">
        <h2 className="text-lg font-semibold mb-4">Navigation</h2>
        <ul>
          <li className="mb-2">
            <a
              href="#"
              className="block hover:text-accent-light transition-colors duration-300"
            >
              React
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block hover:text-accent-light transition-colors duration-300"
            >
              JavaScript
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
