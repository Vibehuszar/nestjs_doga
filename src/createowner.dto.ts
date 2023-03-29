import { IsInt, IsNotEmpty, IsString } from "class-validator";

export default class CreateOwnerDto{

    id?: number;

    @IsNotEmpty()
    @IsString()
    fullName?: string;

    business?: boolean;
}