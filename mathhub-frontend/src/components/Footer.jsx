function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div>
          <a className="brand footer-brand" href="/" aria-label="MathHub home">
            <span className="brand-mark">M</span>
            <span>MathHub</span>
          </a>
          <p>
            Nền tảng học tập trực tuyến tập trung vào kỹ năng công nghệ, AI và
            phát triển sự nghiệp.
          </p>
        </div>

        <div className="footer-links">
          <div>
            <h3>Học tập</h3>
            <a href="#courses">Khóa học nổi bật</a>
            <a href="#paths">Lộ trình nghề nghiệp</a>
            <a href="#skills">Kỹ năng phổ biến</a>
          </div>
          <div>
            <h3>MathHub</h3>
            <a href="#stories">Học viên nói gì</a>
            <a href="#companies">Đối tác</a>
            <a href="#newsletter">Cập nhật mới</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2026 MathHub. All rights reserved.</span>
        <span>Dữ liệu hiện đang là dữ liệu tĩnh.</span>
      </div>
    </footer>
  )
}

export default Footer
