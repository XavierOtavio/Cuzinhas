function Header() {
  return (
    <div className="bg-stone-300 h-24 justify-center items-center flex">
      <h1>Header</h1>
      <div>
        <button>
          <Link to="/dashboard/orders">Home</Link>
        </button>
      </div>
    </div>
  );
}

export default Header;
