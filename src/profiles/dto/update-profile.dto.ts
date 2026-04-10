import { IsString, Length } from 'class-validator';

export class UpdateProfileDto {
    @IsString()
    @Length(3, 255)
    name!: string;

    @IsString()
    description!: string;
}