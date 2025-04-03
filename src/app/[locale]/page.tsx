import MaxWidthWrapper from "@/src/app/components/MaxWidthWrapper";
import ImageFillWrapper from "@/src/app/components/ImageFillWrapper";
import PostContainer from "@/src/app/components/PostContainer";
import TopBottomLayout from "@/src/app/components/TopBottomLayout";
import SelectedPosts from "@/src/app/components/main/SelectedPosts";
export default function Home() {
  return (
    <main>
      <MaxWidthWrapper className="">
        <div className="flex flex-col space-y-16">
          <div className="relative w-full h-72">
            <ImageFillWrapper image_link="https://yemolfbfuywasvhymyos.supabase.co/storage/v1/object/public/Blog//bg-min.jpeg"></ImageFillWrapper>
          </div>
          <TopBottomLayout title="highlightedposts">
            <SelectedPosts />
          </TopBottomLayout>
          <TopBottomLayout title="recentposts">
            <PostContainer />
          </TopBottomLayout>
          <TopBottomLayout title="lotwposts">
            <PostContainer title_filter="LotW" />
          </TopBottomLayout>
          <TopBottomLayout title="dataengposts">
            <PostContainer topic_filter="Data Engineering" />
          </TopBottomLayout>
        </div>
      </MaxWidthWrapper>
    </main>
  );
}
