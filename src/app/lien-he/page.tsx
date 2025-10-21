import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Liên hệ - Mẹ Bút Xanh",
  description: "Liên hệ với chúng tôi để đóng góp ý kiến hoặc đề xuất nội dung mới.",
};

export default function ContactPage() {
  return (
    <div className="section-spacing">
      <h1 className="title-medium title-spacing text-center">
        Liên hệ
      </h1>
      
      <div className="text-center">
        <p className="body-text text-spacing">
          Có ý kiến đóng góp, nội dung muốn đề xuất hay hợp tác?
        </p>
        <p className="body-text text-spacing">
          Hãy gửi email cho chúng tôi:
        </p>
        
        <div className="content-card" style={{ maxWidth: '500px', margin: '2rem auto', padding: '2rem' }}>
          <p className="title-small" style={{ color: '#059669' }}>
            mebutxanh123@gmail.com
          </p>
        </div>

        <p className="description-text">
          Chúng tôi sẽ phản hồi trong vòng 24 giờ!
        </p>
      </div>
    </div>
  );
}