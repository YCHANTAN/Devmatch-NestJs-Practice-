import { Injectable, NotFoundException } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';

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

    findOne(id: string) {
        const matchingProfile = this.profiles.find(profile => profile.id === id);

        if (!matchingProfile) {
            throw new NotFoundException(`Profile with id ${id} not found`);
        };

        return matchingProfile;
    }

    create(createProfileDto: CreateProfileDto) {
        const createdProfile = {
            id: randomUUID(),
            name: createProfileDto.name,
            description: createProfileDto.description
        };
        
        this.profiles.push(createdProfile);
        return createdProfile;
    }

    update(id: string, updateProfileDto: UpdateProfileDto) {
        const matchingProfile = this.profiles.find(profile => profile.id === id);

        if (!matchingProfile) {
            throw new NotFoundException(`Profile with id ${id} not found`);
        }
        
        matchingProfile.name = updateProfileDto.name;
        matchingProfile.description = updateProfileDto.description;

        return matchingProfile;
    }

    remove(id: string): void {
        const matchingProfileIndex = this.profiles.findIndex(profile => profile.id === id);
        if (matchingProfileIndex === -1) {
            throw new NotFoundException(`Profile with id ${id} not found`);
        } 
        this.profiles.splice(matchingProfileIndex, 1);
    }
}
