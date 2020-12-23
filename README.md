# nest-ang-youtube-blog
npm run start:dev

npm i --save @nestjs/config => .env
npm install --save @nestjs/typeorm typeorm pg 

@Module({
  imports: [ConfigModule.forRoot({isGlobal:true}),
  TypeOrmModule.forRoot({type:'postgres', url:process.env.DATABASE_URL,
  autoLoadEntities:true,synchronize:true
})],

git flow init
git flow feature start user-crud
 git flow feature finish user-crud

 npx cypress open