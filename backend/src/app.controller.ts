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
  async generateToken(): Promise<string> {
    const app_id = '1272065253262279';

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
    return 'oi';
  }
}
