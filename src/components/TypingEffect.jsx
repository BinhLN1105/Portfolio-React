// TypingEffect.jsx (Phiên bản gõ, xóa và lặp lại)
import React, { useState, useEffect } from "react";

const TypingEffect = ({
  texts, // Mảng các chuỗi văn bản
  typingSpeed = 200, // Tốc độ gõ ký tự
  deletingSpeed = 75, // Tốc độ xóa ký tự
  pauseTime = 1000, // Thời gian tạm dừng sau khi gõ/xóa xong
  className = "", // Thêm prop className để truyền các class Tailwind bên ngoài
}) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0); // Chỉ số của chuỗi hiện tại trong mảng texts
  const [currentTypedText, setCurrentTypedText] = useState(""); // Văn bản đang được hiển thị
  const [isDeleting, setIsDeleting] = useState(false); // Trạng thái: đang xóa hay đang gõ
  const [charIndex, setCharIndex] = useState(0); // Chỉ số ký tự đang xử lý trong chuỗi hiện tại

  useEffect(() => {
    let timer;
    const currentFullText = texts[currentTextIndex]; // Chuỗi văn bản đầy đủ hiện tại

    if (!isDeleting && charIndex < currentFullText.length) {
      // Giai đoạn GÕ: Nếu chưa xóa và chưa gõ hết chuỗi
      timer = setTimeout(() => {
        setCurrentTypedText((prev) => prev + currentFullText[charIndex]);
        setCharIndex((prev) => prev + 1);
      }, typingSpeed);
    } else if (isDeleting && charIndex > 0) {
      // Giai đoạn XÓA: Nếu đang xóa và còn ký tự để xóa
      timer = setTimeout(() => {
        setCurrentTypedText((prev) => prev.substring(0, prev.length - 1));
        setCharIndex((prev) => prev - 1);
      }, deletingSpeed);
    } else if (!isDeleting && charIndex === currentFullText.length) {
      // Giai đoạn DỪNG sau khi GÕ xong: Đã gõ hết chuỗi, chuyển sang chế độ xóa sau pauseTime
      timer = setTimeout(() => {
        setIsDeleting(true);
      }, pauseTime);
    } else if (isDeleting && charIndex === 0) {
      // Giai đoạn DỪNG sau khi XÓA xong: Đã xóa hết chuỗi, chuyển sang chuỗi tiếp theo và bắt đầu gõ lại
      timer = setTimeout(() => {
        setIsDeleting(false); // Chuyển về trạng thái gõ
        setCurrentTextIndex((prev) => (prev + 1) % texts.length); // Chuyển sang chuỗi tiếp theo (vòng lặp)
        // charIndex sẽ tự động về 0 khi bắt đầu gõ chuỗi mới
      }, pauseTime);
    }

    return () => clearTimeout(timer); // Dọn dẹp timer để tránh lỗi bộ nhớ
  }, [
    currentTextIndex,
    currentTypedText,
    isDeleting,
    charIndex,
    texts,
    typingSpeed,
    deletingSpeed,
    pauseTime,
  ]);

  return (
    // Sử dụng prop className để áp dụng các class Tailwind bên ngoài
    <div className={`inline-flex items-center ${className}`}>
      <span>{currentTypedText}</span>
      <span className="ml-2 animate-blink">|</span> {/* Con trỏ nhấp nháy */}
    </div>
  );
};

export default TypingEffect;
