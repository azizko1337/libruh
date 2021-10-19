import AuthContext from "./AuthContext";
import LoadingPage from "../../../components/layout/LoadingPage";

function WithAuthentication(Component) {
  return (props) => (
    <AuthContext.Consumer>
      {(student) =>
        student === "loading" ? (
          <LoadingPage />
        ) : (
          <Component {...props} student={student} />
        )
      }
    </AuthContext.Consumer>
  );
}
WithAuthentication.displayName = "WithAuthentication";

export default WithAuthentication;
