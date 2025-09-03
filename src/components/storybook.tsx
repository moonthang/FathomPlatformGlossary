"use client";

import * as React from "react";
import type { VocabularyItem } from "@/lib/vocabulary";
import { CoverPage } from "./cover-page";
import { StoryPage } from "./story-page";
import { PairedStoryPage } from "./paired-story-page";
import HTMLFlipBook from "react-pageflip";
import { Button } from "./ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

type FlipBookRef = {
  pageFlip: () => {
    turnToPage: (page: number) => void;
    turnToNextPage: () => void;
    turnToPrevPage: () => void;
    getPageCount: () => number;
    getCurrentPageIndex: () => number;
  };
};

export function Storybook({ vocabulary }: { vocabulary: VocabularyItem[] }) {
  const bookRef = React.useRef<FlipBookRef>(null);
  const [currentPage, setCurrentPage] = React.useState(0);

  const handlePageFlip = (e: { data: number }) => {
    setCurrentPage(e.data);
  };

  const firstItem = vocabulary[0];
  const restItems = vocabulary.slice(1);
  const pairedItems = [];
  for (let i = 0; i < restItems.length; i += 2) {
    pairedItems.push(restItems.slice(i, i + 2));
  }

  const totalPages = 1 + pairedItems.length;

  return (
    <div className="w-full max-w-6xl flex flex-col items-center">
      <div className="w-full aspect-[1/1] md:aspect-[2/1.2] relative">
        <HTMLFlipBook
          width={600}
          height={720}
          size="stretch"
          minWidth={315}
          maxWidth={1000}
          minHeight={400}
          maxHeight={1533}
          maxShadowOpacity={0.5}
          showCover={true}
          mobileScrollSupport={true}
          onFlip={handlePageFlip}
          ref={bookRef as any}
          className="book"
        >
          <div className="book-page">
            <CoverPage
              onStart={() => bookRef.current?.pageFlip().turnToPage(0)}
            />
          </div>
          <div className="book-page">
            <StoryPage
              item={firstItem}
              pageNumber={1}
              totalPages={totalPages}
              vocabulary={vocabulary}
            />
          </div>
          {pairedItems.map((pair, index) => (
            <div className="book-page" key={index}>
              <PairedStoryPage
                items={pair}
                pageNumberStart={index * 2 + 2}
                totalPages={totalPages}
              />
            </div>
          ))}
        </HTMLFlipBook>
      </div>
      <div className="mt-8 flex items-center gap-4">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => bookRef.current?.pageFlip().turnToPrevPage()}
          disabled={currentPage === 0}
          className="text-primary/30 hover:text-primary bg-transparent border-none hover:bg-transparent h-10 w-10 disabled:opacity-30 transition-opacity"
        >
          <ChevronLeft />
        </Button>
        <div className="text-sm text-primary/50">
          Page {currentPage} of {totalPages}
        </div>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => bookRef.current?.pageFlip().turnToNextPage()}
          disabled={currentPage >= totalPages}
          className="text-primary/30 hover:text-primary bg-transparent border-none hover:bg-transparent h-10 w-10 disabled:opacity-30 transition-opacity"
        >
          <ChevronRight />
        </Button>
      </div>
    </div>
  );
}
