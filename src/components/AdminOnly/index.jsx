import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const AdminOnly = ({ children, sendHome = false }) => {
  const { user } = useAuth();
  const navigate = useNavigate();

  if (user?.role !== "admin") {
    if (sendHome) {
      navigate("/home");
    } else {
      return null;
    }
  }

  return <>{children}</>;
};

export default AdminOnly;
