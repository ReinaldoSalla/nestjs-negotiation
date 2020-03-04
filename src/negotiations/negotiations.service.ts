import {
  Injectable,
  NotFoundException
} from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Negotiation } from "./negotiation.model";

@Injectable()
export class NegotiationsService {
  constructor(
    @InjectModel("Negotiation") private readonly negotiationModel: Model<Negotiation>
  ) {}

  public async postNegotiation(date: Date, amount: number, value: number, description: string) {
    const newNegotiation = new this.negotiationModel({date, amount, value, description});
    return await newNegotiation.save();
  }

  public async getNegotiations(): Promise<Negotiation[]> {
    return await this.negotiationModel.find();
  }

  private async findNegotiation(id: string): Promise<Negotiation> {
    let negotiation;
    try {
      negotiation = await this.negotiationModel.findById(id)
    } catch(err) {
      throw new NotFoundException(`Error: ${err}`);
    }
    return negotiation;
  }
}
