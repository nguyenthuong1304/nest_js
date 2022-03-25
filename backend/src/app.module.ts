import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { CategoryModule } from './category/category.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      useFactory: logger => ({
        context: ({ req, res, connection }) => ({ req, res, connection }),
        debug: false,
        autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
        // formatError: ErrorUtil.formatError(logger),
        // formatResponse: ErrorUtil.formatResponse(),
        installSubscriptionHandlers: true,
        // playground: {
        //   subscriptionEndpoint: AppConstant.GraphqlEndpoint,
        //   settings: { 'request.credentials': 'same-origin' },
        // },
        // subscriptions: {
        //   path: AppConstant.GraphqlEndpoint,
        //   keepAlive: AppConstant.WebSocketIntervalPing,
        // },
        fieldResolverEnhancers: ['filters'],
      }),
    }),
    CategoryModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
