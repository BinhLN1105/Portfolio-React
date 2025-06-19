import { useState } from "react";
import CopyEmailButton from "../components/CopyEmailButton";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [alertType, setAlertType] = useState("success");
  const [alertMessage, setAlertMessage] = useState("");
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const showAlertMessage = (type, message) => {
    setAlertType(type);
    setAlertMessage(message);
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 5000);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      console.log("From submitted:", formData);
      await emailjs.send(
        "service_e3n4oo8",
        "template_jld72gj",
        {
          from_name: formData.name,
          to_name: "TestMail",
          from_email: formData.email,
          to_email: "lnb110525@gmail.com",
          message: formData.message,
        },
        "UN7RRNru2MrnpJfp9"
      );
      setIsLoading(false);
      setFormData({ name: "", email: "", message: "" });
      showAlertMessage("success", "You message has been sent!");
    } catch (error) {
      setIsLoading(false);
      console.log(error);
      showAlertMessage("danger", "Somthing went wrong!");
    }
  };
  return (
    <section className="py-24 px-4 relative bg-secondary/30" id="contact">
      <div className="container mx-auto max-w-5xl">
        <h2 className=" text-3xl md:text-4xl font-bold mb-4 text-center">
          Let's <span className="text-aqua text-4xl">Talk</span>
        </h2>
        <p className="font-normal text-neutral-400 text-center">
          Whether you're looking to build a new website, improve your existing
          platform, or bring a unique project to life, I'm here to help
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* CỘT ĐẦU TIÊN: Contact Information */}
          <div className="space-y-8">
            <h3 className="text-3xl font-semibold mb-6">Contact Information</h3>
            <div className="space-y-2">
              {" "}
              {/* Đã bỏ justify-center ở đây vì không cần thiết cho mục đích này */}
              <div className="flex items-start space-x-4">
                <div>
                  <h4 className="font-medium text-2xl">Send Email</h4>
                  {/* Có thể tạo flex items-center gap-2 ở đây để căn chỉnh email và CopyEmailButton */}
                  <div className="flex items-center gap-2">
                    <a
                      href="mailto:binhluu953348@gmail.com"
                      className="text-neutral-400 subtext hover:text-neutral-100 transition-colors"
                    >
                      binhluu953348@gmail.com
                    </a>
                    {/* Đã bỏ translate để flex xử lý */}
                    <div className="p-0 rounded-full bg-primary/10">
                      <CopyEmailButton />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div>
                  <h4 className="font-medium text-2xl">Map</h4>
                  <a
                    href="https://www.google.com/maps/place/Tr%C6%B0%E1%BB%9Dng+%C4%90%E1%BA%A1i+H%E1%BB%8Dc+Giao+Th%C3%B4ng+V%E1%BA%ADn+T%E1%BA%A3i+Th%C3%A0nh+Ph%E1%BB%91+H%E1%BB%93+Ch%C3%AD+Minh+(UTH)+-+C%C6%A1+s%E1%BB%9F+3/@10.8657455,106.6155376,17z/data=!3m1!4b1!4m6!3m5!1s0x31752b2a11844fb9:0xbed3d5f0a6d6e0fe!8m2!3d10.8657455!4d106.6181179!16s%2Fg%2F11h5mfgrph?entry=ttu&g_ep=EgoyMDI1MDYxMS4wIKXMDSoASAFQAw%3D%3D"
                    className="subtext hover:text-neutral-100 transition-colors"
                    target="_blank" // Thêm để mở trong tab mới
                    rel="noopener noreferrer" // Thêm để bảo mật
                  >
                    Address
                  </a>
                </div>
              </div>
            </div>
            <div className="pt-8">
              <h4 className="font-medium mb-4 text-center text-3xl">
                Connect With Me
              </h4>
              <div className="flex space-x-4 justify-center">
                <a
                  href="https://www.facebook.com/binh.luunhat/"
                  className="inline-flex items-center justify-center p-2 rounded-full bg-white hover:bg-blue-300 transition-colors"
                  title="Visit my Facebook page"
                  target="_blank" // Thêm để mở trong tab mới
                  rel="noopener noreferrer" // Thêm để bảo mật
                >
                  <img
                    src="/assets/logos/facebook_icon.png"
                    alt="Facebook"
                    className="w-6 h-6" // Bỏ text-white vì là PNG
                  />
                </a>
                <a
                  href="https://www.tiktok.com/"
                  className="inline-flex items-center justify-center p-2 rounded-full bg-white hover:bg-gray-400 transition-colors"
                  title="Visit my TikTok page"
                  target="_blank" // Thêm để mở trong tab mới
                  rel="noopener noreferrer" // Thêm để bảo mật
                >
                  <img
                    src="/assets/logos/tik-tok_icon.png"
                    alt="TikTok" // Đổi alt thành TikTok cho đúng
                    className="w-6 h-6" // Bỏ text-white vì là PNG
                  />
                </a>
              </div>
            </div>
          </div>

          {/* CỘT THỨ HAI: Send a Message - ĐÃ SỬA CẤU TRÚC */}
          <div>
            {" "}
            {/* Container của cột thứ hai, không cần class grid */}
            <h3 className="text-3xl font-semibold mb-6">Send a Message</h3>{" "}
            {/* Căn chỉnh tiêu đề phù hợp với cột 1 */}
            <form className="w-full" onSubmit={handleSubmit}>
              <div className="mb-5">
                <label htmlFor="name" className="feild-label">
                  Full Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  className="field-input field-input-focus"
                  placeholder="Your Name"
                  autoComplete="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-5">
                <label htmlFor="email" className="feild-label">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className="field-input field-input-focus"
                  placeholder="YourEmail@gmail.com"
                  autoComplete="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-5">
                <label htmlFor="message" className="feild-label">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  type="text"
                  rows="4"
                  className="field-input field-input-focus"
                  placeholder="Share your thoughts..."
                  autoComplete="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full px-1 py-3 text-lg text-center rounded-md cursor-pointer bg-radial from-lavender to-royal hover-animation"
              >
                {!isLoading ? "Send" : "Sending..."}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
