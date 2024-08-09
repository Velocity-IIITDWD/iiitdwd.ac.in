import Link from "next/link";

const marqueeItems = [
  {
    text: "Guidelines for Admission 2024",
    href: "/docs/Guidelines for admission 2024-25.pdf"
  },
  {
    text: "Application Form for Admission 2024",
    href: "https://forms.gle/jt4fSAEh3v1bpMZ28"
  }
];

const Marquee = () => {
  return (
    <section className="marquee-section mt-6">
      <div className="marquee-container">
        <div className="marquee-content">
          {Array(4).fill(marqueeItems).flat().map((item, index) => (
            <span className="marquee-item text-lg sm:text-base" key={index}>
              <Link href={item.href}>{item.text}</Link>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Marquee;
