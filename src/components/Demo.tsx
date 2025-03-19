"use client";

export function Demo() {
  return (
    <section className="py-16 md:py-24 bg-primary relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-90 z-0"></div>

      <div className="container relative z-10 mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Demo Mock Interview Coding Round
          </h2>
          <p className="text-lg text-white/80 max-w-3xl mx-auto">
            Tham khảo Video phỏng vấn thử vòng Coding Interview theo format Meta
            sau đây (Tiếng Việt)
          </p>
        </div>

        <div className="max-w-4xl mx-auto overflow-hidden rounded-lg shadow-xl">
          <div className="aspect-w-16 aspect-h-9 relative pb-[56.25%]">
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/ZTrl_L0T-d4"
              title="Demo Mock Interview"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
