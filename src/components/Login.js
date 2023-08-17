import { Button, Link } from "@mui/joy";
import React from "react";

function Login() {
  return (
    <div>
      <Link href="http://localhost:8000/api/auth/login">
        <Button>Login</Button>
      </Link>
    </div>
  );
}

export default Login;
