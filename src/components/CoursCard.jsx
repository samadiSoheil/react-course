function CoursCard({ course }) {
  let startingAt = new Date(course.start).toLocaleDateString("en-US", {
    month: "short",
    year: "numeric",
    day: "numeric",
  });

  return (
    <div className="course-item">
      <div className="course-item__img">
        <img src={course.imageUrl} alt="" />
      </div>
      <div className="course-item__detail">
        <div className="course-item__body">
          <div>
            <p className="title">{course.title}</p>
            <p className="desc">{course.description}</p>
          </div>
          <div className="rate">{course.rate} 👌</div>
        </div>
        <div className="course-item__footer">
          <div className="tags">
            {course.tags.map((i) => {
              return (
                <span key={i} className="badge badge--secondary">
                  {i}
                </span>
              );
            })}
          </div>
          <div className="caption">
            <div className="date">{startingAt}</div>
            <span
              className={`badge ${
                course.status === "Active"
                  ? "badge--primary"
                  : course.status === "Upcoming"
                  ? "badge--danger"
                  : "badge--secondary"
              }`}
            >
              {course.status}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
export default CoursCard;
