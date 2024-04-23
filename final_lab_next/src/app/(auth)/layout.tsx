import Link from "next/link";

const Layout = ({
    children,
  }: {
    children: React.ReactNode
  }) => {
    return (
      <div>
        <ul>
            <li><Link href='/login'>Login</Link></li>
            <li><Link href='/register' replace>Register</Link></li>
            <li><Link href='/'>Home</Link></li>
        </ul>
        {children}
      </div>
    )
  }
  
  export default Layout;
  