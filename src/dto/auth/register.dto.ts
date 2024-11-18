import { Transform } from 'class-transformer'
import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator'

export class RegisterDto {
  @IsNotEmpty()
  @IsString()
  @Transform(({ value }) => value?.trim())
  nameComplete: string

  @IsString()
  @IsEmail()
  @Transform(({ value }) => value?.trim())
  email: string

  @IsString()
  @IsNotEmpty()
  @MinLength(6)
  @Transform(({ value }) => value?.trim())
  password: string
}