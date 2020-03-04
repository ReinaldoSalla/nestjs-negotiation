import {
	Controller,
	Post,
	Get,
	Put,
	Patch,
	Delete,
	Body
} from "@nestjs/common";
import { NegotiationsService } from "./negotiations.service";

@Controller("negotiations")
export class NegotiationsController {
	constructor(private readonly negotiationsService: NegotiationsService) {}

	@Post()
	async addProduct(
		@Body("date") negDate: Date,
		@Body("amount") negAmount: number,
		@Body("value") negValue: number,
		@Body("description") negDesc: string
	) {
		return await this.negotiationsService.postNegotiation(
			negDate,
			negAmount,
			negValue,
			negDesc
		);
	}

	@Get()
	async getAllNegotiations() {
		return await this.negotiationsService.getNegotiations();
	}
}