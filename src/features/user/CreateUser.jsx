import { useState } from "react";
import Button from "../../ui/Button";
import InputField from "../../ui/InputField";

function CreateUser() {
  const [username, setUsername] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
      <p className="mb-4 text-sm text-stone-600 md:text-base">
        👋 Welcome! Please start by telling us your name:
      </p>

      <InputField
        placeholder="Your full name"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="mb-8 w-72"
      />

      {username !== "" && (
        <div>
          <Button type="primary" to="/menu">
            Start ordering
          </Button>
        </div>
      )}
    </form>
  );
}

export default CreateUser;
