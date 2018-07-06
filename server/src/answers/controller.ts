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
import Answer from "./entity";

// type PageList = { pages: Page[] }

@JsonController()
export default class AnswerController {
  @Get("/answers/:id")
  getPage(@Param("id") id: number) {
    return Answer.findOne(id);
  }

  @Get("/answers")
  async allPages() {
    const answers = await Answer.find();
    return { answers };
  }
  @Authorized()
  @Put("/answers/:id")
  async updatePage(@Param("id") id: number, @Body() update: Partial<Answer>) {
    const answer = await Answer.findOne(id);
    if (!answer) throw new NotFoundError("Cannot find answer");

    return Answer.merge(answer, update).save();
  }
  @Authorized()
  @Post("/answers")
  @HttpCode(201)
  createPage(@Body() answer: Answer) {
    return answer.save();
  }
}
