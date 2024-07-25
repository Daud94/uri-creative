import { Injectable } from '@nestjs/common';
import { Strategy, Profile } from 'passport-facebook';
import { PassportStrategy } from '@nestjs/passport';
import { ConfigService } from '@nestjs/config';
import { UsersService } from '../users/users.service';

@Injectable()
export class FacebookStrategy extends PassportStrategy(Strategy, 'facebook') {
  constructor(
    private readonly configService: ConfigService,
    private readonly usersService: UsersService,
  ) {
    super({
      clientID: configService.get<string>('FACEBOOK_APP_ID'),
      clientSecret: configService.get<string>('FACEBOOK_APP_SECRET'),
      callbackURL: `${configService.get<string>('BASE_URL')}${configService.get<string>('API_PORT')}/auth/facebook/callback`,
      scope: 'email',
      profileFields: ['id', 'emails', 'name'],
    });
  }
  async validate(
    accessToken: string,
    refreshToken: string,
    profile: Profile,
    done: (err: any, user: any, info?: any) => void,
  ): Promise<any> {
    const { name, emails } = profile;
    const user = {
      facebookId: profile.id,
      email: emails[0].value,
      firstName: name.givenName,
      lastName: name.familyName,
    };
    const payload = {
      user,
      accessToken,
    };

    const existingUser = await this.usersService.findUserByEmail(
      emails[0].value,
    );
    if (!existingUser) {
      await this.usersService.createUser({
        ...user,
      });
    }
    done(null, payload);
  }
}
