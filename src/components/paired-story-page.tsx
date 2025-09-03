import type { VocabularyItem } from "@/lib/vocabulary";
import Image from "next/image";

export function PairedStoryPage({
  items,
  pageNumberStart,
}: {
  items: VocabularyItem[];
  pageNumberStart: number;
  totalPages: number;
}) {
  const [item1, item2] = items;

  return (
    <div className="w-full h-full grid grid-cols-2 font-body">
      <div className="relative flex flex-col justify-between p-8 md:p-12 h-full border-r border-black/5">
        {item1 && (
          <>
            <div className="flex-1 flex flex-col justify-center">
              <h2 className="font-headline text-3xl sm:text-4xl font-bold">
                {item1.en}
              </h2>
              <h3 className="font-body text-xl sm:text-2xl opacity-70 mt-2">
                {item1.es}
              </h3>
              <blockquote className="mt-6">
                <p className="font-body text-base sm:text-lg opacity-90 italic leading-relaxed">
                  "{item1.phraseEN}"
                </p>
              </blockquote>
            </div>
            {item1.imageUrl && (
                <div className="mt-6 flex justify-center">
                <div className="shadow-2xl rounded-lg overflow-hidden border-2 border-black/10">
                    <Image
                    src={item1.imageUrl}
                    alt={item1.en}
                    data-ai-hint="movie still"
                    width={280}
                    height={200}
                    className="object-cover"
                    />
                </div>
                </div>
            )}
            <div className="absolute bottom-4 left-8 text-sm font-body opacity-40">
              {pageNumberStart}
            </div>
          </>
        )}
      </div>

      <div className="relative flex flex-col justify-between p-8 md:p-12 h-full">
        {item2 && (
          <>
            <div className="flex-1 flex flex-col justify-center">
              <h2 className="font-headline text-3xl sm:text-4xl font-bold">
                {item2.en}
              </h2>
              <h3 className="font-body text-xl sm:text-2xl opacity-70 mt-2">
                {item2.es}
              </h3>
              <blockquote className="mt-6">
                <p className="font-body text-base sm:text-lg opacity-90 italic leading-relaxed">
                  "{item2.phraseEN}"
                </p>
              </blockquote>
            </div>
            {item2.imageUrl && (
                <div className="mt-6 flex justify-center">
                <div className="shadow-2xl rounded-lg overflow-hidden border-2 border-black/10">
                    <Image
                    src={item2.imageUrl}
                    alt={item2.en}
                    data-ai-hint="movie still"
                    width={280}
                    height={200}
                    className="object-cover"
                    />
                </div>
                </div>
            )}
            <div className="absolute bottom-4 right-8 text-sm font-body opacity-40">
              {pageNumberStart + 1}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
