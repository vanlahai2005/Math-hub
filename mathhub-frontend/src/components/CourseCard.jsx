function CourseCard({ course }) {
  return (
    <article className="course-card">
      <img src={course.image} alt={course.title} loading="lazy" />
      <div className="course-body">
        <p className="course-level">{course.level}</p>
        <h3>{course.title}</h3>
        <p className="course-author">{course.author}</p>
        <div className="course-meta">
          <span className="badge">{course.badge}</span>
          <span className="rating">
            <span aria-hidden="true">★</span> {course.rating}
          </span>
          <span>{course.learners}</span>
        </div>
        <div className="course-price">
          <strong>{course.price}</strong>
          <span>{course.oldPrice}</span>
        </div>
      </div>
    </article>
  )
}

export default CourseCard
