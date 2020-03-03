import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { AppController } from './app.controller';
import { AppService } from './app.service';

const url: string = "mongodb://localhost/nestjs-demo";

@Module({
  imports: [
    MongooseModule.forRoot(url, {
     useNewUrlParser: true,
     useUnifiedTopology: true
  }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}