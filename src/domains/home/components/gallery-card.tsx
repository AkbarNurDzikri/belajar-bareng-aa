import { Card, CardContent } from "@/components/ui/card";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

interface Props {
  title: string;
  description: string;
  images: string[];
}

export const GalleryCard = ({ title, description, images }: Props) => {
  return (
    <Card className="p-0 overflow-hidden min-w-5/6 md:min-w-5/12 my-5">
      <CardContent className="p-0">
        <div className="p-5 bg-linear-to-br from-blue-100 to-violet-400">
          <p className="font-bold md:text-lg">{title}</p>
        </div>

        <div className="p-5">
          <Swiper
            spaceBetween={50}
            slidesPerView={1}
            modules={[Pagination]}
            pagination={{ clickable: true }}
          >
            {images.map((image, i) => {
              return (
                <SwiperSlide>
                  <img
                    key={i}
                    src={image}
                    alt={title}
                    className={`w-full h-52 md:h-80 object-cover object-center rounded-lg`}
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>
          <p className="text-muted-foreground text-sm md:text-base text-justify">
            {description}
          </p>
        </div>
      </CardContent>
    </Card>
  );
};
