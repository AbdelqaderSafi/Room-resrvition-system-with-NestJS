import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { DatabaseModule } from "./modules/database/database.module";
import { UsersModule } from "./modules/users/users.module";
import { AuthModule } from "./modules/auth/auth.module";
import { AuthGuard } from "./modules/auth/guards/auth.guard";
import { RoomsModule } from "./modules/rooms/rooms.module";
import { RolesGuard } from "./modules/auth/guards/roles.guard";
import { BookingsModule } from "./modules/bookings/bookings.module";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    DatabaseModule,
    AuthModule,
    UsersModule,
    RoomsModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    BookingsModule,
  ],
  providers: [
    {
      provide: "APP_GUARD",
      useClass: AuthGuard,
    },
    {
      provide: "APP_GUARD",
      useClass: RolesGuard,
    },
  ],
})
export class AppModule {}
