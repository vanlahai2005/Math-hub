package com.mathhub.backend.startup;

import java.util.List;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.autoconfigure.condition.ConditionalOnProperty;
import org.springframework.stereotype.Component;

import com.mathhub.backend.entity.Course;
import com.mathhub.backend.repository.CourseRepository;

@Component
@ConditionalOnProperty(name = "mathhub.seed-courses", havingValue = "true")
public class CourseDataLoader implements CommandLineRunner {

    private final CourseRepository courseRepository;

    public CourseDataLoader(CourseRepository courseRepository) {
        this.courseRepository = courseRepository;
    }

    @Override
    public void run(String... args) {
        if (courseRepository.count() > 0) {
            return;
        }

        List<Course> courses = List.of(
                new Course(null, "AI Engineer: Xây dựng Agent và MCP từ nền tảng", "Minh Tran, MathHub Labs",
                        "Artificial Intelligence", "Bestseller", "4.8", "42,910 học viên", "279.000đ",
                        "549.000đ", "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=720&q=80"),
                new Course(null, "Python ứng dụng cho phân tích dữ liệu thực tế", "An Nguyen", "Programming", "Hot",
                        "4.7", "31,204 học viên", "249.000đ", "499.000đ",
                        "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=720&q=80"),
                new Course(null, "Frontend React: Từ UI hiện đại đến sản phẩm hoàn chỉnh", "Khoa Pham",
                        "Web Development", "New", "4.9", "18,760 học viên", "319.000đ", "699.000đ",
                        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=720&q=80"),
                new Course(null, "SQL và Supabase cho ứng dụng học tập", "Linh Dao", "Database", "Bestseller", "4.6",
                        "22,481 học viên", "229.000đ", "449.000đ",
                        "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=720&q=80")
        );

        courseRepository.saveAll(courses);
    }
}
