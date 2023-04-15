import { Type } from 'class-transformer';
import {
  IsEmail,
  IsNumber,
  IsNotEmpty,
  ValidateNested,
  IsNotEmptyObject,
} from 'class-validator';

import { CreateAddressDto } from './createAddress.dto';

export class CreateCustomerDto {
  @IsNumber()
  @IsNotEmpty()
  id: number;

  @IsEmail()
  email: string;

  @IsNotEmpty()
  name: string;

  @ValidateNested()
  @Type(() => CreateAddressDto)
  @IsNotEmptyObject()
  address: CreateAddressDto;
}
