// Import reusable components
import HeroSection from "@/components/home/HeroSection";
import CategoriesSection from "@/components/home/CategoriesSection";
import FeaturedCoursesSection from "@/components/home/FeaturedCoursesSection";
import StatsSection from "@/components/home/StatsSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import CTASection from "@/components/home/CTASection";
import { Footer } from "@/components/Footer"; // Import Footer
import TopTrends from "@/components/home/TopTrends";

export default function HomePage() {
  // const { isLoading, data } = useQuery({
  //   queryFn: verifyToken,
  //   queryKey: ['verifyToken'],
  //   retry: false,
  // });

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <HeroSection />

      {/* Categories Section */}
      <CategoriesSection />

      {/* Featured Courses Section */}
      <FeaturedCoursesSection />

      {/* Stats Section */}
      <StatsSection />

      {/* Testimonials */}
      <TestimonialsSection />

      {/* CTA Section */}
      <CTASection />

      {/* Top Trends */}
      <TopTrends />

      {/* Thêm Footer */}
      <Footer />
    </div>
  );
}
