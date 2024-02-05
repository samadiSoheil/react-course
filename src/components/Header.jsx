const coursStatus = ["All", "Active", "Completed", "Upcoming"];

function Header() {
  return (
    <div>
      <h1 className="">My Courses (3)</h1>
      <div className="course-status">
        {coursStatus.map((item) => (
          <div key={item}>{item}</div>
        ))}
      </div>
    </div>
  );
}
export default Header;
