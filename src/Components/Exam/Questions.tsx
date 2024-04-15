import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import QuestionSlide from "./QuestionSlide/QuestionSlide";
import SliderButton from "./SliderButton";
import { QuestionsType } from "./Interfaces";

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
              <QuestionSlide question={question} questionNumber={index + 1} />
            )}

            <SliderButton questionNumber={index + 1} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Questions;
