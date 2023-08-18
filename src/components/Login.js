import { Button, Link } from "@mui/joy";
import React from "react";

function Login() {
  return (
    <div>
      <Link href="https://jarviot-challenge-full-stack-backend-omega.vercel.app/api/auth/login">
        <Button>Login</Button>
      </Link>
    </div>
  );
}

export default Login;
