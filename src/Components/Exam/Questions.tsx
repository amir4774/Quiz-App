import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { QuestionsType } from "./Interfaces";
import QuestionSlide from "./QuestionSlide";
import SliderButton from "./SliderButton";

const Questions = ({ questions }: { questions: QuestionsType[] }) => {
  return (
    <div>
      <Swiper
        modules={[Navigation, Pagination]}
        slidesPerView={1}
        spaceBetween={10}
        navigation={{
          nextEl: ".next-slide",
          prevEl: ".prev-slide",
        }}
        pagination={{
          type: "progressbar",
        }}
      >
        {questions.map((question, index) => (
          <SwiperSlide key={question.id}>
            {question.multiple_correct_answers === "true" ? (
              <>multiple</>
            ) : (
              <QuestionSlide question={question} index={index} />
            )}

            <SliderButton index={index} length={questions.length} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Questions;
