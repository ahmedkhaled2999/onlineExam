import { Forget, ForgetRes } from "../forgetpassword/forget";

export interface AdabtForget {
    adaptForget(data: Forget): ForgetRes;
}
