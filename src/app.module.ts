import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NegotiationsModule } from "./negotiations/negotiations.module";
import { dbUrl } from "./properties";

@Module({
  imports: [
  	NegotiationsModule,
    MongooseModule.forRoot(dbUrl, {
     useNewUrlParser: true,
     useUnifiedTopology: true
  }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}