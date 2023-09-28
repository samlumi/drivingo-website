import CalendarIcon from "@/components/shared/icons/CalendarIcon";
import PersonIcon from "@/components/shared/icons/PersonIcon";
import { BlogConfigType } from "@/types/config";

const BlogPost = (props: BlogConfigType) => {
  const { title, image, content, poster, date } = props;

  return (
    <div className="w-full md:w-1/3 p-2 md:p-4">
      <div className="flex flex-col bg-primary dark:bg-dark text-white rounded-md overflow-hidden cursor-pointer transition-all hover:-translate-y-4 hover:shadow-2xl">
        <div
          className="w-full h-48 md:h-80"
          style={{
            backgroundImage: `url(${image})`,
            backgroundSize: "cover",
          }}
        ></div>

        <div className="flex flex-col px-8 pt-12 pb-4">
          <h1 className="text-xl md:text-2xl">{title}</h1>
          <p className="font-normal text-[10px] md:text-sm my-4 md:my-6">{content}</p>
          <span className="w-full h-[1px] bg-[#CCCCCC] my-2" />

          <div className="flex items-center relative text-sm md:text-base">
            <div className="flex justify-center items-center w-full p-4">
              <PersonIcon />
              <p className="mx-2">{poster}</p>
            </div>

            <span className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-full bg-[#CCCCCC]" />

            <div className="flex justify-center items-center w-full">
              <CalendarIcon />
              <p className="mx-2">{date.toDateString()}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
