/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      // Thêm phần này vào đây
      keyframes: {
        // Thêm keyframes cho hiệu ứng 3D card và các hiệu ứng khác nếu có từ Aceternity
        spotlight: {
          // Thường được yêu cầu cho một số hiệu ứng khác của Aceternity
          "0%": {
            opacity: 0,
            transform: "translate(-30%, -20%) scale(0.001)",
          },
          "100%": {
            opacity: 1,
            transform: "translate(-50%, -10%) scale(1)",
          },
        },
        // Đảm bảo bạn đã có blink keyframe nếu muốn sử dụng nó ở nơi khác
        blink: {
          "0%, 100%": { opacity: 1 },
          "50%": { opacity: 0 },
        },
        aurora: {
          "0%": {
            "background-position": "50% 50%, 50% 50%",
          },
          "50%": {
            "background-position": "300% 50%, 200% 50%", // Bạn có thể điều chỉnh các giá trị này
          },
          "100%": {
            "background-position": "50% 50%, 50% 50%",
          },
        },
      },
      animation: {
        // Thêm animation cho hiệu ứng 3D card và các hiệu ứng khác
        spotlight: "spotlight 2s ease .75s 1 forwards",
        // Đảm bảo bạn đã có blink animation nếu muốn sử dụng nó ở nơi khác
        blink: "blink 1s infinite step-end",
        aurora: "aurora 20s linear infinite",
      },
    },
  },
  plugins: [],
};
