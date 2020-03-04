import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NegotiationsModule } from "./negotiations/negotiations.module";

const url: string = "mongodb://localhost/nestjs-demo";

@Module({
  imports: [
  	NegotiationsModule,
    MongooseModule.forRoot(url, {
     useNewUrlParser: true,
     useUnifiedTopology: true
  }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}