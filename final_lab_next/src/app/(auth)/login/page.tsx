'use client'
import { redirect, useRouter } from "next/navigation"

const Login = () => {
  const router = useRouter();

  const newAccount = () => {
    router.push("/register");
  }

  return (
    <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', height: '100vh', flexDirection: 'column' }}>
      <h1>Login</h1>
      <form style={{ display: 'flex', flexDirection: 'column', width: '300px', gap: '10px' }}>
        <input type="text" placeholder="Username" required />
        <input type="password" placeholder="Password" required />
        <button type="submit" style={{ padding: '10px' }}>Login</button>
      </form>
      <p>Create New account? </p>
      <button onClick={newAccount} style={{ marginTop: '10px' }}>Click Here</button>
    </div>
  )
}

export default Login;

