import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import Account from './account.entity';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import Owner from './owner.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST || 'localhost',
      port: parseInt(process.env.DB_PORT) || 3306,
      username: process.env.DB_USERNAME || 'root',
      password: process.env.DB_PASSWORD || '',
      database: process.env.DB_DATABASE || 'nestjs_rest',
      entities: [
        Account, Owner
      ],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Account, Owner]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
