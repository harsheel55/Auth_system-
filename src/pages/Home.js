function Home() {
  const user = JSON.parse(localStorage.getItem('user'));

  return (
    <div className="container mx-auto p-4 text-center">
      <h1 className="text-3xl font-bold mb-4">
        {user ? `Welcome, ${user.name}!` : 'Welcome to MERN Auth'}
      </h1>
      <p className="text-lg">
        {user ? 'You are logged in.' : 'Please sign up or log in to continue.'}
      </p>
    </div>
  );
}

export default Home;