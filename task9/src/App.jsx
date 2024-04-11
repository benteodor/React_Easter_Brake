import { useState } from "react";
import UserProfile from "./UserProfile";
import LoginPrompt from "./LoginPrompt";
import "./styles.css";

const App = () => {
  const [user, setUser] = useState({
    name: "",
    isLoggedIn: false,
  });

  const handleLogIn = (name) => {
    setUser({ ...user, name: name, isLoggedIn: true });
  };
  const handleLogOut = () => {
    setUser({ ...user, isLoggedIn: false });
  };

  return (
    <main>
      <h1>Conditional rendering</h1>

      <div>
        {user.isLoggedIn ? (
          <UserProfile user={user.name} handleLogOut={handleLogOut} />
        ) : (
          <LoginPrompt handleLogIn={handleLogIn} />
        )}
      </div>
    </main>
  );
};

export default App;
