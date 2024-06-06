import { Outlet } from "react-router-dom";
import App from "../App";

export default function root() {
  return (
    <div className="flex">
      <App />
      <div className="w-full h-full flex-flex-col">
        <Outlet />
      </div>
    </div>
  );
}
