"use client";

export function CoverPage({ onStart }: { onStart: () => void }) {
  return (
    <div
      className="w-full h-full flex items-center justify-center p-8 cursor-pointer bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://ik.imagekit.io/axct8mpp27/Ingles/Texture?updatedAt=1756745175285')",
      }}
      onClick={onStart}
    >
      <div className="text-center flex flex-col items-center bg-black/30 backdrop-blur-sm p-8 rounded-lg">
        <h1 className="font-headline text-5xl md:text-7xl font-bold text-white/90">
          Fathom Platform Glossary
        </h1>
        <p className="font-body text-sm opacity-70 mt-4 text-white/80">
          Click to open
        </p>
      </div>
    </div>
  );
}
