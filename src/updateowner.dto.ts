import { IsInt, IsNotEmpty, IsString } from "class-validator";

export default class UpdateOwnerDto{

    id?: number;

    @IsNotEmpty()
    @IsString()
    fullName?: string;

    business?: boolean;
}