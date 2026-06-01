import './App.css'
import CourseCard from './components/CourseCard'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import {
  aiCourses,
  companies,
  skillGroups,
  testimonials,
  trendingCourses,
} from './data/homeData'

function CourseSection({ id, title, subtitle, courses, linkText }) {
  return (
    <section className="section" id={id}>
      <div className="section-heading">
        <div>
          <p className="eyebrow">Học theo nhu cầu</p>
          <h2>{title}</h2>
          {subtitle && <p>{subtitle}</p>}
        </div>
        <a href={`#${id}`}>{linkText}</a>
      </div>

      <div className="course-grid">
        {courses.map((course) => (
          <CourseCard course={course} key={course.title} />
        ))}
      </div>
    </section>
  )
}

function App() {
  return (
    <>
      <Navbar />

      <main>
        <section className="hero-section">
          <div className="hero-content">
            <p className="eyebrow">MathHub Learning</p>
            <h1>Bắt đầu nâng cấp kỹ năng công nghệ hôm nay</h1>
            <p>
              Khám phá các khóa học AI, lập trình, dữ liệu và sản phẩm số với
              lộ trình học rõ ràng, nội dung thực hành và dữ liệu hiện đang để
              tĩnh để dễ thay bằng Supabase sau này.
            </p>
            <div className="hero-actions">
              <a className="primary-button" href="#courses">
                Khám phá khóa học
              </a>
              <a className="secondary-button" href="#paths">
                Xem lộ trình
              </a>
            </div>
          </div>

          <div className="hero-visual" aria-label="Không gian học tập online">
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=920&q=80"
              alt="Nhóm học viên học tập cùng laptop"
            />
            <div className="hero-card">
              <span>Ưu đãi tháng này</span>
              <strong>Học từ 199.000đ</strong>
              <p>AI, Python, React, SQL và kỹ năng nghề nghiệp.</p>
            </div>
          </div>
        </section>

        <CourseSection
          id="courses"
          title="Khóa học đang nổi bật"
          subtitle="Các khóa học được chọn để hiển thị trước trên homepage."
          courses={trendingCourses}
          linkText="Xem tất cả"
        />

        <section className="career-panel" id="paths">
          <div>
            <p className="eyebrow">Lộ trình nghề nghiệp</p>
            <h2>Tái thiết kỹ năng của bạn trong kỷ nguyên AI</h2>
            <p>
              Một lộ trình học gọn, thực tế và có thể mở rộng thành hệ thống
              học cá nhân hóa khi dữ liệu Supabase sẵn sàng.
            </p>
            <div className="feature-list">
              <span>AI căn bản đến nâng cao</span>
              <span>Thực hành dự án thật</span>
              <span>Ôn chứng chỉ nghề nghiệp</span>
              <span>Định hướng portfolio</span>
            </div>
          </div>
          <div className="panel-art">
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=720&q=80"
              alt="Giảng viên thuyết trình trong lớp học"
            />
            <div className="floating-stat">
              <strong>12 tuần</strong>
              <span>hoàn thành một lộ trình mẫu</span>
            </div>
          </div>
        </section>

        <CourseSection
          id="skills"
          title="Kỹ năng giúp bạn chuyển đổi sự nghiệp"
          subtitle="Tạm thời hiển thị danh mục tĩnh, sau này có thể map từ database."
          courses={aiCourses}
          linkText="Xem khóa học AI"
        />

        <section className="companies" id="companies">
          <p>MathHub được tin tưởng bởi các đội ngũ học tập và công nghệ</p>
          <div>
            {companies.map((company) => (
              <span key={company}>{company}</span>
            ))}
          </div>
        </section>

        <section className="stories section" id="stories">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Học viên</p>
              <h2>Câu chuyện chuyển đổi qua việc học</h2>
            </div>
            <a href="#stories">Xem câu chuyện</a>
          </div>
          <div className="story-grid">
            {testimonials.map((story) => (
              <article className="story-card" key={story.name}>
                <span className="quote-mark">“</span>
                <p>{story.quote}</p>
                <div>
                  <strong>{story.name}</strong>
                  <span>{story.role}</span>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="popular-skills">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Xu hướng</p>
              <h2>Kỹ năng phổ biến</h2>
            </div>
          </div>
          <div className="skill-grid">
            {skillGroups.map((group) => (
              <article key={group.title}>
                <h3>{group.title}</h3>
                {group.link && <a href="#courses">{group.link}</a>}
                {group.learners && <p>{group.learners}</p>}
                {group.links?.map((link) => (
                  <a href="#courses" key={link}>
                    {link} <span aria-hidden="true">›</span>
                  </a>
                ))}
              </article>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}

export default App
