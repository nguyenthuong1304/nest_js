import { includes, camelCase } from 'lodash';

import {
  ErrorLevelsConstant,
  DatabaseErrorCode,
  ErrorConstant,
  ErrorMessagesConstant,
} from '../const/errors.constant';

export class ErrorUtil {
  static getErrorType(error: any) {
    const errorTypes = Object.keys(error.constraints);
    const highError = errorTypes.find(errType => includes(ErrorLevelsConstant.High, errType));
    if (highError) {
      return highError;
    }

    const mediumError = errorTypes.find(errType => includes(ErrorLevelsConstant.Medium, errType));
    if (mediumError) {
      return mediumError;
    }

    return errorTypes[0];
  }

  static queryFailedError(exception) {
    switch (parseInt(exception.code, 0)) {
      case DatabaseErrorCode.uniqueViolation:
        const property = camelCase(
          exception.detail
            .match(ErrorConstant.GetPropertyInMessageRegex)[1]
            .split(', ')
            .pop(),
        );
        const message = ErrorMessagesConstant.uniqueViolation.message;
        return { property, message };
      default:
        return { ...ErrorMessagesConstant.somethingWrong };
    }
  }
}
