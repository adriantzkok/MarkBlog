import MaxWidthWrapper from "@/app/components/MaxWidthWrapper";
import ImageFillWrapper from "@/app/components/ImageFillWrapper";
import PostContainer from "@/app/components/PostContainer";
import TopBottomLayout from "@/app/components/TopBottomLayout";
import SelectedPosts from "@/app/components/main/SelectedPosts";
export default function Home() {
  return (
    <main>
      <MaxWidthWrapper className="">
        <div className="flex flex-col space-y-16">
          <div className="relative w-full h-72">
            <ImageFillWrapper image_link="https://yemolfbfuywasvhymyos.supabase.co/storage/v1/object/public/Blog//bg-min.jpeg"></ImageFillWrapper>
          </div>
          <TopBottomLayout title="Highlighted Posts">
            <SelectedPosts />
          </TopBottomLayout>
          <TopBottomLayout title="Recent Posts">
            <PostContainer />
          </TopBottomLayout>
          <TopBottomLayout title="LotW Posts">
            <PostContainer title_filter="LotW" />
          </TopBottomLayout>
          <TopBottomLayout title="Data Engineering Posts">
            <PostContainer topic_filter="Data Engineering" />
          </TopBottomLayout>
        </div>
      </MaxWidthWrapper>
    </main>
  );
}
