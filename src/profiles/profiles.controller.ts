import { Controller, Get, Query, Param, Post, Body, Patch, Put, Delete, HttpCode, HttpStatus } from '@nestjs/common';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';

@Controller('profiles')
export class ProfilesController {
    @Get()
    findAll(@Query('location') location: string) {
        return ({ location });
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return ({ id });
    }

    @Post()
    create(@Body() createProfileDto: CreateProfileDto) {
        return {
            name: createProfileDto.name,
            description: createProfileDto.description
        };
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() updateProfileDto: UpdateProfileDto) {
        return {
            id,
            name: updateProfileDto.name,
            description: updateProfileDto.description
        }
    }

    @Delete(':id')
    @HttpCode(HttpStatus.NO_CONTENT)
    remove(@Param('id') id: string) {
        return ({ id });
    }
}

