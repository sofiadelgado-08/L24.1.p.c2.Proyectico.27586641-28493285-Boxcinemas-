export default class Cl_vCine {
    constructor(controlador) {
        this.vista = document.getElementById("mainForm");
        this.tabla = document.getElementById("mainForm_tabla");
        this.btAgregar = document.getElementById("mainForm_btAgregar");
        this.lblDineroinicial = document.getElementById("mainForm_lblDineroinicial");
        this.lblFamiliaquepagomas = document.getElementById("mainForm_lblFamiliaquepagomas");
        this.lblPrompagodiaslunes = document.getElementById("mainForm_lblPrompagodiaslunes");
        this.lblTotalfinal = document.getElementById("mainForm_lblTotalfinal");
    }
}