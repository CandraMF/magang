import { Mutations, Actions } from "@/store/enums/StoreEnums";
import { Action, Mutation, Module, VuexModule } from "vuex-module-decorators";

interface StoreInfo {
    code: string,
    remainingTime: number,
    subject: string,
    phone: string,
    email: string,
}

@Module
export default class AppModule extends VuexModule implements StoreInfo {
    private _code = '';
    private _remainingTime = 240;
    private _subject = '';
    private _phone = '';
    private _email = '';

    public get code() {
        return this._code;
    }
    public set code(value) {
        this._code = value;
    }
    public get remainingTime() {
        return this._remainingTime;
    }
    public set remainingTime(value) {
        this._remainingTime = value;
    }
    public get subject() {
        return this._subject;
    }
    public set subject(value) {
        this._subject = value;
    }
    public get phone() {
        return this._phone;
    }
    public set phone(value) {
        this._phone = value;
    }
    public get email() {
        return this._email;
    }
    public set email(value) {
        this._email = value;
    }

    @Mutation
    [Mutations.SET_REMAINING](payload){
        this._remainingTime = payload
    }

    @Mutation
    [Mutations.SET_CODE](payload){
        this._code = payload
    }

    @Mutation
    [Mutations.SET_SUBJECT](payload){
        this._subject = payload
    }
}
