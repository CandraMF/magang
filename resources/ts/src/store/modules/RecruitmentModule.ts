import { Mutations, Actions } from "@/store/enums/StoreEnums";
import { Action, Mutation, Module, VuexModule } from "vuex-module-decorators";

interface StoreInfo {
    recruitment: object,
    recruitmentschedule: object,
}


@Module
export default class RecruitmentModule extends VuexModule implements StoreInfo {
    private _recruitment = {};
    private _recruitmentschedule = {};

    public get recruitmentschedule() {
        return this._recruitmentschedule;
    }
    public set recruitmentschedule(value) {
        this._recruitmentschedule = value;
    }

    public get recruitment() {
        return this._recruitment;
    }
    public set recruitment(value) {
        this._recruitment = value;
    }

    @Mutation
    [Mutations.SET_RECRUITMENT](payload) {
        this._recruitment = payload
    }

    @Mutation
    [Mutations.SET_RECRUITMENT_SCHEDULE](payload) {
        this._recruitmentschedule = payload
    }
}
