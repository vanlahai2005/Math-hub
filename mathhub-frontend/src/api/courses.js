const API_BASE_URL = import.meta.env.VITE_API_BASE_URL ?? ''

export async function fetchCourses() {
  const response = await fetch(`${API_BASE_URL}/api/courses`)

  if (!response.ok) {
    throw new Error('Không thể tải dữ liệu khóa học')
  }

  return response.json()
}
