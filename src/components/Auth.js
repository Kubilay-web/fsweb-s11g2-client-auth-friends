import { Link } from "react-router-dom";

export default function Auth() {
  return (
    <Link to="/login" className="p-2 underline">
      Giriş Yap
    </Link>
  );
}
