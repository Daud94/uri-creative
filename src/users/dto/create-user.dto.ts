import { IsEmail, IsNotEmpty } from 'class-validator';
import { Transform } from 'class-transformer';

export class CreateUserDto {
  @IsNotEmpty({ message: 'First name is required' })
  @Transform((params) => params.value.trim())
  firstName: string;

  @IsNotEmpty({ message: 'Last name is required' })
  @Transform((params) => params.value.trim())
  lastName: string;

  @IsNotEmpty({ message: 'Email is required' })
  @Transform((params) => params.value.trim())
  @IsEmail()
  email: string;

  @IsNotEmpty({ message: 'FacebookId is required' })
  @Transform((params) => params.value.trim())
  @IsEmail()
  facebookId: string;
}
