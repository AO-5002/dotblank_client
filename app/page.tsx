import { BtnSection } from "./_components/BtnSection";

function HomeLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="w-full min-h-screen grid grid-columns-12 px-36">
      {children}
    </main>
  );
}

function TextSection() {
  return (
    <div className="flex flex-col gap-12">
      <div className="text-wrap w-2xl">
        <h1 className="text-hero leading-hero font-bold ">
          Turn study materials into personalized practice exams
        </h1>
      </div>
      <div className="text-wrap w-xl">
        <p className="text-title leading-title">
          Organize your materials with drag-and-drop folders, personalize your
          workspace with custom themes, and track your performance with detailed
          analytics—all in one clean interface.
        </p>
      </div>
    </div>
  );
}

function HomePageContent() {
  return (
    <div className="w-full h-full flex flex-col justify-center items-start gap-16">
      <TextSection />
      <BtnSection />
    </div>
  );
}

export default function Home() {
  return (
    <HomeLayout>
      <HomePageContent />
    </HomeLayout>
  );
}
