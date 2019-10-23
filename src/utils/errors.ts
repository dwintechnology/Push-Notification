import { EErrorCode, IError } from '../models/Interfaces';

class Errors {
  private errors = new Object();

  constructor() {
    this.errors[EErrorCode.EMAIL_EXISTS] = {
      prod: {
        status_code: 422,
        body: {
          code: 100,
          message: 'User with the specified email already exist!',
        },
      },
      dev: {
        status_code: 422,
        body: {
          code: 100,
          message: 'Failed to register: User with the specified email already exist!',
        },

      },
    };
    this.errors[EErrorCode.CRYPT_FAILED] = {
      prod: {
        status_code: 500,
        body: {
          code: 101,
          message: 'Failed to CRYPT: ',
        },
      },
      dev: {
        status_code: 500,
        body: {
          code: 101,
          message: 'Failed to register: ',
        },
      },
    };
    this.errors[EErrorCode.FAILED_CREATE_USER_ON_DB] = {
      prod: {
        status_code: 500,
        body: {
          code: 102,
          message: 'Failed to create user on db: ',
        },
      },
      dev: {
        status_code: 500,
        body: {
          code: 102,
          message: 'Failed to create user on db: ',
        },
      },
    };
    this.errors[EErrorCode.MAIL_NOT_FOUND] = {
      prod: {
        status_code: 403,
        body: {
          code: 103,
          message: 'User with following email not found: ',
        },
      },
      dev: {
        status_code: 403,
        body: {
          code: 103,
          message: 'User with following email not found: ',
        },
      },
    };
    this.errors[EErrorCode.FAILED_TO_COMPARE] = {
      prod: {
        status_code: 500,
        body: {
          code: 104,
          message: 'Failed to compare password hash',
        },
      },
      dev: {
        status_code: 500,
        body: {
          code: 104,
          message: 'Failed to compare password hash',
        },
      },
    };
    this.errors[EErrorCode.INCORRECT_PASSWORD] = {
      prod: {
        status_code: 403,
        body: {
          code: 105,
          message: 'Password incorrect',
        },
      },
      dev: {
        status_code: 403,
        body: {
          code: 105,
          message: 'Password incorrect',
        },
      },
    };
    this.errors[EErrorCode.FAILED_TO_DELETE_USER] = {
      prod: {
        status_code: 422,
        body: {
          code: 106,
          message: 'Failed to delete user from db',
        },
      },
      dev: {
        status_code: 422,
        body: {
          code: 106,
          message: 'Failed to delete user from db',
        },
      },
    };
    this.errors[EErrorCode.FAILED_TO_CREATE_RESET_TOKEN] = {
      prod: {
        status_code: 500,
        body: {
          code: 107,
          message: 'Failed to create password reset token: ',
        },
      },
      dev: {
        status_code: 500,
        body: {
          code: 107,
          message: 'Failed to create password reset token: ',
        },
      },
    };
    this.errors[EErrorCode.RESET_TOKEN_NOT_FOUND] = {
      prod: {
        status_code: 422,
        body: {
          code: 108,
          message: 'Reset password token not found',
        },
      },
      dev: {
        status_code: 422,
        body: {
          code: 108,
          message: 'Invalid token',
        },
      },
    };
    this.errors[EErrorCode.FAILED_TO_UPDATE_PASSWORD] = {
      prod: {
        status_code: 500,
        body: {
          code: 109,
          message: 'Failde to update passoword on db: ',
        },
      },
      dev: {
        status_code: 500,
        body: {
          code: 109,
          message: 'Password reset fail',
        },
      },
    };
    this.errors[EErrorCode.SESSION_DESTROYED] = {
      prod: {
        status_code: 401,
        body: {
          code: 110,
          message: 'Session was destroyed',
        },
      },
      dev: {
        status_code: 401,
        body: {
          code: 110,
          message: 'Session was destroyed',
        },
      },
    };
    this.errors[EErrorCode.TOKEN_NOT_FOUND] = {
      prod: {
        status_code: 400,
        body: {
          code: 111,
          message: 'Authorization token does not exist in headers',
        },
      },
      dev: {
        status_code: 400,
        body: {
          code: 111,
          message: 'Auth token not found',
        },
      },
    };
    this.errors[EErrorCode.TOKEN_NOT_FOUND] = {
      prod: {
        status_code: 400,
        body: {
          code: 111,
          message: 'Authorization token does not exist in headers',
        },
      },
      dev: {
        status_code: 400,
        body: {
          code: 111,
          message: 'Auth token not found',
        },
      },
    };
    this.errors[EErrorCode.BAD_REQUEST] = {
      prod: {
        status_code: 400,
        body: {
          code: 112,
          message: 'Bad request: ',
        },
      },
      dev: {
        status_code: 400,
        body: {
          code: 112,
          message: 'Bad request: ',
        },
      },
    };
    this.errors[EErrorCode.VALIDATION_ERROR_EMAIL] = {
      prod: {
        status_code: 422,
        body: {
          code: 113,
          message: 'Invalid email: ',
        },
      },
      dev: {
        status_code: 422,
        body: {
          code: 113,
          message: 'Invalid email',
        },
      },
    };
    this.errors[EErrorCode.EMAIL_CONFIRMATION_TOKEN_NOT_FOUND] = {
      prod: {
        status_code: 422,
        body: {
          code: 114,
          message: 'user with email confirmation token not found',
        },
      },
      dev: {
        status_code: 422,
        body: {
          code: 114,
          message: 'Invalid email confirmation token',
        },
      },
    };
    this.errors[EErrorCode.FAILED_TO_UPDATE_STATUS] = {
      prod: {
        status_code: 500,
        body: {
          code: 115,
          message: 'Failed to update user status: ',
        },
      },
      dev: {
        status_code: 500,
        body: {
          code: 115,
          message: 'Failed to update user status',
        },
      },
    };
    this.errors[EErrorCode.USER_NOT_FOUND] = {
      prod: {
        status_code: 422,
        body: {
          code: 116,
          message: 'Failed to get user with id from payload: ',
        },
      },
      dev: {
        status_code: 422,
        body: {
          code: 116,
          message: 'User not found',
        },
      },
    };
    this.errors[EErrorCode.EMAIL_DOES_NOT_CONFIRMED] = {
      prod: {
        status_code: 422,
        body: {
          code: 117,
          message: 'Email does not confirmed',
        },
      },
      dev: {
        status_code: 422,
        body: {
          code: 117,
          message: 'Account status is "pending_activation"',
        },
      },
    };
    this.errors[EErrorCode.USER_PASSWORD_RESETED] = {
      prod: {
        status_code: 426,
        body: {
          code: 118,
          message: 'Please reset you password',
        },
      },
      dev: {
        status_code: 426,
        body: {
          code: 118,
          message: 'Account status is "reseted"',
        },
      },
    };
    this.errors[EErrorCode.EMAIL_BLOCKED] = {
      prod: {
        status_code: 422,
        body: {
          code: 119,
          message: 'Account is blocked',
        },
      },
      dev: {
        status_code: 422,
        body: {
          code: 119,
          message: 'Account is blocked',
        },
      },
    };
    this.errors[EErrorCode.EMAIL_DOES_NOT_APPROVED] = {
      prod: {
        status_code: 422,
        body: {
          code: 120,
          message: 'Account is not approved from admin',
        },
      },
      dev: {
        status_code: 422,
        body: {
          code: 120,
          message: 'Account is not approved from admin',
        },
      },
    };

    this.errors[EErrorCode.NOT_EXISTING_UID] = {
      prod: {
        status_code: 400,
        body: {
          code: 123,
          message: 'Subscription with uid not found: ',
        },
      },
      dev: {
        status_code: 400,
        body: {
          code: 123,
          message: 'Subscription with uid not found: ',
        },
      },
    };
    this.errors[EErrorCode.SUBSCRIPTIONS_NOT_FOUND] = {
      prod: {
        status_code: 400,
        body: {
          code: 124,
          message: 'Subscription not found',
        },
      },
      dev: {
        status_code: 400,
        body: {
          code: 124,
          message: 'Subscription not found',
        },
      },
    };
    this.errors[EErrorCode.FAILED_TO_UPDATE_STATUSES] = {
      prod: {
        status_code: 500,
        body: {
          code: 125,
          message: 'Failed to update statuses: ',
        },
      },
      dev: {
        status_code: 500,
        body: {
          code: 124,
          message: 'Failed to update statuses: ',
        },
      },
    };
    this.errors[EErrorCode.INVALID_TOKEN] = {
      prod: {
        status_code: 400,
        body: {
          code: 126,
          message: 'Authorization token is invalid',
        },
      },
      dev: {
        status_code: 400,
        body: {
          code: 126,
          message: 'Authorization token is invalid',
        },
      },
    };
  }


  /**
   * Gets the correct response body based on provided code
   *
   * @param eCode - one of the error codes
   * @param additionalMessage - additional string, appears only for development mode
   */
  public getError(eCode: EErrorCode, additionalMessage?: string): IError {
    if (!this.errors[eCode]) {
      return {
        status_code: 500,
        body: {
          code: 500,
          message: `Unknown error. ${additionalMessage}`,
        }
      } as IError;
    }
    const error = this.errors[eCode].dev;
    const obj = (Object as any).assign({}, error) as IError;
    if (additionalMessage) {
      obj.body.message += additionalMessage;
    }
    return obj;
  }
}

export const errors: Errors = new Errors();