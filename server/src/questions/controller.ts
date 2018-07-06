import {
  JsonController,
  Get,
  Param,
  Put,
  Body,
  NotFoundError,
  HttpCode,
  Post,
  Authorized
} from "routing-controllers";
import Question from "./entity";

@JsonController()
export default class QuestionController {
  @Get("/questions/:id")
  getPage(@Param("id") id: number) {
    return Question.findOne(id);
  }

  @Get("/questions")
  async allQuestions() {
    const questions = await Question.find();
    return { questions };
  }
  @Authorized()
  @Put("/questions/:id")
  async updateQuestion(
    @Param("id") id: number,
    @Body() update: Partial<Question>
  ) {
    const question = await Question.findOne(id);
    if (!question) throw new NotFoundError("Cannot find question");

    return Question.merge(question, update).save();
  }
  @Authorized()
  @Post("/questions")
  @HttpCode(201)
  createQuestion(@Body() question: Question) {
    return question.save();
  }
}
