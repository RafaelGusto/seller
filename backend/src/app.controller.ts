import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import axios from 'axios';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('generate-token')
  async generateToken(): Promise<any> {
    const app_id = '1272065253262279';
    const client_secret = '2TZsC2wW54wANLQexgLT1UNxtNmqjO5n';
    const code = 'TG-68c8af025f7a5a0001afd0c5-2467395895';
    const redirect_uri = 'https://secure-ox-cuddly.ngrok-free.app/';

    const url_principal = 'https://api.mercadolibre.com/oauth/token';

    const teste = await axios({
      method: 'post',
      url: url_principal,
      headers: {
        accept: 'application/json',
        'content-type': 'application/x-www-form-urlencoded',
      },
      data: {
        grant_type: 'authorization_code',
        client_id: app_id,
        client_secret: client_secret,
        code,
        redirect_uri,
      },
    });
    console.log(teste.data, 'TESTE AQUIII');
    return teste.data;
  }

  @Post('generate-access-token')
  async generateAccessToken(): Promise<string> {
    const app_id = '1272065253262279';
    const client_secret = '2TZsC2wW54wANLQexgLT1UNxtNmqjO5n';
    const refresh_token = 'TG-68c8af6bdb6ccb000162675d-2467395895';

    const url_principal = 'https://api.mercadolibre.com/oauth/token';

    const teste = await axios({
      method: 'post',
      url: url_principal,
      headers: {
        accept: 'application/json',
        'content-type': 'application/x-www-form-urlencoded',
      },
      data: {
        grant_type: 'refresh_token',
        client_id: app_id,
        client_secret: client_secret,
        refresh_token,
      },
    });

    return teste.data;
  }
}
