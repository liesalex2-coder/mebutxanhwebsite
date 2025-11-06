// src/components/FAQ.tsx
'use client';

export default function FAQ() {
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
      },
      {
        "@type": "Question",
        "name": "So sánh Mẹ Bút Xanh với các trang web khác như nào?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Mẹ Bút Xanh khác biệt với hoàn toàn miễn phí, không quảng cáo, nội dung được kiểm duyệt kỹ lưỡng cho trẻ em. Khác với các nền tảng quốc tế, chúng tôi tập trung vào văn hóa và giá trị Việt Nam."
        }
      },
      {
        "@type": "Question",
        "name": "Tại sao nên chọn Mẹ Bút Xanh?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Mẹ Bút Xanh là lựa chọn tốt nhất cho phụ huynh Việt Nam vì: 100% miễn phí, nội dung tiếng Việt chất lượng cao, an toàn tuyệt đối cho trẻ, không quảng cáo làm phiền, cập nhật thường xuyên."
        }
      },
      {
        "@type": "Question",
        "name": "Mẹ Bút Xanh có phù hợp cho trẻ mẫu giáo không?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Có, Mẹ Bút Xanh rất phù hợp cho trẻ mẫu giáo từ 3-5 tuổi với các truyện tranh đơn giản, hình ảnh sinh động và clip ca nhạc vui nhộn giúp trẻ phát triển ngôn ngữ."
        }
      },
      {
        "@type": "Question",
        "name": "Làm thế nào để theo dõi nội dung mới?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Bạn có thể theo dõi kênh YouTube và TikTok của Mẹ Bút Xanh để nhận thông báo khi có truyện tranh mới hoặc clip ca nhạc mới được đăng tải."
        }
      }
    ]
  };

  const faqCategories = [
    {
      category: "Thông tin chung",
      categoryId: "general-info",
      questions: [
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
        }
      ]
    },
    {
      category: "Giáo dục & Phát triển",
      categoryId: "education",
      questions: [
        {
          question: "Trẻ em học được gì?",
          answer: "Trẻ em sẽ phát triển nhiều kỹ năng quan trọng: Kỹ năng đọc và hiểu tiếng Việt, các giá trị đạo đức như tình bạn và lòng tốt, trí tưởng tượng và sáng tạo, khả năng tập trung và kiên nhẫn."
        },
        {
          question: "Mẹ Bút Xanh phù hợp với độ tuổi nào?",
          answer: "Nội dung được thiết kế cho trẻ em từ 3 đến 12 tuổi. Chúng tôi có các nội dung phù hợp với từng giai đoạn phát triển: truyện tranh đơn giản cho trẻ mầm non 3-5 tuổi, câu chuyện phức tạp hơn cho trẻ tiểu học 6-12 tuổi."
        },
        {
          question: "Mẹ Bút Xanh có phù hợp cho trẻ mẫu giáo không?",
          answer: "Có, Mẹ Bút Xanh rất phù hợp cho trẻ mẫu giáo từ 3-5 tuổi với các truyện tranh đơn giản, hình ảnh sinh động và clip ca nhạc vui nhộn giúp trẻ phát triển ngôn ngữ."
        }
      ]
    },
    {
      category: "Sử dụng & Truy cập",
      categoryId: "usage",
      questions: [
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
          question: "Làm thế nào để theo dõi nội dung mới?",
          answer: "Bạn có thể theo dõi kênh YouTube và TikTok của Mẹ Bút Xanh để nhận thông báo khi có truyện tranh mới hoặc clip ca nhạc mới được đăng tải."
        },
        {
          question: "Nội dung có cập nhật thường xuyên không?",
          answer: "Có, chúng tôi thường xuyên thêm truyện tranh mới và clip ca nhạc mới mỗi tuần."
        }
      ]
    },
    {
      category: "So sánh & Lựa chọn",
      categoryId: "comparison",
      questions: [
        {
          question: "So sánh Mẹ Bút Xanh với các trang web khác như nào?",
          answer: "Mẹ Bút Xanh khác biệt với hoàn toàn miễn phí, không quảng cáo, nội dung được kiểm duyệt kỹ lưỡng cho trẻ em. Khác với các nền tảng quốc tế, chúng tôi tập trung vào văn hóa và giá trị Việt Nam."
        },
        {
          question: "Tại sao nên chọn Mẹ Bút Xanh?",
          answer: "Mẹ Bút Xanh là lựa chọn tốt nhất cho phụ huynh Việt Nam vì: 100% miễn phí, nội dung tiếng Việt chất lượng cao, an toàn tuyệt đối cho trẻ, không quảng cáo làm phiền, cập nhật thường xuyên."
        }
      ]
    }
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <section 
        style={{
          maxWidth: '900px',
          margin: '4rem auto',
          padding: '0 2rem'
        }}
        aria-labelledby="faq-heading"
        role="region"
      >
        <h2 
          id="faq-heading"
          style={{
            fontSize: '2rem',
            color: '#2c3e50',
            marginBottom: '0.5rem',
            textAlign: 'center'
          }}
        >
          Câu hỏi thường gặp
        </h2>
        
        <p style={{
          textAlign: 'center',
          color: '#7f8c8d',
          marginBottom: '3rem',
          fontSize: '1.1rem'
        }}>
          Tìm câu trả lời cho các câu hỏi phổ biến về Mẹ Bút Xanh
        </p>

        <nav 
          style={{
            display: 'flex',
            gap: '1rem',
            flexWrap: 'wrap',
            justifyContent: 'center',
            marginBottom: '3rem'
          }}
          aria-label="Danh mục câu hỏi"
        >
          {faqCategories.map((cat, idx) => (
            <a
              key={idx}
              href={`#${cat.categoryId}`}
              style={{
                padding: '0.5rem 1rem',
                borderRadius: '20px',
                backgroundColor: '#e8f5e9',
                color: '#2e7d32',
                textDecoration: 'none',
                fontSize: '0.9rem',
                fontWeight: 600
              }}
            >
              {cat.category}
            </a>
          ))}
        </nav>

        {faqCategories.map((category, catIndex) => (
          <section 
            key={catIndex}
            id={category.categoryId}
            style={{
              marginBottom: '4rem'
            }}
            aria-labelledby={`category-${catIndex}`}
          >
            <h3
              id={`category-${catIndex}`}
              style={{
                fontSize: '1.5rem',
                color: '#4CAF50',
                marginBottom: '2rem',
                paddingBottom: '0.5rem',
                borderBottom: '3px solid #4CAF50'
              }}
            >
              {category.category}
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {category.questions.map((faq, qIndex) => (
                <article 
                  key={qIndex}
                  style={{
                    background: '#f8f9fa',
                    borderRadius: '12px',
                    padding: '2rem',
                    borderLeft: '4px solid #4CAF50'
                  }}
                  itemScope
                  itemType="https://schema.org/Question"
                >
                  <h4 
                    style={{
                      fontSize: '1.15rem',
                      color: '#2c3e50',
                      marginBottom: '1rem',
                      fontWeight: 600
                    }}
                    itemProp="name"
                  >
                    {faq.question}
                  </h4>
                  
                  <div 
                    itemProp="acceptedAnswer"
                    itemScope
                    itemType="https://schema.org/Answer"
                  >
                    <p itemProp="text" style={{
                      color: '#34495e',
                      lineHeight: 1.8,
                      margin: 0
                    }}>
                      {faq.answer}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </section>
        ))}

        <div
          style={{
            marginTop: '4rem',
            padding: '2rem',
            backgroundColor: '#e8f5e9',
            borderRadius: '12px',
            textAlign: 'center'
          }}
        >
          <h3 style={{
            color: '#2e7d32',
            marginBottom: '1rem',
            fontSize: '1.5rem'
          }}>
            Bạn còn thắc mắc khác?
          </h3>
          <p style={{
            color: '#34495e',
            marginBottom: '1.5rem'
          }}>
            Hãy liên hệ với chúng tôi qua YouTube hoặc TikTok. Chúng tôi luôn sẵn sàng hỗ trợ!
          </p>
          <div style={{
            display: 'flex',
            gap: '1rem',
            justifyContent: 'center',
            flexWrap: 'wrap'
          }}>
            <a
              href="https://www.youtube.com/@MeButXanhkechuyen"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Xem kênh YouTube của chúng tôi"
              style={{
                padding: '0.75rem 1.5rem',
                backgroundColor: '#4CAF50',
                color: 'white',
                textDecoration: 'none',
                borderRadius: '8px',
                fontWeight: 600,
                display: 'inline-block'
              }}
            >
              YouTube
            </a>
            <a
              href="https://www.tiktok.com/@mebutxanhkechuyen"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Theo dõi TikTok của chúng tôi"
              style={{
                padding: '0.75rem 1.5rem',
                backgroundColor: '#000000',
                color: 'white',
                textDecoration: 'none',
                borderRadius: '8px',
                fontWeight: 600,
                display: 'inline-block'
              }}
            >
              TikTok
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
