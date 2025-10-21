const user = [
    {
      id: 1,
      name: 'Omar Sherif',
      ID: 'U001',
      email: 'omar@example.com',
      role: 'admin',
      Password: '123456', // in a real app, this should be hashed!
      address: 'Cairo, Egypt',
      phonenumber: '+201234567890',
      gender: 'male',
      passwordChangedAt: '2025-01-01',
      country: 'Egypt',
    },
    {
      id: 2,
      name: 'Jana Ahmed',
      ID: 'U002',
      email: 'jana@example.com',
      role: 'user',
      Password: 'password123',
      address: 'Giza, Egypt',
      phonenumber: '+201098765432',
      gender: 'female',
      passwordChangedAt: '2025-03-12',
      country: 'Egypt',
    },
  ];
  
  // Function to get all users
  function getAllUsers() {
    return user;
  }
  
  // Function to find a user by email or ID
  function findUser(identifier) {
    return user.find(
      (u) => u.email === identifier || u.ID === identifier
    );
  }
  
  module.exports = { user, getAllUsers, findUser };
  