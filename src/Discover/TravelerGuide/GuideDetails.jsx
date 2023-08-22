import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/free-mode";

const GuideDetails = () => {
  return (
    <div className="max-w-7xl mx-5 md:mx-auto py-10">
      {/* title  */}
      <h1 className="text-2xl ml-16 md:text-4xl font-bold text-black">
        <span className="text-[#19a0c9]">Explore</span> Ho Chi Minh City
      </h1>
      {/* featured image  */}
      <div className="max-w-6xl mx-auto">
        <Swiper
          navigation={true}
          modules={[Navigation]}
          className="mySwiper my-5 rounded"
        >
          <SwiperSlide>
            <img
              src="https://images.unsplash.com/photo-1474181487882-5abf3f0ba6c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
              className="image-full w-full h-[550px] md:h-[620px]"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://images.unsplash.com/photo-1508804052814-cd3ba865a116?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
              className="image-full w-full h-[550px] md:h-[620px]"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://plus.unsplash.com/premium_photo-1675826460422-e39481fae224?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
              className="image-full w-full h-[550px] md:h-[620px]"
              alt=""
            />
          </SwiperSlide>
        </Swiper>
      </div>
      {/* About  */}
      <div className="max-w-5xl mx-auto">
        <h1 className="font-bold text-3xl my-5 text-black">
          The Pearl of the Far East; a dynamic city that dazzles and delights
        </h1>
        <p className="text-xl text-black text-justify">
          As Vietnam’s largest economic center and cultural capital, Ho Chi Minh
          City boasts soaring skyscrapers that tower over charming French
          colonial structures and traditional pagodas from Saigon’s yesteryear.
          Past the bustling streets and dizzying traffic, uncover the delicious
          street food, booming nightlife and historical landmarks that give this
          city its distinct appeal. Visit The War Remnants Museum for a glimpse
          into the Vietnam War, wander down Bui Vien Street for cheap beer or
          cruise through the Mekong Delta for sprawling views of paddy fields
          and houseboats.
        </p>
      </div>

      {/* Details  */}
      <div className="mt-16">
        <h1 className="font-bold text-3xl my-5 hidden md:block text-[#19a0c9] pb-3 w-[30%] border-b-8 border-[#19a0c9]">
          Essential Ho Chi Minh City
        </h1>
      </div>
      {/* Do in this city  */}
      <div className="">
        <div className="text-center">
          <h1 className="text-black text-4xl font-bold">Places</h1>
          <p className="text-lg text-black mt-1">
            Places to see, ways to wander, and signature experiences that define
            Ho Chi Minh City.
          </p>
        </div>
      </div>
      <div className="mt-10">
        <Swiper
          slidesPerView={3}
          spaceBetween={10}
          freeMode={true}
          grabCursor={true}
          navigation={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination, Navigation]}
          className="mySwiper"
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            480: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 15,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 15,
            },
          }}
        >
          <SwiperSlide>
            <div
              style={{
                background:
                  "linear-gradient(180deg,rgba(0,0,0,.01),rgba(0,0,0,.5) 30%,rgba(0,0,0,.95)), url('https://dynamic-media-cdn.tripadvisor.com/media/photo-o/14/11/d4/2a/bitexco-financial-tower.jpg?w=400&h=300&s=1https://dynamic-media-cdn.tripadvisor.com/media/photo-o/14/11/d4/2a/bitexco-financial-tower.jpg?w=400&h=300&s=1')  center center/cover",
              }}
              className="h-96 relative cursor-pointer rounded-md"
            >
              <div className="absolute top-72">
                <h1 className="text-white text-2xl font-bold mx-5  hover:underline">
                  Bitexco Financial Tower
                </h1>
                <p className="text-xl  text-white mx-5">Observation Point</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              style={{
                background:
                  "linear-gradient(180deg,rgba(0,0,0,.01),rgba(0,0,0,.5) 30%,rgba(0,0,0,.95)), url('https://dynamic-media-cdn.tripadvisor.com/media/photo-o/06/9e/ce/a3/war-remnants-museum.jpg?w=400&h=-1&s=1')  center center/cover",
              }}
              className="h-96 relative cursor-pointer rounded-md"
            >
              <div className="absolute top-72">
                <h1 className="text-white text-2xl font-bold mx-5  hover:underline">
                  War Remnants Museum
                </h1>
                <p className="text-xl  text-white mx-5">History Museum</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              style={{
                background:
                  "linear-gradient(180deg,rgba(0,0,0,.01),rgba(0,0,0,.5) 30%,rgba(0,0,0,.95)), url('https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/f1/6d/fe/beautiful-cathedral.jpg?w=400&h=300&s=1')  center center/cover",
              }}
              className="h-96 relative cursor-pointer rounded-md"
            >
              <div className="absolute top-72">
                <h1 className="text-white text-2xl font-bold mx-5  hover:underline">
                  The Independence Palace
                </h1>
                <p className="text-xl  text-white mx-5">Cathedrals</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              style={{
                background:
                  "linear-gradient(180deg,rgba(0,0,0,.01),rgba(0,0,0,.5) 30%,rgba(0,0,0,.95)), url('https://dynamic-media-cdn.tripadvisor.com/media/photo-o/14/11/d4/2a/bitexco-financial-tower.jpg?w=400&h=300&s=1https://dynamic-media-cdn.tripadvisor.com/media/photo-o/14/11/d4/2a/bitexco-financial-tower.jpg?w=400&h=300&s=1')  center center/cover",
              }}
              className="h-96 relative cursor-pointer rounded-md"
            >
              <div className="absolute top-72">
                <h1 className="text-white text-2xl font-bold mx-5  hover:underline">
                  Bitexco Financial Tower
                </h1>
                <p className="text-xl  text-white mx-5">Observation Point</p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      {/* hotels in this city  */}
      <div className="mt-16">
        <div className="text-center">
          <h1 className="text-black text-4xl font-bold">Hotels</h1>
          <p className="text-lg text-black mt-1">
            Places to see, ways to wander, and signature experiences that define
            Ho Chi Minh City.
          </p>
        </div>
      </div>
      <div className="mt-10">
        <Swiper
          slidesPerView={3}
          spaceBetween={10}
          freeMode={true}
          grabCursor={true}
          navigation={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination, Navigation]}
          className="mySwiper"
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            480: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 15,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 15,
            },
          }}
        >
          <SwiperSlide>
            <div
              style={{
                background:
                  "linear-gradient(180deg,rgba(0,0,0,.01),rgba(0,0,0,.5) 30%,rgba(0,0,0,.95)), url('https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0a/4f/2b/e8/the-common-room-project.jpg?w=400&h=300&s=1https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0a/4f/2b/e8/the-common-room-project.jpg?w=400&h=300&s=1')  center center/cover",
              }}
              className="h-96 relative cursor-pointer rounded-md"
            >
              <div className="absolute top-72">
                <h1 className="text-white text-2xl font-bold mx-5  hover:underline">
                  Hotel des Arts Saigon - MGallery
                </h1>
                <p className="text-xl  text-white mx-5">From $168/Night</p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div
              style={{
                background:
                  "linear-gradient(180deg,rgba(0,0,0,.01),rgba(0,0,0,.5) 30%,rgba(0,0,0,.95)), url('https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/53/14/e6/the-myst-dong-khoi.jpg?w=400&h=-1&s=1')  center center/cover",
              }}
              className="h-96 cursor-pointer rounded-md"
            >
              <div className="absolute top-72">
                <h1 className="text-white text-2xl font-bold mx-5  hover:underline">
                  Villa Song Saigon
                </h1>
                <p className="text-xl text-white mx-5">From $228/Night</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              style={{
                background:
                  "linear-gradient(180deg,rgba(0,0,0,.01),rgba(0,0,0,.5) 30%,rgba(0,0,0,.95)), url('https://dynamic-media-cdn.tripadvisor.com/media/photo-o/28/a3/98/81/guest-room.jpg?w=400&h=-1&s=1')  center center/cover",
              }}
              className="h-96 cursor-pointer rounded-md"
            >
              <div className="absolute top-72">
                <h1 className="text-white text-2xl font-bold mx-5  hover:underline">
                  The Myst Dong Khoi
                </h1>
                <p className="text-xl text-white mx-5">From $98/Night</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              style={{
                background:
                  "linear-gradient(180deg,rgba(0,0,0,.01),rgba(0,0,0,.5) 30%,rgba(0,0,0,.95)), url('https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0a/4f/2b/e8/the-common-room-project.jpg?w=400&h=300&s=1https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0a/4f/2b/e8/the-common-room-project.jpg?w=400&h=300&s=1')  center center/cover",
              }}
              className="h-96 relative cursor-pointer rounded-md"
            >
              <div className="absolute top-72">
                <h1 className="text-white text-2xl font-bold mx-5  hover:underline">
                  Hotel des Arts Saigon - MGallery
                </h1>
                <p className="text-xl  text-white mx-5">From $168/Night</p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default GuideDetails;
