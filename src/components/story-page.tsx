import Image from "next/image";
import type { VocabularyItem } from "@/lib/vocabulary";
import { Separator } from "@/components/ui/separator";

export function StoryPage({
  item,
  pageNumber,
  vocabulary,
}: {
  item: VocabularyItem;
  pageNumber: number;
  totalPages: number;
  vocabulary?: VocabularyItem[];
}) {
  const isFirstPage = pageNumber === 1 && vocabulary;

  return (
    <div className="w-full h-full grid grid-cols-1 md:grid-cols-2 font-body">
      <div className="flex flex-col items-center justify-center p-4 sm:p-8 bg-black/5 order-last md:order-first">
        {isFirstPage ? (
          <div className="w-full h-full p-4 overflow-y-auto">
            <h4 className="font-headline text-lg font-bold mb-4 text-center">
              Table of Contents
            </h4>
            <ul className="grid grid-cols-2 gap-x-4 text-sm text-left">
              {vocabulary
                .slice(1)
                .map((vocabItem, index) => (
                  <li key={index} className="border-b border-black/10 pb-1 mb-2">
                    {vocabItem.en}
                  </li>
                ))}
            </ul>
          </div>
        ) : (
          item.imageUrl && (
            <div className="shadow-2xl rounded-lg overflow-hidden border-2 border-black/10">
              <Image
                src={item.imageUrl}
                alt={item.en}
                data-ai-hint="movie still"
                width={340}
                height={450}
                className="object-cover"
              />
            </div>
          )
        )}
      </div>
      <div className="relative flex flex-col justify-center p-8 md:p-12 lg:p-16">
        <Separator
          orientation="vertical"
          className="absolute left-0 top-0 h-full hidden md:block bg-black/10"
        />
        <h2 className="font-headline text-2xl sm:text-3xl font-bold">
          {item.en}
        </h2>
        <h3 className="font-body text-xl sm:text-2xl opacity-70 mt-2">
          {item.es}
        </h3>
        {item.phraseEN && (
          <blockquote className="mt-8">
            <p className="font-body text-lg sm:text-xl opacity-90 italic leading-relaxed">
              "{item.phraseEN}"
            </p>
          </blockquote>
        )}
        <div className="absolute bottom-4 right-8 text-sm font-body opacity-40">
          {pageNumber}
        </div>
      </div>
    </div>
  );
}
