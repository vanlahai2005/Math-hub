const image = (id) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=720&q=80`

export const trendingCourses = [
  {
    title: 'AI Engineer: Xây dựng Agent và MCP từ nền tảng',
    author: 'Minh Tran, MathHub Labs',
    level: 'Artificial Intelligence',
    badge: 'Bestseller',
    rating: '4.8',
    learners: '42,910 học viên',
    price: '279.000đ',
    oldPrice: '549.000đ',
    image: image('photo-1677442136019-21780ecad995'),
  },
  {
    title: 'Python ứng dụng cho phân tích dữ liệu thực tế',
    author: 'An Nguyen',
    level: 'Programming',
    badge: 'Hot',
    rating: '4.7',
    learners: '31,204 học viên',
    price: '249.000đ',
    oldPrice: '499.000đ',
    image: image('photo-1515879218367-8466d910aaa4'),
  },
  {
    title: 'Frontend React: Từ UI hiện đại đến sản phẩm hoàn chỉnh',
    author: 'Khoa Pham',
    level: 'Web Development',
    badge: 'New',
    rating: '4.9',
    learners: '18,760 học viên',
    price: '319.000đ',
    oldPrice: '699.000đ',
    image: image('photo-1498050108023-c5249f4df085'),
  },
  {
    title: 'SQL và Supabase cho ứng dụng học tập',
    author: 'Linh Dao',
    level: 'Database',
    badge: 'Bestseller',
    rating: '4.6',
    learners: '22,481 học viên',
    price: '229.000đ',
    oldPrice: '449.000đ',
    image: image('photo-1558494949-ef010cbdcc31'),
  },
]

export const aiCourses = [
  {
    title: 'Machine Learning căn bản cho người mới bắt đầu',
    author: 'MathHub Academy',
    level: 'AI Fundamentals',
    badge: 'Bestseller',
    rating: '4.7',
    learners: '51,204 học viên',
    price: '279.000đ',
    oldPrice: '599.000đ',
    image: image('photo-1555949963-aa79dcee981c'),
  },
  {
    title: 'Prompt Engineering cho công việc văn phòng',
    author: 'Mai Hoang',
    level: 'Productivity',
    badge: 'Popular',
    rating: '4.8',
    learners: '15,880 học viên',
    price: '199.000đ',
    oldPrice: '399.000đ',
    image: image('photo-1516321497487-e288fb19713f'),
  },
  {
    title: 'Tự động hóa quy trình với AI Assistant',
    author: 'Duc Le',
    level: 'Automation',
    badge: 'Hot & New',
    rating: '4.7',
    learners: '8,450 học viên',
    price: '299.000đ',
    oldPrice: '649.000đ',
    image: image('photo-1504384308090-c894fdcc538d'),
  },
  {
    title: 'Data Visualization bằng Python và Dashboard',
    author: 'Trang Vu',
    level: 'Data Science',
    badge: 'Top rated',
    rating: '4.8',
    learners: '27,602 học viên',
    price: '349.000đ',
    oldPrice: '749.000đ',
    image: image('photo-1551288049-bebda4e38f71'),
  },
]

export const skillGroups = [
  {
    title: 'ChatGPT là kỹ năng nổi bật',
    link: 'Xem khóa học ChatGPT',
    learners: '5,601,459 học viên',
  },
  {
    title: 'Development',
    links: ['Python', 'Web Development', 'Data Science'],
  },
  {
    title: 'Design',
    links: ['UI Design', 'Figma', 'Graphic Design'],
  },
  {
    title: 'Business',
    links: ['Project Management', 'Power BI', 'Digital Marketing'],
  },
]

export const testimonials = [
  {
    quote:
      'Khóa học giúp tôi hiểu cách áp dụng AI vào dự án thật thay vì chỉ học lý thuyết.',
    name: 'Ngọc Anh',
    role: 'Frontend Developer',
  },
  {
    quote:
      'Lộ trình rõ ràng, bài tập đủ thực tế để tôi tự tin chuyển sang vai trò data analyst.',
    name: 'Hoàng Minh',
    role: 'Data Analyst',
  },
  {
    quote:
      'Tôi thích cách nội dung được chia nhỏ, học buổi tối vẫn không bị quá tải.',
    name: 'Thảo Vy',
    role: 'Product Executive',
  },
]

export const companies = ['Viettel', 'FPT', 'VNPT', 'MoMo', 'Tiki', 'VNG']
