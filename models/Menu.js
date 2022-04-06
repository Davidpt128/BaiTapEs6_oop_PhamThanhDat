import { DANH_SACH_MON_AN } from "../util/settings.js";
import { MonAn } from "./MonAn.js";

export class Menu {
    danhSachMonAn = []; 
    constructor() {
    }
    themMonAn = (monAn) => {
        this.danhSachMonAn.push(monAn);
        return this.danhSachMonAn;
    }
    xoaMonAn = (maMon) => {
        this.danhSachMonAn = this.danhSachMonAn.filter(mon => mon.maMon !== maMon);
        return this.danhSachMonAn;
    }
    luuLocalStorage = () => {
        let sMangMonAn = JSON.stringify(this.danhSachMonAn);
        localStorage.setItem(DANH_SACH_MON_AN, sMangMonAn);
    }
    layLocalStorage = () => {
        if (localStorage.getItem(DANH_SACH_MON_AN)) {
            let sMangMonAn = localStorage.getItem(DANH_SACH_MON_AN);
            this.danhSachMonAn = JSON.parse(sMangMonAn);
        }
    }
    renderMonAn = (selector) => {
        let htmlContent = '';

        for (let monAnStore of this.danhSachMonAn) {
            let monAn = new MonAn(); 
            monAn = { ...monAn, ...monAnStore }
            htmlContent += `
                <tr>
                    <td>${monAn.maMon}</td>
                    <td>${monAn.tenMon}</td>
                    <td>${monAn.giaMon}</td>
                    <td>${monAn.hinhAnh}</td>
                    <td>
                        <button class="btn btn-danger" onclick="xoaMonAn('${monAn.maMon}')" >Xoá</button>
                    </td>
                </tr>
            `
        }
        document.querySelector(selector).innerHTML = htmlContent;
    }
}