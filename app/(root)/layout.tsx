import Header from "@/components/molecules/header";
import ImageBackground from "@/components/atoms/image-background";
import MaxWidthWrapper from "@/components/atoms/max-width-wrapper";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-white dark:bg-dark-blue min-h-screen w-full relative overflow-x-hidden">
      <ImageBackground />

      <div className="w-full flex flex-col min-h-screen">
        <MaxWidthWrapper className="flex justify-end pt-10 md:pt-12 xs:px-5 md:px-0">
          <Header />
        </MaxWidthWrapper>

        <main className="flex-1 w-full flex items-center justify-center py-8 px-4">{children}</main>
      </div>
    </div>
  );
};

export default RootLayout;
