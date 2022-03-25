export const ErrorMessagesConstant = {
  uniqueViolation: {
    message: '重複しています。',
  },
};

export const ErrorTypesConstant = {
  uniqueViolation: {
    code: 1017,
    message: '重複しています。',
  },
  internalServer: {
    code: 4000,
    message: 'INTERNAL_SERVER_ERROR',
  },
};

export const DatabaseErrorCode = {
  uniqueViolation: 23505,
};

export const ErrorConstant = {
  GetPropertyInMessageRegex: /^Key \((.*)\)=\(.*\) already exists.$/,
};

export const GCSError = {
  fileCannotBeObtained: 'このファイルのURLを取得できないことで、ファイルの読み込みができません。',
};


export const ErrorLevelsConstant = {
  High: ['isNotEmpty'],
  Medium: ['isString', 'isInt'],
};