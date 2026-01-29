import { useRouteError } from "react-router-dom";

function errorPage() {
  const error = useRouteError();
  console.error(error);
  return (
    <div
      id="error-page"
      className="place-items-center w-screen h-screen bg-slate-800 text-slate-200">
      <h1>belum ready ya bang</h1>
    </div>
  );
}

export default errorPage;
