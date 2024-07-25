import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { Device } from './entidad';
import { DeviceService } from './service';
import { CreateDeviceInput, UpdateDeviceInput } from './Dtos';

@Resolver(() => Device)
export class DeviceResolver {
  constructor(private readonly deviceService: DeviceService) {}

  @Mutation(() => Device)
  async createDevice(
    @Args('createDeviceInput') createDeviceInput: CreateDeviceInput,
  ): Promise<Device> {
    return this.deviceService.create(createDeviceInput);
  }

  @Query(() => [Device])
  async getDevices(): Promise<Device[]> {
    return this.deviceService.findAll();
  }

  @Query(() => Device)
  async getDevice(@Args('id', { type: () => Int }) id: number): Promise<Device> {
    return this.deviceService.findOne(id);
  }

  @Mutation(() => Device)
  async updateDevice(
    @Args('id', { type: () => Int }) id: number,
    @Args('updateDeviceInput') updateDeviceInput: UpdateDeviceInput,
  ): Promise<Device> {
    return this.deviceService.update(id, updateDeviceInput);
  }
  
  @Mutation(() => Boolean)
  async removeDevice(@Args('id', { type: () => Int }) id: number): Promise<boolean> {
    await this.deviceService.remove(id);
    return true;
  }

  @Mutation(() => Device, { nullable: true })
  async logicalRemoveDevice(@Args('id', { type: () => Int }) id: number): Promise<Device> {
    return this.deviceService.logicalRemove(id);
  }
}
