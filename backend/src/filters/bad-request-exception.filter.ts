import { GqlExceptionFilter, GqlExecutionContext } from '@nestjs/graphql';
import { ExecutionContext, Catch, BadRequestException, HttpException, ArgumentsHost, ExceptionFilter } from '@nestjs/common';

@Catch(BadRequestException)
export class BadRequestExceptionFilter implements GqlExceptionFilter {
  // catch(exception: HttpException, context: ExecutionContext) {
  //   const graphContext = GqlExecutionContext.create(context).getContext();
  //   const httpContext = context.switchToHttp();
  //   const req = graphContext.req || httpContext.getRequest();
  //   // const ctx = GqlExecutionContext.create(context);
  //   // const request = ctx.getContext();
  //   // console.log(request.res);
    
  //   return new HttpException({ name: 'asd' }, 400) 
  // }

  catch(exception: any, context: ExecutionContext) {
    const graphContext = GqlExecutionContext.create(context).getContext();
    const httpContext = context.switchToHttp();
    const req = graphContext.req || httpContext.getRequest();
    let { res } = graphContext;

    const status = exception.getStatus();
    let errors = exception.getResponse();
    const errorRes: any = {
      server_datetime: new Date().toISOString(),
      errMessage: { name: 'asdasd' },
    };
    
    res.status(status).json(errorRes);
  }
}
