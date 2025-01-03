import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserDto } from './dto/user.dto';

@Injectable()
export class UsersService {
  private users: UserDto[] = [
    {
      id: 1,
      fullName: 'John Doe',
      email: 'johndoe@example.com',
      password: 'securepassword123',
      phone: '+1234567890',
      address: '123 Main Street, Springfield, USA',
    },
    {
      id: 2,
      fullName: 'Jane Smith',
      email: 'janesmith@example.com',
      password: 'mypassword456',
      phone: '+9876543210',
      address: '456 Elm Street, Metropolis, USA',
    },
    {
      id: 3,
      fullName: 'Alice Johnson',
      email: 'alicej@example.com',
      password: 'password789',
      phone: '+1928374650',
      address: '789 Oak Avenue, Gotham City, USA',
    },
  ];

  create(createUserDto: CreateUserDto) {
    const newUser: UserDto = {
      id: this.users.length + 1,
      ...createUserDto,
    };

    this.users.push(newUser);

    return this.users;
  }

  findAll() {
    return this.users;
  }

  findOne(id: number) {
    const user = this.users.find((item) => item.id === id);
    return user;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
