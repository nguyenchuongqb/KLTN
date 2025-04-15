import { useTheme } from '@/hooks/useTheme'; // Import custom hook useTheme

const TopTrends = () => {

    const { theme } = useTheme(); // Lấy theme từ useTheme hook
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-8 py-12 bg-white">
      <div className="md:w-1/2 mb-10 md:mb-0">
        <h2 className="text-3xl md:text-4xl font-bold leading-snug text-gray-900 mb-6">
          Những xu hướng hàng đầu trong tương lai của việc làm
        </h2>
        <p className="text-lg text-gray-700 mb-6">
          AI tạo sinh (GenAI) và khả năng lãnh đạo là cốt lõi của nền kinh tế dựa trên kỹ năng ngày nay. Hãy tải Báo cáo Xu hướng kỹ năng và học tập toàn cầu năm 2025 để tìm hiểu thêm.
        </p>
        <a
          href="#"
          className="inline-block px-6 py-3 text-purple-600 border border-purple-600 rounded-md hover:bg-purple-50 transition-colors"
        >
          Tải báo cáo →
        </a>
      </div>
      <div className="md:w-1/2 flex justify-center">
        <img
          src="https://cms-images.udemycdn.com/96883mtakkm8/1qvvR0FDKv9chruIpia6Sc/b2af22a0097e47de4e4354237e3f378c/Onsite_Desktop_GLSTR25.png" // hãy thay bằng đường dẫn đúng nếu dùng hình từ public
          alt="2025 Global Learning & Skills Trends Report"
          className="max-w-full h-auto shadow-xl rounded-lg"
        />
      </div>
    </section>
  )
}

export default TopTrends