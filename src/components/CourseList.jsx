function CourseList() {
  return (
    <div className="course-list">
      <div className="course-item">
        <div className="course-item__img">
          <img src="../public/images/img1.jpg" alt="" />
        </div>
        <div className="course-item__detail">
          <div className="course-item__body">
            <div>
              <p className="title">React Js Course</p>
              <p className="desc">The Ultimate React and Redux Course</p>
            </div>
            <div className="rate">4</div>
          </div>
          <div className="course-item__footer">
            <div className="tags">
              <span className="badge badge--secondary">React JS</span>
              <span className="badge badge--secondary">Frountend</span>
            </div>
            <div className="caption">
              <div className="date">
                {new Date().toLocaleDateString("en-US", {
                  month: "short",
                  year: "numeric",
                  day: "numeric",
                })}
              </div>
              <span className="badge badge--danger">Completed</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default CourseList;
