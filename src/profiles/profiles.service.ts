import { Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';

@Injectable()
export class ProfilesService {
    private readonly profiles = [
        {
            id: randomUUID(),
            name: 'Christian',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, doloremque?'
        },
        {
            id: randomUUID(),
            name: 'Bronson',
            description: 'Lorem ipsum itom are, Veloz Somle done roslar brader?'
        },
        {
            id: randomUUID(),
            name: 'Maggie',
            description: 'Lorem ipsum dolor wasr bogie salim mawr pobo?'
        }
    ];

    findAll() {
        return this.profiles;
    }
}
