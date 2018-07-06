import { JsonController, Get, Param, Put, Body, NotFoundError, HttpCode, Post} from 'routing-controllers'
import User from './entity'


@JsonController()
export default class UsersController {
        @Get('/users/:id')
    getUser(
      @Param('id') id: number
    ) {
      return User.findOne(id)
    }


    @Get('/users')
    async allUsers() {
      const users = await User.find()
      return { users }
    }

    @Put('/users/:id')
    async updateUser(
      @Param('id') id: number,
      @Body() update: Partial<User>
    ) {
      const user = await User.findOne(id)
      if (!user) throw new NotFoundError('Cannot find user')
    
      return User.merge(user, update).save()
    }

@Post('/users')
@HttpCode(201)
async createUser(
  @Body() user: User
) {
  const {password, ...rest} = user
  const entity = User.create(rest)
  await entity.setPassword(password)
  return entity.save()
}

}
