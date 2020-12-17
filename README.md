# nest-ang-youtube-blog

npm i --save @nestjs/config => .env
npm install --save @nestjs/typeorm typeorm pg 

@Module({
  imports: [ConfigModule.forRoot({isGlobal:true}),
  TypeOrmModule.forRoot({type:'postgres', url:process.env.DATABASE_URL,
  autoLoadEntities:true,synchronize:true
})],