import { IsInt, IsNotEmpty, IsNumber, IsString } from "class-validator";

export default class UpdateAccountDto{

    id?: number;

    @IsNotEmpty()
    @IsString()
    accountNumber?: string;

    @IsNotEmpty()
    @IsInt()
    balance?: number;
}