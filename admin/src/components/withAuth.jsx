import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthStore } from "../store/auth.store";

export const withAuth = (Wrappedcomponent) => (props) => {
  const { admin, loading } = useContext(AuthStore);
  const navigate = useNavigate();

  useEffect(() => {
    if (!admin && !loading) {
      navigate("/login");
    }
  }, [loading]);

  return admin ? <Wrappedcomponent {...props} /> : <Loading />;
};

const Loading = () => {
  return (
    <div>
      <h1>Please wait</h1>
    </div>
  );
};
