import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import QuestionDetails from "./QuestionDetails/QuestionDetails";
import MultipleSlide from "./MultipleSlide/MultipleSlide";
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
            <QuestionDetails category={question.category} difficulty={question.difficulty} />
            {question.multiple_correct_answers === "true" ? (
              <MultipleSlide question={question} questionNumber={index + 1} />
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
