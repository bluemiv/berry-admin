import { Injectable } from '@nestjs/common';
import { ApproveMarketing } from './entity/approve-marketing.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class MarketingService {
  constructor(
    @InjectRepository(ApproveMarketing)
    private marketingRepository: Repository<ApproveMarketing>,
  ) {}

  findAll() {
    return this.marketingRepository.find();
  }

  findOne(uuid: string) {
    return this.marketingRepository.findOneBy({ id: uuid });
  }

  remove(uuid: string) {
    return this.marketingRepository.delete(uuid);
  }
}
