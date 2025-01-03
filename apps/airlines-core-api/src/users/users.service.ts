import { Inject, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class UsersService {
  constructor(@Inject('USERS_CLIENT') private userClient: ClientProxy) {}

  create(createUserDto: CreateUserDto) {
    return this.userClient.send('users.create', createUserDto);
  }

  findAll() {
    return this.userClient.send('users.findAll', {});
  }

  findOne(id: number) {
    return this.userClient.send('users.findOne', id);
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return this.userClient.send('users.update', { id, updateUserDto });
  }

  remove(id: number) {
    return this.userClient.send('users.remove', id);
  }
}
