// src/components/FAQ.tsx
// Composant FAQ optimisé pour Answer Engine Optimization (AEO)

export default function FAQ() {
  // Schéma JSON-LD pour les moteurs IA
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Mẹ Bút Xanh là gì?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Mẹ Bút Xanh là nền tảng giáo dục trực tuyến miễn phí chuyên cung cấp truyện tranh và ca nhạc thiếu nhi chất lượng cao cho trẻ em từ 3 đến 12 tuổi. Sứ mệnh của chúng tôi là tạo ra không gian an toàn và lành mạnh để trẻ em học hỏi, giải trí và phát triển toàn diện."
        }
      },
      {
        "@type": "Question",
        "name": "Nội dung trên Mẹ Bút Xanh có miễn phí không?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Có, tất cả nội dung trên Mẹ Bút Xanh hoàn toàn miễn phí cho mọi gia đình. Chúng tôi cam kết cung cấp tài liệu giáo dục chất lượng cao mà không tính phí."
        }
      },
      {
        "@type": "Question",
        "name": "Nội dung có an toàn cho trẻ em không?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Có, tất cả nội dung được kiểm duyệt kỹ lưỡng. Mỗi truyện tranh và clip ca nhạc đều được đánh giá về tính phù hợp với lứa tuổi, không có nội dung bạo lực hay không phù hợp. An toàn trẻ em là ưu tiên hàng đầu."
        }
      },
      {
        "@type": "Question",
        "name": "Có những loại nội dung nào?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Mẹ Bút Xanh cung cấp hai loại nội dung chính: Truyện tranh thiếu nhi với hình ảnh đẹp mắt và câu chuyện giáo dục, giúp trẻ phát triển kỹ năng đọc. Các clip ca nhạc thiếu nhi vui nhộn, giúp trẻ học qua âm nhạc."
        }
      },
      {
        "@type": "Question",
        "name": "Trẻ em học được gì?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Trẻ em sẽ phát triển nhiều kỹ năng quan trọng: Kỹ năng đọc và hiểu tiếng Việt, các giá trị đạo đức như tình bạn và lòng tốt, trí tưởng tượng và sáng tạo, khả năng tập trung và kiên nhẫn."
        }
      },
      {
        "@type": "Question",
        "name": "Mẹ Bút Xanh phù hợp với độ tuổi nào?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Nội dung được thiết kế cho trẻ em từ 3 đến 12 tuổi. Chúng tôi có các nội dung phù hợp với từng giai đoạn phát triển: truyện tranh đơn giản cho trẻ mầm non 3-5 tuổi, câu chuyện phức tạp hơn cho trẻ tiểu học 6-12 tuổi."
        }
      },
      {
        "@type": "Question",
        "name": "Làm thế nào để truy cập?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Bạn chỉ cần truy cập website mebutxanh.com từ bất kỳ thiết bị nào có internet như máy tính, điện thoại, hoặc máy tính bảng. Không cần đăng ký tài khoản, không cần cài đặt ứng dụng."
        }
      },
      {
        "@type": "Question",
        "name": "Tôi có thể sử dụng nội dung ở đâu?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Bạn có thể sử dụng nội dung tại nhà, ở trường học, hoặc bất kỳ đâu có internet. Phụ huynh có thể đọc truyện cho con trước khi ngủ, giáo viên có thể sử dụng trong lớp học, trẻ em có thể tự khám phá."
        }
      },
      {
        "@type": "Question",
        "name": "Có ứng dụng di động không?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Hiện tại, Mẹ Bút Xanh hoạt động qua website được tối ưu hóa cho mọi thiết bị. Bạn có thể truy cập dễ dàng từ trình duyệt trên điện thoại hoặc máy tính bảng."
        }
      },
      {
        "@type": "Question",
        "name": "Nội dung có cập nhật thường xuyên không?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Có, chúng tôi thường xuyên thêm truyện tranh mới và clip ca nhạc mới mỗi tuần."
        }
      }
    ]
  };

  const faqs = [
    {
      question: "Mẹ Bút Xanh là gì?",
      answer: "Mẹ Bút Xanh là nền tảng giáo dục trực tuyến miễn phí chuyên cung cấp truyện tranh và ca nhạc thiếu nhi chất lượng cao cho trẻ em từ 3 đến 12 tuổi. Sứ mệnh của chúng tôi là tạo ra không gian an toàn và lành mạnh để trẻ em học hỏi, giải trí và phát triển toàn diện."
    },
    {
      question: "Nội dung trên Mẹ Bút Xanh có miễn phí không?",
      answer: "Có, tất cả nội dung trên Mẹ Bút Xanh hoàn toàn miễn phí cho mọi gia đình. Chúng tôi cam kết cung cấp tài liệu giáo dục chất lượng cao mà không tính phí."
    },
    {
      question: "Nội dung có an toàn cho trẻ em không?",
      answer: "Có, tất cả nội dung được kiểm duyệt kỹ lưỡng. Mỗi truyện tranh và clip ca nhạc đều được đánh giá về tính phù hợp với lứa tuổi, không có nội dung bạo lực hay không phù hợp. An toàn trẻ em là ưu tiên hàng đầu."
    },
    {
      question: "Có những loại nội dung nào?",
      answer: "Mẹ Bút Xanh cung cấp hai loại nội dung chính: Truyện tranh thiếu nhi với hình ảnh đẹp mắt và câu chuyện giáo dục, giúp trẻ phát triển kỹ năng đọc. Các clip ca nhạc thiếu nhi vui nhộn, giúp trẻ học qua âm nhạc."
    },
    {
      question: "Trẻ em học được gì?",
      answer: "Trẻ em sẽ phát triển nhiều kỹ năng quan trọng: Kỹ năng đọc và hiểu tiếng Việt, các giá trị đạo đức như tình bạn và lòng tốt, trí tưởng tượng và sáng tạo, khả năng tập trung và kiên nhẫn."
    },
    {
      question: "Mẹ Bút Xanh phù hợp với độ tuổi nào?",
      answer: "Nội dung được thiết kế cho trẻ em từ 3 đến 12 tuổi. Chúng tôi có các nội dung phù hợp với từng giai đoạn phát triển: truyện tranh đơn giản cho trẻ mầm non 3-5 tuổi, câu chuyện phức tạp hơn cho trẻ tiểu học 6-12 tuổi."
    },
    {
      question: "Làm thế nào để truy cập?",
      answer: "Bạn chỉ cần truy cập website mebutxanh.com từ bất kỳ thiết bị nào có internet như máy tính, điện thoại, hoặc máy tính bảng. Không cần đăng ký tài khoản, không cần cài đặt ứng dụng."
    },
    {
      question: "Tôi có thể sử dụng nội dung ở đâu?",
      answer: "Bạn có thể sử dụng nội dung tại nhà, ở trường học, hoặc bất kỳ đâu có internet. Phụ huynh có thể đọc truyện cho con trước khi ngủ, giáo viên có thể sử dụng trong lớp học, trẻ em có thể tự khám phá."
    },
    {
      question: "Có ứng dụng di động không?",
      answer: "Hiện tại, Mẹ Bút Xanh hoạt động qua website được tối ưu hóa cho mọi thiết bị. Bạn có thể truy cập dễ dàng từ trình duyệt trên điện thoại hoặc máy tính bảng."
    },
    {
      question: "Nội dung có cập nhật thường xuyên không?",
      answer: "Có, chúng tôi thường xuyên thêm truyện tranh mới và clip ca nhạc mới mỗi tuần."
    }
  ];

  return (
    <>
      {/* Schéma JSON-LD pour les moteurs IA */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <section style={{
        maxWidth: '800px',
        margin: '4rem auto',
        padding: '0 2rem'
      }}>
        <h2 style={{
          fontSize: '2rem',
          color: '#2c3e50',
          marginBottom: '0.5rem',
          textAlign: 'center'
        }}>
          Câu hỏi thường gặp
        </h2>
        
        <p style={{
          textAlign: 'center',
          color: '#7f8c8d',
          marginBottom: '3rem'
        }}>
          Tìm câu trả lời cho các câu hỏi phổ biến về Mẹ Bút Xanh
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {faqs.map((faq, index) => (
            <article 
              key={index}
              style={{
                background: '#f8f9fa',
                borderRadius: '12px',
                padding: '2rem',
                borderLeft: '4px solid #4CAF50'
              }}
            >
              <h3 style={{
                fontSize: '1.25rem',
                color: '#2c3e50',
                marginBottom: '1rem',
                fontWeight: 600
              }}>
                {faq.question}
              </h3>
              <p style={{
                color: '#34495e',
                lineHeight: 1.8,
                margin: 0
              }}>
                {faq.answer}
              </p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}