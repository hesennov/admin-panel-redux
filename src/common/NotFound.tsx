import StatusView from "./StatusView";
import { useNavigate } from "react-router-dom";
export default function NotFoundPage() {
  const navigate = useNavigate();
  return (
    <StatusView
      type="notfound"
      message="The page you're looking for doesn't exist or has been moved"
      onRetry={() => navigate("/users")}
    />
  );
}
