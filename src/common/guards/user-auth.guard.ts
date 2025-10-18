import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { error } from "console";
import { Observable } from "rxjs";


@Injectable()
export class UserAuthGuard implements CanActivate {
    constructor(private readonly jwtService: JwtService) { }
    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {

        const req = context.switchToHttp().getRequest()
        const authHeader = req.headers.authorization

        if(!authHeader){
            throw new UnauthorizedException("not found auth headers")
        }

        const token = authHeader.split(" ")[1]
        if (!token) {
            throw new UnauthorizedException("not found token")
        }




        async function verify(token:string, jwtService:JwtService){
            let decodedToken: any;
            try{
                decodedToken = jwtService.verify(token, {
                    secret: process.env.ACCESS_TOKEN_KEY,
                });
            }catch(err){
                throw new UnauthorizedException({
                    message: "not authorized",
                    err,
                })
            }
            req.user = decodedToken;
            return true;
        }

        return verify(token, this.jwtService)
    }
}