import { Controller, Get, Query, Param, Post, Body, Patch, Put, Delete, HttpCode, HttpStatus, ParseUUIDPipe, ValidationPipe } from '@nestjs/common';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { ProfilesService } from './profiles.service';
import type { UUID } from 'crypto';

@Controller('profiles')
export class ProfilesController {
    constructor(private readonly profilesService: ProfilesService) {}

    @Get()
    findAll() {
        return this.profilesService.findAll();
    }

    @Get(':id')
    findOne(@Param('id', ParseUUIDPipe) id: UUID) {
        return this.profilesService.findOne(id);
    }

    @Post()
    create(@Body(ValidationPipe) createProfileDto: CreateProfileDto) {
        return this.profilesService.create(createProfileDto);
    }

    @Put(':id')
    update(@Param('id', ParseUUIDPipe) id: UUID, @Body(ValidationPipe) updateProfileDto: UpdateProfileDto) {
        return this.profilesService.update(id, updateProfileDto);
    }

    @Delete(':id')
    @HttpCode(HttpStatus.NO_CONTENT)
    remove(@Param('id', ParseUUIDPipe) id: UUID) {
        return this.profilesService.remove(id);
    }
}

