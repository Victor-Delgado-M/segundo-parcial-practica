import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  private users = new Map<string, Set<string>>();

  addUser(userId: string, socketId: string): boolean {
    if (!this.users.has(userId)) {
      this.users.set(userId, new Set());
    }
    const userSockets = this.users.get(userId);
    if (userSockets.size >= 3) {
      return false;
    }
    userSockets.add(socketId);
    return true;
  }

  removeUser(userId: string, socketId: string): void {
    if (!this.users.has(userId)) return;
    const userSockets = this.users.get(userId);
    userSockets.delete(socketId);
    if (userSockets.size === 0) {
      this.users.delete(userId);
    }
  }

  getUserSockets(userId: string): Set<string> {
    return this.users.get(userId) || new Set();
  }
}
