import "./App.css";
import { useAuth } from "context/auth-context";
import { AuthenticatedApp } from "screens/authenticated-app";
import { UnauthenticatedApp } from "screens/unauthenticated-app";
import { ErrorBoundary } from "components/error-boundary";
import { FullPageErrorFallback } from "components/FullPageErrorFallback";

function App() {
  const { user } = useAuth();

  return (
    <div className="App">
      <ErrorBoundary fallbackRender={FullPageErrorFallback}>
        {user ? <AuthenticatedApp /> : <UnauthenticatedApp />}
      </ErrorBoundary>
    </div>
  );
}

export default App;
