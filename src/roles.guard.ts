// mport { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const roles = this.reflector.get<string[]>('roles', context.getClass());
    if (!roles) 
    {
      return true;
    }
    const request = context.switchToHttp().getRequest();
    const user = request.session1;
    console.log("the role is: ", roles)
    return matchRoles(roles, user.roles);
  }
}

function matchRoles(roles: string[], roles1: any): boolean {
    for (const role of roles) {
        if (roles1.includes(role)) {
          return true;
        }
      }
      return false;
}
