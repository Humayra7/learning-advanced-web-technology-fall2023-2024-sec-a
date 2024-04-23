
const Register = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Employer Registration</h1>
      <form style={{ display: 'inline-block', marginTop: '20px' }}>
        <div>
          <input type="text" placeholder="Employer Name" required />
        </div>
        <div>
          <input type="text" placeholder="Company Name" required />
        </div>
        <div>
          <input type="tel" placeholder="Contact Number" required />
        </div>
        <div>
          <input type="text" placeholder="Username" required />
        </div>
        <div>
          <input type="password" placeholder="Password" required />
        </div>
        <div>
          <button type="submit" style={{ marginTop: '20px' }}>Register</button>
        </div>
      </form>
    </div>
  );
};

export default Register;
  
  export const generateMetadata = ()=> {
    return{
      title: 'Register Page',
      description: 'this is Register page created by app owner'
    }
  }