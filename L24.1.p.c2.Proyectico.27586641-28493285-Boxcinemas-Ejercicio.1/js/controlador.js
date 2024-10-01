import Cl_mFamilia from "./Familia";

export default class Cl_controlador {
    constructor() {
        this.mCine = new Cl_mCine();
        this.vFamilia = new Cl_vFamilia(this);
        this.vCine = new Cl_vCine(this);
    }
}