import { IsNotEmpty, IsString, IsEnum, Length } from 'class-validator';

export class CreateCommentDto {
  @IsString()
  @IsNotEmpty()
  @Length(20, 1500)
  body: string;

  @IsString()
  @IsNotEmpty()
  targetId: string;

  @IsString()
  @IsNotEmpty()
  @IsEnum(['episode', 'reply'])
  targetType: 'episode' | 'reply';
}
