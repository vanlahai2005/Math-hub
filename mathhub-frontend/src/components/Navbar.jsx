function Navbar() {
  return (
    <header className="site-header">
      <a className="brand" href="/" aria-label="MathHub home">
        <span className="brand-mark">M</span>
        <span>MathHub</span>
      </a>

      <nav className="main-nav" aria-label="Primary navigation">
        <a href="#courses">Khóa học</a>
        <a href="#paths">Lộ trình</a>
        <a href="#skills">Kỹ năng</a>
        <a href="#stories">Câu chuyện</a>
      </nav>

      <form className="search-form" role="search">
        <span className="search-icon" aria-hidden="true">
          <svg viewBox="0 0 24 24">
            <path d="m21 21-4.35-4.35m1.35-5.65a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z" />
          </svg>
        </span>
        <input type="search" placeholder="Tìm khóa học, kỹ năng, giảng viên" />
      </form>

      <a className="nav-cta" href="#courses">
        Bắt đầu học
      </a>
    </header>
  )
}

export default Navbar
