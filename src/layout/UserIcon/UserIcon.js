import { Link } from "react-router-dom";

export default function UserIcon({ name }) {
  return (
    <Link className="sc-176km0j-0 fiArIx sc-1ulixnw-2 jsuyGt" to="/profile">
      <span className="icon">
        <svg width="25" height="24" viewBox="0 0 25 24" fill="none">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M12.5 22.5C18.299 22.5 23 17.799 23 12S18.299 1.5 12.5 1.5 2 6.201 2 12s4.701 10.5 10.5 10.5zm0-2.25a8.25 8.25 0 008.237-8.716c-1.5.114-3.315.072-5.093-.255-2.54-.466-5.197-1.551-6.643-3.796-.935.702-2.111 1.644-3.134 2.477-.62.504-1.178.964-1.584 1.302A8.25 8.25 0 0012.5 20.25z"
            fill="#000"
          ></path>
          <path
            d="M8.75 15.75a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM17 15.75a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"
            fill="#000"
          ></path>
        </svg>
      </span>
      <span className="label">{name}</span>
    </Link>
  );
}
