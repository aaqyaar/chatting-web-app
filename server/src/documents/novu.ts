const Novu = require("@novu/node");

const novu = new Novu(process.env.NOVU_API_KEY);

type NotificationType = {
  recipient: string;
  verificationCode: string;
};

interface NovuReturns {
  [x: string]: any;
  err?: any;
  response?: any;
}

const sendNovuVerificationCode = async ({
  recipient,
  verificationCode,
}: NotificationType): Promise<NovuReturns> => {
  try {
    let response = await novu.trigger(process.env.NOTIFICATION_TEMP_ID, {
      to: {
        subscriberId: recipient,
        phone: recipient,
      },
      payload: {
        code: verificationCode,
      },
    });
    return response;
  } catch (err) {
    return err as NovuReturns;
  }
};
