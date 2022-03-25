import { registerDecorator, ValidationOptions } from 'class-validator';

export const Unique = (entity, validationOptions?: ValidationOptions) => {
  return (object: object, propertyName: string) => {
    registerDecorator({
      name: 'uniqueViolation',
      target: object.constructor,
      propertyName,
      options: validationOptions,
      constraints: [],
      validator: {
        async validate(value: any, args: any) {
          return false;
        },
      },
    });
  };
};
