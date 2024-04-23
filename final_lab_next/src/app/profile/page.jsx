export default function Prfole() {
    
    const profileData = {
      name: 'John Doe',
      email: 'john.doe@example.com',
      company: 'Doe Enterprises',
      role: 'CEO'
    };
  
   
    
  
    return (
      <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <h1>My Profile</h1>
        <div style={{ maxWidth: '300px', margin: 'auto' }}>
          <p><strong>Name:</strong> {profileData.name}</p>
          <p><strong>Email:</strong> {profileData.email}</p>
          <p><strong>Company:</strong> {profileData.company}</p>
          <p><strong>Role:</strong> {profileData.role}</p>
          <button >Edit Profile</button>
          <button >Delete Profile</button>
        </div>
      </div>
    );
  }
  