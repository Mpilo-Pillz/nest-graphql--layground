import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { CreateLessonInput } from './lesson.input';
import { LessonService } from './lesson.service';
import { LessonType } from './lesson.type';

//equivalent to controller
@Resolver((of) => LessonType)
export class LessonResolver {
  constructor(private lessonService: LessonService) {}

  @Query((returns) => LessonType)
  lesson(@Args('id') id: string) {
    return this.lessonService.getLesson(id);
  }

  @Mutation((returns) => LessonType)
  createLesson(
    @Args('createLessonInput') createLessonInput: CreateLessonInput,
  ) {
    return this.lessonService.createLesson(createLessonInput);
  }

  @Query((returns) => LessonType)
  lessonExample() {
    return {
      id: '57845t4r5t45',
      name: 'TypeScript Class',
      startDate: new Date().toISOString(),
      endDate: new Date().toISOString(),
    };
  }

  //   @Mutation((returns) => LessonType)
  //   createLessonExample(
  //     @Args('name') name: string,
  //     @Args('startDate') startDate: string,
  //     @Args('endDate') endDate: string,
  //   ) {
  //     return this.lessonService.createLesson(name, startDate, endDate);
  //   }
}
