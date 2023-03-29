import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import Account from './account.entity';
import CreateAccountDto from './createaccount.dto';
import CreateOwnerDto from './createowner.dto';
import Owner from './owner.entity';


@Injectable()
export class AppService {
  constructor(@InjectRepository(Account) private readonly accountRepository: Repository<Account>,
  @InjectRepository(Owner) private readonly ownerRepository: Repository<Owner>){}

  createAccount(createAccountDto: CreateAccountDto): Promise<Account> {
    return this.accountRepository.save(
      this.accountRepository.create(createAccountDto)
    );
  }
  async findOneAccount(condition: any): Promise<Account> {
    return this.accountRepository.findOne(condition);
  }

findAllAccounts(): Promise<Account[]> {
    return this.accountRepository.find();
  }
updateAccount(id: number, data: any): Promise<any> {
    return this.accountRepository
    .createQueryBuilder()
    .update(Account)
    .set({
       
    })
    .where('id = :id', { id })
    .execute()
  }
removeAccount(id: Number): Promise<any> {
    return this.accountRepository
    .createQueryBuilder()
    .delete()
    .from(Account)
    .where('id = :id', { id })
    .execute()
  }

  createOWner(createOwnerDto: CreateOwnerDto): Promise<Owner> {
    return this.ownerRepository.save(
      this.ownerRepository.create(createOwnerDto)
    );
  }
  async findOneOwner(condition: any): Promise<Owner> {
    return this.ownerRepository.findOne(condition);
  }

findAllOwners(): Promise<Owner[]> {
    return this.ownerRepository.find();
  }
updateOWner(id: number, data: any): Promise<any> {
    return this.ownerRepository
    .createQueryBuilder()
    .update(Owner)
    .set({
       
    })
    .where('id = :id', { id })
    .execute()
  }
removeOwner(id: Number): Promise<any> {
    return this.ownerRepository
    .createQueryBuilder()
    .delete()
    .from(Owner)
    .where('id = :id', { id })
    .execute()
  }
}
