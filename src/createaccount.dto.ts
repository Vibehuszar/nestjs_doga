import { IsInt, IsNotEmpty, IsNumber, IsString } from "class-validator";

export default class CreateAccountDto{

    @IsNotEmpty()
    @IsString()
    accountNumber?: string;

    @IsNotEmpty()
    @IsInt()
    balance?: number;
}